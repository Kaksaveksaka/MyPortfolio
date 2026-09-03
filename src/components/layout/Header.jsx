import { useState } from "react";
import Button from "../ui/Button";
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

export default function Header() {
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
        className={`relative mx-auto max-w-7xl border border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-cardLight backdrop-blur-xl transition-all duration-200 ${
          isMenuOpen ? "rounded-2xl" : "rounded-2xl"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Avatar & Clean Developer Identity */}
          <a
            className="group flex items-center gap-3 shrink-0"
            href="#top"
            onClick={handleNavigate}
          >
            <div className="relative">
              <span className="relative inline-flex h-11 w-11 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <img
                  alt="Shoaib Khan profile"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  src={profileImage}
                />
              </span>
            </div>

            <div>
              <p className="font-gaming text-sm font-black tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                Shoaib Khan
              </p>
              <p className="font-gaming text-xs font-bold text-slate-500">
                Game Developer · 5 Yrs Exp · 1.3B+ Plays
              </p>
            </div>
          </a>

          {/* Truly Centered Navigation */}
          <nav
            aria-label="Primary"
            className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-1.5 lg:flex"
          >
            {navItems.map((item) => (
              <a
                className="rounded-xl px-3.5 py-1.5 font-gaming text-xs font-bold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-950 active:scale-95"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean CTA Button */}
          <div className="flex items-center gap-2.5 shrink-0">
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-4 rounded-full bg-current transition-transform ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-4 rounded-full bg-current transition-opacity ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-4 rounded-full bg-current transition-transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen ? (
          <nav aria-label="Mobile" className="mt-3 grid gap-2 border-t border-slate-200 pt-3 lg:hidden">
            {navItems.map((item) => (
              <a
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 font-gaming text-sm font-bold text-slate-800 transition hover:bg-amber-50 hover:text-amber-800"
                href={item.href}
                key={item.label}
                onClick={(event) => handleMobileNavigate(event, item.href)}
              >
                <span>{item.label}</span>
                <span className="text-amber-600">→</span>
              </a>
            ))}

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


