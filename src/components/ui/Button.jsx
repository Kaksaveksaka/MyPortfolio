const variantStyles = {
  primary:
    "border-cyan/70 bg-cyan text-night hover:border-cyan hover:bg-white focus-visible:outline-cyan/70",
  secondary:
    "border-white/12 bg-white/5 text-mist hover:border-cyan/50 hover:bg-white/10 focus-visible:outline-cyan/70",
  ghost:
    "border-transparent bg-transparent text-cyan hover:border-cyan/30 hover:bg-cyan/10 focus-visible:outline-cyan/70",
};

export default function Button({
  children,
  className = "",
  external = false,
  href,
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.08em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
}