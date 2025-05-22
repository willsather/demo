import { withMicrofrontends } from "@vercel/microfrontends/next/config";
import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@demo/components", "@demo/ui"],
};

const withMicrofrontendsConfig = withMicrofrontends(nextConfig);
const withVercelToolbarConfig = withVercelToolbar()(withMicrofrontendsConfig);
export default withVercelToolbarConfig;
