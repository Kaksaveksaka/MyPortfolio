import { useState } from "react";
import Section from "../layout/Section";
import { playClickSound, playHoverSound } from "../../utils/soundEffects";

export default function TechnicalHighlightsSection({ highlights, skillsCategories }) {
  const [activeTab, setActiveTab] = useState("skills"); // 'skills' | 'architecture'

  return (
    <Section
      description="Categorized technical competencies, Unity tooling, live operations, and distributed architecture refined across 5 years of production game engineering."
      id="skills"
      title="Technical Skills &amp; Systems Architecture ⚡"
    >
      {/* View Switcher Tabs */}
      <div className="mb-8 flex items-center justify-center">
        <div className="inline-flex rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
          <button
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-gaming text-xs font-black uppercase tracking-wider transition-all duration-200 ${
              activeTab === "skills"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
            }`}
            onClick={() => {
              playClickSound();
              setActiveTab("skills");
            }}
            onMouseEnter={playHoverSound}
            type="button"
          >
            <span>🛠️ Skills Matrix (8 Domains)</span>
          </button>

          <button
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-gaming text-xs font-black uppercase tracking-wider transition-all duration-200 ${
              activeTab === "architecture"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
            }`}
            onClick={() => {
              playClickSound();
              setActiveTab("architecture");
            }}
            onMouseEnter={playHoverSound}
            type="button"
          >
            <span>📐 Systems &amp; Architecture Deep Dives</span>
          </button>
        </div>
      </div>

      {/* Tab 1: 8 Skills Matrix Categories from Resume */}
      {activeTab === "skills" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillsCategories?.map((cat) => (
            <article
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 shadow-cardLight transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-cardElevated dark:border-slate-800/90 dark:bg-slate-900/90 dark:hover:border-amber-500/50"
              key={cat.category}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="font-gaming text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60 dark:text-amber-400 dark:bg-amber-950/40 dark:border-amber-500/30">
                    {cat.skills.length} Skills
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {cat.category}
                </h3>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                {cat.skills.map((skill) => (
                  <span
                    className="rounded-full bg-slate-50 border border-slate-200/80 px-2.5 py-1 font-gaming text-[11px] font-semibold text-slate-700 group-hover:border-amber-200 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:group-hover:border-amber-500/30"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Tab 2: Architecture Deep Dives */}
      {activeTab === "architecture" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights?.map((item) => (
            <article
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 shadow-cardLight transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-cardElevated dark:border-slate-800/90 dark:bg-slate-900/90 dark:hover:border-amber-500/50"
              key={item.title}
            >
              <div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <div className="mt-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 px-2.5 py-1 dark:bg-amber-950/40 dark:border-amber-500/30">
                  <p className="font-gaming text-[11px] font-bold text-amber-900 dark:text-amber-300">
                    {item.tools}
                  </p>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}