import { Menu, Moon, Sun, User } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className="fixed w-full bg-blue-500">
        {/* toolbar */}
        <div className="mr-4 ml-4 flex h-20 flex-wrap items-center justify-between text-white sm:ml-60 sm:flex-nowrap">
          <button
            type="button"
            className="cursor-pointer sm:hidden"
            onClick={() => {}}
          >
            <Menu className="size-[30px]" />
          </button>

          <button
            type="button"
            className="cursor-pointer"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </button>

          <div className="hidden sm:block">Search...</div>

          {!isAuthenticated ? (
            <button
              type="button"
              className="flex cursor-pointer items-center"
              onClick={() => setIsAuthenticated(true)}
            >
              <div className="hidden sm:block">Login &nbsp;</div>
              <User className="size-[30px] rounded-full border-2 border-white" />
            </button>
          ) : (
            <NavLink
              to={`/profile/:id`}
              className="flex cursor-pointer items-center"
              onClick={() => {}}
            >
              <div className="hidden sm:block">My Movies &nbsp;</div>
              <div className="flex size-[30px] items-center justify-center rounded-full border-2 border-white bg-blue-300">
                <User className="" />
              </div>
            </NavLink>
          )}

          <div className="flex text-white sm:hidden">Search...</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
