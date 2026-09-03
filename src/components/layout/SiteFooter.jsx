export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-100/80 px-4 py-8 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <p className="font-gaming text-sm font-bold text-slate-700 dark:text-slate-400">
            <span className="text-slate-900 dark:text-white">Shoaib Khan</span> — Game Developer 🎮 5 Years Exp · 1.3B+ Plays Shipped
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-gaming text-xs text-slate-600 dark:text-slate-400">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-bold text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            Unity · HTML5 · Mobile · XR · LiveOps &amp; Tooling
          </span>
          <span>© {currentYear} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

