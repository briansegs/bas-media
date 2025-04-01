import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useGetGenresQuery } from "@/services/TMDB";
import React, { ReactNode } from "react";
import { Link } from "react-router";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

interface SbGroupProps {
  title: string;
  children: ReactNode;
}

interface MenuItemProps {
  label?: string;
  value?: string;
  name?: string;
}

const SbGroup: React.FC<SbGroupProps> = ({ title, children }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{children}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ name, label, value }) => (
  <SidebarMenuItem key={name ? name : value}>
    <SidebarMenuButton asChild size="lg" className="gap-4" onClick={() => {}}>
      <Link to="/">
        <img
          src="/assets/logo_light.webp"
          alt={`${name ? name : label} icon`}
          height={30}
          width={30}
          className="dark:invert"
        />
        <span className="text-lg">{name ? name : label}</span>
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

const SidebarGroups: React.FC = () => {
  const { data, error, isFetching, isLoading } = useGetGenresQuery();
  const genres = data?.genres;

  if (error) return "Error";

  if (isLoading || isFetching) return "Loading...";

  return (
    <>
      {categories && (
        <SbGroup title="Categories">
          {categories.map(({ label, value }) => (
            <MenuItem label={label} value={value} />
          ))}
        </SbGroup>
      )}

      <SidebarSeparator />

      {genres && (
        <SbGroup title="Genres">
          {genres.map(({ name }) => (
            <MenuItem name={name} />
          ))}
        </SbGroup>
      )}
    </>
  );
};

export default SidebarGroups;
