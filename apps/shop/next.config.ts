import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

const withVercelToolbarConfig = withVercelToolbar()(nextConfig);
export default withVercelToolbarConfig;
