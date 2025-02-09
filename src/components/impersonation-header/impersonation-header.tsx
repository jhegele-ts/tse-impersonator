"use client";

import { styled } from "#/jsx";
import { useAuth } from "@/stores/auth";
import { stylesSlotsImpersonationHeader } from "./impersonation.styles";
import { useShallow } from "zustand/shallow";
import { DateTime } from "luxon";
import { useEffect, useMemo, useState } from "react";
import { tsLogout } from "@/lib/token";
import { useRouter } from "next/navigation";

export const ImpersonationHeader = () => {
  const classes = stylesSlotsImpersonationHeader();
  const [auth, host, logout] = useAuth(
    useShallow((state) => [state.auth, state.host, state.logout])
  );
  const [now, setNow] = useState<DateTime>(DateTime.now());
  const router = useRouter();

  const handleLogout = (invalidateToken: boolean = true) => {
    if (auth && host) {
      if (invalidateToken) tsLogout(host, auth.valid_for_user_id, auth.token);
      logout();
      router.push("/");
    }
  };

  useEffect(() => {
    // update timer every 1000 milliseconds (1 second)
    const interval = setInterval(() => {
      setNow(DateTime.now());
    }, 1000);

    let timeout: NodeJS.Timeout | undefined = undefined;

    // automatically log user out at token expiry (avoid alert from TSE)
    if (auth) {
      const expiry = DateTime.fromMillis(auth.expiration_time_in_millis);
      const toExpiry = expiry.diff(DateTime.now()).toObject();
      timeout = setTimeout(() => {
        // if logging out at expiry, invalidating token will throw an error
        // since the token is already invalid
        handleLogout(false);
      }, toExpiry.milliseconds);
    }

    // clean up
    return () => {
      clearInterval(interval);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [auth]);

  // format timer
  const timeRemaining = useMemo(() => {
    if (auth) {
      const expiry = DateTime.fromMillis(auth.expiration_time_in_millis);
      const { minutes, seconds } = expiry
        .diff(now, ["minutes", "seconds"])
        .toObject();
      if (minutes !== undefined && seconds !== undefined) {
        if (minutes >= 0 && seconds >= 0) {
          const useSeconds = Math.floor(seconds);
          const mins = minutes < 10 ? `0${minutes}` : `${minutes}`;
          const secs = useSeconds < 10 ? `0${useSeconds}` : `${useSeconds}`;
          return `0:${mins}:${secs}`;
        }
      }
    }
  }, [now, auth]);

  return (
    <styled.div className={classes.outerContainer}>
      <styled.span className={classes.title}>
        ThoughtSpot Impersonator
      </styled.span>
      <styled.span className={classes.user}>
        Impersonating: {auth?.valid_for_username}
      </styled.span>
      <styled.span className={classes.timer}>{timeRemaining}</styled.span>
    </styled.div>
  );
};
