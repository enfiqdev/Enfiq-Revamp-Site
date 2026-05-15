"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your pricing?",
    answer:
      "We don't have a set-in-stone pricing because every client has different needs. This is why we offer a free consultation call where we will get to know you and your business. Only then would we be able to give you a pricing offer.",
  },
  {
    question: "How are you different than other agencies?",
    answer:
      "We combine deep technical expertise with strategic design thinking to deliver products that are not just beautiful but also performant and scalable. Our team works as an extension of yours.",
  },
  {
    question: "Do you offer a guarantee?",
    answer:
      "Yes — we stand behind our work. If you're not satisfied within the first milestone, we'll revise until it's right or provide a refund based on work completed.",
  },
];

// Grid background pattern style
const gridBg = {
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.04) 39px, rgba(0,0,0,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.04) 39px, rgba(0,0,0,0.04) 40px)",
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4">
      <div
        className="max-w-2xl mx-auto rounded-2xl border border-[#D41717]/30 p-8 relative overflow-hidden"
        style={gridBg}
      >
        {/* Label */}
        <div className="flex justify-center mb-6">
          <span className="text-xs font-medium bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">
            Frequently Ask Questions
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#121212] text-center mb-8">
          Clear Answers to Common Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="relative">
              {openIndex === i ? (
                /* Open state — chat bubble style */
                <div className="flex flex-col gap-3">
                  {/* Question bubble */}
                  <div className="flex items-center justify-end gap-3">
                    <div className="bg-[#121212] text-white text-sm font-medium px-4 py-2.5 rounded-full">
                      {faq.question}
                    </div>
                    <button
                      onClick={() => setOpenIndex(null)}
                      className="flex-shrink-0 w-8 h-8 bg-[#121212] text-white rounded-full flex items-center justify-center text-lg font-light hover:bg-[#2a2a2a] transition-colors"
                    >
                      −
                    </button>
                  </div>
                  {/* Answer */}
                  <div className="flex gap-3 ml-2">
                    <div className="flex-shrink-0 mt-1">
                      <Image
                        src="/images/assets/enfiqlogo.png"
                        alt="Enfiq Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ) : (
                /* Closed state */
                <button
                  onClick={() => setOpenIndex(i)}
                  className="w-full flex items-center justify-end gap-3 group"
                >
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-2.5 rounded-full group-hover:bg-gray-200 transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 group-hover:border-gray-500 transition-colors">
                    +
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-gray-500">Can&apos;t find your answer?</p>
          <a
            href="mailto:team@enfiq.com"
            className="flex items-center gap-2 bg-[#D41717] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#B21313] transition-colors"
          >
            Send us a Mail
            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              @
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
