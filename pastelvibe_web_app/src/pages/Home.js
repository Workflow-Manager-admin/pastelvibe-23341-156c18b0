import React from 'react';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
function Home() {
  /** Home page with hero section for PastelVibe. */
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the ColorPicker page
    navigate("/pick");
  };

  return (
    <div className="hero">
      <div className="subtitle">Aesthetic Vibes, Personalized</div>
      <h1 className="title">PastelVibe</h1>
      <div className="description">
        Pick a palette, discover a vibe. Generate playlists and moodboards that match your colors!
      </div>
      <button
        className="btn btn-large"
        onClick={handleGetStarted}
        type="button"
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
