import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tourPreviewCities } from "../data/touristPlaces";
import BookingModal from "./BookingModal";
import "./TourPreview.css";

const fallbackImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>` +
      `<defs>` +
      `<linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>` +
      `<stop offset='0%' stop-color='#0b0f1f'/>` +
      `<stop offset='100%' stop-color='#1c1f2a'/>` +
      `</linearGradient>` +
      `</defs>` +
      `<rect width='1200' height='800' fill='url(#g)'/>` +
      `<text x='50%' y='50%' fill='#d4af37' font-size='40' font-family='Inter, Arial' text-anchor='middle' dominant-baseline='middle'>` +
      `V-Glide Tours` +
      `</text>` +
      `</svg>`
  );

function TourPreview() {
  const featured = tourPreviewCities.slice(0, 3);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDrop, setSelectedDrop] = useState("");

  const onBook = (place) => {
    setSelectedDrop(`${place.city} - ${place.highlights[0]}`);
    setModalOpen(true);
  };

  return (
    <section className="tour-preview-section py-5">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <p className="tour-preview-eyebrow">Curated Journeys</p>
            <h2 className="tour-preview-title">Explore North India with V-Glide</h2>
            <p className="tour-preview-subtitle">
              Premium intercity rides from Gurgaon, Delhi, and Jaipur to India’s most iconic heritage sites.
            </p>
          </div>
          <Link className="tour-preview-viewAllBtn" to="/destinations">
            View All Destinations
          </Link>
        </div>

        <div className="row g-4">
          {featured.map((place) => (
            <div className="col-12 col-md-6 col-lg-4" key={place.id}>
              <div className="tour-preview-card h-100">
                <div className="tour-preview-imageWrap">
                  <img
                    className="tour-preview-image"
                    src={place.image}
                    alt={place.city}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <span className="tour-preview-badge">{place.city}</span>
                </div>
                <div className="tour-preview-cardBody">
                  <h3 className="tour-preview-cardTitle">{place.city}</h3>
                  <p className="tour-preview-cardText">{place.description}</p>
                  <p className="tour-preview-highlights">
                    {place.highlights.map((item, idx) => (
                      <span key={item}>
                        {item}
                        {idx < place.highlights.length - 1 ? " • " : ""}
                      </span>
                    ))}
                  </p>
                  <button type="button" className="tour-preview-bookBtn" onClick={() => onBook(place)}>
                    Book a Cab
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultDrop={selectedDrop}
      />
    </section>
  );
}

export default TourPreview;
