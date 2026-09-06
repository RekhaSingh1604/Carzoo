import React from "react";
import "./PlatformStats.css";

const stats = [
  {
    number: "100+",
    text: "Major cities in India with reliable self drive car rental options.",
  },
  {
    number: "25M+",
    text: "Users trust Zoomcar for easy and affordable car rentals.",
  },
  {
    number: "40K+",
    text: "Self-drive cars available across various categories to suit every travel need.",
  },
  {
    number: "20K+",
    text: "Hosts offering a wide range of self drive cars.",
  },
];

const PlatformStats = () => {
  return (
    <section className="platform-stats">
      <div className="stats-container">

        <h2 className="stats-heading">
          India's #1 Car Rental Platform
        </h2>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>

              <div className="stat-number">
                {stat.number}
              </div>

              <p className="stat-description">
                {stat.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformStats;