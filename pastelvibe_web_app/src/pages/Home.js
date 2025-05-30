import React from 'react';

// PUBLIC_INTERFACE
function Home() {
  /** Home page with hero section for PastelVibe. */
  return (
    <div className="hero">
      <div className="subtitle">Aesthetic Vibes, Personalized</div>
      <h1 className="title">PastelVibe</h1>
      <div className="description">
        Pick a palette, discover a vibe. Generate playlists and moodboards that match your colors!
      </div>
      <a href="/pick">
        <button className="btn btn-large">Get Started</button>
      </a>
    </div>
  );
}

export default Home;
