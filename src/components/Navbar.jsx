import React, { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, Phone, Plus, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CALL_NUMBER, WHATSAPP_NUMBER } from "../constants/contact.js";
import logoUrl from "../assets/v-glide-logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const hiddenRef = useRef(false);
  const menuOpenRef = useRef(false);
  const scrollElRef = useRef(null);
  const rafRef = useRef(0);
  const prevBodyOverflowRef = useRef("");

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const getScrollTop = () => {
      const target = scrollElRef.current;
      if (target && typeof target.scrollTop === "number") return target.scrollTop;

      const candidates = [
        document.scrollingElement,
        document.documentElement,
        document.body,
        document.getElementById("root"),
      ].filter(Boolean);

      let maxTop = window.scrollY || 0;
      for (const el of candidates) {
        const top = typeof el.scrollTop === "number" ? el.scrollTop : 0;
        if (top > maxTop) maxTop = top;
      }
      return maxTop;
    };

    const applyHidden = (nextHidden) => {
      if (hiddenRef.current === nextHidden) return;
      hiddenRef.current = nextHidden;
      setIsHidden(nextHidden);
    };

    const update = () => {
      const y = getScrollTop();
      const delta = y - lastScrollYRef.current;
      lastScrollYRef.current = y;

      setIsScrolled(y > 8);

      if (menuOpenRef.current || y <= 10) {
        applyHidden(false);
        return;
      }

      const threshold = 2;
      if (delta > threshold) applyHidden(true); // scrolling down
      else if (delta < -threshold) applyHidden(false); // scrolling up
    };

    const schedule = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        update();
      });
    };

    const onAnyScroll = (e) => {
      const target = e?.target;
      if (target && typeof target.scrollTop === "number") scrollElRef.current = target;
      schedule();
    };

    lastScrollYRef.current = getScrollTop();
    update();

    // Capture scroll events from ANY scroll container (scroll doesn't bubble, but it can be captured).
    document.addEventListener("scroll", onAnyScroll, { passive: true, capture: true });
    window.addEventListener("wheel", schedule, { passive: true });
    window.addEventListener("touchmove", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      document.removeEventListener("scroll", onAnyScroll, { capture: true });
      window.removeEventListener("wheel", schedule);
      window.removeEventListener("touchmove", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, []);

  const isHome = location.pathname === "/";
  const toHomeSection = (hash) => ({ pathname: "/", hash });

  useEffect(() => {
    if (!menuOpen) return undefined;
    prevBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflowRef.current;
    };
  }, [menuOpen]);

  const closeAll = () => {
    // Ensure scrolling is restored immediately before hash navigation.
    document.body.style.overflow = prevBodyOverflowRef.current;
    setMenuOpen(false);
    setContactOpen(false);
  };

  const navItems = [
    {
      label: "Home",
      to: "/",
      onClick: () => {
        if (isHome) window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
    },
    { label: "Services", to: toHomeSection("#services") },
    { label: "Fleet", to: toHomeSection("#fleet") },
    { label: "Reviews", to: toHomeSection("#testimonials") },
    { label: "Destinations", to: "/destinations" },
    { label: "About Us", to: "/about" },
  ];

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;
  const callHref = `tel:${CALL_NUMBER}`;

  return (
    <nav
      className={`site-navbar ${isHidden ? "site-navbar--hidden" : ""} ${isScrolled ? "site-navbar--scrolled" : ""} ${menuOpen ? "site-navbar--menu-open" : ""}`}
      style={{ transform: isHidden ? "translateY(-110%)" : "translateY(0)" }}
    >
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeAll}>
          <img className="logo-img" src={logoUrl} alt="V-Glide CABS" decoding="async" />
        </Link>

        <ul className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                onClick={() => {
                  item.onClick?.();
                  closeAll();
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-buttons">
          <a href={callHref} className="call-btn">
            <Phone size={16}/> Call
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="whatsapp-btn">
            <MessageCircle size={16}/> WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="nav-drawer-backdrop" role="presentation" onClick={closeAll}>
          <div
            id="mobile-nav-drawer"
            className="nav-drawer"
            role="dialog"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-drawer-header">
              <span className="nav-drawer-title">Menu</span>
              <button type="button" className="nav-drawer-close" onClick={closeAll} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <div className="nav-drawer-links" role="navigation" aria-label="Mobile navigation links">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="nav-drawer-link"
                  onClick={() => {
                    item.onClick?.();
                    closeAll();
                  }}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                className={`nav-drawer-link nav-drawer-contact ${contactOpen ? "is-open" : ""}`}
                onClick={() => setContactOpen((v) => !v)}
                aria-expanded={contactOpen}
              >
                Contact Us <Plus size={16} className="nav-contact-plus" aria-hidden="true" />
              </button>

              {contactOpen ? (
                <div className="nav-drawer-contact-panel" aria-label="Contact options">
                  <a href={callHref} className="nav-drawer-contact-item" onClick={closeAll}>
                    <Phone size={16} aria-hidden="true" /> Call {CALL_NUMBER}
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="nav-drawer-contact-item" onClick={closeAll}>
                    <MessageCircle size={16} aria-hidden="true" /> WhatsApp +91 {WHATSAPP_NUMBER.slice(-10)}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
