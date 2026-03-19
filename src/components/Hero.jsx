import React, { useEffect, useMemo, useRef, useState } from "react";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_NUMBER } from "../constants/contact.js";
import { useBookingDraft } from "../context/BookingDraftContext.jsx";
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

export default function Hero() {
  const { draft, setDraft } = useBookingDraft();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("IN");
  const [countryOpen, setCountryOpen] = useState(false);
  const [countryQuery, setCountryQuery] = useState("");
  const [mobileDigits, setMobileDigits] = useState("");

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
      `Pickup: ${draft.pickup}\n` +
      `Drop: ${draft.drop}\n` +
      `Vehicle: ${draft.vehicleCategory || "Any"}\n` +
      `Date: ${draft.date}\n` +
      `Trip: ${draft.tripType}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hero" id="booking">
      <div className="container">
        <div className="hero-overlay">
          <h1>V-Glide Cabs Premium Service</h1>
          <p>
            Luxury {"\u2022"} Reliable {"\u2022"} 24/7 Available in Delhi NCR
          </p>
          <p className="trust">{"\u2605"} 4.6 Rated | 300K+ Happy Customers</p>

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
                  <span className="hero-country-caret" aria-hidden="true">
                    <ChevronDown size={16} />
                  </span>
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
                onChange={(e) => setMobileDigits(e.target.value.replace(/\\D/g, ""))}
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
              value={draft.pickup}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, pickup: v }));
              }}
              required
              aria-label="Pickup location (required)"
            />
            <input
              type="text"
              placeholder="Drop Location *"
              value={draft.drop}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, drop: v }));
              }}
              required
              aria-label="Drop location (required)"
            />
            <input
              type="text"
              placeholder="Vehicle Category (Optional)"
              value={draft.vehicleCategory}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, vehicleCategory: v }));
              }}
              aria-label="Vehicle category (optional)"
            />
            <div className={`hero-date ${draft.date ? "has-value" : ""}`} aria-label="Trip date (required)">
              <span className="hero-date-placeholder" aria-hidden="true">
                dd-mm-yy
              </span>
              <input
                type="date"
                value={draft.date}
                onChange={(e) => {
                  const v = e.target.value;
                  setDraft((d) => ({ ...d, date: v }));
                }}
                required
                aria-label="Trip date (required)"
              />
            </div>
            <select
              value={draft.tripType}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, tripType: v }));
              }}
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
    </section>
  );
}
