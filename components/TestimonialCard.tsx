"use client";

import React from "react";
import Image from "next/image";
import CardWrapper from "./CardWrapper";

export interface Testimonial {
  name: string;
  company: string;
  img: string;
  text: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, company, img, text } = testimonial;

  return (
    <CardWrapper
      className="w-[400px] shrink-0 bg-white rounded-[15px] border border-[#EAEAEA] transition-shadow hover:shadow-sm"
      style={{
        paddingTop: "20px",
        paddingRight: "20px",
        paddingBottom: "18.8px",
        paddingLeft: "20px",
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-[16px] mb-[8.66px]">
        {/* Logo */}
        <div
          className={`relative overflow-hidden shrink-0 bg-white ${
            name === "White Oak"
              ? "w-[56px] h-[56px] rounded-[2918px]"
              : "w-[56px] h-[56px] rounded-[12px]"
          }`}
        >
          <Image
            src={img}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <p
            className="text-[#000000]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "19.2px",
              letterSpacing: "0px",
            }}
          >
            {name}
          </p>

          <p
            className="mt-[4px] text-[#000000]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.2px",
              letterSpacing: "0px",
            }}
          >
            {company}
          </p>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-[#000000]"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 520,
          fontSize: "14px",
          lineHeight: "16.8px",
          letterSpacing: "0px",
        }}
      >
        {text}
      </p>
    </CardWrapper>
  );
}
