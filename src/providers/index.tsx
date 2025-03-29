import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { ThemeProvider } from "./Theme";

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
};
