"use client";

import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@demo/ui/tooltip";

import { ThemeToggle } from "./theme-toggle";
import { StatusDot, useVercelStatus } from "./vercel-status";

export function SidebarFooterContent() {
  const [region, setRegion] = useState<string>();
  const { incident, loading, statusText } = useVercelStatus();

  const getBackgroundColor = () => {
    if (incident?.impact === "critical") {
      return "bg-red-500/20 hover:bg-red-500/30";
    }
    if (incident?.impact === "minor" || incident?.impact === "major") {
      return "bg-yellow-500/20 hover:bg-yellow-500/30";
    }
    if (incident === undefined) {
      return "bg-emerald-500/20 hover:bg-emerald-500/30";
    }
    return "hover:bg-sidebar-accent";
  };

  const getBorderColor = () => {
    if (incident?.impact === "critical") {
      return "border border-red-500/50";
    }
    if (incident?.impact === "minor" || incident?.impact === "major") {
      return "border border-yellow-500/50";
    }
    if (incident === undefined) {
      return "border border-emerald-500/50";
    }
    return "";
  };

  const getRegionBadgeColor = () => {
    if (incident?.impact === "critical") {
      return "bg-red-500/30 text-red-200";
    }
    if (incident?.impact === "minor" || incident?.impact === "major") {
      return "bg-yellow-500/30 text-yellow-200";
    }
    if (incident === undefined) {
      return "bg-emerald-500/30 text-emerald-200";
    }
    return "bg-sidebar-accent";
  };

  useEffect(() => {
    async function fetchRegion() {
      try {
        const res = await fetch("/api/region");
        if (!res.ok) return;
        const json = (await res.json()) as { region: string };
        setRegion(json.region);
      } catch (error) {
        console.error("Failed to fetch region:", error);
      }
    }
    void fetchRegion();
  }, []);

  return (
    <div className="flex flex-col gap-2 text-sidebar-foreground/70">
      <a
        href="https://vercel-status.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col gap-2 px-2 py-2 rounded-md transition-colors ${getBackgroundColor()} ${getBorderColor()}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StatusDot incident={incident} loading={loading} />
            <span className="text-sm text-sidebar-foreground">Status</span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`rounded-md px-2 py-1 font-mono text-xs min-w-[8ch] inline-block text-center ${getRegionBadgeColor()}`}
            >
              {region || "\u00A0"}
            </span>
          </div>
        </div>
        {incident !== null && (
          <p className="text-xs text-sidebar-foreground/70">
            {incident
              ? incident.name || "Unknown incident"
              : "All systems operational"}
          </p>
        )}
      </a>
      <ThemeToggle />
    </div>
  );
}
