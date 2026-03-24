import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import SpiderCursor from "./components/SpiderCursor.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Destinations from "./pages/Destinations.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import Cookies from "./pages/Cookies.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UIProvider } from "./context/UIContext.jsx";
import { BookingDraftProvider } from "./context/BookingDraftContext.jsx";
import MobileQuickActions from "./components/MobileQuickActions.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UIProvider>
      <BookingDraftProvider>
        <BrowserRouter>
          <Navbar />
          <SpiderCursor />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          <Footer />
          <MobileQuickActions />
        </BrowserRouter>
      </BookingDraftProvider>
    </UIProvider>
  </React.StrictMode>
);
