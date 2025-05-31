import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import ColorPicker from './pages/ColorPicker/ColorPicker';
import Result from './pages/Result/Result';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            <Route path="/result" element={<Result />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;