import type { ReactNode } from "react";

import Header from "./header";
import MainContent from "./main-content";
import Sidebar from "./sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent>
          <Header />
          {children}
        </MainContent>
      </div>
    </div>
  );
}
