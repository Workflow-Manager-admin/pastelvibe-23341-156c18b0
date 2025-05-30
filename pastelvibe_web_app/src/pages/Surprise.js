import React from 'react';

// Curated playlist of ~10 Spanish melody songs (iconic, soft melodic vibe)
const SPANISH_MELODY_SONGS = [
  "Solamente Tú – Pablo Alborán",
  "Bésame Mucho – Consuelo Velázquez",
  "Vivir Mi Vida – Marc Anthony",
  "La Cumparsita – Carlos Gardel",
  "Amor Eterno – Rocío Dúrcal",
  "Por Amarte Así – Cristian Castro",
  "Rayando el Sol – Maná",
  "Nada Valgo Sin Tu Amor – Juanes",
  "Pienso en Ti – Shakira",
  "Quédate Conmigo – Pastora Soler"
];

// PUBLIC_INTERFACE
function Surprise() {
  /**
   * Surprise page: Renders a pastel glassmorphic box with a list of Spanish melody songs.
   * Styling matches Moodboard and Playlist with pastel, glassy, rounded card layout.
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
          fontSize: "2.18rem",
          marginBottom: "32px",
          color: "var(--pastel-accent)",
          letterSpacing: "0.035em"
        }}
      >
        Spanish Melody Playlist
      </h1>
      <div
        style={{
          background: "rgba(255,255,255,0.77)",
          borderRadius: "2.2rem",
          boxShadow: "0 10px 28px 0 rgba(180,200,250,0.15)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "2.2px solid rgba(180,176,220,0.16)",
          maxWidth: "430px",
          width: "93vw",
          padding: "46px 35px 40px 35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "25px"
        }}
      >
        <ol
          style={{
            fontSize: "1.17rem",
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
          {SPANISH_MELODY_SONGS.map((song, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: "0.11em",
                background:
                  idx % 2 === 0
                    ? "rgba(255, 238, 229, 0.17)"
                    : "rgba(204, 235, 255, 0.13)",
                borderRadius: "0.61em",
                padding: "0.37em 0.7em 0.38em 0.55em",
                boxShadow: idx % 2
                  ? "0 0.5px 3px #e5e9ffd8"
                  : "0 0.5px 3px #fae2faf5"
              }}
            >
              {song}
            </li>
          ))}
        </ol>
      </div>
      <div
        style={{
          marginTop: "4px",
          color: "var(--pastel-primary)",
          fontSize: "1rem",
          opacity: 0.87,
          textAlign: "center"
        }}
      >
        Disfruta de una suave selección de melodías españolas 🎶
      </div>
    </div>
  );
}

export default Surprise;
