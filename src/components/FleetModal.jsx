import React, { useEffect } from "react";
import { CarFront, Luggage, Users, X } from "lucide-react";
import { useUI } from "../context/UIContext.jsx";
import "./FleetModal.css";

export default function FleetModal({ isOpen, vehicle, onClose, onSelect }) {
  const { openModal, closeModal } = useUI();

  useEffect(() => {
    if (!isOpen) return undefined;
    openModal();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      closeModal();
    };
  }, [closeModal, isOpen, onClose, openModal]);

  if (!isOpen || !vehicle) return null;

  return (
    <div className="fleet-modal-backdrop" role="presentation" onClick={onClose}>
      <div className="fleet-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="fleet-modal-head">
          <div>
            <p className="fleet-modal-eyebrow">Fleet details</p>
            <h3 className="fleet-modal-title">{vehicle.name}</h3>
            <p className="fleet-modal-desc">{vehicle.desc}</p>
          </div>
          <button type="button" className="fleet-modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="fleet-modal-stats" aria-label="Vehicle details">
          <div className="fleet-modal-stat">
            <Users size={16} aria-hidden="true" />
            <span>{vehicle.seats}</span>
          </div>
          <div className="fleet-modal-stat">
            <Luggage size={16} aria-hidden="true" />
            <span>{vehicle.luggage}</span>
          </div>
          <div className="fleet-modal-stat">
            <CarFront size={16} aria-hidden="true" />
            <span>AC</span>
          </div>
        </div>

        {vehicle.examples?.length ? (
          <div className="fleet-modal-block">
            <div className="fleet-modal-label">Example models</div>
            <div className="fleet-modal-chips">
              {vehicle.examples.map((x) => (
                <span key={x} className="fleet-modal-chip">
                  {x}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="fleet-modal-block">
          <div className="fleet-modal-label">Best for</div>
          <div className="fleet-modal-chips">
            {vehicle.bestFor.map((x) => (
              <span key={x} className="fleet-modal-chip">
                {x}
              </span>
            ))}
          </div>
        </div>

        <div className="fleet-modal-note">
          Final vehicle model depends on availability. We confirm the category and total quote before pickup.
        </div>

        <div className="fleet-modal-actions">
          <button type="button" className="fleet-modal-secondary" onClick={onClose}>
            Back
          </button>
          <button type="button" className="fleet-modal-primary" onClick={() => onSelect(vehicle)}>
            Select {vehicle.name}
          </button>
        </div>
      </div>
    </div>
  );
}
