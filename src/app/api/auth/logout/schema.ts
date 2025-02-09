import { z } from "zod";

export const schemaRoutePostAuthLogout = z.object({
  host: z
    .string()
    .min(1, { message: "Required" })
    .url({ message: "Invalid URL format" }),
  user_identifier: z.string().min(1, { message: "Required" }),
  token: z.string().min(1, { message: "Required" }),
});

export type SchemaRoutePostAuthLogout = z.infer<
  typeof schemaRoutePostAuthLogout
>;
