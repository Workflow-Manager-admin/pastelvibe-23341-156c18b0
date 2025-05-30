import React from "react";
import { usePalette } from "./PaletteContext";

// PUBLIC_INTERFACE
function ColorPaletteSelector({ highlight = true }) {
  /**
   * A visual pastel palette picker. Shows swatches and names.
   * highlight (bool): show current palette with border.
   */
  const { palettes, paletteIndex, setPalette } = usePalette();

  return (
    <div className="palette-selector">
      <div className="palette-selector-grid">
        {palettes.map((pal, i) => (
          <div
            key={pal.name}
            className={`palette-swatch${paletteIndex === i && highlight ? " palette-swatch-active" : ""}`}
            onClick={() => setPalette(i)}
            title={pal.name}
            tabIndex={0}
            aria-label={"Select palette " + pal.name}
          >
            <div className="swatch-row">
              <div className="swatch" style={{ background: pal.colors.primary }} />
              <div className="swatch" style={{ background: pal.colors.secondary }} />
              <div className="swatch" style={{ background: pal.colors.accent }} />
              <div className="swatch" style={{ background: pal.colors.surface }} />
              <div className="swatch" style={{ background: pal.colors.background, border: '1px solid #eee' }} />
            </div>
            <div className="palette-name">{pal.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPaletteSelector;
