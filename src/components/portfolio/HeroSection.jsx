import Button from "../ui/Button";

const heroMetrics = [
  { value: "4+", label: "Years making games" },
  { value: "2M+", label: "Players having fun (hopefully!)" },
  { value: "60+", label: "Games supported (and counting)" },
  { value: "40%", label: "Faster load times (less waiting, more playing!)" },
];

const signalCards = [
  {
    title: "Gameplay & Platform Know-How",
    description: "From leveling up characters to making sure your game saves don’t disappear – I’ve got you.",
  },
  {
    title: "Web, XR, Mobile Adventures",
    description: "Whether it’s a browser, a headset, or your phone, I love making games for all kinds of players.",
  },
  {
    title: "Keeping Players Coming Back",
    description: "Fun mechanics, smooth updates, and a sprinkle of mentoring for good measure.",
  },
];

export default function HeroSection({ onPlayGames, onViewProjects }) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24" id="top">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="eyebrow-chip">Hey, I'm Shoaib – I make games and cool stuff!</span>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
            Shoaib Khan
          </h1>
          <p className="mt-5 max-w-3xl font-display text-2xl leading-tight text-gradient sm:text-3xl lg:text-4xl">
            Turning wild ideas into fun, playable worlds (Web, XR, Mobile)
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            I love building games that make people smile, and the tech that keeps them running smoothly.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button onClick={onViewProjects}>View Projects</Button>
            <Button onClick={onPlayGames} variant="secondary">
              Play Games
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroMetrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <p className="font-display text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-surface relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-cyan/20 bg-cyan/10 blur-xl" />
          <div className="absolute bottom-10 left-8 h-16 w-16 rounded-full border border-lime/20 bg-lime/10 blur-xl" />

          <div className="relative z-10">
            <p className="section-label">What I'm Up To</p>
            <h2 className="mt-4 balanced-text font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Making games that are fun to play – and built to last.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              I craft playful experiences and the behind-the-scenes magic that keeps them running for everyone.
            </p>

            <div className="mt-8 space-y-4">
              {signalCards.map((card, index) => (
                <div
                  className={`rounded-[24px] border border-white/8 bg-white/5 p-5 backdrop-blur-sm ${
                    index === 1 ? "animate-float" : ""
                  }`}
                  key={card.title}
                >
                  <p className="font-display text-lg font-semibold text-white">{card.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}