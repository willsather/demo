"use client";

import { AlertCircle, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@demo/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@demo/ui/card";
import { ScrollArea, ScrollBar } from "@demo/ui/scroll-area";

interface ApiTesterProps {
  title: string;
  description: string;
  endpoint: string;
}

export function ApiTester({ title, description, endpoint }: ApiTesterProps) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const callApi = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(`/api${endpoint}`);

      if (!res.ok) {
        const errorData = await res.json();
        setError(`${res.status}: ${errorData.message || "Unknown error"}`);
      } else {
        const data = await res.json();
        setResponse(data);
      }
    } catch (err) {
      setError(
        `Network error: ${err instanceof Error ? err.message : "Unknown error"}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="space-y-3">
        <CardTitle className="font-mono text-lg">{title}</CardTitle>
        <div className="space-y-1">
          <CardDescription>{description}</CardDescription>
          <Link
            href={endpoint}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary text-xs underline underline-offset-2 hover:text-primary/80"
          >
            Open API <ExternalLink className="size-3" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => callApi()}
            disabled={loading}
            variant="outline"
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Calling...
              </>
            ) : (
              "Call API"
            )}
          </Button>
        </div>

        {/* Response area with a consistent height to prevent layout shift */}
        <div className="min-h-16">
          {/* Skeleton loader */}
          {loading && (
            <div className="animate-pulse rounded-md border p-4">
              <div className="flex items-start">
                <div className="mr-2 h-5 w-5 rounded-full bg-gray-200" />
                <div className="w-full">
                  <div className="mb-3 h-4 w-24 rounded bg-gray-200" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-gray-200" />
                    <div className="h-3 w-5/6 rounded bg-gray-200" />
                    <div className="h-3 w-4/6 rounded bg-gray-200" />
                    <div className="h-3 w-3/6 rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error response */}
          {!loading && error && (
            <div className="rounded-md border border-red-200 bg-red-50 p-4">
              <div className="flex items-start">
                <AlertCircle className="mt-0.5 mr-2 h-5 w-5 text-red-500" />
                <div>
                  <h4 className="font-medium text-red-800">Error</h4>
                  <p className="mt-1 text-red-700 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Success response */}
          {!loading && response && (
            <div className="rounded-md border border-green-200 bg-green-50 p-4">
              <div className="flex items-start">
                <ScrollArea className="h-24 w-full">
                  <div className="pr-4">
                    <h4 className="font-medium text-green-800">Success</h4>
                    <pre className="whitespace-pre-wrap break-words text-green-700 text-sm">
                      {JSON.stringify(response, null, 2)}
                    </pre>
                  </div>
                  <ScrollBar orientation="horizontal" />
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && !response && (
            <div className="flex h-full items-center justify-center rounded-md border border-dashed p-4">
              <p className="text-gray-400 text-sm">
                Click any button above to test the endpoint
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
