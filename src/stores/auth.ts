import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import type { GetTokenResponse } from "@thoughtspot/rest-api-sdk";

export type State = {
  host?: string;
  username?: string;
  sessionLengthMins?: number;
  auth?: GetTokenResponse;
};

export type Actions = {
  setAuth: (
    host: string,
    username: string,
    sessionLengthMins: number,
    newAuth: GetTokenResponse
  ) => void;
  logout: () => void;
  reset: () => void;
};

const initState: State = {
  sessionLengthMins: 15,
};

export const useAuth = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initState,
      setAuth: (host, username, sessionLengthMins, newAuth) =>
        set((state) => {
          state.host = host;
          state.username = username;
          state.sessionLengthMins = sessionLengthMins;
          state.auth = newAuth;
        }),
      logout: () =>
        set((state) => {
          state.auth = undefined;
        }),
      reset: () =>
        set((state) => {
          state.host = initState.host;
          state.username = initState.username;
          state.sessionLengthMins = initState.sessionLengthMins;
          state.auth = initState.auth;
        }),
    })),
    { name: "ts-impersonate-auth" }
  )
);
