"use client";

import { useState } from "react";
import { Cpu, Home, Store } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@demo/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@demo/ui/sidebar";

import { SidebarFooterContent } from "./sidebar-footer";

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Shop", icon: Store },
  { href: "/api", label: "API", icon: Cpu },
];

export function AppSidebar() {
  const [open, setOpen] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <Sidebar collapsible="none">
      <SidebarHeader>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button
              className="group flex w-full items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-sidebar-accent"
              aria-label="Open menu"
              onPointerDown={handlePointerDown}
            >
              <svg
                aria-label="Vercel logomark"
                viewBox="0 0 74 64"
                role="graphics-symbol"
                className="size-5 shrink-0 fill-current"
              >
                <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
              </svg>
              <span className="text-lg font-semibold">Demo</span>
              <kbd className="ml-auto rounded border border-sidebar-foreground/15 bg-sidebar-accent px-2.5 font-mono text-sm leading-4 text-sidebar-foreground/70 opacity-0 transition-opacity group-hover:opacity-100">
                ⌘
              </kbd>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <a
                href="https://vercel.com/willsather-ent/demo-home"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <svg
                  aria-label="Vercel logomark"
                  viewBox="0 0 74 64"
                  className="size-4 fill-black dark:fill-current"
                >
                  <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
                </svg>
                Vercel Project
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="https://github.com/willsather/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <svg
                  aria-label="GitHub logomark"
                  viewBox="0 0 24 24"
                  className="size-4 fill-black dark:fill-current"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarFooterContent />
      </SidebarFooter>
    </Sidebar>
  );
}
