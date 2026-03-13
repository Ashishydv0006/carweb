import React from "react";
import "./About.css";
import { Clock, ShieldCheck, MapPin, CheckCircle } from "lucide-react";
import { useOnceInView } from "../hooks/useOnceInView.js";

const About = () => {
  const heroRef = useOnceInView({ threshold: 0.3 });
  const storyRef = useOnceInView({ threshold: 0.22 });
  const timelineRef = useOnceInView({ threshold: 0.2 });
  const statsRef = useOnceInView({ threshold: 0.18 });
  const commitmentRef = useOnceInView({ threshold: 0.22 });

  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero" ref={heroRef}>
        <div className="hero-content">
          <h1 data-animate style={{ "--delay": "0ms" }}>Redefining the Journey</h1>
          <p data-animate style={{ "--delay": "140ms" }}>
            Where three decades of trust meets modern mobility. From our roots
            in Gurgaon to our vision for the future, V-Glide moves you with
            precision and comfort.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="story-section" ref={storyRef}>
        <div className="container">
          <h2 data-animate style={{ "--delay": "0ms" }}>Our Story</h2>

          <p data-animate style={{ "--delay": "140ms" }}>
            Our journey began in <b>1990</b> as <b>Yogendra Taxi Service (YTS)</b>.
            At a time when Gurgaon’s roads were just beginning to expand, YTS
            was founded on a simple promise — reliable, safe and honest
            transportation.
          </p>

          <p data-animate style={{ "--delay": "260ms" }}>
            Over the next <b>34+ years</b>, YTS became a trusted name,
            successfully serving more than <b>500,000 passengers</b> and growing
            alongside Gurgaon’s transformation into a global hub.
          </p>

          <p data-animate style={{ "--delay": "380ms" }}>
            In <b>2025</b>, we reintroduced ourselves as <b>V-Glide</b> — a modern
            mobility brand built on the same trusted legacy, enhanced with
            technology and a renewed focus on premium passenger experience.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline" ref={timelineRef}>
        <h2 data-animate style={{ "--delay": "0ms" }}>Our Journey</h2>

        <div className="timeline-container">
          <div className="timeline-item" data-animate style={{ "--delay": "140ms" }}>
            <span>1990</span>
            <p>Founded as Yogendra Taxi Service in Gurgaon</p>
          </div>

          <div className="timeline-item" data-animate style={{ "--delay": "280ms" }}>
            <span>2000 - 2020</span>
            <p>Expanded fleet and served thousands of customers</p>
          </div>

          <div className="timeline-item" data-animate style={{ "--delay": "420ms" }}>
            <span>2025</span>
            <p>Rebranded to V-Glide with modern mobility vision</p>
          </div>
        </div>
      </section>

      

      {/* STATS */}
      <section className="stats" ref={statsRef}>
        <div className="stats-grid">

          <div className="stat" data-animate style={{ "--delay": "120ms" }}>
            <div className="stat-icon"><Clock size={22} /></div>
            <h2>35+</h2>
            <p>Years of Experience</p>
          </div>

          <div className="stat" data-animate style={{ "--delay": "240ms" }}>
            <div className="stat-icon"><CheckCircle size={22} /></div>
            <h2>500K+</h2>
            <p>Satisfied Passengers</p>
          </div>

          <div className="stat" data-animate style={{ "--delay": "360ms" }}>
            <div className="stat-icon"><MapPin size={22} /></div>
            <h2>1990</h2>
            <p>Founded</p>
          </div>

          <div className="stat" data-animate style={{ "--delay": "480ms" }}>
            <div className="stat-icon"><ShieldCheck size={22} /></div>
            <h2>2025</h2>
            <p>Rebranded as V-Glide</p>
          </div>

        </div>
      </section>

      {/* COMMITMENT */}
      <section className="commitment" ref={commitmentRef}>
        <div className="container">
          <h2 data-animate style={{ "--delay": "0ms" }}>Driven by History, Focused on Your Future</h2>

          <p data-animate style={{ "--delay": "160ms" }}>
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
