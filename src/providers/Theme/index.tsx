import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { themeIsValid, type Theme, type ThemeContextType } from "./types";

import {
  defaultTheme,
  getImplicitPreference,
  themeLocalStorageKey,
} from "./shared";

import { canUseDOM } from "@/lib/utils";

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
};

const ThemeContext = createContext(initialContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme | undefined>(
    canUseDOM
      ? (document.documentElement.getAttribute("data-theme") as Theme)
      : undefined,
  );

  console.log(canUseDOM);

  const setTheme = useCallback((themeToSet: Theme | null) => {
    if (themeToSet === null) {
      window.localStorage.removeItem(themeLocalStorageKey);
      const implicitPreference = getImplicitPreference();
      document.documentElement.setAttribute(
        "data-theme",
        implicitPreference || "",
      );
      if (implicitPreference) setThemeState(implicitPreference);
    } else {
      setThemeState(themeToSet);
      window.localStorage.setItem(themeLocalStorageKey, themeToSet);
      document.documentElement.setAttribute("data-theme", themeToSet);
    }
  }, []);

  useEffect(() => {
    let themeToSet: Theme = defaultTheme;
    const preference = window.localStorage.getItem(themeLocalStorageKey);

    if (themeIsValid(preference)) {
      themeToSet = preference;
    } else {
      const implicitPreference = getImplicitPreference();

      if (implicitPreference) {
        themeToSet = implicitPreference;
      }
    }

    document.documentElement.setAttribute("data-theme", themeToSet);
    setThemeState(themeToSet);
  }, []);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
