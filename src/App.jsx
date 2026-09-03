import { useState } from "react";
import Header from "./components/layout/Header";
import SiteFooter from "./components/layout/SiteFooter";
import AboutSection from "./components/portfolio/AboutSection";
import ContactSection from "./components/portfolio/ContactSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import HeroSection from "./components/portfolio/HeroSection";
import ProjectSpotlightSection from "./components/portfolio/ProjectSpotlightSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ReferencesSection from "./components/portfolio/ReferencesSection";
import TechnicalHighlightsSection from "./components/portfolio/TechnicalHighlightsSection";
import {
  contactLinks,
  educationAndCredentials,
  featuredProjects,
  gamezopReferences,
  professionalExperience,
  technicalHighlights,
  technicalSkillsCategories,
} from "./data/portfolioData";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(featuredProjects[0].id);

  const activeProject =
    featuredProjects.find((project) => project.id === activeProjectId) ?? featuredProjects[0];

  const handleSelectProject = (projectId, sectionId) => {
    setActiveProjectId(projectId);

    if (sectionId) {
      window.requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Pure Studio Ambient Lighting Gradients (Zero faux-assets) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
        <div className="absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-amber-200/40 via-orange-100/25 to-transparent blur-3xl animate-aurora-breathe" />
        <div className="absolute -top-24 -right-24 h-[540px] w-[540px] rounded-full bg-gradient-to-bl from-blue-200/30 via-indigo-100/20 to-transparent blur-3xl animate-aurora-drift" />
        <div className="hidden lg:block absolute top-[42%] -right-32 h-[580px] w-[580px] rounded-full bg-gradient-to-l from-emerald-100/35 via-teal-50/20 to-transparent blur-3xl animate-aurora-breathe" />
        <div className="hidden lg:block absolute top-[65%] -left-32 h-[540px] w-[540px] rounded-full bg-gradient-to-r from-blue-100/30 via-slate-100/20 to-transparent blur-3xl animate-aurora-drift" />
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 h-[460px] w-[800px] rounded-full bg-gradient-to-t from-amber-100/35 via-rose-50/20 to-transparent blur-3xl animate-aurora-breathe" />
      </div>

      <Header />

      <main className="relative z-10">
        <HeroSection
          onViewExperience={() => scrollToSection("experience")}
          onViewProjects={() => scrollToSection("projects")}
        />
        <ProjectsSection
          activeProjectId={activeProject.id}
          onViewDetails={(projectId) => handleSelectProject(projectId, "project-details")}
          projects={featuredProjects}
        />
        <ProjectSpotlightSection project={activeProject} />
        <ExperienceSection experiences={professionalExperience} />
        <TechnicalHighlightsSection
          highlights={technicalHighlights}
          skillsCategories={technicalSkillsCategories}
        />
        <AboutSection credentials={educationAndCredentials} />
        <ReferencesSection items={gamezopReferences} />
        <ContactSection links={contactLinks} />
      </main>

      <SiteFooter />
    </div>
  );
}