import React from "react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import "./CTA.css";

export default function CTA() {
  const sectionRef = useOnceInView({ threshold: 0.22 });

  return (
    <section className="cta" id="book" ref={sectionRef}>
      <div className="container">
        <h2 data-animate style={{ "--delay": "0ms" }}>Ready to Book Your Ride?</h2>
        <a href="tel:+911234567890" className="cta-btn" data-animate style={{ "--delay": "160ms" }}>
          Call Now
        </a>
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noreferrer"
          className="cta-btn whatsapp"
          data-animate
          style={{ "--delay": "280ms" }}
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
