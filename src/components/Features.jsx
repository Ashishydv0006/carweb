import React from "react";
import { ShieldCheck, Star, Clock } from "lucide-react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import "./Features.css";
import carWash from "../assets/car-wash.png";
import invoice from "../assets/invoice.png";
import chauffeur from "../assets/chauffeur.png";


const features = [
  { 
    icon: <img src={carWash} alt="Car Wash" className="feature-img" />, 
    title: "Clean and Hygienic Car", 
    desc: "Enjoy a spotless, well-sanitized car every time for a comfortable and safe ride."
  },
  { 
    icon: <img src={invoice} alt="Transparent Billing" className="feature-img" />, 
    title: "Transparent Billing", 
    desc: "Clear, upfront pricing with no hidden charges—pay only for what you see."
  },
  { 
    icon: <img src={chauffeur} alt="Expert Chauffeurs" className="feature-img" />, 
    title: "Expert Chauffeurs", 
    desc: "Professional, well-trained chauffeurs committed to giving you a smooth and secure journey."
  },
];

export default function Features() {
  const sectionRef = useOnceInView({ threshold: 0.18 });

  return (
    <section className="features" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <h2 data-animate style={{ "--delay": "0ms" }}>Why Choose V-Glide</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-card"
                data-animate
                style={{ "--delay": `${160 + i * 140}ms` }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
