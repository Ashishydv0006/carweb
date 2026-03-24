import React from "react";
import "./Legal.css";

export default function Terms() {
  return (
    <main className="legal-page" aria-label="Terms and conditions page">
      <div className="container legal-shell">
        <header className="legal-hero">
          <h1 className="legal-title">Terms &amp; Conditions</h1>
          <p className="legal-subtitle">Last updated: March 24, 2026</p>
        </header>

        <section className="legal-content">
          <p>
            These Terms govern your use of the website and booking interactions with. By using the
            website, you agree to these Terms.
          </p>

          <h2>Bookings</h2>
          <ul>
            <li>Bookings are subject to availability and confirmation.</li>
            <li>Please ensure pickup and drop details are accurate to avoid delays.</li>
          </ul>

          <h2>Pricing</h2>
          <ul>
            <li>Fares may vary by route, timing, vehicle type, tolls, and applicable charges.</li>
            <li>Any special requirements should be communicated at the time of booking.</li>
          </ul>

          <h2>Cancellations &amp; No-Show</h2>
          <p>
            Cancellation/no-show charges may apply depending on route and timing. Confirm the policy for your booking
            during checkout or while coordinating with our team.
          </p>

          <h2>Liability</h2>
          <p>
            We strive for safe, timely service. However, delays may occur due to traffic, weather, road conditions, or
            other factors outside our control.
          </p>

          <h2>Contact</h2>
          <p>For questions about these Terms, contact us using the phone numbers listed on the website.</p>

          <div className="legal-note">
            This page is a general template. Replace/expand it with your exact booking, cancellation, and liability terms before launch.
          </div>
        </section>
      </div>
    </main>
  );
}

