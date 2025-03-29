import { useTheme } from "@/providers/Theme";
import React from "react";
import { Link } from "react-router";

const Logo: React.FC = () => {
  const { theme } = useTheme();

  const lightLogo = "/assets/logo_light.png";
  const darkLogo = "/assets/logo_dark.png";
  return (
    <div className="flex h-16 items-center justify-center">
      <Link to="/" className="flex items-center">
        <img
          src={theme === "light" ? lightLogo : darkLogo}
          height={60}
          width={60}
          alt="BAS Media Logo"
        />

        <div className="flex text-4xl font-bold text-black dark:text-red-500">
          BAS
        </div>
      </Link>
    </div>
  );
};

export default Logo;
