"use client";

import { ExternalLink, Loader2 } from "lucide-react";
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

interface GetApiProps {
  title: string;
  description: string;
  endpoint: string;
  dynamicParam?: string;
  dynamicParamOptions?: string[];
}

export function GetApi({
  title,
  description,
  endpoint,
  dynamicParam,
  dynamicParamOptions,
}: GetApiProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<number | null>(null);
  const [response, setResponse] = useState<object | null>(null);
  const [selectedParam, setSelectedParam] = useState(
    dynamicParamOptions?.[0] || "",
  );

  const callApi = async () => {
    setLoading(true);
    setStatus(null);
    setResponse(null);

    try {
      const url = dynamicParam
        ? `/api${endpoint.replace(`[${dynamicParam}]`, selectedParam)}`
        : `/api${endpoint}`;

      const res = await fetch(url);
      setStatus(res.status);
      setResponse(await res.json());
    } catch (_err) {
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
          <a
            href={endpoint}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary text-xs underline underline-offset-2 hover:text-primary/80"
          >
            Open API <ExternalLink className="size-3" />
          </a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          {dynamicParamOptions && (
            <select
              value={selectedParam}
              onChange={(e) => setSelectedParam(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:w-1/2"
            >
              {dynamicParamOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          <Button
            onClick={() => callApi()}
            disabled={loading}
            variant="outline"
            className={`w-full ${!dynamicParamOptions ? "sm:w-full" : "sm:w-1/2"}`}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Calling...
              </>
            ) : (
              "Call API"
            )}
          </Button>
        </div>

        <ResponseBlock loading={loading} status={status} response={response} />
      </CardContent>
    </Card>
  );
}

function ResponseBlock({
  loading,
  response,
  status,
}: {
  loading: boolean;
  response: object | null;
  status: number | null;
}) {
  const getStatusColor = (code: number | null) => {
    if (code == null) return "border-border bg-muted";
    if (code >= 200 && code < 300)
      return "border-emerald-500/30 bg-emerald-500/10 dark:border-emerald-400/30 dark:bg-emerald-400/10";
    if (code >= 300 && code < 400)
      return "border-yellow-500/30 bg-yellow-500/10 dark:border-yellow-400/30 dark:bg-yellow-400/10";
    if (code >= 400)
      return "border-red-500/30 bg-red-500/10 dark:border-red-400/30 dark:bg-red-400/10";
    return "border-border bg-muted";
  };

  const getStatusTextColor = (code: number | null) => {
    if (code == null) return "text-muted-foreground";
    if (code >= 200 && code < 300)
      return "text-emerald-700 dark:text-emerald-400";
    if (code >= 300 && code < 400)
      return "text-yellow-700 dark:text-yellow-400";
    if (code >= 400) return "text-red-700 dark:text-red-400";
    return "text-muted-foreground";
  };

  if (loading) {
    return (
      <div className="min-h-24 animate-pulse rounded-md border border-border p-4">
        <div className="flex items-start">
          <div className="w-full">
            <div className="mb-3 h-4 w-24 rounded bg-muted" />
            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-muted" />
              <div className="h-3 w-5/6 rounded bg-muted" />
              <div className="h-3 w-4/6 rounded bg-muted" />
              <div className="h-3 w-3/6 rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (response != null) {
    return (
      <div
        className={`min-h-24 rounded-md border p-4 ${getStatusColor(status)}`}
      >
        <div className="flex items-start justify-between">
          <ScrollArea className="h-24 w-full">
            <div className="pr-4">
              <pre
                className={`whitespace-pre-wrap break-words text-sm ${getStatusTextColor(status)}`}
              >
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
            <ScrollBar orientation="horizontal" />
            <ScrollBar orientation="vertical" />
          </ScrollArea>

          {status && (
            <div
              className={`ml-4 font-mono text-sm ${getStatusTextColor(status)}`}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex min-h-24 items-center justify-center rounded-md border border-dashed border-border p-4">
        <p className="text-muted-foreground text-sm">
          Click any button above to test the endpoint
        </p>
      </div>
    </div>
  );
}
