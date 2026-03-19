import React from "react";
import { CarFront, Luggage, Sparkles, Users } from "lucide-react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import "./Pricing.css";

const fleetTypes = [
  {
    key: "sedan",
    name: "Sedan",
    desc: "Smooth city rides with great comfort for daily travel.",
    seats: "4 seats",
    luggage: "2 bags",
    bestFor: ["Local", "Airport", "Outstation (light)"],
    accent: "#D4AF37",
  },
  {
    key: "prime-sedan",
    name: "Prime Sedan",
    desc: "Premium feel and extra comfort for important trips.",
    seats: "4 seats",
    luggage: "2–3 bags",
    bestFor: ["Corporate", "Airport", "Outstation comfort"],
    accent: "#8B5CF6",
    featured: true,
  },
  {
    key: "suv",
    name: "SUV",
    desc: "Extra space for families and long rides with comfort.",
    seats: "6 seats",
    luggage: "3–4 bags",
    bestFor: ["Family", "Tours", "Hill routes"],
    accent: "#10B981",
  },
  {
    key: "suv-plus",
    name: "SUV+",
    desc: "Bigger cabin and luggage space for groups and tours.",
    seats: "7 seats",
    luggage: "4–5 bags",
    bestFor: ["Groups", "Airport + luggage", "Long tours"],
    accent: "#F97316",
  },
  {
    key: "tempo",
    name: "Tempo Traveller",
    desc: "Perfect for group travel with comfortable seating layout.",
    seats: "12–17 seats",
    luggage: "Group luggage",
    bestFor: ["Group tours", "Weddings", "Corporate outing"],
    accent: "#38BDF8",
  },
  {
    key: "coach",
    name: "Deluxe Coach",
    desc: "Large-group premium touring with maximum comfort.",
    seats: "30–45 seats",
    luggage: "Large luggage",
    bestFor: ["Large groups", "Events", "Pilgrimage"],
    accent: "#E11D48",
  },
];

export default function PricingPlans() {
  const sectionRef = useOnceInView({ threshold: 0.14, fallbackDelayMs: 900 });

  return (
    <section className="pricing" id="fleet" ref={sectionRef}>
      <div className="container">
        <header className="pricing-header">
          <p className="pricing-kicker" data-animate style={{ "--delay": "0ms" }}>
            Fleet Options
          </p>
          <h2 data-animate style={{ "--delay": "120ms" }}>Sedan → Coach</h2>
          <p className="pricing-subtitle" data-animate style={{ "--delay": "240ms" }}>
            Choose a category and share your route. We confirm availability and share a clear total quote before pickup.
          </p>
        </header>

        <div className="fleet-grid" role="list">
          {fleetTypes.map((vehicle, i) => (
            <article
              key={vehicle.key}
              className={`fleet-card ${vehicle.featured ? "is-featured" : ""}`}
              style={{ "--delay": `${340 + i * 110}ms`, "--accent": vehicle.accent }}
              data-animate
              role="listitem"
            >
              <div className="fleet-head">
                <div className="fleet-nameRow">
                  <h3 className="fleet-name">{vehicle.name}</h3>
                  {vehicle.featured ? (
                    <span className="fleet-pill">
                      <Sparkles size={14} aria-hidden="true" /> Recommended
                    </span>
                  ) : null}
                </div>
                <p className="fleet-desc">{vehicle.desc}</p>
              </div>

              <div className="fleet-stats" aria-label={`${vehicle.name} quick details`}>
                <div className="fleet-stat">
                  <Users size={16} aria-hidden="true" />
                  <span>{vehicle.seats}</span>
                </div>
                <div className="fleet-stat">
                  <Luggage size={16} aria-hidden="true" />
                  <span>{vehicle.luggage}</span>
                </div>
                <div className="fleet-stat">
                  <CarFront size={16} aria-hidden="true" />
                  <span>AC</span>
                </div>
              </div>

              <div className="fleet-best">
                <div className="fleet-bestLabel">Best for</div>
                <div className="fleet-chips">
                  {vehicle.bestFor.map((item) => (
                    <span key={item} className="fleet-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
