import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function scrollToHash(hash, { behavior = "smooth" } = {}) {
  if (!hash) return false;
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const [pendingHash, setPendingHash] = useState(null);
  const triesRef = useRef(0);
  const rafRef = useRef(0);

  const goToSection = useCallback(
    (hash) => {
      if (!hash?.startsWith("#")) return;
      setPendingHash(hash);

      if (location.pathname === "/") {
        if (window.location.hash !== hash) {
          window.history.pushState(null, "", `${location.pathname}${hash}`);
        }
        return;
      }

      navigate({ pathname: "/", hash });
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    if (!pendingHash) return undefined;
    if (location.pathname !== "/") return undefined;
    if (location.hash && location.hash !== pendingHash) return undefined;

    triesRef.current = 0;

    const attempt = () => {
      triesRef.current += 1;

      if (document.body.style.overflow === "hidden") {
        rafRef.current = window.requestAnimationFrame(attempt);
        return;
      }

      const ok = scrollToHash(pendingHash, { behavior: "smooth" });
      if (ok || triesRef.current > 80) {
        if (window.location.hash !== pendingHash) {
          window.history.replaceState(null, "", `${location.pathname}${pendingHash}`);
        }
        setPendingHash(null);
        return;
      }

      rafRef.current = window.requestAnimationFrame(attempt);
    };

    rafRef.current = window.requestAnimationFrame(attempt);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, [location.hash, location.pathname, pendingHash]);

  return { goToSection, pendingHash, scrollToHash };
}
