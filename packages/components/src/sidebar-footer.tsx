"use client";

import { useEffect, useState } from "react";

import { VercelStatusIndicator } from "./vercel-status";

export function SidebarFooterContent() {
  const [region, setRegion] = useState<string>();

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
    <div className="flex flex-col gap-2 px-2 py-1 text-xs text-sidebar-foreground/70">
      <VercelStatusIndicator />
      {region && <p className="font-mono">{region}</p>}
    </div>
  );
}
