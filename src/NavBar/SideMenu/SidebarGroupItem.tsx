import genreIcons from "@/assets/genres";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MenuItemProps, SbGroupProps } from "@/types/tmdbApi";
import React from "react";
import { Link } from "react-router";

export const SidebarMenuGroup: React.FC<SbGroupProps> = ({
  title,
  children,
}) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{children}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({ name, label, value }) => (
  <SidebarMenuItem key={name ? name : value}>
    <SidebarMenuButton asChild size="lg" className="gap-4" onClick={() => {}}>
      <Link to="/">
        <div className="size-[30px]">
          {name && genreIcons[name.toLowerCase()]}
          {value && genreIcons[value.toLowerCase()]}
        </div>
        <span className="text-lg">{name ? name : label}</span>
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
);
