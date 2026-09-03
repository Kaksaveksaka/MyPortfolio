import { useState } from "react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import profileImage from "../../../Assets/profile.jpg";

const navItems = [
  { label: "Games", href: "#projects" },
  { label: "Spotlight", href: "#project-details" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Background", href: "#about" },
  { label: "References", href: "#references" },
  { label: "Connect", href: "#contact" },
];

export default function Header({ activeSection = "", scrollProgress = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  const scrollToHash = (href) => {
    if (!href?.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      window.location.hash = href;
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  const handleMobileNavigate = (event, href) => {
    event.preventDefault();
    setIsMenuOpen(false);

    window.setTimeout(() => {
      scrollToHash(href);
    }, 80);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 lg:px-8">
      <div
        className={`relative mx-auto max-w-7xl overflow-hidden border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-cardLight backdrop-blur-xl transition-all duration-200 dark:border-slate-800/90 dark:bg-slate-900/95 dark:shadow-[0_4px_25px_-4px_rgba(0,0,0,0.5)] rounded-2xl`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Avatar & Clean Developer Identity */}
          <a
            className="group flex items-center gap-3 shrink-0"
            href="#top"
            onClick={handleNavigate}
          >
            <div className="relative">
              <span className="relative inline-flex h-11 w-11 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-transform duration-200 group-hover:scale-105 dark:border-slate-700 dark:bg-slate-800">
                <img
                  alt="Shoaib Khan profile"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  src={profileImage}
                />
              </span>
            </div>

            <div>
              <p className="font-gaming text-sm font-black tracking-tight text-slate-900 group-hover:text-amber-600 dark:text-slate-100 dark:group-hover:text-amber-400 transition-colors">
                Shoaib Khan
              </p>
              <p className="font-gaming text-xs font-bold text-slate-500 dark:text-slate-400">
                Game Developer · 5 Yrs Exp · 1.3B+ Plays
              </p>
            </div>
          </a>

          {/* Truly Centered Navigation */}
          <nav
            aria-label="Primary"
            className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-1.5 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace(/^#/, "");
              return (
                <a
                  className={`rounded-xl px-3.5 py-1.5 font-gaming text-xs font-bold transition-all active:scale-95 ${isActive
                      ? "bg-amber-500 text-slate-950 font-black shadow-sm dark:bg-amber-500 dark:text-slate-950"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    }`}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & Clean CTA Button */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Dark Mode Toggle */}
            <ThemeToggle />

            <div className="hidden sm:block">
              <Button
                href="#contact"
                variant="primary"
              >
                <span>Let's Connect</span>
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-4 rounded-full bg-current transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                  className={`h-0.5 w-4 rounded-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`h-0.5 w-4 rounded-full bg-current transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Reading / Scroll Progress Bar along header bottom */}
        <div className="absolute bottom-0 left-3 right-3 h-[2px] overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800/80">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen ? (
          <nav aria-label="Mobile" className="mt-3 grid gap-2 border-t border-slate-200 pt-3 dark:border-slate-800 lg:hidden">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace(/^#/, "");
              return (
                <a
                  className={`flex items-center justify-between rounded-xl border px-4 py-2.5 font-gaming text-sm font-bold transition ${isActive
                      ? "border-amber-400 bg-amber-50 text-amber-900 font-black dark:border-amber-500/50 dark:bg-amber-950/50 dark:text-amber-300"
                      : "border-slate-100 bg-slate-50 text-slate-800 hover:bg-amber-50 hover:text-amber-800 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-amber-400"
                    }`}
                  href={item.href}
                  key={item.label}
                  onClick={(event) => handleMobileNavigate(event, item.href)}
                >
                  <span>{item.label}</span>
                  <span className="text-amber-600 dark:text-amber-400">→</span>
                </a>
              );
            })}

            <Button
              className="mt-1 w-full"
              href="#contact"
              onClick={(event) => handleMobileNavigate(event, "#contact")}
              variant="primary"
            >
              Let's Connect
            </Button>
          </nav>
        ) : null}
      </div>
    </header>
  );
}



