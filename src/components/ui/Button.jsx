import { playClickSound, playHoverSound } from "../../utils/soundEffects";

const variantStyles = {
  primary:
    "bg-amber-500 text-slate-950 font-black border-b-[3px] border-amber-700 hover:bg-amber-400 active:translate-y-[2px] active:border-b-0 shadow-sm",
  secondary:
    "bg-white text-slate-800 font-bold border border-slate-300/90 hover:bg-slate-50 hover:border-slate-400 active:translate-y-[1px] shadow-sm dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:border-slate-600",
  cobalt:
    "bg-blue-600 text-white font-black border-b-[3px] border-blue-800 hover:bg-blue-500 active:translate-y-[2px] active:border-b-0 shadow-sm",
  emerald:
    "bg-emerald-600 text-white font-black border-b-[3px] border-emerald-800 hover:bg-emerald-500 active:translate-y-[2px] active:border-b-0 shadow-sm",
  rose:
    "bg-rose-500 text-white font-black border-b-[3px] border-rose-700 hover:bg-rose-400 active:translate-y-[2px] active:border-b-0 shadow-sm",
  dark:
    "bg-slate-900 text-white font-black border-b-[3px] border-slate-950 hover:bg-slate-800 active:translate-y-[2px] active:border-b-0 shadow-sm",
  ghost:
    "bg-transparent text-slate-700 font-bold hover:bg-slate-100 active:translate-y-[1px] dark:text-slate-300 dark:hover:bg-slate-800",
};

export default function Button({
  children,
  className = "",
  external = false,
  href,
  onClick,
  type = "button",
  variant = "primary",
  playSound = true,
  ...props
}) {
  const handleMouseEnter = () => {
    if (playSound) playHoverSound();
  };

  const handleClick = (e) => {
    if (playSound) playClickSound();
    if (onClick) onClick(e);
  };

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-gaming text-sm uppercase tracking-wider transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant] || variantStyles.primary,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

