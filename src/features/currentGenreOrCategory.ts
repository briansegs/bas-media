import { GenreOrCategory as GenreOrCategoryType } from "@/types/tmdbApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GenreOrCategoryType = {
  genreIdOrCategoryName: null,
  page: 1,
  searchQuery: "",
  language: "en-US",
};

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action: PayloadAction<string | number>) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
    },
    searchMovie: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
