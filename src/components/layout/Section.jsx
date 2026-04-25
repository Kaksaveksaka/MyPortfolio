export default function Section({
  children,
  className = "",
  contentClassName = "",
  description,
  eyebrow,
  id,
  title,
}) {
  return (
    <section className={`relative scroll-mt-28 py-20 sm:py-24 ${className}`} id={id}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
            {title ? (
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p>
            ) : null}
          </div>
        )}

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}