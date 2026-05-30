"use client";

import React, { useState } from "react";
import Image from "next/image";
import FAQAccordion from "../components/FAQAccordion";

const categories = [
  "All",
  "Design",
  "Web Development",
  "No-code Development",
  "Mobile Development",
  "n8n Automation",
  "SEO",
];

interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  tags: string[];
  category: string;
  bg: string;
  logo: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "TartanHQ",
    type: "Website Development",
    description:
      "TartanHQ is a sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation. By leveraging Unified APIs, they provide businesses with real-time access to payroll, work, and financial data through a single integration.",
    tags: ["Design", "Framer Development", "On-Page SEO"],
    category: "Web Development",
    bg: "#EEF5FF",
    logo: "/images/assets/tartanHQLogo.png",
    image: "/images/assets/card.png",
  },
  {
    id: 2,
    name: "TartanHQ",
    type: "Website Development",
    description:
      "TartanHQ is a sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation. By leveraging Unified APIs, they provide businesses with real-time access to payroll, work, and financial data through a single integration.",
    tags: ["Design", "Framer Development", "On-Page SEO"],
    category: "Design",
    bg: "#EEF5FF",
    logo: "/images/assets/tartanHQLogo.png",
    image: "/images/assets/card.png",
  },
];


function TagIcon({ tag, className = "" }: { tag: string; className?: string }) {
  const cls = `shrink-0 ${className}`;
  let src = "";

  if (tag === "Design" || tag === "Framer Development") {
    src = "/images/assets/v1.png";
  } else if (tag === "Web Development" || tag === "Mobile Development") {
    src = "/images/assets/fullStack.png";
  } else if (tag === "No-code Development") {
    src = "/images/assets/NC.png";
  } else if (tag === "n8n Automation") {
    src = "/images/assets/n8nIcon.png";
  } else if (tag === "SEO" || tag === "On-Page SEO") {
    src = "/images/assets/seoSearch.png";
  } else if (tag === "All") {
    src = "/images/assets/AllIcon.png";
  }

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={tag}
      width={16}
      height={16}
      className={cls}
    />
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (p) =>
          p.category === activeCategory ||
          p.tags.includes(activeCategory)
      );

  return (
    <div className="pt-[112px] bg-[#F8F8F8]">

      {/* ── PAGE HEADER ── */}
      <section className="max-w-[560px] mx-auto px-6 text-center flex flex-col items-center">

        <h1
          className="w-full text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "32px",

            lineHeight: "44.8px",
            letterSpacing: "0px",
            color: "#000000",
          }}
        >
          Our Projects
        </h1>

        <p
          className="w-full text-center mt-[16px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0px",
            color: "#707070",
          }}
        >
          We offer advanced chatbot development to enhance engagement and
          streamline communication, with tailored solutions and 24/7 support.
        </p>

      </section>

      {/* ── FILTER BAR ── */}
      <section className="max-w-[560px] mx-auto px-6 pt-[48px] pb-[64px]">
        <div className="flex flex-wrap gap-[6px] justify-start">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`group/pill inline-flex items-center justify-center gap-[6px]
        px-[8px] py-[4px]
        rounded-[8px]
        border-[1px]
        transition-all duration-300
        w-fit
        ${activeCategory === cat
                  ? "border-[#D41717] text-[#D41717] bg-white"
                  : "border-[#707070] text-[#707070] bg-white hover:border-[#D41717] hover:text-[#D41717]"
                }`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0px",
              }}
            >

              {/* All — coded infinity*/}
              {cat === "All" && (
                <span className="relative shrink-0 w-[16px] h-[16px] block">

                  {/* Default Gray Image */}
                  <Image
                    src="/images/assets/A1.png"
                    alt="all-coded icon"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full absolute inset-0
        ${activeCategory === cat
                        ? "opacity-0"
                        : "opacity-100 group-hover/pill:opacity-0"
                      }`}
                  />

                  {/* Hover / Active Red Image */}
                  <Image
                    src="/images/assets/allHover.png"
                    alt="all-coded icon active"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full absolute inset-0
        ${activeCategory === cat
                        ? "opacity-100"
                        : "opacity-0 group-hover/pill:opacity-100"
                      }`}
                  />

                </span>
              )}

              {/* Design — on and after hover images */}
              {cat === "Design" && (
                <span className="relative shrink-0 w-[16px] h-[16px] block">

                  {/* Default Gray Image */}
                  <Image
                    src="/images/assets/v1.png"
                    alt="Design icon"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full block
      ${activeCategory === cat ? "hidden" : "group-hover/pill:hidden"}`}
                  />

                  {/* Hover / Active Red Image */}
                  <Image
                    src="/images/assets/v2.png"
                    alt="Design icon active"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full
      ${activeCategory === cat
                        ? "block"
                        : "hidden group-hover/pill:block"
                      }`}
                  />

                </span>
              )}

              {cat === "Web Development" && (
                <span className="relative shrink-0 w-[16px] h-[16px] block">

                  {/* Default Gray Image */}
                  <Image
                    src="/images/assets/fullStack.png"
                    alt="web development icon"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full block
      ${activeCategory === cat ? "hidden" : "group-hover/pill:hidden"}`}
                  />

                  {/* Hover / Active Red Image */}
                  <Image
                    src="/images/assets/fullStackHover.png"
                    alt="Web development icon active"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full
      ${activeCategory === cat
                        ? "block"
                        : "hidden group-hover/pill:block"
                      }`}
                  />

                </span>
              )}
              {/* No-code Development — Notion image icon */}
              {cat === "No-code Development" && (
                <span className="relative shrink-0 w-[16px] h-[16px] block">

                  {/* Default Gray Image */}
                  <Image
                    src="/images/assets/NC.png"
                    alt="No-code Development icon"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full block
      ${activeCategory === cat ? "hidden" : "group-hover/pill:hidden"}`}
                  />

                  {/* Hover / Active Red Image */}
                  <Image
                    src="/images/assets/NCH.png"
                    alt="No-code development icon active"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full
      ${activeCategory === cat
                        ? "block"
                        : "hidden group-hover/pill:block"
                      }`}
                  />

                </span>
              )}

              {cat === "Mobile Development" && (
                <span className="relative shrink-0 w-[16px] h-[16px] block">

                  {/* Default Gray Image */}
                  <Image
                    src="/images/assets/fullStack.png"
                    alt="Mobile development icon"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full block
      ${activeCategory === cat ? "hidden" : "group-hover/pill:hidden"}`}
                  />

                  {/* Hover / Active Red Image */}
                  <Image
                    src="/images/assets/fullStackHover.png"
                    alt="Mobile development icon active"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full
      ${activeCategory === cat
                        ? "block"
                        : "hidden group-hover/pill:block"
                      }`}
                  />

                </span>
              )}
              {/* n8n Automation — sparkle SVG*/}
              {cat === "n8n Automation" && (
                <span className="relative shrink-0 w-[16px] h-[16px] block">

                  {/* Default Gray Image */}
                  <Image
                    src="/images/assets/n8nIcon.png"
                    alt=" n8n Automation icon"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full block
      ${activeCategory === cat ? "hidden" : "group-hover/pill:hidden"}`}
                  />

                  {/* Hover / Active Red Image */}
                  <Image
                    src="/images/assets/n8nHover.png"
                    alt="n8n Automation icon active"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full
      ${activeCategory === cat
                        ? "block"
                        : "hidden group-hover/pill:block"
                      }`}
                  />

                </span>
              )}

              {/* SEO — magnifying glass SVG */}
              {cat === "SEO" && (
                <span className="relative shrink-0 w-[16px] h-[16px] block">

                  {/* Default Gray Image */}
                  <Image
                    src="/images/assets/seoSearch.png"
                    alt=" n8n Automation icon"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full block
      ${activeCategory === cat ? "hidden" : "group-hover/pill:hidden"}`}
                  />

                  {/* Hover / Active Red Image */}
                  <Image
                    src="/images/assets/seoHover.png"
                    alt="n8n Automation icon active"
                    width={16}
                    height={16}
                    className={`object-contain w-full h-full
      ${activeCategory === cat
                        ? "block"
                        : "hidden group-hover/pill:block"
                      }`}
                  />

                </span>
              )}

              {cat}

            </button>
          ))}

        </div>
      </section>

      {/* ── PROJECT LIST ── */}
      <section className="w-full max-w-[828px] mx-auto md:px-0 px-6 pb-24 flex flex-col gap-[64px] items-center">
        {filtered.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className={`w-full flex flex-col md:flex-row gap-[37px] items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Text side */}
              <div className="w-full md:w-[425px] shrink-0 flex flex-col items-start text-left">
                {/* Project title & logo */}
                <div className="flex items-center gap-[12px] h-[34px] mb-[16px]">
                  <div className="w-[30px] h-[30px] relative overflow-hidden flex shrink-0 items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-[6px] bg-[#FFFFFF]">
                    <Image
                      src={project.logo}
                      alt={`${project.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h2
                    className="text-[24px] font-medium text-[#000000] leading-[33.6px]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.name} - {project.type}
                  </h2>
                </div>

                {/* Description */}
                <p
                  className="text-[16px] text-[#707070] leading-[22.4px] mb-[16px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0px",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-nowrap gap-[8px] overflow-x-auto">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center whitespace-nowrap rounded-[33px] border border-[#707070]/30 bg-white px-[16px] py-[2px]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "0%",
                        color: "#707070",
                      }}
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              </div>

              {/* Image side */}
              <div className="relative w-full md:w-[366px] h-[256px] shrink-0 border-[0.5px] border-[#CCCCCE] rounded-[8px] overflow-hidden bg-white group cursor-pointer transition-all duration-300 md:hover:border-[#D41717] md:hover:shadow-[4px_4px_0px_0px_#D41717]">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="366px"
                />
                {/* Arrow icon button */}
                <div className="absolute top-[10px] right-[10px] z-10 flex w-[42px] h-[42px] items-center justify-center rounded-[22.83px] border-[0.59px] border-[#707070]/[0.3] bg-white p-[9.36px] transition-colors duration-300 group-hover:border-[#D41717]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full text-[#121212] transition-colors duration-300 group-hover:text-[#D41717]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion />

    </div>
  );
}