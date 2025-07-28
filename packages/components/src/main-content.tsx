"use client";

import type React from "react";

import { cn } from "@demo/ui/lib/utils";

import { useSidebarToggle } from "./hooks/use-sidebar-toggle";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isVisible } = useSidebarToggle();

  return (
    <main className="ml-0 flex-1 rounded-tl-2xl bg-neutral-50 transition-all duration-300 ease-in-out dark:bg-black">
      <div className={cn({ "mt-14 ml-20": isVisible })}>{children}</div>
    </main>
  );
}
