"use client";

import { VercelStatusIndicator } from "@/components/vercel-status";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

type StatusType =
  | "operational"
  | "degraded_performance"
  | "partial_outage"
  | "major_outage"
  | "under_maintenance"
  | "unknown";

interface StatusData {
  status: {
    description: string;
    indicator: StatusType;
  };
}

export default function StatusBar() {
  const [region, setRegion] = useState<string>("Loading...");
  const [status, setStatus] = useState<StatusType>("unknown");
  const [statusDescription, setStatusDescription] =
    useState<string>("Loading status...");

  useEffect(() => {
    // Fetch Vercel region
    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => {
        setRegion(data.region || "Unknown");
      })
      .catch(() => {
        setRegion("Unknown");
      });

    // Fetch Vercel status
    fetch("https://status.vercel.com/api/v2/summary.json")
      .then((res) => res.json())
      .then((data: StatusData) => {
        setStatus(data.status.indicator);
        setStatusDescription(data.status.description);
      })
      .catch(() => {
        setStatus("unknown");
        setStatusDescription("Unable to fetch status");
      });
  }, []);

  const getStatusIcon = () => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "degraded_performance":
      case "partial_outage":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "major_outage":
      case "under_maintenance":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "operational":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "degraded_performance":
      case "partial_outage":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "major_outage":
      case "under_maintenance":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full border-gray-800 border-b bg-black/80 px-4 py-2 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <span>Region: {region}</span>
        </div>
        <div
          className={`flex items-center space-x-2 rounded border px-2 py-1 text-sm ${getStatusColor()}`}
        >
          {getStatusIcon()}
          <VercelStatusIndicator />
        </div>
      </div>
    </div>
  );
}
