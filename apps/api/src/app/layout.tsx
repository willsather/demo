import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";

import Layout from "@demo/components/layout";
import { cn } from "@demo/ui/lib/utils";

import "@demo/ui/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Demo API",
  description: "Basic Next.js Application to simulate various API features",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.variable, "bg-neutral-100")}>
        <Layout>{children}</Layout>

        <Analytics />
        <SpeedInsights />

        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
