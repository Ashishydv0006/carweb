import React, { useState } from "react";
import { useOnceInView } from "../hooks/useOnceInView.js";
import "./Pricing.css";

const localRates = [
  { type: "Sedan (Dzire)", hours: "8hr/80km", price: "₹1,500" },
  { type: "Prime Sedan (Ciaz)", hours: "8hr/80km", price: "₹1,700" },
  { type: "SUV (Ertiga)", hours: "8hr/80km", price: "₹2,000" },
  { type: "SUV+ (Innova)", hours: "8hr/80km", price: "₹2,500" },
];

const outstationRates = [
  { type: "Sedan (Dzire)", perKm: "₹14/km", note: "250 km per day.", driver:"Night Allowance: ₹500/day" },
  { type: "Prime Sedan (Ciaz)", perKm: "₹16/km", note: "250 km per day. ", driver:"Night Allowance: ₹500/day" },
  { type: "SUV (Ertiga)", perKm: "₹18/km", note: "250 km per day. ", driver:"Night Allowance: ₹500/day" },
  { type: "SUV+ (Innova)", perKm: "₹22/km", note: "250 km per day. ", driver:"Night Allowance: ₹500/day" },
];

export default function Pricing() {
  const [tab, setTab] = useState("local");
  const sectionRef = useOnceInView({ threshold: 0.22 });

  return (
    <section className="pricing" id="pricing" ref={sectionRef}>
      <div className="container">
        <h2 data-animate style={{ "--delay": "0ms" }}>Our Rates</h2>
      <div className="pricing-tabs" data-animate style={{ "--delay": "120ms" }}>
        <button className={tab==="local"?"active":""} onClick={()=>setTab("local")}>Inside City</button>
        <button className={tab==="outstation"?"active":""} onClick={()=>setTab("outstation")}>Outstation</button>
      </div>
      <div className="pricing-grid">
        {tab==="local" ? localRates.map((r,i)=>(
          <div key={i} className="pricing-card" data-animate style={{ "--delay": `${260 + i * 140}ms` }}>
            <h5>{r.type}</h5>
            <p>{r.hours}</p>
            <strong>{r.price}</strong>
          </div>
        )) : outstationRates.map((r,i)=>(
          <div key={i} className="pricing-card" data-animate style={{ "--delay": `${260 + i * 140}ms` }}>
            <h5>{r.type}</h5>
            <p>{r.perKm}</p>
            <small>{r.note}</small>
            <br />
            <small>{r.driver}</small>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
