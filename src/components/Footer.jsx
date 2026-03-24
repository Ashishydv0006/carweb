import React from "react";
import { Link } from "react-router-dom";
import { Clock, MessageCircle, Phone } from "lucide-react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import { CALL_NUMBER, WHATSAPP_NUMBER } from "../constants/contact.js";
import logoUrl from "../assets/v-glide-logo.svg";
import "./Footer.css";

export default function Footer() {
  const footerRef = useOnceInView({ threshold: 0.18 });
  const year = new Date().getFullYear();

  const toHomeSection = (hash) => ({ pathname: "/", hash });

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;
  const callHref = `tel:${CALL_NUMBER}`;

  return (
    <footer className="footer" ref={footerRef} aria-label="Footer">
      <div className="container footer-shell">
        <div className="row g-4 footer-row">
          <div className="col-12 col-md-6 col-xl-3" data-animate style={{ "--delay": "0ms" }}>
            <Link to="/" className="footer-logo" aria-label="Go to home">
              <img src={logoUrl} alt="V-Glide" className="footer-logoImg" decoding="async" />
            </Link>
            <p className="footer-address">
              Demo Address: Plot 00, Demo Street, Gurgaon, Haryana, India
            </p>
          </div>

          <div className="col-12 col-md-6 col-xl-3" data-animate style={{ "--delay": "120ms" }}>
            <div className="footer-colTitle">Explore</div>
            <Link to="/" className="footer-link">Home</Link>
            <Link to={toHomeSection("#services")} className="footer-link">Services</Link>
            <Link to={toHomeSection("#fleet")} className="footer-link">Fleet</Link>
            <Link to={toHomeSection("#testimonials")} className="footer-link">Reviews</Link>
            <Link to="/destinations" className="footer-link">Destinations</Link>
            <Link to="/about" className="footer-link">About Us</Link>
          </div>

          <div className="col-12 col-md-6 col-xl-3" data-animate style={{ "--delay": "240ms" }}>
            <div className="footer-colTitle">Legal</div>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms &amp; Conditions</Link>
            <Link to="/cookies" className="footer-link">Cookie Policy</Link>
          </div>

          <div className="col-12 col-md-6 col-xl-3" data-animate style={{ "--delay": "360ms" }}>
            <div className="footer-colTitle">Contact Us</div>
            <a className="footer-link" href={callHref}>
              <span className="footer-linkIcon" aria-hidden="true"><Phone size={16} /></span>
              Call {CALL_NUMBER}
            </a>
            <a className="footer-link" href={whatsappHref} target="_blank" rel="noreferrer">
              <span className="footer-linkIcon" aria-hidden="true"><MessageCircle size={16} /></span>
              WhatsApp
            </a>
            <div className="footer-meta">
              <span className="footer-metaRow">
                <Clock size={14} aria-hidden="true" />
                24/7 bookings
              </span>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom" data-animate style={{ "--delay": "440ms" }}>
          <div className="footer-bottomLeft">
            {"\u00A9"} {year} V-Glide Cabs Private Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
