import { useContext } from "react";
import { tsInitContext } from "@/components/ts-init-provider/ts-init-context";

/**
 * ThoughtSpot initialization hook. This hook must be used
 * within `<TsInitProvider>`.
 *
 * This hook returns an object with three properties:
 *
 * `isInitialized`: `true` if ThoughtSpot has been initialized
 *
 * `authEvents`: `undefined` if ThoughtSpot has not been initialized,
 * otherwise an instance of `AuthEventEmitter`
 *
 * `initializeTs`: function that can be used to manually initialize
 * ThoughtSpot
 *
 * ```tsx
 * const { isInitialized, authEvents, initializeTs } = useTsInit();
 * ```
 */

export const useTsInit = () => {
  const context = useContext(tsInitContext);
  if (context === undefined)
    throw new Error("useTsInit must be used within a TsInitProvider");

  return context;
};
