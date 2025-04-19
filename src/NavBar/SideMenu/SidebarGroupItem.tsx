import genreIcons from "@/assets/genres";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { selectGenreOrCategory } from "@/currentGenreOrCategory";
import { MenuItemProps, SbGroupProps } from "@/types/tmdbApi";
import React from "react";
import { FaSquare } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

const fallbackIcon = <FaSquare className="size-[30px]" />;

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

export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  label,
  value,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        size="lg"
        className="gap-4"
        onClick={() => dispatch(selectGenreOrCategory(value ? value : id))}
      >
        <Link to="/">
          <div className="size-[30px]">
            {name
              ? genreIcons[name.toLowerCase()] || fallbackIcon
              : value
                ? genreIcons[value.toLowerCase()] || fallbackIcon
                : fallbackIcon}
          </div>
          <span className="text-lg">{name ? name : label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
