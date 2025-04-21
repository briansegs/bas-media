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
  id?: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieListsGenresResponse {
  genres: Genre[];
}

/**
 * Parameters for genre or category queries to the TMDB API
 * @property genreIdOrCategoryName - Genre ID (number) or category name (string) or null
 * @property page - Page number for paginated results
 * @property searchQuery - Optional search query string
 * @property language - Optional language code (e.g., 'en-US')
 */
export interface GenreOrCategory {
  genreIdOrCategoryName: string | number | null;
  page: number;
  searchQuery?: string;
  language?: string;
}

/**
 * TMDB Avatar structure representing the avatar path
 */
interface TmdbAvatar {
  avatar_path: string | null;
}

/**
 * Gravatar information structure from TMDB user data
 */
interface Gravatar {
  hash: string;
  tmdb: TmdbAvatar;
}

/**
 * User avatar structure containing gravatar information
 */
interface Avatar {
  gravatar: Gravatar;
}

/**
 * TMDB User account data structure
 */
export interface User {
  avatar: Avatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export interface AuthSlice {
  user: User | null;
  isAuthenticated: boolean;
  sessionId: string | null;
}
