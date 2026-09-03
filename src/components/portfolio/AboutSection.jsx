import Section from "../layout/Section";

const technicalPillars = [
  {
    icon: "🎮",
    tag: "01 // UNITY 3D & CUSTOM EDITOR TOOLS",
    title: "Gameplay Programming & Editor Scripting",
    description:
      "Engineered tactile knife-flipping physics, block balance simulations, and custom Unity Editor tools (modular SDK bridge tool for one-click store switching and 3D level object scattering tools).",
    tech: ["Unity 3D", "C#", "Editor Scripting", "Multi-SDK Tools", "3D Physics"],
  },
  {
    icon: "👨‍🍳",
    tag: "02 // 3D SIMULATION & AI SYSTEMS",
    title: "Customer AI, Progression & Economy Balancing",
    description:
      "Owned Chef Tycoon (Gamezop's flagship 3D simulation title). Engineered customer AI systems, kitchen queues, and live economy balancing with real-time WebSocket and REST API synchronization.",
    tech: ["Customer AI", "Cocos3D", "Economy Balancing", "WebSockets", "LiveOps"],
  },
  {
    icon: "🥽",
    tag: "03 // XR SIMULATION & SPATIAL INTERACTION",
    title: "Oculus Quest VR & ARCore Applications",
    description:
      "Developed Unity-based VR training simulations for Oculus Quest (interactive PID controller, pressure understanding, fire safety). Built mobile AR titles with phone-as-lighter interaction.",
    tech: ["Oculus Quest", "Unity XR", "PID Controller", "ARCore", "VFX"],
  },
  {
    icon: "🌐",
    tag: "04 // SCALE ARCHITECTURE & LIVEOPS",
    title: "Analytics Balancing, Service Workers & SDKs",
    description:
      "Implemented analytics-driven live ops increasing playtime by 56% and reducing churn by 25%. Architected reusable service-worker caching for 200+ games and published Android AdTech mediation SDKs.",
    tech: ["LiveOps (+56% Playtime)", "Service Workers (200+ Games)", "Android SDK", "Maven Central"],
  },
];

const careerStats = [
  { metric: "1.3B+", icon: "⭐", label: "Verified Plays" },
  { metric: "45M+", icon: "👥", label: "Monthly Users" },
  { metric: "500+", icon: "🛠️", label: "Bugs Resolved" },
  { metric: "+56%", icon: "⚡", label: "Avg Playtime" },
];

export default function AboutSection({ credentials }) {
  const { education, certifications, languages } = credentials ?? {};

  return (
    <Section
      description="Connecting engaging player feel with robust systems, AI behaviors, custom developer tooling, and enterprise distribution."
      id="about"
      title="Engineering Philosophy &amp; Background 🕹️"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* Left Side: Summary & Career Impact */}
        <div className="space-y-6">
          <div className="panel-surface rounded-3xl p-6 sm:p-8 shadow-cardElevated">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-gaming text-xs font-black uppercase tracking-wider text-amber-700">
                PROFILE &amp; BACKGROUND
              </span>
            </div>
            
            <p className="text-base leading-relaxed text-slate-800 sm:text-lg">
              Over the past <span className="font-bold text-slate-950">5 years</span>, I have specialized as a Game Developer and Systems Engineer building games across <span className="font-bold text-slate-950">Unity, HTML5, Mobile, and XR platforms</span>. At <span className="font-bold text-slate-950">Gamezop</span>, I support an ecosystem of 300+ games reaching 45M+ monthly users and have owned flagship 3D titles and platform tooling.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              My engineering spans the full spectrum of production: from writing responsive player controls, AI customer systems, and 3D physics, to architecting service-worker cache rollouts supporting 200+ games, developing Android AdTech mediation SDKs published to Maven Central, and building custom Unity Editor tools that speed up level design and multi-store publishing.
            </p>

            {/* Quick Engine & Language Badges */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {[
                "Unity",
                "C#",
                "Cocos Creator",
                "Phaser",
                "Customer AI",
                "Editor Scripting",
                "LiveOps",
                "WebSockets",
                "Android SDK",
                "Oculus Quest",
              ].map((badge) => (
                <span
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-gaming text-xs font-bold text-amber-900"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Career Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {careerStats.map((stat) => (
              <div className="metric-card text-center" key={stat.label}>
                <span className="text-xl">{stat.icon}</span>
                <p className="mt-1 font-display text-2xl font-black text-amber-600 sm:text-3xl">
                  {stat.metric}
                </p>
                <p className="mt-1 font-gaming text-xs font-bold text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Education & Certifications & Languages Panel */}
          {education && (
            <div className="panel-surface rounded-3xl p-6 sm:p-7 shadow-cardElevated">
              <div className="border-b border-slate-100 pb-3">
                <p className="font-gaming text-xs font-black uppercase tracking-wider text-amber-700">
                  EDUCATION &amp; CREDENTIALS
                </p>
              </div>

              {/* Degree */}
              <div className="mt-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900">
                      {education.degree}
                    </h4>
                    <p className="font-gaming text-xs font-bold text-amber-700">
                      {education.institution}
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-gaming text-xs font-bold text-slate-600">
                    {education.period}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  {education.details}
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="font-gaming text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3">
                  Certifications &amp; Industry Programs
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {certifications?.map((cert) => (
                    <div
                      className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3"
                      key={cert.title}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-gaming text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                          {cert.tag}
                        </span>
                        <span className="font-gaming text-[10px] text-slate-400 font-semibold">
                          {cert.date}
                        </span>
                      </div>
                      <p className="mt-1.5 font-display text-xs font-bold text-slate-900 leading-snug">
                        {cert.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500 font-medium">
                        {cert.organization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="font-gaming text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  Spoken Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages?.map((lang) => (
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-gaming"
                      key={lang.language}
                    >
                      <span className="font-bold text-slate-800">{lang.language}:</span>
                      <span className="text-slate-500">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: 4 Technical Pillars */}
        <div className="space-y-3">
          {technicalPillars.map((pillar) => (
            <div
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-cardLight transition-all duration-200 hover:border-amber-300 hover:shadow-cardElevated"
              key={pillar.tag}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-gaming text-xs font-bold uppercase text-amber-700">
                  {pillar.tag}
                </span>
                <span className="text-base">{pillar.icon}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {pillar.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {pillar.tech.map((t) => (
                  <span
                    className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 font-gaming text-[11px] text-slate-700 font-semibold"
                    key={t}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}