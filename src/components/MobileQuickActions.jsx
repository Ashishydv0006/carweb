import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { CALL_NUMBER, WHATSAPP_NUMBER } from "../constants/contact.js";
import { useUI } from "../context/UIContext.jsx";
import "./MobileQuickActions.css";

export default function MobileQuickActions() {
  const { openModalCount } = useUI();
  if (openModalCount > 0) return null;

  const callHref = `tel:${CALL_NUMBER}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="mqa" role="region" aria-label="Quick actions">
      <a className="mqa-btn mqa-call" href={callHref} aria-label={`Call ${CALL_NUMBER}`}>
        <Phone size={18} aria-hidden="true" />
        <span>Call</span>
      </a>
      <a
        className="mqa-btn mqa-wa"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
