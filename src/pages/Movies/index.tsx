import { useGetMoviesQuery } from "@/services/TMDB";
import React from "react";
import MovieList from "./MovieList";

const Movies: React.FC = () => {
  const { data, error, isLoading, isFetching } = useGetMoviesQuery();

  if (error) return "Oh no, there was an error!";

  if (isLoading || isFetching) return "Loading...";

  if (!data?.results.length) {
    return (
      <div className="mt-5 flex items-center justify-center">
        <h4>
          No movies that match that name.
          <br />
          Please search for something else.
        </h4>
      </div>
    );
  }

  return <MovieList movies={data} />;
};

export default Movies;
