import type {
  AuthEventEmitter,
  EmbedConfig,
} from "@thoughtspot/visual-embed-sdk";
import { createContext } from "react";

// Context for ThoughtSpot initialization provider

export type TsInitContext = {
  isInitialized: boolean;
  authEvents?: AuthEventEmitter;
  initializeTs: (embedConfig: EmbedConfig) => void;
};

const tsInitDefaults: TsInitContext = {
  isInitialized: false,
  initializeTs: () => {},
};

export const tsInitContext = createContext<TsInitContext>({
  ...tsInitDefaults,
});
