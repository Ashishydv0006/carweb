import React from "react";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Features from "./components/Features.jsx";
import PricingPlans from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import AboutPreview from "./components/AboutPreview";
import TourPreview from "./components/TourPreview.jsx";
import RoutesWeServe from "./components/RoutesWeServe.jsx";

export default function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <TourPreview />
      <RoutesWeServe />
      <AboutPreview />
      <PricingPlans />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
