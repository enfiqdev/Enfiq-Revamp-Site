"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedHeadingProps {
  as?: "h1" | "h2";
  text: string | string[];
  className?: string;
  style?: React.CSSProperties;
  enableHoverEffect?: boolean;
}

export default function AnimatedHeading({
  as = "h1",
  text,
  className,
  style,
  enableHoverEffect = false,
}: AnimatedHeadingProps) {
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  const lines = Array.isArray(text) ? text : [text];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const renderLine = (line: string, lineIndex: number) => {
    // Split the line into words to prevent middle-of-word line breaks
    const words = line.split(" ");

    return (
      <div key={lineIndex} className="flex flex-wrap justify-center">
        {words.map((word, wordIndex) => {
          const chars = word.split("");
          return (
            <React.Fragment key={wordIndex}>
              {/* Word wrapper prevents middle-of-word wrapping */}
              <span className="inline-block whitespace-nowrap">
                {chars.map((char, charIndex) => {
                  const uniqueKey = `char-${lineIndex}-${wordIndex}-${charIndex}`;

                  if (enableHoverEffect) {
                    return (
                      <motion.span
                        key={uniqueKey}
                        variants={childVariants}
                        className="relative inline-flex px-[0.5px] cursor-default group/char"
                      >
                        {/* Hidden character defines layout size/height */}
                        <span className="invisible font-semibold whitespace-pre">
                          {char}
                        </span>
                        {/* Absolute character handles zoom/font-weight changes on hover */}
                        <span
                          className="
                            absolute left-1/2 top-0 -translate-x-1/2
                            whitespace-pre text-[#000000]
                            font-medium
                            transition-all duration-300 ease-out
                            group-hover/char:scale-[1.04]
                            group-hover/char:font-semibold
                          "
                        >
                          {char}
                        </span>
                      </motion.span>
                    );
                  }

                  return (
                    <motion.span
                      key={uniqueKey}
                      variants={childVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>

              {/* Space between words */}
              {wordIndex < words.length - 1 && (
                <motion.span
                  key={`space-${lineIndex}-${wordIndex}`}
                  variants={childVariants}
                  className="inline-block"
                >
                  {"\u00A0"}
                </motion.span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <Tag
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {lines.map((line, idx) => renderLine(line, idx))}
    </Tag>
  );
}
