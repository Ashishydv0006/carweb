import React, { useEffect, useMemo, useRef, useState } from "react";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { WHATSAPP_NUMBER } from "../constants/contact.js";
import "./BookingModal.css";
import "./Hero.css";

const regionNames =
  typeof Intl !== "undefined" && Intl.DisplayNames
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

function flagEmojiFromIso2(iso2) {
  const code = iso2?.toUpperCase?.();
  if (!code || code.length !== 2) return "";
  const A = 0x1f1e6;
  const base = "A".charCodeAt(0);
  return String.fromCodePoint(A + (code.charCodeAt(0) - base), A + (code.charCodeAt(1) - base));
}

const COUNTRY_OPTIONS = getCountries()
  .map((iso2) => ({
    iso2,
    code: getCountryCallingCode(iso2),
    flag: flagEmojiFromIso2(iso2),
    name: regionNames?.of?.(iso2) || iso2,
  }))
  .sort((a, b) => Number(a.code) - Number(b.code) || a.iso2.localeCompare(b.iso2));

const COUNTRY_BY_ISO = new Map(COUNTRY_OPTIONS.map((c) => [c.iso2, c]));

export default function BookingModal({ isOpen, onClose, defaultDrop }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("IN");
  const [countryOpen, setCountryOpen] = useState(false);
  const [countryQuery, setCountryQuery] = useState("");
  const [mobileDigits, setMobileDigits] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState(defaultDrop || "");
  const [date, setDate] = useState("");
  const [tripType, setTripType] = useState("Outstation Trip");

  const countryWrapRef = useRef(null);
  const countrySearchRef = useRef(null);

  const selectedCountry = COUNTRY_BY_ISO.get(country) || COUNTRY_BY_ISO.get("IN");

  const filteredCountries = useMemo(() => {
    const q = countryQuery.trim().toLowerCase();
    if (!q) return COUNTRY_OPTIONS;
    return COUNTRY_OPTIONS.filter((c) => {
      return (
        c.iso2.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        String(c.code).includes(q) ||
        `+${c.code}`.includes(q)
      );
    });
  }, [countryQuery]);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrop(defaultDrop || "");
  }, [defaultDrop]);

  useEffect(() => {
    if (!countryOpen) return undefined;

    const onDocDown = (e) => {
      const wrap = countryWrapRef.current;
      if (!wrap) return;
      if (e.target instanceof Node && wrap.contains(e.target)) return;
      setCountryOpen(false);
    };

    const onKey = (e) => {
      if (e.key === "Escape") setCountryOpen(false);
    };

    document.addEventListener("mousedown", onDocDown);
    document.addEventListener("keydown", onKey);

    window.setTimeout(() => countrySearchRef.current?.focus?.(), 0);

    return () => {
      document.removeEventListener("mousedown", onDocDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [countryOpen]);

  const onSubmit = (e) => {
    e.preventDefault();

    const code = getCountryCallingCode(country);
    const mobileFull = `+${code}${mobileDigits}`;

    const message =
      `New Trip Booking\n` +
      `Name: ${name}\n` +
      `Mobile: ${mobileFull}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Date: ${date}\n` +
      `Trip: ${tripType}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="booking-modal-header">
          <div>
            <p className="booking-modal-eyebrow">Book Your Ride</p>
            <h3 className="booking-modal-title">Premium Cab Booking</h3>
          </div>
          <button
            type="button"
            className="booking-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form className="hero-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Full name (required)"
            autoComplete="name"
          />
          <div className="hero-phone" aria-label="Mobile number (required)">
            <div className="hero-country" ref={countryWrapRef}>
              <button
                type="button"
                className="hero-country-trigger"
                onClick={() => setCountryOpen((v) => !v)}
                aria-label="Select country code"
                aria-expanded={countryOpen}
              >
                <span className="hero-country-flag" aria-hidden="true">
                  {selectedCountry?.flag}
                </span>
                <span className="hero-country-code">+{selectedCountry?.code}</span>
              </button>

              {countryOpen ? (
                <div className="hero-country-panel" role="dialog" aria-label="Select country code">
                  <input
                    ref={countrySearchRef}
                    className="hero-country-search"
                    type="text"
                    value={countryQuery}
                    onChange={(e) => setCountryQuery(e.target.value)}
                    placeholder="Search country..."
                    aria-label="Search country"
                  />
                  <div className="hero-country-list" role="listbox" aria-label="Country list">
                    {filteredCountries.map((c) => (
                      <button
                        key={c.iso2}
                        type="button"
                        className={`hero-country-item ${c.iso2 === country ? "is-active" : ""}`}
                        onClick={() => {
                          setCountry(c.iso2);
                          setCountryOpen(false);
                          setCountryQuery("");
                        }}
                        role="option"
                        aria-selected={c.iso2 === country}
                      >
                        <span className="hero-country-item-flag" aria-hidden="true">
                          {c.flag}
                        </span>
                        <span className="hero-country-item-name">{c.name}</span>
                        <span className="hero-country-item-code">+{c.code}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <input
              type="text"
              placeholder="Mobile Number *"
              value={mobileDigits}
              onChange={(e) => setMobileDigits(e.target.value.replace(/\D/g, ""))}
              required
              inputMode="numeric"
              autoComplete="tel-national"
              pattern="^[0-9]{7,15}$"
              maxLength={15}
              title="Enter a valid mobile number (digits only)"
            />
          </div>
          <input
            type="text"
            placeholder="Pickup Location *"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
            aria-label="Pickup location (required)"
          />
          <input
            type="text"
            placeholder="Drop Location *"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            required
            aria-label="Drop location (required)"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            aria-label="Trip date (required)"
          />
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            required
            aria-label="Trip type (required)"
          >
            <option>Local Trip</option>
            <option>Outstation Trip</option>
          </select>
          <button type="submit" className="hero-submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

