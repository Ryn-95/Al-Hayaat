"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[rgba(43,97,64,0.12)] rounded-card overflow-hidden bg-cream"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-7 py-5 text-left font-inter font-medium text-[15px] text-text-primary hover:text-primary transition-colors duration-300"
            aria-expanded={openIndex === index}
            id={`faq-question-${index}`}
          >
            <span className="pr-8">{item.question}</span>
            <span
              className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-primary transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="7" y1="0" x2="7" y2="14" />
                <line x1="0" y1="7" x2="14" y2="7" />
              </svg>
            </span>
          </button>
          <div
            className={`accordion-content ${openIndex === index ? "open" : ""}`}
            style={{
              maxHeight: openIndex === index ? "500px" : "0",
              padding: openIndex === index ? "0 28px 24px" : "0 28px",
            }}
          >
            <p className="text-text-secondary text-[15px] leading-relaxed font-inter font-light">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
