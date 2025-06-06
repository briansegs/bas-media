import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

import { Menu } from "lucide-react";

import React, { useEffect, useState } from "react";

import Logo from "./Logo";
import SidebarGroups from "./SidebarGroups";

type Sides = "left" | "right";

const defaultSide = "left";

const SideMenu: React.FC = () => {
  const { isMobile, setOpen } = useSidebar();
  const [sidebarSide, setSidebarside] = useState<Sides>(defaultSide);

  useEffect(() => {
    if (!isMobile) {
      setOpen(true);
      setSidebarside("left");
    } else {
      setSidebarside("right");
    }
  }, [isMobile, setOpen]);
  return (
    <Sidebar side={sidebarSide}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroups />
      </SidebarContent>
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

export default SideMenu;
