import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds = [], offset = 140) {
  const [activeId, setActiveId] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          
          // Calculate progress percentage (0 - 100)
          const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
          setScrollProgress(progress);

          // Show back to top button after passing hero (350px)
          setShowBackToTop(scrollY > 350);

          // Detect active section
          let currentSection = "";
          for (let i = 0; i < sectionIds.length; i++) {
            const id = sectionIds[i];
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              // If top of section is near or above the offset threshold and bottom is still below the threshold
              if (rect.top <= offset && rect.bottom > offset) {
                currentSection = id;
                break;
              }
            }
          }

          // If at the very top, clear active section or set to top
          if (scrollY < 120) {
            setActiveId("");
          } else if (currentSection) {
            setActiveId(currentSection);
          } else if (scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
            // Near bottom of page, highlight last section
            setActiveId(sectionIds[sectionIds.length - 1] || "");
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return { activeId, scrollProgress, showBackToTop };
}
