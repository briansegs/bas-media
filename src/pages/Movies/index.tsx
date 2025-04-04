import StatusCard from "@/components/StatusCard";
import { useGetMoviesQuery } from "@/services/TMDB";
import React from "react";
import MovieList from "./MovieList";

const Movies: React.FC = () => {
  const { data, error, isLoading, isFetching } = useGetMoviesQuery();

  if (error)
    return (
      <div className="mt-5 flex items-center justify-center">
        <StatusCard
          isError
          title="An error occurred while loading content."
          description="Please try again later."
        />
      </div>
    );

  if (isLoading || isFetching)
    return (
      <div className="mt-5 flex items-center justify-center">
        <StatusCard title="Loading content..." />
      </div>
    );

  if (!data?.results.length) {
    return (
      <div className="mt-5 flex items-center justify-center">
        <StatusCard
          title="No content that matches that name."
          description="Please search for something else."
        />
      </div>
    );
  }

  return <MovieList movies={data} />;
};

export default Movies;
