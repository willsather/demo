import { withMicrofrontends } from "@vercel/microfrontends/next/config";
import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	turbopack: {},
};

const withMicrofrontendsConfig = withMicrofrontends(nextConfig);
const withVercelToolbarConfig = withVercelToolbar()(withMicrofrontendsConfig);
export default withVercelToolbarConfig;
