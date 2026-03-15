import React from "react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import "./Pricing.css";

import sedanImg from "../assets/vehicles/sedan.jpg";
import primeSedanImg from "../assets/vehicles/prime-sedan.jpg";
import suvImg from "../assets/vehicles/suv.jpg";
import suvPlusImg from "../assets/vehicles/suv-plus.jpg";
import tempoTravellerImg from "../assets/vehicles/tempo-traveller.jpg";
import luxuryCoachImg from "../assets/vehicles/luxury-coach.jpg";

const vehicleTypes = [
  { type: "Sedan", icon: sedanImg, pos: "50% 50%" },
  { type: "Prime Sedan", icon: primeSedanImg, pos: "50% 40%" },
  { type: "SUV", icon: suvImg, pos: "50% 35%" },
  { type: "SUV+", icon: suvPlusImg, pos: "50% 50%" },
  { type: "Tempo Traveller", icon: tempoTravellerImg, pos: "50% 40%" },
  { type: "Luxury Coach", icon: luxuryCoachImg, pos: "50% 50%" },
];

export default function Pricing() {
  const sectionRef = useOnceInView({ threshold: 0.22 });

  return (
    <section className="pricing" id="pricing" ref={sectionRef}>
      <div className="container">
        <h2 data-animate style={{ "--delay": "0ms" }}>Our Fleet Options</h2>
        <p className="pricing-subtitle" data-animate style={{ "--delay": "120ms" }}>
          We provide these vehicle categories for both local and outstation travel.
        </p>
        <div className="pricing-grid">
          {vehicleTypes.map((r, i) => (
            <div key={i} className="pricing-card" data-animate style={{ "--delay": `${260 + i * 140}ms` }}>
              <div className="pricing-icon">
                <img src={r.icon} alt={r.type} loading="lazy" style={{ objectPosition: r.pos }} />
              </div>
              <h5>{r.type}</h5>
              <small>Available for Local &amp; Outstation</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
