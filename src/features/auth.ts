import { RootState } from "@/app/store";
import { AuthSlice as AuthSliceType, User as UserType } from "@/types/tmdbApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthSliceType = {
  user: null,
  isAuthenticated: false,
  sessionId: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_id");

      localStorage.setItem("accountId", action.payload.id.toString());
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUser, setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state: RootState) => state.user;
