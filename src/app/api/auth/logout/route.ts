import { NextRequest, NextResponse } from "next/server";
import { schemaRoutePostAuthLogout } from "./schema";

export const POST = async (req: NextRequest) => {
  const payload = await req.json();
  const { data, error } = schemaRoutePostAuthLogout.safeParse(payload);

  if (error) {
    return NextResponse.json(
      { error: { message: "Request body is malformed" } },
      { status: 400 }
    );
  }

  const { host, token, user_identifier } = data;

  // strip all trailing slashes from host URL
  const useHost = host.replace(/\/*$/gm, "");

  const url = `${useHost}/api/rest/2.0/auth/token/revoke`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const body = JSON.stringify({
    user_identifier,
    token,
  });
  const res = await fetch(url, {
    method: "POST",
    headers,
    body,
  });
  if (res.status !== 204) {
    console.log(res.status);
    console.log(res.body);
    console.log(await res.json());
    return NextResponse.json(
      { error: { message: "Error revoking session token" } },
      { status: 500 }
    );
  }

  const response = new NextResponse(null, { status: 201 });
  return response;
};
