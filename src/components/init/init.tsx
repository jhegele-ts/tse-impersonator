"use client";

import { useAuth } from "@/stores/auth";
import { useShallow } from "zustand/shallow";
import { TsInitProvider } from "../ts-init-provider/ts-init-provider";
import { AuthType, type EmbedConfig } from "@thoughtspot/visual-embed-sdk";
import { stylesSlotsInit } from "./init.styles";
import { styled } from "#/jsx";
import Link from "next/link";

export type InitProps = {
  children: React.ReactNode;
};

export const Init = ({ children }: InitProps) => {
  const classes = stylesSlotsInit();
  const [host, auth] = useAuth(useShallow((state) => [state.host, state.auth]));

  // host and auth should be set, if not send user back to login
  if (!host || !auth)
    return (
      <styled.div className={classes.outerContainer}>
        <styled.div className={classes.card}>
          <styled.span className={classes.heading}>Not authorized</styled.span>
          <styled.p>
            Auth session has either expired or was not created.
          </styled.p>
          <Link href="/">Return to Login</Link>
        </styled.div>
      </styled.div>
    );

  // disable auto-login since we are not storing the secret key. on expiry
  // user will be logged out and redirected to login page
  const config: EmbedConfig = {
    thoughtSpotHost: host,
    authType: AuthType.TrustedAuthTokenCookieless,
    autoLogin: false,
    getAuthToken: async () => {
      return auth.token;
    },
  };

  return <TsInitProvider embedConfig={config}>{children}</TsInitProvider>;
};
