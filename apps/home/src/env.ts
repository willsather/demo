import { z } from "zod";

const envSchema = z.object({
  BASE_URL: z.string().url(),
});

export const env = envSchema.parse({
  ...process.env,
  BASE_URL:
    process.env.NODE_ENV === "development"
      ? `http://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
});
