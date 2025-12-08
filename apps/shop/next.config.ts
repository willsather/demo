import { withMicrofrontends } from "@vercel/microfrontends/next/config";
import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/shop",
  transpilePackages: ["@demo/components", "@demo/ui"],
  turbopack: {},
};

const withMicrofrontendsConfig = withMicrofrontends(nextConfig);
const withVercelToolbarConfig = withVercelToolbar()(withMicrofrontendsConfig);
export default withVercelToolbarConfig;
