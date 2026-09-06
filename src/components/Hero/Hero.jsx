import React, { useState } from "react";
import "./Hero.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import slider5 from "../../assets/slider5.jpg";
import slider6 from "../../assets/slider6.jpg";
import slider7 from "../../assets/slider7.jpg";
import slider8 from "../../assets/slider8.jpg";

const sliderImages = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
];

const tabs = [
  {
    title: "Daily Drives",
    subtitle: "Upto 7 days",
  },
  {
    title: "Subscription",
    subtitle: "7 day+ rides",
  },
  {
    title: "Weekday Pass",
    subtitle: "Mon-Fri with Ltd Kms",
    new: true,
  },
  {
    title: "Bike Rentals",
    subtitle: "Meet Bikes by Zoomcar",
    new: true,
  },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [delivery, setDelivery] = useState(false);

  const handleSearch = () => {
    alert(
      `Searching cars in Bangalore from ${delivery ? "delivery location" : "selected location"}`
    );
  };

  return (
    <main className="hero">

      {/* =========================
          HERO HEADING
      ========================= */}

      <section className="hero-heading">

        <h1>
          Self Drive Car Rentals Across India -
          <br />
          Easy, Affordable &amp; Flexible
        </h1>

        <div className="hero-stats">

          <div className="stat">
            <strong>50,00,000+</strong>
            <span>Trips</span>
          </div>

          <div className="stat">
            <strong>30,00,000+</strong>
            <span>User Ratings</span>
          </div>

          <div className="stat">
            <strong>4.8+</strong>
            <span>Average Trip Rating</span>
          </div>

        </div>

      </section>


      {/* =========================
          IMAGE SLIDER
      ========================= */}

      <section className="image-slider">

        <div className="slider-background"></div>

        <div className="slider-viewport">

          <div className="slider-track">

            {/* First set */}
            {sliderImages.map((image, index) => (
              <div
                className={`slider-card slider-card-${index + 1}`}
                key={`first-${index}`}
              >
                <img
                  src={image}
                  alt={`Rental car ${index + 1}`}
                />
              </div>
            ))}

            {/* Duplicate set for infinite slider */}
            {sliderImages.map((image, index) => (
              <div
                className={`slider-card slider-card-${index + 1}`}
                key={`second-${index}`}
              >
                <img
                  src={image}
                  alt={`Rental car ${index + 1}`}
                />
              </div>
            ))}

          </div>

        </div>


        {/* =========================
            BOOKING AREA
        ========================= */}

        <div className="booking-wrapper">

          {/* Tabs */}

          <div className="booking-tabs">

            {tabs.map((tab, index) => (
              <button
                key={tab.title}
                className={`booking-tab ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >

                {tab.new && (
                  <span className="new-badge">
                    New
                  </span>
                )}

                <span className="tab-title">
                  {tab.title}
                </span>

                <span className="tab-subtitle">
                  {tab.subtitle}
                </span>

              </button>
            ))}

          </div>


          {/* Search Card */}

          <div className="search-card">

            <div className="search-fields">

              {/* CITY */}

              <div className="search-field city-field">

                <div className="field-label">
                  <span className="field-icon">♙</span>
                  <span>City</span>
                </div>

                <div className="field-value">
                 Noida NCR
                </div>

              </div>


              {/* LOCATION */}

              <div className="search-field location-field">

                <div className="field-label">
                  <span className="field-icon">⌖</span>
                  <span>Location</span>
                </div>

                <div className="field-value truncate">
                  Noida, Sector 62, Uttar Pradesh, India
                </div>

              </div>


              {/* TRIP START */}

              <div className="search-field">

                <div className="field-label">
                  <span className="field-icon">▣</span>
                  <span>Trip Start</span>
                </div>

                <div className="field-value">
                  5 Sep'26, 4:00 pm
                </div>

              </div>


              {/* TRIP END */}

              <div className="search-field">

                <div className="field-label">
                  <span className="field-icon">▣</span>
                  <span>Trip End</span>
                </div>

                <div className="field-value">
                  5 Sep'26, 8:00 pm
                </div>

              </div>


              {/* SEARCH */}

              <button
                className="search-button"
                onClick={handleSearch}
              >
                <span className="search-icon">
                  ⌕
                </span>

                <span>
                  Search
                </span>
              </button>

            </div>


            {/* DELIVERY */}

            <label className="delivery-option">

              <input
                type="checkbox"
                checked={delivery}
                onChange={(e) =>
                  setDelivery(e.target.checked)
                }
              />

              <span className="fake-checkbox"></span>

              <span>
                Delivery &amp; Pick-up, from anywhere
              </span>

            </label>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Hero;