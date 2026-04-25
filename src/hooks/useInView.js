import { useEffect, useRef, useState } from "react";

export default function useInView(options = {}) {
  const { once = true, rootMargin = "0px", threshold = 0.25 } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          if (once) {
            observer.disconnect();
          }

          return;
        }

        if (!once) {
          setIsInView(false);
        }
      },
      { root: null, rootMargin, threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, isInView };
}