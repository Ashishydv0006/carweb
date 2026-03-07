import React from "react";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import "./Services.css";

const services = [
  {
    title: "City Pickup & Drop",
    desc: "Comfortable rides within NCR with verified drivers.",
    icon: <MapPin size={28} />,
    img: "src/assets/2467682.jpg",
  },
  {
    title: "Airport Pickup & Drop",
    desc: "Reliable taxi service with punctual timings.",
    icon: <MapPin size={28} />,
    img: "src/assets/airbus.jpg",
  },
  {
    title: "24/7 Availability",
    desc: "Book anytime, we are ready to pick you up 24/7.",
    icon: <Clock size={28} />,
    img: "src/assets/247.jpg",
  },
  {
    title: "Verified Drivers",
    desc: "All our drivers are verified and experienced.",
    icon: <ShieldCheck size={28} />,
    img: "src/assets/drivers.jpg",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="services-subtitle">
          Premium taxi solutions in Delhi NCR with comfort and safety guaranteed.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <img src={s.img} alt={s.title} />
              <div className="service-icon">{s.icon}</div>
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}