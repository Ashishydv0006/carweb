/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from "react";

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [openModalCount, setOpenModalCount] = useState(0);

  const value = useMemo(() => {
    const openModal = () => setOpenModalCount((c) => c + 1);
    const closeModal = () => setOpenModalCount((c) => Math.max(0, c - 1));
    return { openModalCount, openModal, closeModal };
  }, [openModalCount]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}

