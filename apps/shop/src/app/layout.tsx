import { Analytics } from "@vercel/analytics/react";
import { PrefetchCrossZoneLinksProvider } from "@vercel/microfrontends/next/client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/header";
import StatusBar from "@demo/components/status-bar";

import "@demo/ui/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Demo Shop",
  description: "Basic Next.js e-commerce demo",
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
          <StatusBar url={process.env.VERCEL_URL ?? ""} />

          <Header />

          {children}

          <Analytics />
          <SpeedInsights />
          {process.env.NODE_ENV === "development" && <VercelToolbar />}
        </PrefetchCrossZoneLinksProvider>
      </body>
    </html>
  );
}
