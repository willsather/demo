"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@demo/ui/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-between px-2 py-2">
      <span className="text-sm text-sidebar-foreground">Theme</span>
      <div className="flex items-center gap-1 rounded-full bg-sidebar-accent p-1">
        <button
          type="button"
          onClick={() => setTheme("system")}
          className={cn(
            "rounded-full p-1.5 transition-colors",
            mounted && theme === "system"
              ? "bg-neutral-600 text-white dark:bg-neutral-400 dark:text-black"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground",
          )}
          aria-label="System theme"
        >
          <Monitor className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={cn(
            "rounded-full p-1.5 transition-colors",
            mounted && theme === "light"
              ? "bg-neutral-600 text-white dark:bg-neutral-400 dark:text-black"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground",
          )}
          aria-label="Light theme"
        >
          <Sun className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={cn(
            "rounded-full p-1.5 transition-colors",
            mounted && theme === "dark"
              ? "bg-neutral-600 text-white dark:bg-neutral-400 dark:text-black"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground",
          )}
          aria-label="Dark theme"
        >
          <Moon className="size-4" />
        </button>
      </div>
    </div>
  );
}
