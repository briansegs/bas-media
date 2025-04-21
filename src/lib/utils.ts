import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get("/authentication/token/new");

    const token = data.request_token;

    if (data.success) {
      localStorage.setItem("request_token", token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log("Sorry, your token could not be created.", error);
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem("request_token");

  if (token) {
    try {
      const {
        data: { session_id },
      } = await moviesApi.post("/authentication/session/new", {
        request_token: token,
      });

      localStorage.setItem("session_id", session_id);

      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
};

export const logout = () => {
  const userItems = ["request_token", "session_id", "accountId"];

  userItems.map((userItem) => localStorage.removeItem(userItem));

  window.location.href = "/";
};
