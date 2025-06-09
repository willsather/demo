"use client";

import { InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@demo/ui/tooltip";

import { usePathname } from "next/navigation";
import { NavigationDropdown } from "./navigation-dropdown";
import { VercelStatusIndicator } from "./vercel-status";

export default function StatusBar({ url }: { url: string }) {
  const path = usePathname();

  const [region, setRegion] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(true);

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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.metaKey && event.shiftKey && event.key === ".") {
        setIsVisible((prev) => !prev);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full border-gray-800 border-b bg-black px-4 py-3">
      <div className="flex flex-col-reverse justify-between gap-3 md:flex-row">
        <div className="flex items-center gap-1">
          <svg
            aria-label="Vercel logomark"
            viewBox="0 0 74 64"
            role="graphics-symbol"
            className="mr-1 size-6 fill-white"
          >
            <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
          </svg>

          <span className="text-muted-foreground mx-2 mb-1">{"/"}</span>

          <NavigationDropdown url={url} />
        </div>

        <div className="flex items-center gap-4 font-mono text-white text-xs">
          <p>{region != null ? region : ""}</p>

          <VercelStatusIndicator />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="size-3" />
              </TooltipTrigger>

              <TooltipContent>
                <p>Close / Open with ⌘ + ⇧ + .</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
