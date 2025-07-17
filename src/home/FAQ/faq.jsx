import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQ = [
    {
      question: "What documents are required to apply for a visa?",
      answer: (
        <>
          You need a valid passport, completed application form, proof of accommodation, and a return ticket.{" "}
          <a
            href="https://www.eta.gov.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Apply for Visa
          </a>
        </>
      )
    },
    
    {
      question: "How long does the visa process take?",
      answer:
        "The visa process typically takes 3-5 business days, depending on the embassy or consulate.",
    },
    {
      question: "Can I extend my tourist visa once I'm in the country?",
      answer:
        "Yes, tourist visas can usually be extended by visiting the immigration office and providing valid reasons.",
    },
  ];

  return (
    <section >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="max-w-none divide-y divide-gray-300">
          {FAQ.map((item, i) => (
            <div key={i} className="py-6">
              <button
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 focus:outline-none hover:text-blue-600 transition-colors py-2"
                onClick={() => toggleAnswer(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {item.question}
                <svg
                  className={`w-8 h-8 transform transition-transform duration-300 flex-shrink-0 ml-6 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === i && (
                <p
                  id={`faq-answer-${i}`}
                  aria-labelledby={`faq-question-${i}`}
                  className="mt-4 text-gray-600 leading-relaxed text-lg pr-14"
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}