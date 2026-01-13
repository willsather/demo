import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@demo/ui/sidebar";

import { AppSidebar } from "./sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider className="bg-sidebar">
      <AppSidebar />
      <SidebarInset className="my-2 mr-2 rounded-xl bg-background">
        <main className="flex-1 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
