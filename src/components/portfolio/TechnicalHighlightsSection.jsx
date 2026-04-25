import Section from "../layout/Section";

export default function TechnicalHighlightsSection({ items }) {
  return (
    <Section
      description="A snapshot of the technical themes that show up repeatedly across shipped work."
      eyebrow="Highlights"
      id="highlights"
      title="Technical strengths"
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <article className="panel-surface flex h-full flex-col p-5 sm:p-6" key={item.title}>
            <p className="section-label">{item.title}</p>
            <p className="mt-4 font-display text-xl font-semibold text-white">{item.tools}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}