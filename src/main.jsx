import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import SpiderCursor from "./components/SpiderCursor.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import TouristPlaces from "./pages/TouristPlaces.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <SpiderCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourist-places" element={<TouristPlaces />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
