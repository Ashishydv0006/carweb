import React from "react";
import "./About.css";
import { Clock, ShieldCheck, MapPin, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Redefining the Journey</h1>
          <p>
            Where three decades of trust meets modern mobility. From our roots
            in Gurgaon to our vision for the future, V-Glide moves you with
            precision and comfort.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="story-section">
        <div className="container">
          <h2>Our Story</h2>

          <p>
            Our journey began in <b>1990</b> as <b>Yogendra Taxi Service (YTS)</b>.
            At a time when Gurgaon’s roads were just beginning to expand, YTS
            was founded on a simple promise — reliable, safe and honest
            transportation.
          </p>

          <p>
            Over the next <b>34+ years</b>, YTS became a trusted name,
            successfully serving more than <b>500,000 passengers</b> and growing
            alongside Gurgaon’s transformation into a global hub.
          </p>

          <p>
            In <b>2025</b>, we reintroduced ourselves as <b>V-Glide</b> — a modern
            mobility brand built on the same trusted legacy, enhanced with
            technology and a renewed focus on premium passenger experience.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline">
        <h2>Our Journey</h2>

        <div className="timeline-container">
          <div className="timeline-item">
            <span>1990</span>
            <p>Founded as Yogendra Taxi Service in Gurgaon</p>
          </div>

          <div className="timeline-item">
            <span>2000 - 2020</span>
            <p>Expanded fleet and served thousands of customers</p>
          </div>

          <div className="timeline-item">
            <span>2025</span>
            <p>Rebranded to V-Glide with modern mobility vision</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose V-Glide</h2>

        <div className="why-grid">

          <div className="why-card">
            <Clock size={40} />
            <h3>Punctuality</h3>
            <p>
              With 35 years of city navigation experience, we ensure every ride
              arrives on time.
            </p>
          </div>

          <div className="why-card">
            <CheckCircle size={40} />
            <h3>Transparent Pricing</h3>
            <p>
              Clear and honest pricing with zero hidden charges.
            </p>
          </div>

          <div className="why-card">
            <ShieldCheck size={40} />
            <h3>Safety First</h3>
            <p>
              Professional drivers and carefully maintained vehicles.
            </p>
          </div>

          <div className="why-card">
            <MapPin size={40} />
            <h3>Local Expertise</h3>
            <p>
              Serving Gurgaon since 1990 — we know every route and shortcut.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-grid">

          <div className="stat">
            <h2>35+</h2>
            <p>Years of Experience</p>
          </div>

          <div className="stat">
            <h2>500K+</h2>
            <p>Satisfied Passengers</p>
          </div>

          <div className="stat">
            <h2>1990</h2>
            <p>Founded</p>
          </div>

          <div className="stat">
            <h2>2025</h2>
            <p>Rebranded as V-Glide</p>
          </div>

        </div>
      </section>

      {/* COMMITMENT */}
      <section className="commitment">
        <div className="container">
          <h2>Driven by History, Focused on Your Future</h2>

          <p>
            At V-Glide, we don’t just provide rides — we deliver peace of mind.
            Whether it's a quick city ride or a long-distance journey, our goal
            is to create a professional environment where you can relax and
            glide through your day.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;