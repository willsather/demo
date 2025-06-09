import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@demo/ui/styles/tailwind.css";
import StatusBar from "@demo/components/status-bar";

export const metadata: Metadata = {
  title: "Demo Observability",
  description:
    "Basic Next.js Application to simulate various API / Page failures",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StatusBar url={process.env.VERCEL_URL ?? ""} />

        {children}

        <Analytics />
        <SpeedInsights />

        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
