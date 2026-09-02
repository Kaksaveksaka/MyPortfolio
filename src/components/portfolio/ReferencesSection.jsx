import Section from "../layout/Section";

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="h-3 w-3 shrink-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="15 3 21 3 21 9" />
      <line strokeLinecap="round" strokeLinejoin="round" x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

export default function ReferencesSection({ items }) {
  return (
    <Section
      description="Direct links to official Gamezop Business distribution listings and verified metrics."
      eyebrow="Verification"
      id="references"
      title="References"
    >
      <div className="panel-surface relative overflow-x-auto p-3 sm:px-6 sm:py-3.5">
        <div className="flex min-w-max items-center justify-between gap-4 lg:min-w-0">
          {/* Label indicator */}
          <div className="flex items-center gap-2.5 shrink-0 pr-2 border-r border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_rgba(101,230,255,0.9)]" />
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-cyan/90">
              Gamezop Business
            </span>
          </div>

          {/* All 4 References in a single sleek line */}
          <div className="flex flex-1 items-center justify-around gap-3 sm:gap-4">
            {items.map((item, index) => (
              <div className="flex items-center gap-3 sm:gap-4" key={item.id}>
                {index > 0 && <span className="text-white/20 select-none">·</span>}

                <a
                  className="group flex items-center gap-2 rounded-xl px-2.5 py-1.5 transition hover:bg-white/[0.06]"
                  href={item.businessUrl}
                  rel="noreferrer"
                  target="_blank"
                  title={`View ${item.title} on Gamezop Business (${item.verifiedPlays})`}
                >
                  <span className="font-display text-sm font-medium text-white transition group-hover:text-cyan">
                    {item.title}
                  </span>

                  <span className="rounded-full border border-lime/30 bg-lime/10 px-2 py-0.5 font-display text-[11px] font-bold text-lime">
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
