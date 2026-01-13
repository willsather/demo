"use client";

import { AlertOctagon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@demo/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const code = 500;
  const statusInfo = {
    name: "Internal Server Error",
    description:
      "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 dark:bg-red-950/20 p-6">
      <div className="w-full max-w-md overflow-hidden rounded-lg border border-red-200 dark:border-red-800 bg-card shadow-sm">
        <div className="border-red-200 dark:border-red-800 border-b bg-red-100 dark:bg-red-900/30 p-4">
          <div className="flex items-center gap-2">
            <AlertOctagon className="h-5 w-5 text-red-700 dark:text-red-400" />
            <h1 className="font-medium text-lg text-red-900 dark:text-red-300">
              {code}
            </h1>
          </div>
        </div>

        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <h2 className="font-bold text-2xl text-foreground">
              {statusInfo.name}
            </h2>
            <p className="text-muted-foreground">{statusInfo.description}</p>
          </div>

          <div className="rounded-md border border-border bg-muted p-4">
            <pre className="whitespace-pre-wrap text-muted-foreground text-sm">
              {JSON.stringify(
                {
                  status: code,
                  statusText: statusInfo.name,
                  message: statusInfo.description,
                  digest: error.digest,
                },
                null,
                2,
              )}
            </pre>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              onClick={reset}
              variant="destructive"
              className="flex items-center gap-2"
            >
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
