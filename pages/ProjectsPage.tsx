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
    image: "/images/assets/card1.png",
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
    image: "/images/assets/card1.png",
  },
];



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
    <div className="pt-[64px] bg-[#F8F8F8]">

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
              className={`inline-flex items-center justify-center gap-[6px]
        px-[8px] py-[4px]
        rounded-[8px]
        border-[1px]
        transition-all duration-300
        w-fit
        ${activeCategory === cat
                  ? "border-[#D41717] text-[#D41717] bg-white"
                  : "border-[#707070] text-[#707070] bg-white hover:text-black"
                }`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >

              {/* Icons */}
              {cat === "All" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M8 12H16M12 8V16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 7C4 7 2 9 2 12C2 15 4 17 7 17C9 17 10.5 16 12 14C13.5 12 15 11 17 11C20 11 22 13 22 16C22 19 20 21 17 21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              {cat === "Design" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M3 21L9 15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.5 4.5L19.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 7L17 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 12L12 17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              {cat === "Web Development" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M8 7L3 12L8 17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7L21 12L16 17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {cat === "No-code Development" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M9 9L15 15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {cat === "Mobile Development" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M8 7L3 12L8 17"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7L21 12L16 17"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {cat === "n8n Automation" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {cat === "SEO" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M20 20L16.5 16.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
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
                <div className="flex flex-wrap gap-[8px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center rounded-[33px] border-[1px] border-[#707070]/[0.3] bg-white px-[16px] py-[2px] text-[14px] font-normal text-[#707070] leading-[21px] h-[25px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="relative w-full md:w-[366px] h-[256px] shrink-0 border-[0.5px] border-[#CCCCCE] rounded-[8px] overflow-hidden bg-white group cursor-pointer transition-all duration-300 hover:border-[#D41717]">
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