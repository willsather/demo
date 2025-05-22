import Link from "next/link";
import type { ReactElement } from "react";

interface Incident {
  name?: string;
  impact?: "critical" | "major";
}

export async function getVercelStatus(): Promise<Incident[]> {
  const res = await fetch("https://www.vercel.com/status-api");

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(errorData);
  }

  return (await res.json()) as Incident[];
}

const getStatusColor = (incident: Incident | null | undefined): string => {
  if (!incident) {
    return "success";
  }

  if (incident.impact === "critical" || incident.impact === "major") {
    return "error";
  }

  return "warning";
};

const getStatusType = (incident: Incident | null | undefined): string => {
  if (!incident) {
    return "success";
  }

  if (incident.impact === "critical" || incident.impact === "major") {
    return "error";
  }

  return "warning";
};

export async function VercelStatusIndicator(): Promise<ReactElement> {
  const incidents = await getVercelStatus();

  const incident = Array.isArray(incidents)
    ? incidents[incidents.length - 1]
    : null;

  const status = !incidents ? "secondary" : getStatusColor(incident);
  const statusType = !incidents ? "secondary" : getStatusType(incident);

  return (
    <Link href="https://vercel-status.com">
      <div>
        <p>
          <span>{incident?.name}</span>

          {incidents === undefined
            ? "Loading status..."
            : incident
              ? incident.name
              : "All systems normal."}
        </p>
      </div>
    </Link>
  );
}
