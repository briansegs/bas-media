import React, { useState } from "react";

import type { Theme } from "./types";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "..";
import { defaultTheme, themeLocalStorageKey } from "./types";

const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme();
  const [value, setValue] = useState<Theme>(defaultTheme);

  const onThemeChange = (themeToSet: Theme) => {
    setTheme(themeToSet);
    setValue(themeToSet);
  };

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey);
    setValue((preference as Theme) ?? defaultTheme);
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
