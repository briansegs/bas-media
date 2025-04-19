import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GenreOrCategoryState {
  genreIdOrCategoryName: string | number | null;
  page: number;
  searchQuery?: string;
  language?: string;
}

const initialState: GenreOrCategoryState = {
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
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
