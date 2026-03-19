/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from "react";

const BookingDraftContext = createContext(null);

export function BookingDraftProvider({ children }) {
  const [draft, setDraft] = useState({
    pickup: "",
    drop: "",
    tripType: "Local Trip",
    date: "",
    vehicleCategory: "",
  });

  const [version, setVersion] = useState(0);

  const value = useMemo(() => {
    const applyPreset = (partial) => {
      setDraft((d) => ({ ...d, ...partial }));
      setVersion((v) => v + 1);
    };

    return { draft, setDraft, applyPreset, version };
  }, [draft, version]);

  return <BookingDraftContext.Provider value={value}>{children}</BookingDraftContext.Provider>;
}

export function useBookingDraft() {
  const ctx = useContext(BookingDraftContext);
  if (!ctx) throw new Error("useBookingDraft must be used within BookingDraftProvider");
  return ctx;
}

