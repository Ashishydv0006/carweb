import { useEffect, useRef } from "react";

export function useOnceInView({
  className = "is-visible",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  fallbackDelayMs = 1200,
  onVisible,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let didReveal = false;
    const reveal = () => {
      if (didReveal) return;
      didReveal = true;
      el.classList.add(className);
      onVisible?.(el);
    };

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const fallbackTimer =
      typeof fallbackDelayMs === "number" && fallbackDelayMs > 0
        ? window.setTimeout(reveal, fallbackDelayMs)
        : null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        if (fallbackTimer) window.clearTimeout(fallbackTimer);
        reveal();
        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [className, threshold, rootMargin, fallbackDelayMs, onVisible]);

  return ref;
}
