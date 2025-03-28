import React, { useState } from "react";

import type { Theme } from "./types";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "..";
import { themeLocalStorageKey } from "./types";

const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme();
  const [value, setValue] = useState("");

  const onThemeChange = (themeToSet: Theme) => {
    setTheme(themeToSet);
    setValue(themeToSet);
  };

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey);
    setValue(preference ?? "light");
  }, []);

  return (
    <button
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
