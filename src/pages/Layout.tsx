import React from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

const Layout: React.FC = () => {
  return (
    // root
    <div className="bg-background flex h-screen w-full">
      <NavBar />
      {/* content */}
      <main className="grow p-8">
        {/* toolbar */}
        <div className="h-[70px]" />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
