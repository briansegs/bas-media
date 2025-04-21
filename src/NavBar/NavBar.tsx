import Search from "@/components/Search";
import { setUser, userSelector } from "@/features/auth";
import { createSessionId, fetchToken, moviesApi } from "@/lib/utils";
import { User } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import ThemeSelector from "../providers/Theme/ThemeSelector";
import SideMenu, { SideMenuTrigger } from "./SideMenu";

const NavBar: React.FC = () => {
  const { isAuthenticated, user } = useSelector(userSelector);

  const dispatch = useDispatch();

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  // Place holder...
  console.log(user);

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`,
          );

          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();

          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`,
          );

          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token, sessionIdFromLocalStorage, dispatch]);

  return (
    <>
      <div className="bg-navbar fixed z-10 w-full shadow-lg">
        {/* toolbar */}
        <div className="mr-4 ml-4 flex h-20 flex-wrap items-center justify-between text-white md:ml-64 md:flex-nowrap">
          <SideMenuTrigger />

          <ThemeSelector />

          <div className="hidden md:block">
            <Search />
          </div>

          {!isAuthenticated ? (
            <button
              type="button"
              className="flex cursor-pointer items-center"
              onClick={fetchToken}
            >
              <div className="hidden md:block">Login &nbsp;</div>
              <User className="size-[30px] rounded-full border-2 border-white" />
            </button>
          ) : (
            <Link
              to={`/profile/${user?.id}`}
              className="flex cursor-pointer items-center"
              onClick={() => {}}
            >
              <div className="hidden md:block">My Movies &nbsp;</div>
              <div className="flex size-[30px] items-center justify-center rounded-full border-2 border-white bg-blue-300 dark:bg-red-300">
                <User />
              </div>
            </Link>
          )}

          <div className="flex w-full items-center justify-center text-white md:hidden">
            <Search />
          </div>
        </div>
      </div>

      <div>
        <SideMenu />
      </div>
    </>
  );
};

export default NavBar;
