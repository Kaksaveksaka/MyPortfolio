import { useEffect, useRef, useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { playClickSound, playHoverSound, playLaunchSound } from "../../utils/soundEffects";

export default function ProjectCard({ isActive, onViewDetails, project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [previousSlideshowIndex, setPreviousSlideshowIndex] = useState(null);
  const [isSlideshowTransitioning, setIsSlideshowTransitioning] = useState(false);
  const videoRef = useRef(null);
  const slideshowTimeoutRef = useRef(null);
  const hasPreviewVideo = Boolean(project.previewVideo);
  const hasPreviewImages = Boolean(project.previewImages?.length);
  const hasPoster = Boolean(project.poster);
  const launchUrl = project.gameUrl ?? project.playStoreUrl;
  const isAndroidProject = project.embedMode === "store-only";

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !hasPreviewVideo || !shouldLoadVideo) {
      return;
    }

    if (isHovered) {
      const playPromise = video.play();

      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }

      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [hasPreviewVideo, isHovered, shouldLoadVideo]);

  useEffect(() => {
    if (!hasPreviewImages || !isHovered) {
      window.clearTimeout(slideshowTimeoutRef.current);
      setPreviousSlideshowIndex(null);
      setIsSlideshowTransitioning(false);
      setSlideshowIndex(0);
      return undefined;
    }

    let intervalId;

    const advanceSlideshow = () => {
      setSlideshowIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % project.previewImages.length;

        setPreviousSlideshowIndex(currentIndex);
        setIsSlideshowTransitioning(true);
        window.clearTimeout(slideshowTimeoutRef.current);
        slideshowTimeoutRef.current = window.setTimeout(() => {
          setIsSlideshowTransitioning(false);
          setPreviousSlideshowIndex(null);
        }, 900);

        return nextIndex;
      });
    };

    const initialTimeoutId = window.setTimeout(() => {
      advanceSlideshow();
      intervalId = window.setInterval(advanceSlideshow, 1850);
    }, 700);

    return () => {
      window.clearTimeout(initialTimeoutId);
      window.clearInterval(intervalId);
      window.clearTimeout(slideshowTimeoutRef.current);
    };
  }, [hasPreviewImages, isHovered, project.previewImages]);

  const handleEnter = () => {
    playHoverSound();
    setIsHovered(true);

    if (hasPreviewVideo) {
      setShouldLoadVideo(true);
    }
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <article
      id={project.id}
      className={`group/card relative flex h-full flex-col rounded-3xl border bg-white dark:bg-slate-900/90 p-5 shadow-cardLight transition-all duration-200 hover:-translate-y-1 ${
        isActive
          ? "border-amber-500 ring-2 ring-amber-400/30 dark:ring-amber-500/20 shadow-cardElevated dark:shadow-[0_10px_35px_-4px_rgba(0,0,0,0.6)]"
          : "border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-cardHover dark:shadow-[0_4px_25px_-4px_rgba(0,0,0,0.5)]"
      }`}
    >
      {/* Media Screen Container */}
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 dark:border-slate-800 dark:bg-slate-950"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {/* Top Metric Badge */}
        <div className="absolute right-3 top-3 z-20">
          <span className="rounded-full border border-amber-600 bg-amber-500 px-3 py-0.5 font-gaming text-xs font-black uppercase text-slate-950 shadow-sm">
            {project.standoutMetric}
          </span>
        </div>

        {/* Media Preview Box */}
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-950">
          {hasPoster ? (
            <img
              alt={`${project.title} cover art`}
              className={`h-full w-full object-cover transition-all duration-500 ${
                isHovered && (hasPreviewVideo || hasPreviewImages)
                  ? "scale-105 opacity-0"
                  : "opacity-100 group-hover/card:scale-105"
              }`}
              loading="lazy"
              src={project.poster}
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-all duration-500 ${
                isHovered && hasPreviewVideo ? "scale-105 opacity-0" : "opacity-100 group-hover/card:scale-105"
              }`}
              aria-hidden="true"
            >
              <div className="absolute inset-x-4 bottom-4 z-10 rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-900/90">
                <p className="truncate font-display text-sm font-bold text-slate-900 dark:text-white">
                  {project.title}
                </p>
              </div>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

          {/* Slideshow image previews */}
          {hasPreviewImages ? (
            <>
              <img
                alt={`${project.title} hover preview`}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-500 ease-out ${
                  isHovered
                    ? isSlideshowTransitioning
                      ? "scale-[0.985] opacity-100 blur-[4px]"
                      : "scale-100 opacity-100 blur-0"
                    : "scale-[1.02] opacity-0 blur-md"
                }`}
                loading="lazy"
                src={project.previewImages[slideshowIndex]}
              />

              {previousSlideshowIndex !== null ? (
                <img
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-500 ease-out ${
                    isSlideshowTransitioning
                      ? "scale-100 opacity-100 blur-0"
                      : "scale-[1.04] opacity-0 blur-sm"
                  }`}
                  loading="lazy"
                  src={project.previewImages[previousSlideshowIndex]}
                />
              ) : null}
            </>
          ) : null}

          {/* Hover Video Player */}
          {shouldLoadVideo && hasPreviewVideo ? (
            <video
              className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              loop
              muted
              playsInline
              poster={project.poster ?? undefined}
              preload="none"
              ref={videoRef}
              src={project.previewVideo}
            />
          ) : null}
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-5 flex flex-1 flex-col gap-3">
        <div>
          <p className="font-gaming text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            {project.kicker}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover/card:text-amber-700 dark:group-hover/card:text-amber-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Engine Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((item, idx) => (
            <Badge
              key={item}
              variant={idx === 0 ? "amber" : idx === 1 ? "cobalt" : idx === 2 ? "rose" : "purple"}
            >
              {item}
            </Badge>
          ))}
        </div>

        {/* 3D Action Buttons */}
        <div className="mt-auto flex flex-col gap-2.5 pt-4 sm:flex-row">
          {launchUrl ? (
            <Button
              className="sm:flex-1 text-sm font-black"
              external
              href={launchUrl}
              onClick={() => playLaunchSound()}
              variant={isAndroidProject ? "emerald" : "primary"}
            >
              <span>{isAndroidProject ? "📱 Google Play" : "🕹️ Play Game"}</span>
            </Button>
          ) : null}

          <Button
            className="sm:flex-1 text-sm"
            onClick={() => {
              playClickSound();
              onViewDetails(project.id);
            }}
            variant="secondary"
          >
            <span>🔍 Details</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
