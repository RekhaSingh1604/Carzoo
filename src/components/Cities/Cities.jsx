import React, { useEffect, useRef, useState } from "react";
import "./Cities.css";

import bangalore from "../../assets/bangalore.jpg";
import jaipur from "../../assets/Newdelhi.jpg";
import kolkata from "../../assets/kolkata.jpg";
import chennai from "../../assets/chennai.jpg";
import delhi from "../../assets/delhi.jpg";

const cities = [
  {
    name: "Bangalore",
    image: bangalore,
  },
  {
    name: "Jaipur",
    image: jaipur,
  },
  {
    name: "Kolkata",
    image: kolkata,
  },
  {
    name: "Chennai",
    image: chennai,
  },
  {
    name: "Delhi",
    image: delhi,
  },
];

const Cities = () => {
  const [index, setIndex] = useState(cities.length);
  const [transition, setTransition] = useState(true);

  const trackRef = useRef(null);

  // Clone images on both sides
  const slides = [
    ...cities,
    ...cities,
    ...cities,
  ];

  const nextSlide = () => {
    setTransition(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setTransition(true);
    setIndex((prev) => prev - 1);
  };

  /*
    When we reach the cloned area,
    silently move back to the original set.
  */
  const handleTransitionEnd = () => {
    if (index >= cities.length * 2) {
      setTransition(false);
      setIndex(cities.length);
    }

    if (index <= 0) {
      setTransition(false);
      setIndex(cities.length);
    }
  };

  // Re-enable transition after silent reset
  useEffect(() => {
    if (!transition) {
      const timer = setTimeout(() => {
        setTransition(true);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [transition]);

  return (
    <section className="cities-section">
      <div className="cities-container">

        {/* Heading */}
        <div className="cities-heading">

          <span className="cities-small-title">
            DISCOVER
          </span>

          <h2>
            Cities to Explore in India
          </h2>

          <p>
            Choose a city and find the best self-drive cars near you
          </p>

        </div>

        {/* Slider */}
        <div className="cities-slider">

          <div
            className="cities-track"
            ref={trackRef}
            style={{
              transform: `translateX(calc(-${index} * (var(--card-width) + var(--gap))))`,
              transition: transition
                ? "transform 450ms ease"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >

            {slides.map((city, i) => (
              <div
                className="city-card"
                key={`${city.name}-${i}`}
              >
                <img
                  src={city.image}
                  alt={city.name}
                />

                <div className="city-overlay"></div>

                <h3>{city.name}</h3>
              </div>
            ))}

          </div>

        </div>

        {/* Arrows */}
        <div className="cities-arrows">

          <button
            type="button"
            className="city-arrow"
            onClick={prevSlide}
            aria-label="Previous city"
          >
            <span>‹</span>
          </button>

          <button
            type="button"
            className="city-arrow active-arrow"
            onClick={nextSlide}
            aria-label="Next city"
          >
            <span>›</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default Cities;