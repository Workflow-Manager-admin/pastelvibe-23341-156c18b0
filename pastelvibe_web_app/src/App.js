import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ColorPicker from './pages/ColorPicker';
import Result from './pages/Result';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Music from './pages/Music';
import Playlist from './pages/Playlist';
import Surprise from './pages/Surprise';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container" style={{paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0,background:"transparent",boxShadow:"none"}}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div className="logo" style={{ color: 'var(--pastel-primary)' }}>
                PastelVibe
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ display: 'flex', gap: '28px', fontWeight: 500 }}>
                <Link
                  to="/"
                  style={{
                    color: 'var(--pastel-primary)',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1.10rem',
                    borderRadius: "12px",
                    padding: "4px 14px",
                    background: "rgba(255, 255, 255, 0.23)",
                    boxShadow: "0 1.5px 18px 0 rgba(220,190,255,0.046)",
                    transition: "background 0.19s, color 0.15s"
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/music"
                  style={{
                    color: 'var(--pastel-accent)',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1.10rem',
                    borderRadius:"12px",
                    padding:"4px 14px",
                    background:"rgba(255,243,255,0.17)",
                    boxShadow: "0 1.5px 18px 0 rgba(220,190,255,0.046)",
                    transition: "background 0.19s, color 0.15s"
                  }}
                >
                  Music
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="container" style={{ paddingTop: '100px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pick" element={<ColorPicker />} />
              <Route path="/result" element={<Result />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/music" element={<Music />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/surprise" element={<Surprise />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
