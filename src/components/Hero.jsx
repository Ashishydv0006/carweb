import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-overlay">
        <h1>V-Glide Premium Taxi Service</h1>
        <p>Luxury • Reliable • 24/7 Available in Delhi NCR</p>
        <p className="trust">★ 5.0 Rated | 5000+ Happy Customers</p>

        <form className="hero-form">
          <input type="text" placeholder="Pickup Location" />
          <input type="text" placeholder="Drop Location" />
          <input type="date" />
          <select>
                <option>Local Trip</option>
                <option>Outstation Trip</option>
              </select>
          <button>Book Now</button>
        </form>
      </div>
      </div>
    </section>
  );
}