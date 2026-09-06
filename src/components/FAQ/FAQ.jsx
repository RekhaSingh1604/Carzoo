// import { useState } from "react";
import  {useState} from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How do I book a self-drive car online with Zoomcar?",
    answer:
      "Choose your city, select a car, pick your date and time, and complete the booking. Once the booking is confirmed, you can pick up the car and start your journey.",
  },
  {
    question: "What is a self-drive car rental?",
    answer:
      "A self-drive car rental lets the verified Guest drive the booked vehicle without a driver. The car, location, duration, kilometre plan, price and applicable terms are shown before the booking is confirmed.",
  },
  {
    question: "Where is Zoomcar available in India?",
    answer:
      "Zoomcar is available across several major cities in India. Availability may vary depending on the city and the cars available at the time of booking.",
  },
  {
    question: "Can I book a car for a few hours, a day or longer?",
    answer:
      "Yes. You can select the duration according to your travel requirements, whether you need a car for a few hours, one day or for a longer trip.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <h2 className="faq-heading">
          Got questions? We've got answers.
        </h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>

                <span className="faq-arrow">
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;