"use client";

import { cn } from "@demo/ui/lib/utils";
import { useSidebarToggle } from "./hooks/use-sidebar-toggle";

const navigationOptions = [
  { href: "/", label: "Home", emoji: "🏠", accentColor: "bg-gray-500" },
  { href: "/shop", label: "Shop", emoji: "🛍️", accentColor: "bg-violet-500" },
  { href: "/api", label: "API", emoji: "📡", accentColor: "bg-green-500" },
];

export default function Sidebar({ baseUrl }: { baseUrl: string }) {
  const { isVisible } = useSidebarToggle();

  return (
    <aside
      className={cn(
        "fixed left-0 z-40 flex flex-col items-center overflow-y-auto bg-neutral-100 py-4 transition-all duration-300 ease-in-out dark:bg-neutral-900",
        isVisible
          ? "top-14 h-[calc(100vh-3.5rem)] w-20 translate-x-0"
          : "-translate-x-full top-0 h-screen w-0",
      )}
    >
      <nav className="flex flex-1 flex-col items-center gap-3 pt-2">
        {/* Added pt-2 for spacing */}
        {navigationOptions.map((item) => {
          return (
            <a
              key={item.href}
              href={`${baseUrl}${item.href}`}
              className={cn(
                "relative flex size-12 items-center justify-center rounded-2xl text-2xl transition-all duration-200 ease-in-out hover:rounded-xl hover:shadow-md focus-visible:outline-none focus-visible:ring-0",
                item.accentColor,
              )}
              aria-label={item.label}
            >
              <span>{item.emoji}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
