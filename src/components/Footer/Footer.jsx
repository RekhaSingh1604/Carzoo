import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* =========================
            ABOUT / LOGO
        ========================= */}
        <div className="footer-about">

          <div className="footer-logo">
            <span className="logo-icon">C</span>
            <span className="logo-text">arZoo</span>
          </div>

          <p>
            Founded in 2013 and headquartered in Bengaluru, India,
            Zoomcar is a leading marketplace for car sharing focused
            in India. The Zoomcar community connects Hosts with Guests,
            who choose from a selection of cars for use at affordable
            prices, promoting sustainable, smart transportation
            solutions in India. Zoomcar was listed on OTCQX in 2025.
          </p>

          <h3>Follow Us On Social</h3>

          <div className="social-links">
            <a href="/" aria-label="Facebook">f</a>
            <a href="/" aria-label="Instagram">◎</a>
            <a href="/" aria-label="LinkedIn">in</a>
            <a href="/" aria-label="X">𝕏</a>
          </div>

        </div>


        {/* =========================
            COMPANY
        ========================= */}
        <div className="footer-column">

          <h2>Company</h2>

          <a href="/">Terms and Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Faqs</a>
          <a href="/">Blogs</a>
          <a href="/">Investor Relations</a>
          <a href="/">Press Releases</a>
          <a href="/">Sitemap</a>

        </div>


        {/* =========================
            SERVICES
        ========================= */}
        <div className="footer-column">

          <h2>Our Services</h2>

          <a href="/">Daily Drives</a>
          <a href="/">Subscription</a>
          <a href="/">Zoomcar Hosts</a>
          <a href="/">Bike Rental</a>
          <a href="/">Bike Rental in Bangalore</a>

        </div>


        {/* =========================
            CONTACT
        ========================= */}
        <div className="footer-contact">

          <h2>Contact Us</h2>

          <p>
            Zoomcar India Private Limited 1st
            <br />
            Floor, Anjaneya Techno Park,
            <br />
            No.147, HAL Old Airport Road,
            <br />
            ISRO Colony, Kodihalli, Bangalore,
            <br />
            Karnataka, India - 560008
          </p>

        </div>

      </div>


      {/* =========================
          BOTTOM BAR
      ========================= */}
      <div className="footer-bottom">
        <span>© 2026 CarZoo. All rights reserved.</span>
        <span>Self Drive. Your Journey. Your Freedom.</span>
      </div>

    </footer>
  );
};

export default Footer;