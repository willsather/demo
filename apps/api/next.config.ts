import { withMicrofrontends } from "@vercel/microfrontends/next/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/api",
};

const withMicrofrontendsConfig = withMicrofrontends(nextConfig);
export default withMicrofrontendsConfig;
