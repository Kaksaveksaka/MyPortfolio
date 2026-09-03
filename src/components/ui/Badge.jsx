export default function Badge({ children, variant = "amber", className = "" }) {
  const colorStyles = {
    amber: "border-amber-300/80 bg-amber-50 text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/40 dark:text-amber-300",
    yellow: "border-amber-300/80 bg-amber-50 text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/40 dark:text-amber-300",
    cobalt: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-500/40 dark:bg-blue-950/40 dark:text-blue-300",
    cyan: "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-500/40 dark:bg-sky-950/40 dark:text-sky-300",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-300",
    lime: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-300",
    coral: "border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-500/40 dark:bg-orange-950/40 dark:text-orange-300",
    pink: "border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-500/40 dark:bg-rose-950/40 dark:text-rose-300",
    purple: "border-purple-200 bg-purple-50 text-purple-800 dark:border-purple-500/40 dark:bg-purple-950/40 dark:text-purple-300",
    muted: "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-0.5 font-gaming text-xs font-bold uppercase tracking-wider ${
        colorStyles[variant] || colorStyles.amber
      } ${className}`}
    >
      {children}
    </span>
  );
}

