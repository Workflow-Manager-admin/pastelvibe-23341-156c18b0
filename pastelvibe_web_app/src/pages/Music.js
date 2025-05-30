import React from 'react';

// Box pastel color palette (match App.css and design context)
const boxColors = [
  { bg: 'var(--pastel-primary)', label: 'Vibe Playlist' },
  { bg: 'var(--pastel-accent)', label: 'Moodboard (soon)' },
  { bg: 'var(--pastel-secondary)', label: 'Surprise (soon)' },
];

// PUBLIC_INTERFACE
function Music() {
  /**
   * Music page presenting three selectable pastel boxes in a row, centered.
   * First box launches playlist.
   */
  const handleBoxClick = idx => {
    if (idx === 0) {
      window.open('/playlist', '_blank');
    }
  };

  return (
    <div style={{
      width: "100%",
      minHeight: "48vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h2 className="title" style={{marginBottom: "26px"}}>Pick Your Mood</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "3vw",
          margin: "0 auto",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "670px"
        }}>
        {boxColors.map((box, idx) => (
          <div
            key={box.label}
            style={{
              background: box.bg,
              borderRadius: "1.8rem",
              boxShadow: "0 2px 24px 0 rgba(180,180,220,0.13)",
              border: idx === 0 ? '3px solid var(--pastel-accent)' : '2px solid var(--pastel-border)',
              minWidth: "150px",
              minHeight: "170px",
              maxWidth: "210px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              cursor: idx === 0 ? "pointer" : "not-allowed",
              opacity: idx === 0 ? 1 : 0.70,
              fontSize: "1.16rem",
              fontWeight: 600,
              transition: "box-shadow 0.19s, transform 0.17s",
              marginBottom: "5px",
              marginTop: "6px"
            }}
            onClick={() => handleBoxClick(idx)}
            tabIndex={idx === 0 ? 0 : -1}
            aria-label={box.label}
            role="button"
            onKeyDown={e => {
              if (e.key === "Enter" && idx === 0) handleBoxClick(idx);
            }}
          >
            <span style={{textAlign:"center",width:"100%"}}>{box.label}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop:24, color:'#8585ae', fontSize:"1rem"}}><span>More features coming soon!</span></div>
    </div>
  );
}

export default Music;
