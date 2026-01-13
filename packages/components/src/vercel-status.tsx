"use client";

import Link from "next/link";
import { type ReactElement, useEffect, useState } from "react";

interface Incident {
  name?: string;
  impact?: "minor" | "critical" | "major";
}

export function VercelStatusIndicator(): ReactElement {
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

  const getStatusCircle = (
    incident: Incident | null | undefined,
    loading: boolean,
  ): ReactElement => {
    // null is an error fetching status
    if (loading || incident === null) {
      return (
        <div className="size-2 rounded-full border-4 border-gray-500 bg-white" />
      );
    }

    // undefined is no incident
    if (incident === undefined) {
      return <div className="size-2 rounded-full bg-emerald-500" />;
    }

    if (incident.impact === "minor" || incident.impact === "major") {
      return <div className="size-2 rounded-full bg-yellow-500" />;
    }

    if (incident.impact === "critical") {
      return <div className="size-2 rounded-full bg-red-500" />;
    }

    // something else
    return (
      <div className="size-2 rounded-full border-4 border-gray-500 bg-white" />
    );
  };

  return (
    <Link href="https://vercel-status.com" className="flex items-center gap-2">
      {getStatusCircle(incident, loading)}
      <span>{incident ? incident.name : "All systems normal"}</span>
    </Link>
  );
}
