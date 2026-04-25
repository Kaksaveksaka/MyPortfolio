import { useState } from "react";
import Header from "./components/layout/Header";
import SiteFooter from "./components/layout/SiteFooter";
import AboutSection from "./components/portfolio/AboutSection";
import ContactSection from "./components/portfolio/ContactSection";
import HeroSection from "./components/portfolio/HeroSection";
import ProjectSpotlightSection from "./components/portfolio/ProjectSpotlightSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import TechnicalHighlightsSection from "./components/portfolio/TechnicalHighlightsSection";
import { contactLinks, featuredProjects, technicalHighlights } from "./data/portfolioData";

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
    <div className="relative min-h-screen overflow-hidden bg-night text-mist selection:bg-cyan/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
        <div className="absolute right-[-8rem] top-96 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute left-1/2 top-[44rem] h-72 w-72 -translate-x-1/2 rounded-full bg-lime/10 blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10">
        <HeroSection
          onViewProjects={() => scrollToSection("projects")}
          onPlayGames={() => scrollToSection("projects")}
        />
        <AboutSection />
        <ProjectsSection
          activeProjectId={activeProject.id}
          onViewDetails={(projectId) => handleSelectProject(projectId, "project-details")}
          projects={featuredProjects}
        />
        <ProjectSpotlightSection project={activeProject} />
        <TechnicalHighlightsSection items={technicalHighlights} />
        <ContactSection links={contactLinks} />
      </main>

      <SiteFooter />
    </div>
  );
}