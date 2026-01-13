"use client";

import { Home, Radio, ShoppingBag } from "lucide-react";

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
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "/api", label: "API", icon: Radio },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarHeader>
        <a
          href="https://vercel.com/willsather-ent/demo-home"
          className="flex items-center gap-2 px-2 py-1"
          aria-label="Vercel"
        >
          <svg
            aria-label="Vercel logomark"
            viewBox="0 0 74 64"
            role="graphics-symbol"
            className="size-5 shrink-0 fill-current"
          >
            <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
          </svg>
          <span className="font-semibold">Demo</span>
        </a>
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
