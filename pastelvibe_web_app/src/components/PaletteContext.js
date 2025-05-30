import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Pastel palette presets for VibeVerse
 */
const PRESET_PALETTES = [
  {
    name: "Dreamy Lavender",
    colors: {
      primary: "#D6CFFF",    // Pastel lavender
      secondary: "#B1E1FF",  // Sky blue
      accent: "#FDC5F5",     // Pink blush
      background: "#F4F6FB", // Soft paper
      surface: "#EAE7FF",    // Slightly darker lavender
      text: "#413A45",       // Dark muted for pastel paper
    }
  },
  {
    name: "Candy Cloud",
    colors: {
      primary: "#FFD6E0",       // Pink
      secondary: "#CAF7E3",     // Mint/blue
      accent: "#FAF3DD",        // Yellow cream
      background: "#F8EDEB",    // Light blush
      surface: "#E0C3FC",       // Violet haze
      text: "#393D3F"
    }
  },
  {
    name: "Sunkissed Lemonade",
    colors: {
      primary: "#F8E9A1",       // Lemon yellow
      secondary: "#A8D8EA",     // Cloud blue
      accent: "#FFAAA7",        // Pinky coral
      background: "#FDF6F0",    // Near white
      surface: "#FBC2EB",       // Soft pink gradient tone
      text: "#383838"
    }
  },
  {
    name: "Opal Mint",
    colors: {
      primary: "#A9F5D0",   // Minty green
      secondary: "#BCCEF8", // Powder blue
      accent: "#FFC3A0",    // Peachy
      background: "#F6FBF4",
      surface: "#DFE2E6",
      text: "#22313F"
    }
  },
  {
    name: "Butterfly Garden",
    colors: {
      primary: "#D8B4FE",    // Soft purple
      secondary: "#93C5FD",  // Soft blue
      accent: "#F9A8D4",     // Pastel pink
      background: "#FDF6FB", // Very light
      surface: "#F1F1EF",    // Near white
      text: "#30465A"
    }
  }
];

const PaletteContext = createContext();

export function usePalette() {
  return useContext(PaletteContext);
}

// PUBLIC_INTERFACE
export function PaletteProvider({ children }) {
  // Use the first palette as the initial vibe
  const [paletteIndex, setPaletteIndex] = useState(0);

  const setPalette = (index) => {
    setPaletteIndex(index);
  };

  // Optionally, apply palette colors to :root for CSS variable switching
  useEffect(() => {
    const curPalette = PRESET_PALETTES[paletteIndex].colors;
    // Set variables for the pastel palette
    Object.keys(curPalette).forEach((key) => {
      document.documentElement.style.setProperty(`--pastel-${key}`, curPalette[key]);
    });
  }, [paletteIndex]);

  return (
    <PaletteContext.Provider
      value={{
        palette: PRESET_PALETTES[paletteIndex],
        paletteIndex: paletteIndex,
        setPalette,
        palettes: PRESET_PALETTES
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
}
