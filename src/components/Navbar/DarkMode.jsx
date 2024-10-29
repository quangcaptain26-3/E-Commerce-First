import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light");

  const element = document.documentElement; //accessing the root element


  // useEffect hook to set the theme in local storage and add/remove the dark class
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
    element.classList.add("dark");
      element.classList.add("dark");
    } else {
    element.classList.remove("light");
      element.classList.remove("dark");
    }
    });

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="light mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />

      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="light mode"
        className={`w-12 cursor-pointer `}
      />
    </div>
  );
};

export default DarkMode;
