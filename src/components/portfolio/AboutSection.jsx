import Section from "../layout/Section";

const strengths = [
  "Shipping browser games across HTML5 and web-first stacks.",
  "Designed reusable caching architecture, service worker integration, and cache logic that can be adapted across multiple games with the same workflow.",
  "Built VR training simulations in Unity for Oculus Quest during an earlier Smart Marine internship.",
  "Published four mobile games independently, including AR titles on Google Play.",
  "Fixed 500+ bugs across 60+ games while supporting reskins and mentoring new hires.",
  ];

export default function AboutSection() {
  return (
    <Section
      description="A hybrid builder profile: gameplay sensibility up front, systems thinking underneath."
      eyebrow="About"
      id="about"
      title="I work where game feel meets engineering rigor."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="panel-surface p-6 sm:p-8">
          <p className="text-base leading-8 text-mist/85 sm:text-lg">
            Over the last 4+ years, I have worked across browser games, XR training simulations, and mobile releases, connecting polished player-facing execution with the backend and platform systems that keep products stable. My recent work at Gamezop centers on performance, monetization, live balancing, retention-oriented decisions, and reusable service worker flows that can be rolled into multiple titles without a fresh setup for each game, while earlier roles sharpened hands-on Unity, Oculus Quest, AR, and end-to-end publishing experience.
          </p>
        </div>

        <div className="space-y-4">
          {strengths.map((item) => (
            <div className="metric-card" key={item}>
              <p className="text-sm leading-7 text-mist/85">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}