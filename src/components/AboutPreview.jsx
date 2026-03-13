import React from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

const AboutPreview = () => {
  return (
    <section className="about-preview">

      <div className="about-preview-container">

        <div className="about-text">

          <h2>35 Years of Trusted Travel</h2>

          <p>
            Our journey began in <b>1990</b> as Yogendra Taxi Service.
            For more than three decades we served thousands of passengers
            with reliable and honest transportation across Gurgaon.
          </p>

          <p>
            Today we continue that legacy as <b>V-Glide</b>, bringing
            modern mobility, professional drivers, and premium travel
            experiences to every ride.
          </p>

          <Link to="/about" className="about-btn">
            Discover Our Story
          </Link>

        </div>

        <div className="about-image">
          <img src="/images/cab-about.jpg" alt="V-Glide Taxi Service" />
        </div>

      </div>

    </section>
  );
};

export default AboutPreview;