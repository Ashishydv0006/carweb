import React from "react";
import "./Legal.css";

export default function PrivacyPolicy() {
  return (
    <main className="legal-page" aria-label="Privacy policy page">
      <div className="container legal-shell">
        <header className="legal-hero">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: March 24, 2026</p>
        </header>

        <section className="legal-content">
          <p>
            This Privacy Policy explains how collects, uses, and protects information when you
            use our website and contact us for bookings.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Contact details you provide (such as name and phone number).</li>
            <li>Trip details you provide (pickup/drop, date/time, and preferences).</li>
            <li>Basic technical data (e.g., browser/device information) to help the site function and improve reliability.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To confirm bookings, coordinate pickups, and provide customer support.</li>
            <li>To improve our services and website performance.</li>
            <li>To prevent fraud and maintain platform safety.</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            We do not sell your personal information. We may share limited details with drivers and operational partners
            only as needed to fulfill your booking.
          </p>

          <h2>Data Retention</h2>
          <p>We retain booking-related data only as long as necessary for operations, compliance, and dispute resolution.</p>

          <h2>Your Choices</h2>
          <p>
            You may request correction or deletion of your information where applicable by contacting us using the phone
            numbers listed on the website.
          </p>

          <div className="legal-note">
            This page is a general template. Replace/expand it with your exact business practices and legal counsel guidance before launch.
          </div>
        </section>
      </div>
    </main>
  );
}

