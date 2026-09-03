import { playClickSound, playHoverSound } from "../../utils/soundEffects";

export default function BackToTopButton({ isVisible, progress = 0 }) {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", " ");
  };

  // SVG Circle stroke dash calculations (radius 18)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-700 shadow-cardElevated backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-600 active:scale-95 dark:border-slate-800/90 dark:bg-slate-900/95 dark:text-slate-300 dark:hover:border-amber-500/50 dark:hover:text-amber-400 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
      onMouseEnter={playHoverSound}
      title="Back to top"
      type="button"
    >
      {/* Subtle Progress Ring */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -rotate-90 text-amber-500/25 dark:text-amber-400/20"
        height="48"
        viewBox="0 0 48 48"
        width="48"
      >
        <circle
          cx="24"
          cy="24"
          fill="none"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle
          className="text-amber-600 dark:text-amber-400 transition-[stroke-dashoffset] duration-150"
          cx="24"
          cy="24"
          fill="none"
          r={radius}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </svg>

      {/* Up Arrow Icon */}
      <svg
        aria-hidden="true"
        className="relative z-10 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
