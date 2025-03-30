import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../app/store";
import { ThemeProvider } from "./Theme";

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
