import { useState } from "react";
import Button from "../ui/Button";
import profileImage from "../../../Assets/profile.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Play", href: "#project-details" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl border border-white/8 bg-night/80 px-5 py-3 shadow-glow backdrop-blur-xl ${
          isMenuOpen ? "rounded-[2rem]" : "rounded-full"
        } md:rounded-full`}
      >
        <div className="flex items-center justify-between gap-4">
          <a className="group flex items-center gap-3" href="#top" onClick={handleNavigate}>
            <span className="relative z-10 inline-flex h-10 w-10 overflow-hidden rounded-full border border-cyan/35 bg-cyan/10 shadow-glow transition duration-300 ease-out group-hover:translate-x-8 group-hover:translate-y-16 group-hover:scale-[5] group-hover:border-cyan/60 group-hover:shadow-[0_0_28px_rgba(101,230,255,0.35)]">
              <img
                alt="Shoaib Khan profile"
                className="h-full w-full object-cover object-top transition duration-300 ease-out group-hover:scale-115"
                loading="eager"
                src={profileImage}
              />
            </span>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Shoaib Khan
              </p>
              <p className="text-xs text-muted">Game Developer</p>
            </div>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                className="text-sm font-medium text-muted transition hover:text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="secondary">
              Start a Conversation
            </Button>
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan/40 hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </div>

        {isMenuOpen ? (
          <nav aria-label="Mobile" className="mt-4 grid gap-3 border-t border-white/8 pt-4 md:hidden">
            {navItems.map((item) => (
              <a
                className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium text-mist transition hover:border-cyan/40 hover:bg-cyan/10"
                href={item.href}
                key={item.label}
                onClick={(event) => handleMobileNavigate(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full"
              href="#contact"
              onClick={(event) => handleMobileNavigate(event, "#contact")}
              variant="secondary"
            >
              Start a Conversation
            </Button>
          </nav>
        ) : null}
      </div>
    </header>
  );
}