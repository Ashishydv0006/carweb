import React, { useState } from "react";
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
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Our Rates</h2>
      <div className="pricing-tabs">
        <button className={tab==="local"?"active":""} onClick={()=>setTab("local")}>Inside City</button>
        <button className={tab==="outstation"?"active":""} onClick={()=>setTab("outstation")}>Outstation</button>
      </div>
      <div className="pricing-grid">
        {tab==="local" ? localRates.map((r,i)=>(
          <div key={i} className="pricing-card">
            <h5>{r.type}</h5>
            <p>{r.hours}</p>
            <strong>{r.price}</strong>
          </div>
        )) : outstationRates.map((r,i)=>(
          <div key={i} className="pricing-card">
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