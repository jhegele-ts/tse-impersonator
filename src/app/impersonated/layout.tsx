"use client";

import { useTsInit } from "@/hooks/useTsInit";
import { useAuth } from "@/stores/auth";
import { AuthType } from "@thoughtspot/visual-embed-sdk";
import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/shallow";

const LayoutImpersonated = ({ children }: { children: React.ReactNode }) => {
  const { isInitialized, initializeTs } = useTsInit();
  const [host, sessionLengthMins, auth] = useAuth(
    useShallow((state) => [state.host, state.sessionLengthMins, state.auth])
  );

  const requiredData = useMemo(() => {
    const notReady = {
      isReady: false as const,
    };
    if (!host) return notReady;
    if (!sessionLengthMins) return notReady;
    if (!auth) return notReady;
    return {
      isReady: true as const,
      host,
      sessionLengthMins,
      auth,
    };
  }, [host, sessionLengthMins, auth]);

  useEffect(() => {
    if (!isInitialized && requiredData.isReady) {
      initializeTs({
        thoughtSpotHost: requiredData.host,
        authType: AuthType.TrustedAuthTokenCookieless,
        getAuthToken: async () => {
          return requiredData.auth.token;
        },
        // we cannot securely store the secret key, so we disable automatic
        // token refresh and force a new login on session expiry
        autoLogin: false,
      });
    }
  }, [isInitialized, requiredData.isReady]);

  if (!isInitialized) return null;

  return <>{children}</>;
};

export default LayoutImpersonated;
