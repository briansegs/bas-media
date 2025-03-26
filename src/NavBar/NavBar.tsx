import React from "react";
import { NavLink } from "react-router";

const paths: string[] = ["movie", "actor", "profile"];

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="container flex items-center justify-between">
        <NavLink to="/">Home</NavLink>

        <nav>
          <ul className="flex gap-4">
            {paths.map((path, index) => (
              <li>
                <NavLink to={`/${path}/${index}`}>{path}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button className="cursor-pointer">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
