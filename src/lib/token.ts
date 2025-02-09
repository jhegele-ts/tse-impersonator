import { SchemaRoutePostAuthLogout } from "@/app/api/auth/logout/schema";
import type {
  SchemaRoutePostAuthToken,
  SchemaRoutePostAuthTokenResponse,
} from "@/app/api/auth/token/schema";

export const getToken = async (tokenRequest: SchemaRoutePostAuthToken) => {
  const res = await fetch(`/api/auth/token`, {
    method: "POST",
    body: JSON.stringify(tokenRequest),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resBody = (await res.json()) as SchemaRoutePostAuthTokenResponse;
  return resBody;
};

export const tsLogout = async (
  host: string,
  user_identifier: string,
  token: string
) => {
  const body: SchemaRoutePostAuthLogout = {
    host,
    user_identifier,
    token,
  };
  const res = await fetch(`/api/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.status;
};
