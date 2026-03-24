import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

const AboutPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-preview" ref={sectionRef}>

      <div className="about-preview-container">

        <div className="about-text">

          <h2 data-animate="left" style={{ "--delay": "0ms" }}>35 Years of Trusted Travel</h2>

          <p data-animate="left" style={{ "--delay": "120ms" }}>
            Our journey began in <b>1990</b> as Yogendra Taxi Service.
            For more than three decades we served thousands of passengers
            with reliable and honest transportation across Gurgaon.
          </p>

          <p data-animate="left" style={{ "--delay": "220ms" }}>
            Today we continue that legacy as <b>V-Glide</b>, bringing
            modern mobility, professional drivers, and premium travel
            experiences to every ride.
          </p>

          <Link to="/about" className="about-btn" data-animate="left" style={{ "--delay": "340ms" }}>
            Discover Our Story
          </Link>

        </div>

        <div className="about-image">
          <img src="src/assets/car.jpeg" alt="V-Glide Taxi Service" />
        </div>

      </div>

    </section>
  );
};

export default AboutPreview;
