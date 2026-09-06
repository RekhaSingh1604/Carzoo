import React, { useState } from "react";
import "./PopularCars.css";

import car1 from "../../assets/suv5.jpg";
import car2 from "../../assets/suv2.jpg";
import car3 from "../../assets/suv5.jpg";
import car4 from "../../assets/suv2.jpg";
import car5 from "../../assets/suv5.jpg";
import car6 from "../../assets/suv2.jpg";

import suv1 from "../../assets/work1.jpg";
import suv2 from "../../assets/work2.jpg";
import suv3 from "../../assets/work3.jpg";
import suv4 from "../../assets/work4.jpg";
import suv5 from "../../assets/work5.jpg";
const categories = [
  "7 Sheeter",
  "5 sheeter ",
  // "SUV",
  // "Hatchback",
  // "MUV/MPV",
  // "Sedan",
  // "Electric",
  // "Guest Favorite",
];

/* =====================================
   DIFFERENT DATA FOR EACH CATEGORY
===================================== */

const categoryCars = {

  "7 Sheeter": [
    {
      image: car1,
      name: "Renault Kwid 2022",
      price: "₹185/hr",
      transmission: "Manual",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "9.9 km away",
      rating: "4.50",
      reviews: "167",
    },
    {
      image: car2,
      name: "Hyundai Grand i10 2019",
      price: "₹213/hr",
      transmission: "Manual",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "11.5 km away",
      rating: "4.83",
      reviews: "181",
    },
    {
      image: car3,
      name: "Maruti Suzuki Swift 2026",
      price: "₹319/hr",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "26.1 km away",
      rating: "4.82",
      reviews: "18",
    },
    {
      image: car4,
      name: "Maruti Suzuki Baleno",
      price: "₹355/hr",
      transmission: "Manual",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "17.8 km away",
      rating: "4.71",
      reviews: "92",
    },
    {
      image: car5,
      name: "Hyundai Creta 2023",
      price: "₹420/hr",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "12.4 km away",
      rating: "4.76",
      reviews: "74",
    },
    {
      image: car6,
      name: "Kia Seltos 2024",
      price: "₹450/hr",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "15.2 km away",
      rating: "4.80",
      reviews: "103",
    },
  ],

  /* =====================================
     SUV
  ===================================== */

  "5 sheeter": [
    {
      image: suv1,
      name: "Hyundai Creta",
      price: "₹450/hr",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "8.5 km away",
      rating: "4.82",
      reviews: "125",
    },
    {
      image: suv2,
      name: "Kia Seltos",
      price: "₹480/hr",
      transmission: "Automatic",
      fuel: "Petrol",
      seats: "5 Seats",
      distance: "12.2 km away",
      rating: "4.79",
      reviews: "98",
    },
    {
      image: suv3,
      name: "Mahindra XUV700",
      price: "₹550/hr",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: "7 Seats",
      distance: "15.6 km away",
      rating: "4.88",
      reviews: "143",
    },
    {
      image: suv4,
      name: "Tata Harrier",
      price: "₹520/hr",
      transmission: "Manual",
      fuel: "Diesel",
      seats: "5 Seats",
      distance: "18.4 km away",
      rating: "4.75",
      reviews: "87",
    },
    {
      image: suv5,
      name: "Toyota Fortuner",
      price: "₹850/hr",
      transmission: "Automatic",
      fuel: "Diesel",
      seats: "7 Seats",
      distance: "21.3 km away",
      rating: "4.91",
      reviews: "156",
    },
  ],

  /* =====================================
     HATCHBACK
  ===================================== */

  // "Hatchback": [
  //   {
  //     image: hatch1,
  //     name: "Maruti Swift",
  //     price: "₹210/hr",
  //     transmission: "Manual",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "7.2 km away",
  //     rating: "4.78",
  //     reviews: "112",
  //   },
  //   {
  //     image: hatch2,
  //     name: "Hyundai i20",
  //     price: "₹230/hr",
  //     transmission: "Manual",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "9.4 km away",
  //     rating: "4.81",
  //     reviews: "94",
  //   },
  //   {
  //     image: hatch3,
  //     name: "Tata Altroz",
  //     price: "₹220/hr",
  //     transmission: "Manual",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "13.8 km away",
  //     rating: "4.74",
  //     reviews: "76",
  //   },
  //   {
  //     image: hatch4,
  //     name: "Renault Kwid",
  //     price: "₹185/hr",
  //     transmission: "Manual",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "16.2 km away",
  //     rating: "4.65",
  //     reviews: "83",
  //   },
  // ],

  /* =====================================
     SEDAN
  ===================================== */

  // "Sedan": [
  //   {
  //     image: sedan1,
  //     name: "Honda City",
  //     price: "₹380/hr",
  //     transmission: "Automatic",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "10.2 km away",
  //     rating: "4.86",
  //     reviews: "142",
  //   },
  //   {
  //     image: sedan2,
  //     name: "Hyundai Verna",
  //     price: "₹390/hr",
  //     transmission: "Automatic",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "14.5 km away",
  //     rating: "4.83",
  //     reviews: "117",
  //   },
  //   {
  //     image: sedan3,
  //     name: "Maruti Ciaz",
  //     price: "₹350/hr",
  //     transmission: "Manual",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "18.7 km away",
  //     rating: "4.72",
  //     reviews: "89",
  //   },
  //   {
  //     image: sedan4,
  //     name: "Skoda Slavia",
  //     price: "₹430/hr",
  //     transmission: "Automatic",
  //     fuel: "Petrol",
  //     seats: "5 Seats",
  //     distance: "20.4 km away",
  //     rating: "4.89",
  //     reviews: "106",
  //   },
  // ],

  /* =====================================
     OTHER CATEGORIES
     You can add real images/data later
  ===================================== */

  
};


const PopularCars = () => {

  const [activeCategory, setActiveCategory] =
    useState("Professional Host");

  const [likedCars, setLikedCars] = useState([]);

  const [startIndex, setStartIndex] = useState(0);


  /* =====================================
     GET CURRENT CATEGORY CARS
  ===================================== */

  const currentCars =
    categoryCars[activeCategory] || [];


  /* =====================================
     CATEGORY CLICK
  ===================================== */

  const handleCategoryChange = (category) => {

    setActiveCategory(category);

    // slider ko beginning se start karo
    setStartIndex(0);

    // previous liked state clear
    setLikedCars([]);
  };


  /* =====================================
     HEART
  ===================================== */

  const toggleLike = (index) => {

    setLikedCars((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };


  /* =====================================
     NEXT
  ===================================== */

  const nextCars = () => {

    if (currentCars.length <= 4) return;

    setStartIndex((prev) =>
      prev >= currentCars.length - 4
        ? 0
        : prev + 1
    );
  };


  /* =====================================
     PREVIOUS
  ===================================== */

  const previousCars = () => {

    if (currentCars.length <= 4) return;

    setStartIndex((prev) =>
      prev <= 0
        ? currentCars.length - 4
        : prev - 1
    );
  };


  return (

    <section className="popular-cars-section">

      {/* =================================
          HEADING
      ================================= */}

      <h2 className="popular-cars-title">
        Find Popular Cars in India
      </h2>


      {/* =================================
          CATEGORY TABS
      ================================= */}

      <div className="category-wrapper">

        {categories.map((category) => (

          <button
            key={category}
            className={`category-btn ${
              activeCategory === category
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleCategoryChange(category)
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* =================================
          CAR SLIDER
      ================================= */}

      {currentCars.length > 0 ? (

        <div className="cars-slider-wrapper">

          <div
            className="cars-slider-track"
            style={{
              transform: `translateX(
                calc(
                  -${startIndex} *
                  (var(--card-width) + var(--card-gap))
                )
              )`,
            }}
          >

            {currentCars.map((car, index) => (

              <article
                className="car-card"
                key={`${activeCategory}-${index}`}
              >

                {/* IMAGE */}

                <div className="car-image-wrapper">

                  <img
                    src={car.image}
                    alt={car.name}
                    className="car-image"
                  />


                  {/* HEART */}

                  <button
                    className={`heart-btn ${
                      likedCars.includes(index)
                        ? "liked"
                        : ""
                    }`}
                    onClick={() =>
                      toggleLike(index)
                    }
                  >
                    {likedCars.includes(index)
                      ? "♥"
                      : "♡"}
                  </button>


                  {/* RATING */}

                  <div className="rating-badge">

                    <span className="star">
                      ★
                    </span>

                    <span>
                      {car.rating} ({car.reviews})
                    </span>

                  </div>

                </div>


                {/* DETAILS */}

                <div className="car-details">

                  <h3 className="car-name">
                    {car.name}
                  </h3>


                  <div className="car-price">
                    {car.price}
                  </div>


                  <div className="car-specs">

                    <span>
                      {car.transmission}
                    </span>

                    <span>•</span>

                    <span>
                      {car.fuel}
                    </span>

                    <span>•</span>

                    <span>
                      {car.seats}
                    </span>

                  </div>


                  <div className="car-distance">

                    <span className="walk-icon">
                      ♙
                    </span>

                    {car.distance}

                  </div>

                </div>


                {/* PROFESSIONAL HOST */}

                <div className="professional-host">

                  <div className="host-badge">
                    GUARANTEE
                  </div>

                  <span>
                    Professional Host
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      ) : (

        /* =================================
           NO DATA
        ================================= */

        <div className="no-cars">

          <div className="no-cars-icon">
            🚗
          </div>

          <h3>
            Cars coming soon
          </h3>

          <p>
            We are adding more cars in{" "}
            {activeCategory}.
          </p>

        </div>

      )}


      {/* =================================
          DESCRIPTION
      ================================= */}

      {currentCars.length > 0 && (

        <>

          <p className="popular-cars-description">

            Enjoy Guaranteed delivery, assured quality,
            and professional service with well-maintained
            cars backed by 1.5x refund guarantee.

          </p>


          <a
            href="#professional-host"
            className="professional-link"
          >
            Rent cars from Professional Host in Bangalore
          </a>


          {/* =================================
              ARROWS
          ================================= */}

          <div className="slider-arrows">

            <button
              className="slider-arrow"
              onClick={previousCars}
            >
              ‹
            </button>

            <button
              className="slider-arrow"
              onClick={nextCars}
            >
              ›
            </button>

          </div>

        </>

      )}

    </section>
  );
};

export default PopularCars;