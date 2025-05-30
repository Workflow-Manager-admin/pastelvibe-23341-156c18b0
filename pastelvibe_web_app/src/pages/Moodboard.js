import React from 'react';

// Array of stylish pop playlist song titles
const POP_SONGS = [
  "Levitating – Dua Lipa",
  "As It Was – Harry Styles",
  "Good 4 U – Olivia Rodrigo",
  "Blinding Lights – The Weeknd",
  "Don’t Start Now – Dua Lipa",
  "Anti-Hero – Taylor Swift",
  "Break My Heart – Dua Lipa",
  "Peaches – Justin Bieber",
  "Dance The Night – Dua Lipa",
  "Stay – The Kid LAROI & Justin Bieber"
];

// PUBLIC_INTERFACE
function Moodboard() {
  /** 
   * Moodboard Page: Renders a visually styled pastel/glassmorphism playlist of 10 pop song titles.
   */
  return (
    <div
      style={{
        minHeight: "65vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        paddingTop: "12vh"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Comfortaa','Poppins','Inter',sans-serif",
          fontWeight: 800,
          fontSize: "2.2rem",
          marginBottom: "32px",
          color: "var(--pastel-primary)",
          letterSpacing: "0.04em"
        }}
      >
        pastel pop playlist
      </h1>
      <div
        style={{
          background: "rgba(255,255,255,0.75)",
          borderRadius: "2rem",
          boxShadow: "0 10px 28px 0 rgba(210,180,240,0.16)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "2px solid rgba(180,176,220,0.17)",
          maxWidth: "410px",
          width: "93vw",
          padding: "42px 34px 38px 34px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "22px"
        }}
      >
        <ol
          style={{
            fontSize: "1.18rem",
            color: "var(--pastel-text)",
            margin: 0,
            padding: 0,
            width: "100%",
            fontFamily: "'Quicksand', 'Inter', sans-serif",
            letterSpacing: "0.008em",
            lineHeight: 2,
            listStylePosition: "inside"
          }}
        >
          {POP_SONGS.map((song, idx) => (
            <li key={idx} style={{ marginBottom: "0.13em", background: idx%2===0 ? "rgba(248,220,255,0.15)" : "rgba(200,238,255,0.12)", borderRadius:"0.6em", padding:"0.4em 0.7em 0.4em 0.5em"}}>
              {song}
            </li>
          ))}
        </ol>
      </div>
      <div style={{marginTop:"2px", color:"var(--pastel-accent, #D8B4FE)", fontSize:"1rem", opacity:0.85, textAlign:"center"}}>
        Cute pastel pop hits to match your mood 🎵
      </div>
    </div>
  );
}

export default Moodboard;
