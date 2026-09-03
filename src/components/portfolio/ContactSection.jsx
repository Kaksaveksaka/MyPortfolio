import { useState } from "react";
import Section from "../layout/Section";
import { playClickSound, playHoverSound } from "../../utils/soundEffects";

function CopyIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChannelIcon({ type }) {
  if (type === "Email") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }
  if (type === "Phone") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect height="12" width="4" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection({ links }) {
  const [copiedLabel, setCopiedLabel] = useState(null);

  const handleCopy = (text, label) => {
    playClickSound();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(null), 2000);
    }
  };

  return (
    <Section
      description="Always open for game development roles, systems engineering, live product launches, and technical collaborations."
      id="contact"
      title="Let's Build Something Great Together 🚀"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* Left Side: Friendly Pitch */}
        <div className="panel-surface rounded-3xl p-6 sm:p-8 shadow-cardElevated">
          <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
            Ready to Level Up Your Next Game?
          </h3>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Whether you're developing high-scale casual titles, 3D mobile games in Unity/Cocos, or exploring XR training worlds, I'd love to connect. Reach out via email, phone, or LinkedIn.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 font-gaming text-xs font-bold text-slate-600 dark:text-slate-400">
            <span>Fast Response Guaranteed · Based in GMT+5:30 (Worldwide Remote)</span>
          </div>
        </div>

        {/* Right Side: Direct Channels */}
        <div className="space-y-3">
          {links.map((link) => {
            const isInteractive = Boolean(link.href);
            const isCopied = copiedLabel === link.label;

            return (
              <div
                className="group relative flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-cardLight transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-cardElevated dark:border-slate-800/90 dark:bg-slate-900/90 dark:hover:border-amber-500/50"
                key={link.label}
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                    <ChannelIcon type={link.label} />
                    <span className="font-gaming text-xs font-bold uppercase tracking-wider">
                      {link.label}
                    </span>
                  </div>

                  <a
                    className="mt-1 block font-gaming text-base font-bold text-slate-900 dark:text-slate-100 transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-400"
                    href={link.href}
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                    rel={isInteractive ? "noreferrer" : undefined}
                    target={isInteractive ? "_blank" : undefined}
                  >
                    {link.value}
                  </a>
                </div>

                {/* Copy Button with tactile press */}
                <button
                  aria-label={`Copy ${link.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900 active:scale-95 shadow-sm dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-amber-500/50 dark:hover:bg-slate-700 dark:hover:text-amber-300"
                  onClick={() => handleCopy(link.value, link.label)}
                  title={`Copy ${link.value}`}
                  type="button"
                >
                  {isCopied ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

