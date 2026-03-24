import React from "react";
import { MapPin, Clock, ShieldCheck } from "lucide-react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import cityPickupImg from "../assets/2467682.jpg";
import airportPickupImg from "../assets/airbus.jpg";
import availabilityImg from "../assets/247.jpg";
import verifiedDriversImg from "../assets/drivers.jpg";
import "./Services.css";

const services = [
  {
    title: "City Pickup & Drop",
    desc: "Comfortable rides within NCR with verified drivers.",
    icon: <MapPin size={28} />,
    img: cityPickupImg,
  },
  {
    title: "Airport Pickup & Drop",
    desc: "Reliable taxi service with punctual timings.",
    icon: <MapPin size={28} />,
    img: airportPickupImg,
  },
  {
    title: "24/7 Availability",
    desc: "Book anytime, we are ready to pick you up 24/7.",
    icon: <Clock size={28} />,
    img: availabilityImg,
  },
  {
    title: "Verified Drivers",
    desc: "All our drivers are verified and experienced.",
    icon: <ShieldCheck size={28} />,
    img: verifiedDriversImg,
  },
];

export default function Services() {
  const sectionRef = useOnceInView({ threshold: 0.18 });

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <h2 data-animate style={{ "--delay": "0ms" }}>Our Services</h2>
        <p className="services-subtitle" data-animate style={{ "--delay": "140ms" }}>
          Premium taxi solutions in Delhi NCR with comfort and safety guaranteed.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card"
              data-animate
              style={{ "--delay": `${220 + i * 140}ms` }}
            >
              <img src={s.img} alt={s.title} loading="lazy" decoding="async" />
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
