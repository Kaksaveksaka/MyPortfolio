import Section from "../layout/Section";

export default function ContactSection({ links }) {
  return (
    <Section
      description="Email and phone are pulled from the resume."
      id="contact"
      title="Let us talk about the next build"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="panel-surface p-6 sm:p-8">
          <p className="max-w-2xl text-base leading-8 text-mist/85 sm:text-lg">
            Available for game engineering, front-end systems, and live product optimization, with a focus on building responsive gameplay experiences and reliable, scalable systems.  
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {links.map((link) => {
            const isInteractive = Boolean(link.href);
            const Element = isInteractive ? "a" : "div";

            return (
              <Element
                className={`panel-surface block p-5 transition duration-300 ${
                  isInteractive ? "hover:border-cyan/40 hover:bg-white/5" : "opacity-80"
                }`}
                href={link.href}
                key={link.label}
                rel={isInteractive ? "noreferrer" : undefined}
                target={isInteractive ? "_blank" : undefined}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-cyan/80">{link.label}</p>
                <p className="mt-3 font-display text-lg font-semibold text-white">{link.value}</p>
              </Element>
            );
          })}
        </div>
      </div>
    </Section>
  );
}