import {
  Sidebar,
  SidebarHeader,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

import React, { useEffect, useState } from "react";
import { Link } from "react-router";

type Sides = "left" | "right";

const defaultSide = "left";

export const SideMenu: React.FC = () => {
  const { isMobile, setOpen } = useSidebar();
  const [sideBarSide, setSideBarside] = useState<Sides>(defaultSide);

  useEffect(() => {
    if (!isMobile) {
      setOpen(true);
      setSideBarside("left");
    } else {
      setSideBarside("right");
    }
  }, [isMobile, setOpen]);
  return (
    <Sidebar side={sideBarSide}>
      <SidebarHeader>
        <div className="flex h-16 items-center justify-center">
          <Link to="/" className="flex items-center">
            <img
              src="/public/assets/logo_light.png"
              height={60}
              width={60}
              alt="Logo"
              className="dark:hidden"
            />

            <img
              src="/public/assets/logo_dark.png"
              height={60}
              width={60}
              alt="Logo"
              className="hidden dark:block"
            />

            <div className="flex text-4xl font-bold text-black dark:text-red-500">
              BAS
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
    </Sidebar>
  );
};

export const SideMenuTrigger: React.FC = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      className="cursor-pointer md:hidden"
      onClick={toggleSidebar}
    >
      <Menu className="size-[30px]" />
    </button>
  );
};
