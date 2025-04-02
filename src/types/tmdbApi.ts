import { ReactNode } from "react";

interface MovieListsPopularResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieListsPopularResponse {
  page: number;
  results: MovieListsPopularResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieListsPopularQueryParams {
  language?: string;
  page?: number;
  region?: string;
}

export interface SbGroupProps {
  title: string;
  children: ReactNode;
}

export interface MenuItemProps {
  label?: string;
  value?: string;
  name?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieListsGenresResponse {
  genres: Genre[];
}
