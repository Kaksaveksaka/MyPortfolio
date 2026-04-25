import Section from "../layout/Section";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function BrowserIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M12 3.75c2.2 2.2 3.5 5.11 3.5 8.25S14.2 18.05 12 20.25M12 3.75c-2.2 2.2-3.5 5.11-3.5 8.25S9.8 18.05 12 20.25M6.6 7.5h10.8M6.6 16.5h10.8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v9m0 0 3.75-3.75M12 13.5 8.25 9.75M4.5 15.75v1.125c0 1.864.761 2.625 2.625 2.625h9.75c1.864 0 2.625-.761 2.625-2.625V15.75" />
    </svg>
  );
}

export default function ProjectSpotlightSection({ project }) {
  const launchUrl = project.gameUrl ?? project.playStoreUrl;
  const isAndroidProject = project.embedMode === "store-only";
  const hasPoster = Boolean(project.poster);
  const hasPreviewVideo = Boolean(project.previewVideo);
  const hasSupportingVideos = Boolean(project.supportingVideos?.length);

  return (
    <Section
      description="A focused breakdown of the currently selected project from the grid above."
      eyebrow="Project Detail"
      id="project-details"
      title={`Selected build: ${project.title}`}
    >
      <div className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr] xl:items-center">
        <div className="panel-surface overflow-hidden p-4 sm:p-5">
          <div className="overflow-hidden rounded-[24px] border border-white/8 bg-panelAlt">
            {hasPoster ? (
              <img
                alt={`${project.title} poster`}
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
                src={project.poster}
              />
            ) : hasPreviewVideo ? (
              <video
                autoPlay
                className="aspect-[4/5] h-full w-full object-cover"
                controls
                loop
                muted
                playsInline
                preload="metadata"
                src={project.previewVideo}
              />
            ) : (
              <div className="flex aspect-[4/5] h-full w-full items-end bg-[radial-gradient(circle_at_top,rgba(101,230,255,0.22),transparent_36%),linear-gradient(160deg,rgba(7,11,27,0.96),rgba(13,22,39,0.94))] p-6">
                <div className="rounded-3xl border border-cyan/20 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan/80">Smart Marine</p>
                  <p className="mt-3 font-display text-3xl font-semibold text-white">VR Internship Modules</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="panel-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow-chip">{project.kicker}</span>
            <span className="rounded-full border border-lime/20 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-lime">
              {project.standoutMetric}
            </span>
          </div>

          <h3 className="mt-6 font-display text-3xl font-semibold text-white sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {project.impact.map((entry) => (
              <div className="metric-card" key={entry}>
                <p className="text-sm leading-7 text-mist/85">{entry}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {launchUrl ? (
              <Button external href={launchUrl}>
                <span className="mr-2 inline-flex">
                  {isAndroidProject ? <DownloadIcon /> : <BrowserIcon />}
                </span>
                {isAndroidProject ? "Download" : "Play"}
              </Button>
            ) : null}
            {project.storeUrl && project.gameUrl ? (
              <Button external href={project.storeUrl} variant="secondary">
                Sudoku on Google Play
              </Button>
            ) : null}
          </div>

          {hasSupportingVideos ? (
            <div className="mt-10 border-t border-white/8 pt-8">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan/80">Supporting clips</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">Brief internship module captures</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {project.supportingVideos.map((clip) => (
                  <div className="metric-card overflow-hidden p-0" key={clip.src}>
                    <video
                      autoPlay
                      className="aspect-video w-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      src={clip.src}
                    />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-white">{clip.title}</p>
                      <p className="mt-2 text-sm leading-6 text-mist/75">{clip.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}