import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useTheme } from "@/providers/Theme";
import { Theme } from "@/providers/Theme/types";
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

type SbGrouptypes = {
  label: string;
  data: { label: string; value: string }[];
  theme: Theme | undefined | null;
};

const SbGroup = ({ label, data, theme }: SbGrouptypes) => (
  <SidebarGroup>
    <SidebarGroupLabel>{label}</SidebarGroupLabel>
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
                  src={
                    theme == "light"
                      ? "/assets/logo_light.png"
                      : "/assets/logo_dark.png"
                  }
                  alt=""
                  height={30}
                  width={30}
                  className=""
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
  const { theme } = useTheme();

  return (
    <>
      <SbGroup label="Categories" data={categories} theme={theme} />

      <SidebarSeparator />

      <SbGroup label="Genres" data={demoCategories} theme={theme} />
    </>
  );
};

export default SidebarGroups;
