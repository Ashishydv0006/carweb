import React, { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useBookingDraft } from "../context/BookingDraftContext.jsx";
import { useScrollToSection } from "../hooks/useScrollToSection.js";
import BookingModal from "./BookingModal.jsx";
import "./RoutesWeServe.css";

const routes = [
  { from: "Gurgaon", to: "Delhi", type: "Local Trip", vehicle: "Sedan" },
  { from: "Gurgaon", to: "Airport (DEL)", type: "Local Trip", vehicle: "Prime Sedan" },
  { from: "Delhi", to: "Agra", type: "Outstation Trip", vehicle: "SUV" },
  { from: "Delhi", to: "Jaipur", type: "Outstation Trip", vehicle: "SUV+" },
  { from: "Delhi", to: "Rishikesh", type: "Outstation Trip", vehicle: "SUV" },
  { from: "Delhi", to: "Shimla", type: "Outstation Trip", vehicle: "SUV+" },
];

export default function RoutesWeServe() {
  const { applyPreset } = useBookingDraft();
  const { goToSection } = useScrollToSection();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDefaults, setBookingDefaults] = useState({
    pickup: "",
    drop: "",
    tripType: "Outstation Trip",
    vehicleCategory: "",
  });
  const [bookingKey, setBookingKey] = useState(0);

  return (
    <section className="routes" id="routes">
      <div className="container routes-container">
        <div className="routes-head">
          <p className="routes-kicker">Routes We Serve</p>
          <h2 className="routes-title">Popular Delhi NCR Routes</h2>
          <p className="routes-sub">Tap a route to auto-fill pickup & drop in the booking form.</p>
        </div>

        <div className="routes-grid" role="list">
          {routes.map((r) => (
            <article
              key={`${r.from}-${r.to}`}
              className="route-card"
              onClick={() => {
                applyPreset({ pickup: r.from, drop: r.to, tripType: r.type, vehicleCategory: r.vehicle });
                goToSection("#booking");
              }}
              tabIndex={0}
              role="listitem"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  applyPreset({ pickup: r.from, drop: r.to, tripType: r.type, vehicleCategory: r.vehicle });
                  goToSection("#booking");
                }
              }}
            >
              <div className="route-row">
                <span className="route-pin" aria-hidden="true">
                  <MapPin size={16} />
                </span>
                <span className="route-from">{r.from}</span>
                <span className="route-arrow" aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
                <span className="route-to">{r.to}</span>
              </div>
              <div className="route-meta">
                <div className="route-metaLeft">
                  <span className="route-pill">{r.type}</span>
                  <span className="route-pill">Suggested: {r.vehicle}</span>
                </div>
                <button
                  type="button"
                  className="route-bookBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    applyPreset({ pickup: r.from, drop: r.to, tripType: r.type, vehicleCategory: r.vehicle });
                    setBookingDefaults({
                      pickup: r.from,
                      drop: r.to,
                      tripType: r.type,
                      vehicleCategory: r.vehicle,
                    });
                    setBookingKey((k) => k + 1);
                    setBookingOpen(true);
                  }}
                  aria-label={`Book ${r.from} to ${r.to}`}
                >
                  Book
                </button>
              </div>
            </article>
          ))}
        </div>

        <BookingModal
          key={bookingKey}
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          defaultPickup={bookingDefaults.pickup}
          defaultDrop={bookingDefaults.drop}
          defaultTripType={bookingDefaults.tripType}
          defaultVehicleCategory={bookingDefaults.vehicleCategory}
        />
      </div>
    </section>
  );
}
