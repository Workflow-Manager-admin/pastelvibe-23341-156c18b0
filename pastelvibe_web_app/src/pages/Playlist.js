import React from 'react';

// Sample pool of song names. Expand/replace as needed.
const SONGS = [
  "Sunflower Dreamscape",
  "Lavender Skies",
  "Blush Tides",
  "Peachy Gold",
  "Bubblegum Heart",
  "Calm Waves",
  "Pastel Clouds",
  "Daylight Moon",
  "Cotton Candy Limelight",
  "Summer Rain",
  "Starlit Dawn",
  "Opal Rivers",
  "Velvet Lullaby",
  "Cherry Zen",
  "Candlelight Neon",
];

// PUBLIC_INTERFACE
function Playlist() {
  /** Page: Renders a centered heading and a random list of 10 songs for the user. */
  // Randomize and pick 10
  const pickRandom = (arr, n) => {
    const arrCopy = arr.slice();
    const out = [];
    for (let i = 0; i < n && arrCopy.length > 0; ++i) {
      const idx = Math.floor(Math.random() * arrCopy.length);
      out.push(arrCopy.splice(idx, 1)[0]);
    }
    return out;
  };

  const playlistSongs = pickRandom(SONGS, 10);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        paddingTop: "15vh"
      }}
    >
      <h1 style={{
        textAlign: "center",
        fontFamily: "'Comfortaa','Poppins','Inter',sans-serif",
        fontWeight: 800,
        fontSize: "2.1rem",
        marginBottom: "38px",
        color: "var(--pastel-accent)",
        letterSpacing: "0.035em"
      }}>
        playlist for you &lt;3
      </h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "480px"
      }}>
        <ol style={{
          background: "rgba(255,255,255,0.75)",
          borderRadius: "1.1em",
          margin: 0,
          padding: "30px 40px 30px 32px",
          boxShadow: "0 4px 24px rgba(140,120,180,0.11)",
          fontFamily: "'Quicksand', 'Inter', sans-serif",
          fontSize: "1.13rem",
          color: "var(--pastel-text)",
          lineHeight: 1.9,
          textAlign: "left"
        }}>
          {playlistSongs.map((song, idx) => (
            <li key={idx} style={{ marginBottom: "0.18em" }}>
              {song}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Playlist;
