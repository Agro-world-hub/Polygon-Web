import React, { useState } from "react";
import "./Style/FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What makes Agro World different from others?",
      answer: "Agro World offers innovative solutions tailored for modern agriculture needs.",
    },
    {
      question: "How secure are our IT-related products?",
      answer: "Our IT products are protected with state-of-the-art security protocols and encryption.",
    },
    {
      question: "How can I be a part of the Agro World journey?",
      answer: "You can join our programs by registering on our website and participating in our initiatives.",
    },
    {
      question: "What are the impacts of using Agro World’s solutions?",
      answer: "Our solutions improve productivity, reduce costs, and enhance sustainability for farmers and businesses.",
    },
    {
      question: "How can I contact Agro World for support?",
      answer: "You can contact us via email at info@agroworld.lk or call us at +94 770111999.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-left">
        <h2 className="faq-title">FAQ</h2>
        <p className="faq-description">
          Do you have any questions for us? We will answer all your questions.
        </p>
      </div>

      <div className="faq-right">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleDropdown(index)}
            >
              {faq.question}
              <span className="faq-arrow">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
