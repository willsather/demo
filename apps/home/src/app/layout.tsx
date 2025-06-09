import { Analytics } from "@vercel/analytics/react";
import { PrefetchCrossZoneLinksProvider } from "@vercel/microfrontends/next/client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import StatusBar from "@demo/components/status-bar";

import "@demo/ui/styles/tailwind.css";

import { env } from "@/env";

export const metadata: Metadata = {
  title: "Demo Home",
  description: "Basic Next.js demo",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <PrefetchCrossZoneLinksProvider>
          <StatusBar url={env.BASE_URL} />

          {children}

          <Analytics />
          <SpeedInsights />
          {process.env.NODE_ENV === "development" && <VercelToolbar />}
        </PrefetchCrossZoneLinksProvider>
      </body>
    </html>
  );
}
