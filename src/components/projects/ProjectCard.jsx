import { useEffect, useRef, useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function BrowserIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M12 3.75c2.2 2.2 3.5 5.11 3.5 8.25S14.2 18.05 12 20.25M12 3.75c-2.2 2.2-3.5 5.11-3.5 8.25S9.8 18.05 12 20.25M6.6 7.5h10.8M6.6 16.5h10.8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v9m0 0 3.75-3.75M12 13.5 8.25 9.75M4.5 15.75v1.125c0 1.864.761 2.625 2.625 2.625h9.75c1.864 0 2.625-.761 2.625-2.625V15.75" />
    </svg>
  );
}

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
  const isCompactInternshipCard = project.embedMode === "internal-demo" && !hasPoster;
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
      className={`panel-surface card-hover flex h-full flex-col p-5 sm:p-6 ${
        isActive ? "border-cyan/50 shadow-[0_0_0_1px_rgba(101,230,255,0.28),0_24px_60px_rgba(2,8,23,0.6)]" : ""
      }`}
    >
      {!isCompactInternshipCard ? (
        <div
          className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-panelAlt"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-night/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
            {hasPreviewVideo || hasPreviewImages ? "Hover to preview" : "Featured build"}
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            {hasPoster ? (
            <img
              alt={`${project.title} cover art`}
              className={`h-full w-full object-cover transition duration-700 ${
                isHovered && (hasPreviewVideo || hasPreviewImages)
                  ? "scale-105 opacity-0"
                  : "opacity-100 group-hover:scale-105"
              }`}
              loading="lazy"
              src={project.poster}
            />
          ) : (
            <div
              className={`h-full w-full bg-[radial-gradient(circle_at_top,rgba(101,230,255,0.12),transparent_32%),linear-gradient(160deg,rgba(7,11,27,0.98),rgba(12,18,32,0.95))] transition duration-700 ${
                isHovered && hasPreviewVideo ? "scale-105 opacity-0" : "opacity-100 group-hover:scale-105"
              }`}
              aria-hidden="true"
            >
              <div className="absolute inset-x-4 bottom-4 z-10 rounded-full border border-cyan/20 bg-night/70 px-4 py-2 backdrop-blur-sm">
                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                  Smart Marine internship modules
                </p>
              </div>
            </div>
          )}

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night via-night/20 to-transparent" />
            {hasPreviewImages ? (
              <>
                <img
                  alt={`${project.title} hover preview`}
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered
                      ? isSlideshowTransitioning
                        ? "scale-[0.985] opacity-100 blur-[10px]"
                        : "scale-100 opacity-100 blur-0"
                      : "scale-[1.02] opacity-0 blur-lg"
                  }`}
                  loading="lazy"
                  src={project.previewImages[slideshowIndex]}
                />

                {previousSlideshowIndex !== null ? (
                  <img
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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

            {shouldLoadVideo && hasPreviewVideo ? (
              <video
                className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                loop
                muted
                playsInline
                poster={project.poster ?? undefined}
                preload="metadata"
                ref={videoRef}
                src={project.previewVideo}
              />
            ) : null}
          </div>
        </div>
      ) : null}

      <div className={`${isCompactInternshipCard ? "mt-0" : "mt-6"} flex flex-1 flex-col gap-4`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan/80">{project.kicker}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <span className="rounded-full border border-lime/20 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-lime">
            {project.standoutMetric}
          </span>
        </div>

        {!isCompactInternshipCard ? <p className="text-sm leading-7 text-muted">{project.description}</p> : null}

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
          {launchUrl ? (
            <Button className="sm:flex-1" external href={launchUrl}>
              <span className="mr-2 inline-flex">
                {isAndroidProject ? <DownloadIcon /> : <BrowserIcon />}
              </span>
              {isAndroidProject ? "Download" : "Play"}
            </Button>
          ) : null}
          <Button className="sm:flex-1" onClick={() => onViewDetails(project.id)} variant="secondary">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}