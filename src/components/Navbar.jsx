import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">V-Glide</div>

        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>

        <div className="nav-buttons">
          <a href="tel:+911234567890" className="call-btn">
            <Phone size={16}/> Call
          </a>
          <a href="https://wa.me/+918769693066" target="_blank" className="whatsapp-btn">
            <MessageCircle size={16}/> WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}