import { User } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import ThemeSelector from "../providers/Theme/ThemeSelector";
import { SideMenu, SideMenuTrigger } from "./SideMenu";

const NavBar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className="fixed w-full bg-blue-500 dark:bg-slate-800">
        {/* toolbar */}
        <div className="mr-4 ml-4 flex h-20 flex-wrap items-center justify-between text-white md:ml-64 md:flex-nowrap">
          <SideMenuTrigger />

          <ThemeSelector />

          <div className="hidden md:block">Search...</div>

          {!isAuthenticated ? (
            <button
              type="button"
              className="flex cursor-pointer items-center"
              onClick={() => setIsAuthenticated(true)}
            >
              <div className="hidden md:block">Login &nbsp;</div>
              <User className="size-[30px] rounded-full border-2 border-white" />
            </button>
          ) : (
            <NavLink
              to={`/profile/:id`}
              className="flex cursor-pointer items-center"
              onClick={() => {}}
            >
              <div className="hidden md:block">My Movies &nbsp;</div>
              <div className="flex size-[30px] items-center justify-center rounded-full border-2 border-white bg-blue-300">
                <User className="" />
              </div>
            </NavLink>
          )}

          <div className="flex text-white md:hidden">Search...</div>
        </div>
      </div>

      <div>
        <SideMenu />
      </div>
    </>
  );
};

export default NavBar;
