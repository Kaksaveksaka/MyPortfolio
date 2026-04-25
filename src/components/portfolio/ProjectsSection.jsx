import Section from "../layout/Section";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectsSection({
  activeProjectId,
  onViewDetails,
  projects,
}) {
  return (
    <Section
      description="Featured projects focused on real-time systems, browser game architecture, performance, and live product iteration."
      eyebrow="Projects"
      id="projects"
      title="Featured builds"
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">
          Hover supported covers to preview media.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
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