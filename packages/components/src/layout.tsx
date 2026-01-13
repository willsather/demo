import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@demo/ui/sidebar";

import { AppSidebar } from "./sidebar";
import { ThemeProvider } from "./theme-provider";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider className="bg-sidebar">
        <AppSidebar />
        <SidebarInset className="my-2 mr-2 rounded-xl bg-background">
          <main className="flex-1 p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
