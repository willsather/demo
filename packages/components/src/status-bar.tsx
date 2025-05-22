"use client";

import { useEffect, useState } from "react";
import { VercelStatusIndicator } from "./vercel-status";

export default function StatusBar() {
  const [region, setRegion] = useState<string>();

  useEffect(() => {
    async function fetchRegion() {
      const res = await fetch("/api/region");

      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData);
      }

      const json = (await res.json()) as { region: string };
      console.log(json);
      setRegion(json.region);
    }

    void fetchRegion();
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full border-gray-800 border-b bg-black px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            aria-label="Vercel logomark"
            viewBox="0 0 74 64"
            role="graphics-symbol"
            className="mr-1 size-5 fill-white"
          >
            <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
          </svg>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-white">
          <p>{region != null ? region : ""}</p>

          <VercelStatusIndicator />
        </div>
      </div>
    </div>
  );
}
