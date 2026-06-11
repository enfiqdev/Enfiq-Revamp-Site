"use client";

import React, { createContext, useRef } from "react";
import { useInView } from "framer-motion";

export const SectionContext = createContext<boolean | undefined>(undefined);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  amount?: number;
  as?: "section" | "div";
}

export default function Section({
  children,
  className,
  id,
  style,
  amount = 0.25,
  as: Tag = "section",
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <SectionContext.Provider value={isInView}>
      <Tag
        ref={ref as any}
        id={id}
        className={className}
        style={style}
      >
        {children}
      </Tag>
    </SectionContext.Provider>
  );
}
