import React from "react";
import "./Legal.css";

export default function Cookies() {
  return (
    <main className="legal-page" aria-label="Cookie policy page">
      <div className="container legal-shell">
        <header className="legal-hero">
          <h1 className="legal-title">Cookie Policy</h1>
          <p className="legal-subtitle">Last updated: March 24, 2026</p>
        </header>

        <section className="legal-content">
          <p>
            Cookies are small files stored on your device that help websites function and remember preferences. This
            website may use cookies or similar technologies to improve your experience.
          </p>

          <h2>What We Use Cookies For</h2>
          <ul>
            <li>Essential functionality and basic site performance.</li>
            <li>Remembering preferences (where applicable).</li>
            <li>Measuring usage to improve usability and reliability.</li>
          </ul>

          <h2>Your Controls</h2>
          <p>
            You can control or delete cookies through your browser settings. Disabling cookies may affect how parts of
            the website work.
          </p>

          <div className="legal-note">
            If you add analytics/marketing tools, update this policy with the exact providers, purposes, and opt-out instructions.
          </div>
        </section>
      </div>
    </main>
  );
}

