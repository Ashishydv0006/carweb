import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import AboutPreview from "./components/AboutPreview";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <AboutPreview />
      <Pricing />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}