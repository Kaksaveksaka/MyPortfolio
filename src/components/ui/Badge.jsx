export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan/90">
      {children}
    </span>
  );
}