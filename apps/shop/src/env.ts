import { z } from "zod";

const envSchema = z.object({
  DEMO_BASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
