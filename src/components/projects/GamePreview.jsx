import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";
import Button from "../ui/Button";

export default function GamePreview({ project }) {
  const { ref, isInView } = useInView({ once: true, rootMargin: "120px", threshold: 0.25 });
  const [isManuallyLoaded, setIsManuallyLoaded] = useState(false);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const supportsEmbed = project.embedMode !== "external-launch";
  const supportsInlinePreview = project.embedMode !== "store-only";
  const launchUrl = project.gameUrl ?? project.playStoreUrl;

  useEffect(() => {
    setIsManuallyLoaded(false);
    setIsFrameLoaded(false);
  }, [project.id]);

  const shouldLoad = isManuallyLoaded || isInView;

  return (
    <div className="panel-surface p-4 sm:p-6" ref={ref}>
      <div className="overflow-hidden rounded-[24px] border border-white/8 bg-panelAlt">
        <div className="relative aspect-video min-h-[240px] bg-night sm:min-h-[360px]">
          {!shouldLoad ? (
            <button
              className="absolute inset-0 block h-full w-full text-left"
              onClick={() => setIsManuallyLoaded(true)}
              type="button"
            >
              <img
                alt={`${project.title} preview cover`}
                className="h-full w-full object-cover opacity-80"
                loading="lazy"
                src={project.poster}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="eyebrow-chip">Interactive Preview</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {supportsEmbed && supportsInlinePreview
                    ? `Load ${project.title}`
                    : `Preview ${project.title}`}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-mist/75 sm:text-base">
                  {supportsEmbed && supportsInlinePreview
                    ? "The iframe stays unloaded until this module becomes visible or you explicitly open it."
                    : project.embedMode === "store-only"
                      ? "This project is a mobile release, so the portfolio shows a rich preview and sends users to its Google Play page instead of a web embed."
                      : "This provider does not expose a reliable third-party iframe shell, so the portfolio shows a rich preview and opens the playable build in a new tab."}
                </p>
              </div>
            </button>
          ) : supportsEmbed && supportsInlinePreview ? (
            <>
              <iframe
                allow="autoplay; fullscreen"
                className="h-full w-full bg-panel"
                loading="lazy"
                onLoad={() => setIsFrameLoaded(true)}
                referrerPolicy="strict-origin-when-cross-origin"
                src={launchUrl}
                title={`${project.title} playable preview`}
              />
              {!isFrameLoaded ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-night/85 text-center text-sm text-mist/80 backdrop-blur-sm">
                  <div className="h-12 w-12 animate-spin rounded-full border-2 border-cyan/25 border-t-cyan" />
                  <p>Loading interactive preview...</p>
                </div>
              ) : null}
            </>
          ) : (
            <div className="absolute inset-0">
              {project.previewVideo ? (
                <video
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  poster={project.poster}
                  preload="metadata"
                  src={project.previewVideo}
                />
              ) : (
                <img
                  alt={`${project.title} preview cover`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  src={project.poster}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/15" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="eyebrow-chip">Provider-Safe Preview</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {project.embedMode === "store-only"
                    ? `${project.title} is showcased as a mobile release`
                    : `${project.title} launches outside the iframe`}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-mist/80 sm:text-base">
                  {project.embedMode === "store-only"
                    ? "This title is published for Android, so the best destination is its Google Play listing rather than a browser embed."
                    : "These Gamezop builds expect their own parent shell to answer SDK init messages, so a generic portfolio iframe stays blank. Use the launch button below to open the actual playable build."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan/80">
            {supportsEmbed && supportsInlinePreview
              ? "Live playable embed"
              : project.embedMode === "store-only"
                ? "Mobile release"
                : "Hosted playable build"}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted sm:text-base">{project.summary}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted/80">
            {supportsEmbed && supportsInlinePreview
              ? "Best tested on HTTPS hosts because the external game SDK expects a secure context."
              : project.embedMode === "store-only"
                ? "This project is distributed through Google Play, so the main call to action opens the store listing instead of a browser runtime."
                : "Gamezop previews are shown safely here; the playable build opens in a new tab where the provider SDK can initialize correctly."}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {!shouldLoad ? (
            <Button onClick={() => setIsManuallyLoaded(true)} variant="secondary">
              {supportsEmbed && supportsInlinePreview ? "Load Preview" : "Load Media Preview"}
            </Button>
          ) : null}
          {launchUrl ? (
            <Button external href={launchUrl}>
              {project.embedMode === "store-only"
                ? "View on Google Play"
                : supportsEmbed && supportsInlinePreview
                  ? "Play Fullscreen"
                  : "Open Playable Build"}
            </Button>
          ) : null}
          {project.storeUrl && project.gameUrl ? (
            <Button external href={project.storeUrl} variant="secondary">
              View on Google Play
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
