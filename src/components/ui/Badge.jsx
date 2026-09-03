export default function Badge({ children, variant = "amber", className = "" }) {
  const colorStyles = {
    amber: "border-amber-300/80 bg-amber-50 text-amber-900",
    yellow: "border-amber-300/80 bg-amber-50 text-amber-900",
    cobalt: "border-blue-200 bg-blue-50 text-blue-800",
    cyan: "border-sky-200 bg-sky-50 text-sky-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    lime: "border-emerald-200 bg-emerald-50 text-emerald-800",
    coral: "border-orange-200 bg-orange-50 text-orange-800",
    pink: "border-rose-200 bg-rose-50 text-rose-800",
    purple: "border-purple-200 bg-purple-50 text-purple-800",
    muted: "border-slate-200 bg-slate-100 text-slate-700",
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

