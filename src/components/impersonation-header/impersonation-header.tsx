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

  // time diff to expiry (expiry - now)
  const toExpiry = useMemo(() => {
    if (auth) {
      const expiry = DateTime.fromMillis(auth.expiration_time_in_millis);
      return expiry.diff(now);
    }
    return undefined;
  }, [now, auth]);

  const handleLogout = (invalidateToken: boolean = true) => {
    if (auth && host) {
      // allow logging out without invalidating token to account for
      // the fact that expired tokens will implicitly be invalid
      if (invalidateToken) tsLogout(host, auth.valid_for_user_id, auth.token);
      logout();
      router.push("/");
    }
  };

  useEffect(() => {
    // rather than naively let JS count down for us, it's more accurate to
    // periodically update the time remaining to a target and use that as
    // the countdown. here we do that by updating the current time every
    // 1000 milliseconds which provides a more reliable countdown that is
    // more resiliant against weird/unexpected issues that may block the
    // main thread.
    const interval = setInterval(() => {
      setNow(DateTime.now());
    }, 1000);

    let timeout: NodeJS.Timeout | undefined = undefined;

    // automatically log user out at token expiry (avoid alert from TSE)
    if (auth && toExpiry) {
      timeout = setTimeout(() => {
        // if logging out at expiry, invalidating token will throw an error
        // since the token is already invalid
        handleLogout(false);
      }, toExpiry.as("milliseconds"));
    }

    // clean up effect
    return () => {
      clearInterval(interval);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [auth]);

  // format timer
  const timeRemaining = useMemo(() => {
    if (toExpiry) {
      // calculate minutes and seconds from expiry diff
      const totalSeconds = Math.floor(toExpiry.as("seconds"));
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      // prevent inadvertenty showing negative values
      if (minutes >= 0 && seconds >= 0) {
        const mins = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const secs = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `0:${mins}:${secs}`;
      } else {
        return "0:00:00";
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
      <styled.span
        className={classes.timer}
        data-pulse={toExpiry ? toExpiry?.as("seconds") <= 30 : false}
      >
        {timeRemaining}
      </styled.span>
    </styled.div>
  );
};
