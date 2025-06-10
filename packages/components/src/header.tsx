"use client";

import { cn } from "@demo/ui/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@demo/ui/tooltip";
import { InfoIcon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSidebarToggle } from "./hooks/use-sidebar-toggle";
import { VercelStatusIndicator } from "./vercel-status";

export default function Header() {
  const { isVisible, toggleSidebar } = useSidebarToggle();
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
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 flex h-14 items-center bg-neutral-100 transition-transform duration-300 ease-in-out dark:bg-neutral-900",
        isVisible ? "translate-y-0" : "-translate-y-full", // Controlled by our custom hook's state
      )}
    >
      <div className="flex h-full w-20 flex-shrink-0 items-center justify-center px-4">
        <button
          type="button"
          onClick={toggleSidebar}
          className="flex items-center justify-center rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-200 md:hidden dark:text-neutral-400 dark:hover:bg-neutral-700"
          aria-label="Toggle sidebar"
        >
          {isVisible ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        <a
          href="https://vercel.com"
          className="hidden h-full w-full items-center justify-center md:flex"
          aria-label="Vercel Homepage"
        >
          <svg
            aria-label="Vercel logomark"
            viewBox="0 0 74 64"
            role="graphics-symbol"
            className="size-6 shrink-0 fill-black dark:fill-white"
          >
            <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
          </svg>
        </a>
      </div>
      <div className="flex-grow" />
      <div className="flex items-center gap-4 px-4 text-neutral-600 text-xs dark:text-neutral-400">
        <p className="hidden font-mono sm:block">{region ?? ""}</p>
        <VercelStatusIndicator />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="hidden text-neutral-500 md:block dark:text-neutral-400">
              <InfoIcon className="size-4" />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Toggle sidebar: ⌘ + Shift + .</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}
