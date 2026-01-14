"use client";

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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://vercel-status.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-sidebar-accent transition-colors"
            >
              <span className="text-sm text-sidebar-foreground">Region</span>
              <div className="flex items-center gap-3">
                <StatusDot incident={incident} loading={loading} />
                <span className="rounded-md bg-sidebar-accent px-2 py-1 font-mono text-xs min-w-[8ch] inline-block text-center">
                  {region || "\u00A0"}
                </span>
              </div>
            </a>
          </TooltipTrigger>
          <TooltipContent side="top">
            <span>{statusText}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <ThemeToggle />
    </div>
  );
}
