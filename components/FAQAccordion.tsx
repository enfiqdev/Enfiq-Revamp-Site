"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedText from "./AnimatedText";

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
  linear-gradient(#E4E4E480 1px, transparent 1px),
  linear-gradient(90deg, #E4E4E480 1px, transparent 1px)
`,
  backgroundSize: "10px 10px",
};

export default function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggleItem = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <section className="py-16 px-4">
      <div
        className="w-full max-w-[828px] mx-auto rounded-[24px] border-[1.5px] border-[#D41717] px-[16px] sm:px-[32px] md:px-[64px] py-[24px] sm:py-[32px] relative overflow-hidden flex flex-col gap-[64px] bg-white"
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
          <AnimatedHeading
            as="h2"
            text="Clear Answers to Common Questions"
            className="text-center text-[#000000] w-full max-w-[579px] md:h-[45px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "clamp(22px, 5.5vw, 32px)", lineHeight: "1.2" }}
          />
        </div>

        <div className="flex flex-col gap-6 w-full">
          {faqs.map((faq, i) => {
            const isOpen = openIndices.has(i);

            return (
             <motion.div
  layout
  key={i}
  className="flex flex-col gap-3 w-full"
>

                {/* ── QUESTION BUBBLE (right side — like a sent message) ── */}
                <div className="flex w-full justify-end">
                  <motion.button
                    onClick={() => toggleItem(i)}
                    className="flex items-center gap-3 group outline-none"
                    aria-expanded={isOpen}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* +/− toggle */}
                  <motion.span
                    layout
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={`flex-shrink-0 w-[40px] h-[40px] rounded-full flex items-center justify-center text-lg font-light transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#2A2A2A] text-white"
                        : "bg-[#E9E9E9] text-[#121212] group-hover:bg-[#2A2A2A] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>

                    {/* Question bubble — slides in from right like a sent message */}
                    <motion.span
                      layout
                      className={`text-[15px] font-normal px-[20px] py-[14px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[4px] shadow-sm transition-colors duration-300 ${isOpen
                        ? "bg-[#2A2A2A] text-white"
                        : "bg-[#E9E9E9] text-[#121212] group-hover:bg-[#2A2A2A] group-hover:text-white"
                        }`}
                      style={{ fontFamily: "'Inter', sans-serif", maxWidth: "440px" }}
                      initial={{ opacity: 0, x: 40, scale: 0.85 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.08 }}
                    >
                      {faq.question}
                    </motion.span>
                  </motion.button>
                </div>

                {/* ── ANSWER BUBBLE (left side — like a received message, pops in instantly) ── */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
  layout
  key={`answer-${i}`}
  className="flex w-full justify-start"
  initial={{ opacity: 0, x: -32, scale: 0.82 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: -16, scale: 0.88 }}
  style={{ transformOrigin: "bottom left" }}
  transition={{
    layout: {
      type: "spring",
      stiffness: 500,
      damping: 38,
    },
    opacity: { duration: 0.15 },
  }}
>
    <div className="flex gap-[12px] items-end">

    {/* Enfiq avatar */}
       <motion.div
        className="w-[36px] h-[36px] rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center shadow-sm shrink-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.04 }}
        >
        <Image
            src="/images/assets/enfiqlogo.png"
              alt="Enfiq"
             width={36}
          height={36}
                            className="object-contain rounded-full"
                          />
                        </motion.div>

                        {/* Answer bubble */}
                        <div className="bg-[#FFFFFF] border border-[#E9E9E9] 
                        rounded-tl-[0px] 
                        rounded-tr-[24px]
                       rounded-br-[24px] 
                       rounded-bl-[24px] 
                       px-5 py-4 shadow-sm max-w-[420px]">
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
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-4 gap-4 text-center sm:text-left">
          <AnimatedText
            as="p"
            text="Can't find your answer?"
            className="text-[15px] sm:text-[16px] text-[#121212] font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          <a
            href="https://cal.com/enfiq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center bg-[#D41717] rounded-[77px] hover:bg-[#B21313] transition-all duration-300 shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)] shrink-0"
            style={{
              paddingTop: "10px",
              paddingRight: "10px",
              paddingBottom: "10px",
              paddingLeft: "24px",
              gap: "16px",
            }}
          >
            <div className="relative h-[24px] overflow-hidden">
              {/* First Text */}
              <span
                className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-[24px] text-white whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Book a free call
              </span>

              {/* Second Text */}
              <span
                className="absolute left-0 top-[24px] flex w-full items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[-24px] text-white whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Book a free call
              </span>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center shrink-0 mt-[1px]">
              <svg
                viewBox="0 0 24 24"
                className="w-[12px] h-[12px] text-[#D41717]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H9M17 7V15" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
