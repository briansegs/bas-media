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
    setValue(preference ?? "auto");
  }, []);

  return (
    <button
      className="cursor-pointer"
      onClick={() => onThemeChange(value === "light" ? "dark" : "light")}
    >
      {value === "light" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSelector;
