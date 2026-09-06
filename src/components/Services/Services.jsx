import React from "react";
import "./Services.css";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="service-icon">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="3" />
        <path d="M24 10v11M24 27v11M10 24h11M27 24h11" />
      </svg>
    ),
    title: "Self-drive freedom",
    description: "Pick a car, unlock it, and go - no driver, no limits.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="service-icon">
        <path d="M8 28h18l5-8h7a4 4 0 0 1 4 4v8H8z" />
        <circle cx="16" cy="34" r="3" />
        <circle cx="35" cy="34" r="3" />
        <path d="M34 12c-4 0-7 3-7 7 0 4 7 10 7 10s7-6 7-10c0-4-3-7-7-7z" />
        <circle cx="34" cy="19" r="2" />
      </svg>
    ),
    title: "Car at your doorstep",
    description: "Get your ride delivered wherever you are.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="service-icon">
        <circle cx="24" cy="24" r="15" />
        <path d="M20 17h9M20 23h8M20 29h9" />
        <path d="M26 16c-4 0-6 2-6 5 0 4 3 5 6 6 3 1 4 2 4 4 0 2-2 4-6 4" />
      </svg>
    ),
    title: "Drive longer, pay less",
    description: "Perfect for weeks or months at better prices.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="service-icon">
        <path d="M14 37V12h20v25M10 37h28" />
        <path d="M19 17h2M27 17h2M19 23h2M27 23h2M19 29h2M27 29h2" />
      </svg>
    ),
    title: "Smart travel for teams",
    description: "Flexible, reliable mobility for work trips.",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        <h2 className="services-heading">Our Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              
              <div className="service-icon-box">
                {service.icon}
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;