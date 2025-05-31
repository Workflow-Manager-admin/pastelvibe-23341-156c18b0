import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Shared layout with top navigation bar for all pages.
 * Shows links to: Home, Color Picker, Result, Gallery, About.
 */
const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo">
            <span className="logo-symbol">*</span> PastelVibe
          </div>
          <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
            <NavLink to="/" label="Home" current={location.pathname === '/'}/>
            <NavLink to="/color-picker" label="Color Picker" current={location.pathname === '/color-picker'}/>
            <NavLink to="/result" label="Result" current={location.pathname === '/result'}/>
            <NavLink to="/gallery" label="Gallery" current={location.pathname === '/gallery'}/>
            <NavLink to="/about" label="About" current={location.pathname === '/about'}/>
          </div>
        </div>
      </nav>
      <main style={{ marginTop: '72px', minHeight: '80vh' }}>
        {children}
      </main>
    </>
  );
};

function NavLink({ to, label, current }) {
  return (
    <Link
      to={to}
      style={{
        color: current ? 'var(--kavia-orange)' : 'var(--text-color)',
        textDecoration: current ? 'underline' : 'none',
        fontWeight: current ? 600 : 400,
        fontSize: '1rem',
        transition: 'color 0.18s',
      }}
    >
      {label}
    </Link>
  );
}

export default Layout;
