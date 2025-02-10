"use client";

import { type JSX, useCallback, useEffect, useState } from "react";
import { tsInitContext } from "./ts-init-context";
import {
  type AuthEventEmitter,
  type EmbedConfig,
  init,
} from "@thoughtspot/visual-embed-sdk";

export type TsInitProviderProps = {
  children?: React.ReactNode;
  embedConfig?: EmbedConfig;
};

/**
 * Context provider for ThoughtSpot iniitialization. This component should be
 * located near the root of your application.
 *
 * @param {EmbedConfig} [embedConfig]
 * @returns {JSX.Element}
 *
 * Initialization can occur in two ways. You can initialize via the component
 * itself:
 * ```tsx
 * <TsInitProvider embedConfig={thoughtSpotEmbedConfig}>...</TsInitProvider>
 * ```
 *
 * Or initialization can occur in a child component leveraging the useTsInit
 * hook:
 * ```tsx
 * const { initialize } = useTsInit()
 *
 * useEffect(() => {
 *   initialize(thoughtSpotEmbedConfig)
 * }, [initialize])
 * ```
 */
export const TsInitProvider = ({
  children,
  embedConfig,
}: TsInitProviderProps) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [authEvents, setAuthEvents] = useState<AuthEventEmitter | undefined>(
    undefined
  );

  const initializeTs = useCallback(
    (embedConfig: EmbedConfig) => {
      if (!isInitialized) {
        console.log("Initializing ThoughtSpot embed...");
        setAuthEvents(init(embedConfig));
        setIsInitialized(true);
      }
    },
    [isInitialized]
  );

  useEffect(() => {
    if (embedConfig && !isInitialized) {
      initializeTs(embedConfig);
    }
  }, [embedConfig, initializeTs, isInitialized]);

  return (
    <tsInitContext.Provider value={{ isInitialized, authEvents, initializeTs }}>
      {children}
    </tsInitContext.Provider>
  );
};
