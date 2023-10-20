import { useState, useEffect } from "react";

const themes = {
  dark: "light",
  light: "dark",
};

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = themes[theme];
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, []);

  return { theme, toggleTheme };
}
