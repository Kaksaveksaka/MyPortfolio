import Section from "../layout/Section";
import GamePreview from "../projects/GamePreview";

export default function GameLabSection({ onSelectProject, project, projects }) {
  return (
    <Section
      description="Playable demos load inline when a provider supports embedding. For Gamezop builds, the section falls back to a media preview and launches the real game in a new tab."
      eyebrow="Playable Builds"
      id="game-lab"
      title="Play a live game preview"
    >
      <div className="grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
        <GamePreview key={project.id} project={project} />

        <aside className="space-y-4">
          {projects.map((item) => {
            const isActive = item.id === project.id;

            return (
              <button
                aria-pressed={isActive}
                className={`panel-surface w-full p-5 text-left transition duration-300 ${
                  isActive ? "border-cyan/50 bg-cyan/10" : "hover:border-cyan/30 hover:bg-white/5"
                }`}
                key={item.id}
                onClick={() => onSelectProject(item.id)}
                type="button"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-cyan/75">{item.kicker}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    {item.standoutMetric}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </button>
            );
          })}
        </aside>
      </div>
    </Section>
  );
}