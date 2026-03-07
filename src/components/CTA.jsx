import React from "react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta" id="book">
      <div className="container"><h2>Ready to Book Your Ride?</h2>
        <a href="tel:+911234567890" className="cta-btn">Call Now</a>
        <a href="https://wa.me/911234567890" target="_blank" className="cta-btn whatsapp">WhatsApp</a></div>
    </section>
  );
}