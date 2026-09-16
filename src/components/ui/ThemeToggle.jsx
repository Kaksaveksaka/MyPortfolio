import { playClickSound, playHoverSound } from "../../utils/soundEffects";
import { useTheme } from "../../utils/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { isDark, suggestDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    playClickSound();
    toggleTheme();
  };

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition-all duration-200 hover:border-amber-400 hover:bg-white hover:text-amber-600 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-amber-500/50 dark:hover:bg-slate-800 dark:hover:text-amber-400 ${className}`}
      data-system-dark={suggestDark || undefined}
      onClick={handleToggle}
      onMouseEnter={playHoverSound}
      title={isDark ? "Switch to light mode" : suggestDark ? "Your system uses dark mode. Switch to dark mode" : "Switch to dark mode"}
      type="button"
    >
      <div className="relative h-5 w-5">
        {/* Sun Icon (shown in dark mode to switch to light) */}
        <svg
          className={`absolute inset-0 h-5 w-5 transform transition-all duration-300 ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-amber-400"
              : "-rotate-90 scale-0 opacity-0 text-slate-700"
          }`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" x2="12" y1="1" y2="3" />
          <line x1="12" x2="12" y1="21" y2="23" />
          <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
          <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
          <line x1="1" x2="3" y1="12" y2="12" />
          <line x1="21" x2="23" y1="12" y2="12" />
          <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
          <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
        </svg>

        {/* Moon Icon (shown in light mode to switch to dark) */}
        <svg
          className={`absolute inset-0 h-5 w-5 transform transition-all duration-300 ${
            isDark
              ? "rotate-90 scale-0 opacity-0 text-amber-400"
              : "rotate-0 scale-100 opacity-100 text-slate-700 group-hover:text-amber-600"
          }`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  );
}
