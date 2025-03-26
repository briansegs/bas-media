import React from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

const Layout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
