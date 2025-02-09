import { NextRequest, NextResponse } from "next/server";
import { schemaRoutePostAuthToken } from "./schema";
import type { GetTokenResponse } from "@thoughtspot/rest-api-sdk";

export const POST = async (req: NextRequest) => {
  const payload = await req.json();
  const { data, error } = schemaRoutePostAuthToken.safeParse(payload);

  // invalid/unexpected body format
  if (error)
    return NextResponse.json(
      { error: { message: "Request body is malformed" } },
      { status: 400 }
    );

  const { host, sessionLengthMins, username, secretKey } = data;

  // strip all trailing slashes from host URL
  const useHost = host.replace(/\/*$/gm, "");

  const url = `${useHost}/api/rest/2.0/auth/token/full`;
  const body = JSON.stringify({
    username,
    secret_key: secretKey,
    validity_time_in_sec: sessionLengthMins * 60,
    auto_create: false,
  });
  const headers = {
    Accept: "application/json",
    "X-Requested-By": "ThoughtSpot",
    "Content-Type": "application/json",
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body,
  });
  // if TS auth fails
  if (!res.ok) {
    return NextResponse.json(
      {
        error: {
          message:
            "Authentication error. Please check your username and secret key and try again.",
        },
      },
      { status: 403 }
    );
  }

  // if auth is successful, return full token response
  const auth = (await res.json()) as GetTokenResponse;
  const response = new NextResponse(JSON.stringify({ data: auth }), {
    status: 200,
  });
  return response;
};
