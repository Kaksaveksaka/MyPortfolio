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
        <div className="inline-flex rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-sm">
          <button
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-gaming text-xs font-black uppercase tracking-wider transition-all duration-200 ${
              activeTab === "skills"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
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
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 shadow-cardLight transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-cardElevated"
              key={cat.category}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="font-gaming text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                    {cat.skills.length} Skills
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {cat.category}
                </h3>

                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {cat.skills.map((skill) => (
                  <span
                    className="rounded-full bg-slate-50 border border-slate-200/80 px-2.5 py-1 font-gaming text-[11px] font-semibold text-slate-700 group-hover:border-amber-200 transition-colors"
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
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 shadow-cardLight transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-cardElevated"
              key={item.title}
            >
              <div>
                <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <div className="mt-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 px-2.5 py-1">
                  <p className="font-gaming text-[11px] font-bold text-amber-900">
                    {item.tools}
                  </p>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600">
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