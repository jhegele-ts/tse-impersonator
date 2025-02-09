import { z } from "zod";
import type { GetTokenResponse } from "@thoughtspot/rest-api-sdk";

export const schemaRoutePostAuthToken = z.object({
  host: z
    .string()
    .min(1, { message: "Required" })
    .url({ message: "Invalid URL format" }),
  username: z.string().min(1, { message: "Required" }),
  secretKey: z.string().min(1, { message: "Required" }),
  sessionLengthMins: z
    .number()
    .int({ message: "Integer values only" })
    .positive({ message: "Must be a positive number" })
    .min(1, { message: "Minimum 1 minute" })
    .max(60, { message: "Cannot exceed 60 minutes" }),
});

export type SchemaRoutePostAuthToken = z.infer<typeof schemaRoutePostAuthToken>;

export type SchemaRoutePostAuthTokenResponse =
  | {
      data: GetTokenResponse;
    }
  | {
      error: {
        message: string;
      };
    };
