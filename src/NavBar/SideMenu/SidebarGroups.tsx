import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import React from "react";
import { Link } from "react-router";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

interface SbGroupProps {
  title: string;
  data: { label: string; value: string }[];
}

const SbGroup = ({ title, data }: SbGroupProps) => (
  <SidebarGroup>
    <SidebarGroupLabel>{title}</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {data.map(({ label, value }) => (
          <SidebarMenuItem key={value}>
            <SidebarMenuButton
              asChild
              size="lg"
              className="gap-4"
              onClick={() => {}}
            >
              <Link to="/">
                <img
                  src="/assets/logo_light.png"
                  alt={`${label} icon`}
                  height={30}
                  width={30}
                  className="dark:invert"
                />
                <span className="text-lg">{label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

const SidebarGroups: React.FC = () => {
  return (
    <>
      <SbGroup title="Categories" data={categories} />

      <SidebarSeparator />

      <SbGroup title="Genres" data={demoCategories} />
    </>
  );
};

export default SidebarGroups;
