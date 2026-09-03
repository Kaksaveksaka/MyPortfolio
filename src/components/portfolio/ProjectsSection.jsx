import { useState } from "react";
import Section from "../layout/Section";
import ProjectCard from "../projects/ProjectCard";
import { playClickSound, playHoverSound } from "../../utils/soundEffects";

const filterCategories = [
  { id: "all", label: "🎮 All Games" },
  { id: "unity-mobile", label: "📱 Unity & Mobile" },
  { id: "cocos-web", label: "⚡ Cocos3D & WebGL" },
  { id: "xr", label: "🥽 XR & VR" },
  { id: "mega-hits", label: "⭐ 1B+ Mega Hits" },
];

export default function ProjectsSection({
  activeProjectId,
  onViewDetails,
  projects,
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "mega-hits") {
      return project.id === "fruity-fiesta" || project.id === "rollout" || project.id === "chef-tycoon";
    }
    if (activeFilter === "unity-mobile") {
      return project.stack.includes("Unity") || Boolean(project.playStoreUrl || project.storeUrl);
    }
    if (activeFilter === "cocos-web") {
      return project.stack.includes("Cocos3D") || project.stack.includes("Phaser 3") || project.embedMode === "external-launch";
    }
    if (activeFilter === "xr") {
      return (
        project.stack.includes("ARCore") ||
        project.stack.includes("AR") ||
        project.stack.includes("Oculus Quest") ||
        project.stack.includes("VR Training") ||
        project.stack.includes("Hand Tracking") ||
        project.id.includes("smart-marine")
      );
    }
    return true;
  });

  return (
    <Section
      description="Explore playable casual mega-hits, high-speed 3D runners, mobile releases, and XR experiments."
      id="projects"
      title="Featured Games &amp; Productions 🎮"
    >
      {/* Category Filter Pills */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2.5">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                className={`rounded-2xl border px-4 py-2 font-gaming text-xs font-black uppercase tracking-wider transition-all duration-150 active:scale-95 ${
                  isActive
                    ? "border-amber-500 bg-amber-500 text-slate-950 shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
                key={cat.id}
                onClick={() => {
                  playClickSound();
                  setActiveFilter(cat.id);
                }}
                onMouseEnter={playHoverSound}
                type="button"
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 font-gaming text-xs font-bold text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SHOWING {filteredProjects.length} OF {projects.length} GAMES</span>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            isActive={project.id === activeProjectId}
            key={project.id}
            onViewDetails={onViewDetails}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}

