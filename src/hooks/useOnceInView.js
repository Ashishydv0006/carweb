import { useEffect, useRef } from "react";

export function useOnceInView({
  className = "is-visible",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  onVisible,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add(className);
      onVisible?.(el);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.classList.add(className);
        onVisible?.(el);
        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [className, threshold, rootMargin, onVisible]);

  return ref;
}

