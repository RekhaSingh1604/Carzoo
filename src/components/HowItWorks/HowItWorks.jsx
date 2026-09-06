import React from "react";
import "./HowItWorks.css";

import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work1.jpg";
import work4 from "../../assets/work2.jpg";

const cards = [
  {
    image: work1,
    title: "Plan less. Drive more.",
    subtitle:
      "From booking to ignition, everything happens in a few taps.",
    points: [
      "Zero queues",
      "Zero awkward handovers",
      "100% freedom",
    ],
  },
  {
    image: work2,
    title: "Choose your perfect car.",
    subtitle:
      "Pick a car that perfectly fits your journey and your plans.",
    points: [
      "Wide range of cars",
      "Easy booking",
      "Flexible options",
    ],
  },
  {
    image: work3,
    title: "Unlock and go.",
    subtitle:
      "Your car is ready when you are. Just unlock and start driving.",
    points: [
      "Easy pickup",
      "No waiting",
      "Contactless experience",
    ],
  },
  {
    image: work4,
    title: "Drive your way.",
    subtitle:
      "Enjoy complete freedom to explore wherever you want to go.",
    points: [
      "Drive anywhere",
      "No driver required",
      "Complete freedom",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <h2 className="how-heading">How Zoomcar works?</h2>

      <div className="how-cards">
        {cards.map((card, index) => (
          <article
            className="how-card"
            key={index}
            style={{ "--index": index }}
          >
            <div className="how-image">
              <img src={card.image} alt={card.title} />
            </div>

            <div className="how-content">
              <h3>{card.title}</h3>

              <p className="how-subtitle">
                {card.subtitle}
              </p>

              <div className="how-points">
                {card.points.map((point, i) => (
                  <div className="how-point" key={i}>
                    <span className="check">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;