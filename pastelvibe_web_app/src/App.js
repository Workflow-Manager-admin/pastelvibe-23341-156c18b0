import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ColorPicker from './pages/ColorPicker';
import Result from './pages/Result';
import Gallery from './pages/Gallery';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> PastelVibe
              </div>
              {/* Future: Replace with real nav or menu */}
              <button className="btn">Menu</button>
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
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;