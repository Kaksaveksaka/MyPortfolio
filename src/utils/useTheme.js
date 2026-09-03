import { useEffect, useState } from "react";

const THEME_KEY = "shoaib_portfolio_theme";

export function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  // System preference
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", "#0b1120");
      }
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", "#f8fafc");
      }
    }

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore localStorage errors in private browsing
    }
  }, [theme]);

  // Listen for system theme changes if user hasn't explicitly set a preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    isDark: theme === "dark",
    setTheme,
    toggleTheme,
  };
}
