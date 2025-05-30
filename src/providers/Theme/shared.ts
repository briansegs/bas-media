import { Theme } from "./types";

export const themeLocalStorageKey = "site-theme";

export const defaultTheme = "light";

export const getImplicitPreference = (): Theme | null => {
  const mediaQuery = "(prefers-color-scheme: dark)";
  const mql = window.matchMedia(mediaQuery);
  const hasImplicitPreference = typeof mql.matches === "boolean";

  if (hasImplicitPreference) {
    return mql.matches ? "dark" : "light";
  }

  return null;
};
