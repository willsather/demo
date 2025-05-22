"use client";

import Link from "next/link";
import { type ReactElement, useEffect, useState } from "react";

interface Incident {
  name?: string;
  impact?: "critical" | "major";
}

export function VercelStatusIndicator(): ReactElement {
  const [incidents, setIncidents] = useState<Incident[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchStatus() {
      const res = await fetch("/api/status");

      if (!res.ok) {
        const errorData = await res.text();
        setLoading(false);
        throw new Error(`${res.status}: ${errorData || "Unknown error."}`);
      }

      const json = (await res.json()) as { incidents: Incident[] };
      setIncidents(json.incidents);
      setLoading(false);
    }

    void fetchStatus();
  }, []);

  const getStatusCircle = (
    incident: Incident | null | undefined,
    loading: boolean,
  ): ReactElement => {
    if (loading) {
      return (
        <div className="size-2 rounded-full border-4 border-gray-500 bg-white" />
      );
    }

    if (!incident) {
      return <div className="size-2 rounded-full bg-emerald-500" />;
    }

    if (incident.impact === "major") {
      return <div className="size-2 rounded-full bg-yellow-500" />;
    }

    if (incident.impact === "critical") {
      return <div className="size-2 rounded-full bg-red-500" />;
    }

    return (
      <div className="size-2 rounded-full border-4 border-gray-500 bg-white" />
    );
  };

  const incident = Array.isArray(incidents)
    ? incidents[incidents.length - 1]
    : null;

  return (
    <Link
      href="https://vercel-status.com"
      className="flex items-center justify-center gap-2"
    >
      {getStatusCircle(incident, loading)}

      <p>
        <span>{incident?.name}</span>

        {incidents == null
          ? "Loading status..."
          : incident
            ? incident.name
            : "All systems normal."}
      </p>
    </Link>
  );
}
