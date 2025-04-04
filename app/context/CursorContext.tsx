"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Simplified cursor types
export type CursorVariant = "default" | "hidden" | "large" | "small" | "button";
export type CursorColor = "white" | "black" | "orange";

interface CursorContextType {
  variant: CursorVariant;
  color: CursorColor;
  setVariant: (variant: CursorVariant) => void;
  setColor: (color: CursorColor) => void;
  reset: () => void;
}

// Create context with default values
const CursorContext = createContext<CursorContextType>({
  variant: "default",
  color: "black",
  setVariant: () => {},
  setColor: () => {},
  reset: () => {},
});

// Hook to use cursor context
export const useCursor = () => useContext(CursorContext);

// Provider component
export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [color, setColor] = useState<CursorColor>("black");

  // Reset cursor to default state
  const reset = () => {
    setVariant("default");
  };

  return (
    <CursorContext.Provider
      value={{
        variant,
        color,
        setVariant,
        setColor,
        reset,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}
