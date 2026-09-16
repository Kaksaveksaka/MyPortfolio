import { useState } from "react";
import Section from "../layout/Section";
import { playClickSound, playHoverSound } from "../../utils/soundEffects";

export default function ExperienceSection({ experiences }) {
  const [activeExpId, setActiveExpId] = useState(experiences[0]?.id ?? "gamezop");

  return (
    <Section
      description="5 years of engineering production games, real-time architectures, live operations, custom Unity tooling, and multi-platform publishing."
      id="experience"
      title="Professional Experience &amp; Impact 🚀"
    >
      {/* Experience Timeline Tabs / Navigation for quick switching */}
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">
        {/* Left Column: Role Selector Cards */}
        <div className="space-y-3">
          {experiences.map((exp) => {
            const isActive = exp.id === activeExpId;

            return (
              <button
                aria-expanded={isActive}
                aria-controls={`experience-${exp.id}`}
                className={`group w-full rounded-2xl border p-5 text-left transition-all duration-200 ${
                  isActive
                    ? "border-amber-500 bg-white dark:bg-slate-900 shadow-cardElevated ring-1 ring-amber-500/20"
                    : "border-slate-200/90 bg-white/70 hover:border-slate-300 hover:bg-white hover:shadow-cardLight dark:border-slate-800/90 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-800/80"
                }`}
                key={exp.id}
                onClick={() => {
                  playClickSound();
                  setActiveExpId(exp.id);
                }}
                onMouseEnter={playHoverSound}
                type="button"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`eyebrow-chip text-[11px] ${isActive ? "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-600/40" : ""}`}>
                    {exp.period}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-gaming text-[11px] font-bold text-slate-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
                    {exp.badge}
                  </span>
                </div>

                <div className="mt-3">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-gaming text-xs font-bold text-amber-700 dark:text-amber-400">
                    {exp.company}
                  </p>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                  {exp.summary}
                </p>

                {/* Quick Key Metrics in button */}
                <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {exp.metrics.slice(0, 2).map((m) => (
                    <span
                      className="inline-flex items-center gap-1 font-gaming text-[11px] font-bold text-slate-700 dark:text-slate-300"
                      key={m.label}
                    >
                      <span className="text-amber-600 dark:text-amber-400 font-extrabold">{m.value}</span>
                      <span className="text-slate-400 font-normal">{m.label}</span>
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Experience Dossier */}
        {experiences.map((currentExp) => {

          return (
            <div key={currentExp.id} id={`experience-${currentExp.id}`} hidden={currentExp.id !== activeExpId} className="experience-panel panel-surface rounded-3xl p-6 sm:p-8 shadow-cardElevated">
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-0.5 font-gaming text-xs font-bold text-amber-900 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-300">
                      {currentExp.type}
                    </span>
                    <span className="font-gaming text-xs font-bold text-slate-500 dark:text-slate-400">
                      {currentExp.period}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                    {currentExp.role}
                  </h3>
                  <p className="font-gaming text-sm font-bold text-amber-700 dark:text-amber-400 sm:text-base">
                    @ {currentExp.company}
                  </p>
                </div>

                {/* Highlight Badges */}
                <span className="rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-1.5 font-gaming text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
                  {currentExp.badge}
                </span>
              </div>

              {/* Key Quantitative Metrics Grid */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {currentExp.metrics.map((metric) => (
                  <div className="metric-card p-3 text-center" key={metric.label}>
                    <p className="font-display text-xl font-black text-amber-600 dark:text-amber-400 sm:text-2xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-gaming text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Responsibilities & Achievements */}
              <div className="mt-6">
                <p className="font-gaming text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Key Responsibilities &amp; Shipped Achievements:
                </p>

                <ul className="space-y-2.5">
                  {currentExp.highlights.map((bullet, idx) => (
                    <li className="flex items-start gap-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:text-sm" key={idx}>
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack & Tools */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <p className="font-gaming text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  Technologies &amp; Domain Expertise
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentExp.stack.map((tech) => (
                    <span
                      className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 font-gaming text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
