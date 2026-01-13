"use client";

import { type ReactElement, useEffect, useState } from "react";

interface Incident {
  name?: string;
  impact?: "minor" | "critical" | "major";
}

interface VercelStatus {
  incident: Incident | null | undefined;
  loading: boolean;
  statusText: string;
}

export function useVercelStatus(): VercelStatus {
  const [incident, setIncident] = useState<Incident | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchStatus() {
      const res = await fetch("/api/status/vercel");

      if (!res.ok) {
        setLoading(false);
        return;
      }

      const json = (await res.json()) as { incidents: Incident[] };

      const jsonIncident = Array.isArray(json.incidents)
        ? json.incidents[json.incidents.length - 1]
        : undefined;

      setIncident(jsonIncident);
      setLoading(false);
    }

    void fetchStatus();
  }, []);

  const statusText = incident
    ? (incident.name ?? "Unknown incident")
    : "All systems normal";

  return { incident, loading, statusText };
}

export function StatusDot({
  incident,
  loading,
}: {
  incident: Incident | null | undefined;
  loading: boolean;
}): ReactElement {
  if (loading || incident === null) {
    return (
      <div className="size-2 rounded-full border border-gray-500 bg-transparent" />
    );
  }

  if (incident === undefined) {
    return <div className="size-2 rounded-full bg-emerald-500" />;
  }

  if (incident.impact === "minor" || incident.impact === "major") {
    return <div className="size-2 rounded-full bg-yellow-500" />;
  }

  if (incident.impact === "critical") {
    return <div className="size-2 rounded-full bg-red-500" />;
  }

  return (
    <div className="size-2 rounded-full border border-gray-500 bg-transparent" />
  );
}
