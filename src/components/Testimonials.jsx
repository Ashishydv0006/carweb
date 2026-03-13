import React from "react";
import { Star } from "lucide-react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import "./Testimonials.css";

const reviews = [
  { name: "Rahul", text: "Great service in Gurgaon, very punctual!", rating: 5 },
  { name: "Anjali", text: "Clean cars and friendly drivers in Delhi!", rating: 5 },
];

export default function Testimonials() {
  const sectionRef = useOnceInView({ threshold: 0.18 });

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <h2 data-animate style={{ "--delay": "0ms" }}>Customer Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card" data-animate style={{ "--delay": `${160 + i * 160}ms` }}>
            <p>"{r.text}"</p>
            <div className="reviewer">
              {Array(r.rating).fill(0).map((_, idx) => <Star key={idx} size={16} className="star"/>)}
              <span>{r.name}</span>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </section>
  );
}
