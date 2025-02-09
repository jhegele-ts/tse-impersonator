"use client";

import { useCallback, useState } from "react";
import { tsInitContext } from "./ts-init-context";
import {
  type AuthEventEmitter,
  type EmbedConfig,
  init,
} from "@thoughtspot/visual-embed-sdk";

export type TsInitProviderProps = {
  children?: React.ReactNode;
};

export const TsInitProvider = ({ children }: TsInitProviderProps) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [authEvents, setAuthEvents] = useState<AuthEventEmitter | undefined>(
    undefined
  );

  const initializeTs = useCallback(
    (embedConfig: EmbedConfig) => {
      if (!isInitialized) {
        setAuthEvents(init(embedConfig));
        setIsInitialized(true);
      }
    },
    [isInitialized]
  );

  return (
    <tsInitContext.Provider value={{ isInitialized, authEvents, initializeTs }}>
      {children}
    </tsInitContext.Provider>
  );
};
