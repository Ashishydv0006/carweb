import React, { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;

        const y = window.scrollY || 0;
        const lastY = lastScrollYRef.current;
        const delta = y - lastY;

        setIsScrolled(y > 8);

        if (y <= 8) {
          setIsHidden(false);
        } else if (delta > 4) {
          setIsHidden(true);
        } else if (delta < -4) {
          setIsHidden(false);
        }

        lastScrollYRef.current = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isHome = location.pathname === "/";
  const toHomeSection = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <nav
      className={`site-navbar ${isHidden ? "site-navbar--hidden" : ""} ${isScrolled ? "site-navbar--scrolled" : ""}`}
    >
      <div className="container nav-container">
        <Link to="/" className="logo">
          V-Glide
        </Link>

        <ul className="nav-links">
          <li><Link to={toHomeSection("#services")}>Services</Link></li>
          <li><Link to={toHomeSection("#pricing")}>Pricing</Link></li>
          <li><Link to={toHomeSection("#testimonials")}>Reviews</Link></li>
          <li><Link to="/tourist-places">Destinations</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>

        <div className="nav-buttons">
          <a href="tel:+911234567890" className="call-btn">
            <Phone size={16}/> Call
          </a>
          <a href="https://wa.me/+918769693066" target="_blank" rel="noreferrer" className="whatsapp-btn">
            <MessageCircle size={16}/> WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
