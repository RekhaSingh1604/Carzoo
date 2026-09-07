import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-container">

        {/* LEFT */}
        <div className="header-left">

          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* LOGO */}
          <a href="/" className="logo" aria-label="Carzoo Home">
            <span className="logo-text"> Carzoo</span>
            <span className="logo-line"></span>
          </a>

        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">

          <a href="#host">Become a Host</a>

          <a href="#company">Company Profile</a>

          <a href="#app" className="app-link">
            <span className="app-icon">▱</span>
            <span>Get the App</span>
          </a>

          <button className="login-button">
            Login
          </button>

        </nav>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

          <a href="#host" onClick={closeMenu}>
            Become a Host
          </a>

          <a href="#company" onClick={closeMenu}>
            Company Profile
          </a>

          <a href="#app" className="app-link" onClick={closeMenu}>
            <span className="app-icon">▱</span>
            <span>Get the App</span>
          </a>

          <button className="mobile-login-button">
            Login
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;