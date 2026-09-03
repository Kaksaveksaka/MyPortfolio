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
    <section className={`relative scroll-mt-24 py-16 sm:py-20 ${className}`} id={id}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <div className="mb-3 flex items-center gap-2">
                <span className="eyebrow-chip">
                  <span>✨</span>
                  <span>{eyebrow}</span>
                </span>
              </div>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
