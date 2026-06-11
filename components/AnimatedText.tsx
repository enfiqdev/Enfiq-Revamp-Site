"use client";

import { motion } from "framer-motion";
import React, { useContext } from "react";
import { SectionContext } from "./Section";

interface AnimatedTextProps {
  as?: "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
  text: string | string[];
  className?: string;
  style?: React.CSSProperties;
  boldWords?: string[];
}

export default function AnimatedText({
  as = "p",
  text,
  className,
  style,
  boldWords = [],
}: AnimatedTextProps) {
  const contextInView = useContext(SectionContext);
  const isControlled = contextInView !== undefined;
  const isInView = isControlled ? contextInView : false;

  // Select the appropriate motion tag dynamically
  const Tag = (motion[as as keyof typeof motion] || motion.p) as any;
  const lines = Array.isArray(text) ? text : [text];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cleanWord = (word: string) => {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
  };

  return (
    <Tag
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate={isControlled ? (isInView ? "visible" : "hidden") : undefined}
      whileInView={isControlled ? undefined : "visible"}
      viewport={isControlled ? undefined : { once: true }}
    >
      {lines.map((line, lineIdx) => {
        const words = line.split(" ");
        return (
          <React.Fragment key={lineIdx}>
            {words.map((word, wordIdx) => {
              const isBold = boldWords.some(
                (bw) => cleanWord(word).toLowerCase() === bw.toLowerCase()
              );
              return (
                <motion.span
                  key={`${lineIdx}-${wordIdx}`}
                  variants={wordVariants}
                  className={`inline-block ${isBold ? "font-bold" : ""}`}
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              );
            })}
            {lineIdx < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}
