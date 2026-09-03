import { useState } from "react";
import Section from "../layout/Section";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { playClickSound, playHoverSound, playLaunchSound } from "../../utils/soundEffects";

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="15 3 21 3 21 9" />
      <line strokeLinecap="round" strokeLinejoin="round" x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

export default function ProjectSpotlightSection({ project }) {
  const [activeTab, setActiveTab] = useState("overview");
  const launchUrl = project.gameUrl ?? project.playStoreUrl;
  const isAndroidProject = project.embedMode === "store-only";
  const hasPoster = Boolean(project.poster);
  const hasPreviewVideo = Boolean(project.previewVideo);
  const hasPreviewImages = Boolean(project.previewImages?.length);
  const hasSupportingVideos = Boolean(project.supportingVideos?.length);

  return (
    <Section
      description="Interactive breakdown, engine architecture, and behind-the-scenes engineering for the selected title."
      id="project-details"
      title={`Deep Dive: ${project.title} 🎮`}
    >
      <div className="panel-surface rounded-3xl p-6 sm:p-8 shadow-cardElevated">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Column: Screen Monitor */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            {/* Video or Image Screen */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
              {hasPreviewVideo ? (
                <video
                  autoPlay
                  className="h-full w-full object-contain"
                  controls
                  key={project.previewVideo}
                  loop
                  muted
                  playsInline
                  poster={project.poster ?? undefined}
                  preload="metadata"
                  src={project.previewVideo}
                />
              ) : hasPreviewImages ? (
                <div className="relative h-full w-full">
                  <img
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src={project.previewImages[0]}
                  />
                  {project.previewImages.length > 1 && (
                    <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-1.5 bg-slate-950/70 p-2 rounded-xl backdrop-blur-sm">
                      {project.previewImages.map((img, i) => (
                        <img
                          alt=""
                          className="h-11 w-11 object-cover rounded-lg border border-white/30"
                          key={i}
                          src={img}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : hasPoster ? (
                <img
                  alt={`${project.title} poster`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  src={project.poster}
                />
              ) : (
                <div className="flex h-full w-full items-end bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6">
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/90">
                    <p className="font-gaming text-xs font-bold uppercase text-amber-700 dark:text-amber-400">Project Demo</p>
                    <p className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white">{project.title}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Screen Bar */}
            <div className="mt-2.5 flex items-center justify-between px-2 pt-1 font-gaming text-xs font-bold text-slate-600 dark:text-slate-400">
              <span className="text-amber-700 dark:text-amber-400">{project.standoutMetric}</span>
              <span className="text-blue-700 dark:text-blue-400">Engine: {project.stack[0]}</span>
            </div>
          </div>

          {/* Right Column: Interactive Tab Inspector */}
          <div className="flex flex-col">
            {/* Top Badges & Title */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow-chip">{project.kicker}</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 font-gaming text-xs font-bold uppercase text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-400">
                {project.standoutMetric}
              </span>
            </div>

            <h3 className="mt-4 font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
              {project.title}
            </h3>

            {/* Navigation Tabs */}
            <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              {[
                { id: "overview", label: "🎮 01 // Overview" },
                { id: "architecture", label: "⚡ 02 // Engineering & LiveOps" },
                { id: "telemetry", label: "🛠️ 03 // Tech Stack" },
              ].map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    className={`rounded-xl border px-4 py-2 font-gaming text-xs font-black uppercase tracking-wider transition-all duration-150 active:scale-95 ${
                      isSelected
                        ? "border-amber-500 bg-amber-500 text-slate-950 shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                    }`}
                    key={tab.id}
                    onClick={() => {
                      playClickSound();
                      setActiveTab(tab.id);
                    }}
                    onMouseEnter={playHoverSound}
                    type="button"
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            <div className="mt-5 min-h-[160px]">
              {activeTab === "overview" && (
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.summary}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.impact.map((entry, idx) => (
                    <div className="metric-card p-4" key={entry}>
                      <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                        <span>HIGHLIGHT {idx + 1}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{entry}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "telemetry" && (
                <div className="space-y-4">
                  <p className="font-gaming text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                    Technology &amp; Engine Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item, idx) => (
                      <Badge
                        key={item}
                        variant={idx === 0 ? "amber" : idx === 1 ? "cobalt" : idx === 2 ? "rose" : "purple"}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  {project.businessUrl && (
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                      <p className="font-gaming text-sm font-bold text-slate-900 dark:text-slate-100">
                        🏆 Official Gamezop Business Listing
                      </p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                        Verified mass-market catalogue game distributed globally to hundreds of publishers.
                      </p>
                      <a
                        className="mt-3 inline-flex items-center gap-1.5 font-gaming text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
                        href={project.businessUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span>View Business Listing</span>
                        <ExternalIcon />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-200 dark:border-slate-800 pt-5">
              {launchUrl ? (
                <Button
                  className="px-6 py-3 text-sm font-black"
                  external
                  href={launchUrl}
                  onClick={() => playLaunchSound()}
                  variant={isAndroidProject ? "emerald" : "primary"}
                >
                  <span>{isAndroidProject ? "📱 Download on Google Play" : "🕹️ Launch & Play Now"}</span>
                </Button>
              ) : null}

              {project.storeUrl && project.gameUrl ? (
                <Button
                  external
                  href={project.storeUrl}
                  onClick={() => playLaunchSound()}
                  variant="secondary"
                >
                  <span>📱 Google Play Store</span>
                </Button>
              ) : null}
            </div>

            {/* Supporting VR Videos (if present) */}
            {hasSupportingVideos ? (
              <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-gaming text-xs font-bold uppercase text-amber-700 dark:text-amber-400">
                    Supporting Quest VR Captures
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Oculus Quest</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {project.supportingVideos.map((clip) => (
                    <div className="metric-card overflow-hidden p-0" key={clip.src}>
                      <video
                        autoPlay
                        className="aspect-video w-full object-cover bg-slate-950"
                        controls
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        src={clip.src}
                      />
                      <div className="p-3">
                        <p className="font-gaming text-xs font-bold text-slate-900 dark:text-slate-100">{clip.title}</p>
                        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{clip.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}

