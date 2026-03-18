import React from "react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import { CALL_NUMBER, WHATSAPP_NUMBER } from "../constants/contact.js";
import "./CTA.css";

export default function CTA() {
  const sectionRef = useOnceInView({ threshold: 0.22 });
  const callHref = `tel:${CALL_NUMBER}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section className="cta" id="book" ref={sectionRef}>
      <div className="container">
        <h2 data-animate style={{ "--delay": "0ms" }}>Ready to Book Your Ride?</h2>
        <a href={callHref} className="cta-btn" data-animate style={{ "--delay": "160ms" }}>
          Call Now
        </a>
        <a
          href={whatsappHref}
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
