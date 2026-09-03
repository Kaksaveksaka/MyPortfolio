import Section from "../layout/Section";
import { playHoverSound } from "../../utils/soundEffects";

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5 opacity-75 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="15 3 21 3 21 9" />
      <line strokeLinecap="round" strokeLinejoin="round" x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

export default function ReferencesSection({ items }) {
  return (
    <Section
      description="Direct links to official Gamezop Business distribution listings and verified play volume."
      id="references"
      title="References &amp; Official Distribution 🏆"
    >
      <div className="panel-surface rounded-3xl overflow-x-auto p-4 sm:px-6 sm:py-5 shadow-cardLight">
        <div className="flex min-w-max items-center justify-between gap-4 lg:min-w-0">
          {/* Label indicator */}
          <div className="flex items-center gap-2.5 shrink-0 pr-4 border-r border-slate-200">
            <span className="text-xl">🏆</span>
            <div>
              <p className="font-gaming text-xs font-black uppercase text-amber-700">
                Gamezop Business
              </p>
              <p className="text-[10px] text-slate-500">Verified Distribution</p>
            </div>
          </div>

          {/* 4 References in a sleek line */}
          <div className="flex flex-1 items-center justify-around gap-3 sm:gap-4">
            {items.map((item, index) => (
              <div className="flex items-center gap-3 sm:gap-4" key={item.id}>
                {index > 0 && <span className="text-slate-300 select-none">·</span>}

                <a
                  className="group flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-slate-50 px-3.5 py-2 transition-all hover:border-amber-400 hover:bg-white hover:shadow-sm active:scale-95"
                  href={item.businessUrl}
                  onMouseEnter={playHoverSound}
                  rel="noreferrer"
                  target="_blank"
                  title={`View ${item.title} on Gamezop Business (${item.verifiedPlays})`}
                >
                  <span className="font-gaming text-xs font-bold text-slate-900 transition group-hover:text-amber-700">
                    {item.title}
                  </span>

                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-display text-xs font-black text-emerald-800">
                    {item.verifiedPlays}
                  </span>

                  <ExternalIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}



