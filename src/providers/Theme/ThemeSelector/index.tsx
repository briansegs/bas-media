import React, { useEffect, useState } from "react";

import { useTheme } from "..";
import { defaultTheme, themeLocalStorageKey } from "../shared";
import { themeIsValid, type Theme } from "../types";

import { Moon, Sun } from "lucide-react";

const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme();
  const [value, setValue] = useState<Theme>(defaultTheme);

  const onThemeChange = (themeToSet: Theme) => {
    setTheme(themeToSet);
    setValue(themeToSet);
  };

  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey);
    setValue(themeIsValid(preference) ? preference : defaultTheme);
  }, []);

  return (
    <button
      aria-label={`Switch to ${value === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${value === "light" ? "dark" : "light"} mode`}
      className="cursor-pointer"
      onClick={() => {
        const nextTheme = value === "light" ? "dark" : "light";
        onThemeChange(nextTheme);
      }}
    >
      {value === "light" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSelector;
