import React, { useState } from "react";
import touristCityCards from "../data/touristPlaces";
import BookingModal from "../components/BookingModal";
import "./Destinations.css";

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
      `<text x='50%' y='50%' fill='#d4af37' font-size='42' font-family='Inter, Arial' text-anchor='middle' dominant-baseline='middle'>` +
      `V-Glide Destinations` +
      `</text>` +
      `</svg>`
  );

const Destinations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDrop, setSelectedDrop] = useState("");

  const onBook = (place) => {
    setSelectedDrop(`${place.city} - ${place.primaryPlace}`);
    setModalOpen(true);
  };

  return (
    <section className="tourist-page">
      <div className="container">
        <div className="tourist-hero mb-4">
          <div>
            <p className="tourist-eyebrow">Premium Destinations</p>
            <h2 className="tourist-title">North India Highlights & India Wide Icons</h2>
            <p className="tourist-subtitle">
              Nearby favorites first, followed by India-wide icons for premium intercity touring.
            </p>
          </div>
          <div className="tourist-hero-accent" />
        </div>

        <div className="row g-4">
          {touristCityCards.map((place) => (
            <div className="col-12 col-md-6 col-lg-4" key={place.id}>
              <div className="tourist-card h-100">
                <div className="tourist-imageWrap">
                  <img
                    className="tourist-image"
                    src={place.image}
                    alt={place.primaryPlace}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <span className="tourist-badge">{place.city}</span>
                </div>
                <div className="tourist-cardBody">
                  <div className="d-flex flex-column gap-1 mb-2">
                    <h3 className="tourist-cardTitle">{place.city}</h3>
                    <p className="tourist-cardMeta">{place.state}</p>
                  </div>
                  <p className="tourist-cardText">{place.description}</p>
                  <ul className="tourist-highlights">
                    {place.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <button type="button" className="tourist-bookBtn" onClick={() => onBook(place)}>
                    Book Now
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
};

export default Destinations;
