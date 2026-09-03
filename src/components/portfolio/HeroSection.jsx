import Button from "../ui/Button";

const heroMetrics = [
  { value: "1.3B+", icon: "⭐", label: "Verified Plays", sub: "Global distribution hits", color: "text-amber-600" },
  { value: "5 Yrs", icon: "🚀", label: "Experience", sub: "Unity, HTML5, Mobile & XR", color: "text-blue-600" },
  { value: "45M+", icon: "👥", label: "Monthly Users", sub: "Ecosystem of 300+ games", color: "text-emerald-600" },
  { value: "+56%", icon: "📈", label: "Playtime Growth", sub: "Analytics-driven LiveOps", color: "text-rose-600" },
];

const highlights = [
  {
    icon: "🎮",
    title: "Unity 3D & Custom Editor Tooling",
    detail: "Built modular Unity Editor SDK bridge tools for one-click store reconfiguration and 3D level object scattering.",
    badge: "Unity · C# · Editor Tools",
    color: "border-blue-200 bg-blue-50 text-blue-800",
  },
  {
    icon: "👨‍🍳",
    title: "Flagship 3D Chef Tycoon & AI",
    detail: "Owned 3D simulation game end-to-end: customer AI behaviors, real-time WebSocket state, and economy balancing.",
    badge: "Customer AI · LiveOps · 6.1M+",
    color: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    icon: "🌐",
    title: "Mass Scale Casual Hits & XR",
    detail: "Improved 1.2B+ hit Fruity Fiesta, 114M+ runner Rollout, and engineered Oculus Quest VR training modules.",
    badge: "1.2B+ Plays · Oculus Quest · PWA",
    color: "border-purple-200 bg-purple-50 text-purple-800",
  },
];

export default function HeroSection({ onViewProjects, onViewExperience }) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8" id="top">
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left Column: Title, Intro & Metrics */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-gaming font-bold text-amber-900 mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Game Dev &amp; Systems Engineering Roles</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              Crafting Games That <span className="text-amber-600">Bring Joy to Billions</span>
            </h1>

            <p className="mt-3 font-gaming text-base font-bold text-slate-800 sm:text-lg">
              Shoaib Khan — Game Developer &amp; Systems Engineer 🕹️
            </p>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
              Specializing in Unity, gameplay systems, and production game tooling with 5 years of experience building games across Unity, HTML5, Mobile, and XR platforms. Experienced in gameplay programming, AI systems, live operations, analytics-driven improvements, monetization, SDK integration, custom Unity Editor tooling, and multi-platform publishing.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                className="px-7 py-3 text-sm font-black shadow-sm"
                onClick={onViewProjects}
                variant="primary"
              >
                <span>Explore Shipped Games 🕹️</span>
              </Button>

              {onViewExperience && (
                <button
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-gaming text-sm font-bold text-slate-700 shadow-sm transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 active:scale-95"
                  onClick={onViewExperience}
                  type="button"
                >
                  <span>Work Experience &amp; Impact 💼</span>
                </button>
              )}
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroMetrics.map((metric) => (
              <div className="metric-card flex flex-col justify-between h-full p-3.5 sm:p-4" key={metric.label}>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base sm:text-lg shrink-0">{metric.icon}</span>
                    <p className={`font-display text-xl font-black ${metric.color} sm:text-2xl whitespace-nowrap tracking-tight`}>
                      {metric.value}
                    </p>
                  </div>
                  <p className="mt-2 font-gaming text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 leading-snug">
                    {metric.label}
                  </p>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Systems & Craft Dossier */}
        <div className="flex flex-col">
          <div className="panel-surface rounded-3xl p-6 sm:p-7 shadow-cardElevated flex flex-col justify-between h-full relative overflow-hidden">
            {/* Sleek Studio Top Gradient Bar & Corner Ambient Aura */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-indigo-500 opacity-80" />
            <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-br from-amber-200/40 via-orange-200/20 to-transparent blur-2xl" />
            <div>
              <div className="border-b border-slate-100 pb-3">
                <p className="font-gaming text-xs font-black uppercase tracking-wider text-amber-700">
                  PRODUCTION SYSTEMS &amp; SPECIALIZATIONS
                </p>
              </div>

              <div className="mt-4">
                <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                  Tactile Game Feel + Enterprise Scale
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Connecting physics systems and juicy player feedback with automated build pipelines, custom Unity Editor extensions, and backend WebSocket state sync.
                </p>
              </div>

              {/* Highlights List */}
              <div className="mt-5 space-y-3">
                {highlights.map((item) => (
                  <div
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3.5 transition-all duration-200 hover:border-amber-300 hover:bg-white hover:shadow-sm"
                    key={item.title}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-gaming text-sm font-bold text-slate-900">
                        {item.title}
                      </p>
                      <span className={`rounded-full border px-2.5 py-0.5 font-gaming text-[10px] font-bold uppercase ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-gaming text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Production Shipped &amp; Proven
              </span>
              <span>Based in New Delhi · Remote Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}