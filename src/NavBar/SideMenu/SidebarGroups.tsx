import StatusCard from "@/components/StatusCard";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { useGetGenresQuery } from "@/services/TMDB";
import React from "react";
import { MenuItem, SidebarMenuGroup } from "./SidebarGroupItem";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const SidebarGroups: React.FC = () => {
  const { data, error, isFetching, isLoading } = useGetGenresQuery();
  const genres = data?.genres;

  if (error)
    return (
      <div className="mx-2.5 mt-5 flex items-center justify-center">
        <StatusCard
          isError
          title="An error occurred while loading content."
          description="Please try again later."
        />
      </div>
    );

  if (isLoading || isFetching)
    return (
      <div className="mx-2.5 mt-5 flex items-center justify-center">
        <StatusCard title="Loading content..." />
      </div>
    );

  if (!genres?.length) {
    return (
      <div className="mx-2.5 mt-5 flex items-center justify-center">
        <StatusCard
          isError
          title="Genres list is missing."
          description="Please contact an admin."
        />
      </div>
    );
  }
  return (
    <>
      {categories && (
        <SidebarMenuGroup title="Categories">
          {categories.map(({ label, value }) => (
            <MenuItem key={label} label={label} value={value} />
          ))}
        </SidebarMenuGroup>
      )}

      <SidebarSeparator />

      {genres && (
        <SidebarMenuGroup title="Genres">
          {genres.map(({ name, id }) => (
            <MenuItem key={name} name={name} id={id} />
          ))}
        </SidebarMenuGroup>
      )}
    </>
  );
};

export default SidebarGroups;
