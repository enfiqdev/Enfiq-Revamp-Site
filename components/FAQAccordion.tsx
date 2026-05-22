"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

const gridBg: React.CSSProperties = {
  backgroundColor: "#F8F8F8",
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
  `,
  backgroundSize: "10px 10px",
};
export default function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggleItem = (i: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(i)) {
        newSet.delete(i);
      } else {
        newSet.add(i);
      }
      return newSet;
    });
  };

  return (
    <section className="py-16 px-4">
      <div
        className="w-full max-w-[828px] mx-auto rounded-[24px] border-[1.5px] border-[#D41717] px-[32px] md:px-[64px] py-[32px] relative overflow-hidden flex flex-col gap-[64px] bg-white"
        style={gridBg}
      >
        {/* Header Group */}
        <div className="flex flex-col items-center gap-4">
          <span
            className="inline-flex items-center justify-center rounded-[12424px] border border-[#DDDDDD] bg-[#FFFFFF] px-[16px] py-[8px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "100%", color: "#707070", letterSpacing: "0%" }}
          >
            Frequently Ask Questions
          </span>
          <h2
            className="text-center text-[#000000] w-[579px] h-[45px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "1.2" }}
          >
            Clear Answers to Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndices.has(i);
            return (
              <div key={i} className="flex flex-col gap-4 w-full">
                {/* Question Row (Right aligned) */}
                <div className="flex w-full justify-end">
                  <motion.button
                    onClick={() => toggleItem(i)}
                    className="flex items-center gap-3 group outline-none"
                    aria-expanded={isOpen}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`flex-shrink-0 w-[44px] h-[44px] rounded-[436px] flex items-center justify-center text-lg transition-colors duration-300 ${isOpen
                        ? "bg-[#2A2A2A] text-white font-light"
                        : "bg-[#E9E9E9] text-[#121212] group-hover:bg-[#2A2A2A] group-hover:text-white"
                        }`}
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                    <motion.span
                      key={isOpen ? "open" : "closed"}
                      className={`text-[16px] font-normal px-[24px] py-[16px] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[0px] transition-colors duration-300 ${isOpen
                        ? "bg-[#2A2A2A] text-white"
                        : "bg-[#E9E9E9] text-[#121212] group-hover:bg-[#2A2A2A] group-hover:text-white"
                        }`}
                      style={{ fontFamily: "'Inter', sans-serif", transformOrigin: "bottom right" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 180, damping: 12 }}
                    >
                      {faq.question}
                    </motion.span>
                  </motion.button>
                </div>

                {/* Answer Row (Left aligned) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, height: 0 }}
                      animate={{ height: "auto", opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0, height: 0 }}
                      style={{ transformOrigin: "bottom left" }}
                      transition={{
                        height: { type: "spring", stiffness: 350, damping: 25 },
                        opacity: { duration: 0.15 },
                        scale: { type: "spring", stiffness: 180, damping: 12 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="flex w-full justify-start pt-[8px]">
                        <div className="flex gap-[16px] items-end">
                          {/* ENFIQ Symbol */}
                          <div className="w-[38px] h-[38px] rounded-[25.3px] border border-[#EAEAEA] bg-white flex items-center justify-center shadow-sm shrink-0">
                            <Image
                              src="/images/assets/enfiqlogo.png"
                              alt="Enfiq"
                              width={38}
                              height={38}
                              className="object-contain"
                            />
                          </div>

                          {/* Answer Bubble */}
                          <div className="bg-[#FFFFFF] border-[1px] border-[#E9E9E9] rounded-[24px] p-6 shadow-sm max-w-[420px]">
                            <p
                              className="text-[#000000]"
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "23.8px",
                              }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between w-full mt-4">
          <p className="text-[16px] text-[#121212] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Can't find your answer?</p>
          <a
            href="mailto:team@enfiq.com"
            className="flex items-center bg-[#D41717] rounded-[77px] hover:bg-[#B21313] transition-colors shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)]"
            style={{
              paddingTop: "10px",
              paddingRight: "10px",
              paddingBottom: "10px",
              paddingLeft: "24px",
              gap: "16px",
            }}
          >
            <span
              className="text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Send us a Mail
            </span>
            <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center shrink-0 mt-[1px]">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "16px",
                  color: "#D41717",
                }}
              >
                @
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
