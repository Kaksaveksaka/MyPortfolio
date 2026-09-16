import { useEffect, useState } from "react";

// Ignore preferences that older versions automatically saved from the system.
const THEME_KEY = "shoaib_portfolio_theme_v2";
export function getInitialTheme() {
  try { return window.localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light"; }
  catch { return "light"; }
}
export function useTheme() {
  const [theme, setTheme] = useState("light");
  const [prefersDark, setPrefersDark] = useState(false);
  const [ready, setReady] = useState(false);
  const [suggestionDismissed, setSuggestionDismissed] = useState(false);
  const suggestDark = ready && prefersDark && theme === "light" && !suggestionDismissed;

  useEffect(() => {
    if (!suggestDark) return;
    const timer = window.setTimeout(() => setSuggestionDismissed(true), 3000);
    return () => window.clearTimeout(timer);
  }, [suggestDark]);
  useEffect(() => {
    setTheme(getInitialTheme());
    setReady(true);
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) return;
    const update = () => setPrefersDark(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#0b1120" : "#f8fafc",
    );
  }, [theme, ready]);
  const toggleTheme = () => {
    setSuggestionDismissed(true);
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { window.localStorage.setItem(THEME_KEY, next); }
    catch { /* Theme selection still works without browser storage. */ }
  };
  return { theme, isDark: theme === "dark", suggestDark, toggleTheme };
}
