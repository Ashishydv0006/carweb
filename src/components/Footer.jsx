import React from "react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import "./Footer.css";

export default function Footer() {
  const footerRef = useOnceInView({ threshold: 0.18 });

  return (
    <footer className="footer" ref={footerRef}>
      <p data-animate style={{ "--delay": "0ms" }}>
        {"\u00A9"} 2026 V-Glide Cabs Private Limited. All Rights Reserved.
      </p>
    </footer>
  );
}
