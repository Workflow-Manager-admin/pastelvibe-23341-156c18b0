import React from 'react';

// 9 unique pastel color hexes (soft, modern, varied)
const PASTEL_COLORS = [
  "#FFD6E0", // pastel pink
  "#D7FFE0", // mint
  "#B1E1FF", // blue
  "#F9A8D4", // blush
  "#FDF6FB", // very light
  "#D8B4FE", // lavender
  "#A9F5D0", // green
  "#F8E9A1", // yellow
  "#E0C3FC"  // violet
];

// PUBLIC_INTERFACE
function ColorPicker() {
  /** Renders a centered heading and a 3x3 grid of pastel color boxes with no color names. */
  return (
    <div className="colorpicker-container">
      <h2 className="colorpicker-title">Choose a Color</h2>
      <div className="colorpicker-grid">
        {PASTEL_COLORS.map((color, i) => (
          <div
            key={color + i}
            className="colorpicker-box"
            style={{ background: color }}
            tabIndex={0}
            aria-label="Pastel color option"
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
