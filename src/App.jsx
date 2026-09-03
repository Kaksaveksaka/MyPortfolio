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
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-amber-100 selection:text-amber-900">
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