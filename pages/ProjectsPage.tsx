"use client";

import React, { useState } from "react";

import FAQAccordion from "../components/FAQAccordion";
import ProjectRowCard from "../components/ProjectRowCard";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";
import { StaggerContainer } from "../components/CardWrapper";
import Section from "../components/Section";
import ProjectCategoryPill from "../components/ProjectCategoryPill";


const categories = [
  "All",
  "Design",
  "Web Development",
  "No-code Development",
  "Mobile Development",
  "n8n Automation",
  "SEO",
];

const categoryImages: Record<string, { before: string; after: string }> = {
  "All": {
    before: "/images/assets/A1.png",
    after: "/images/assets/allHover.png",
  },
  "Design": {
    before: "/images/assets/v1.png",
    after: "/images/assets/v2.png",
  },
  "Web Development": {
    before: "/images/assets/fullStack.png",
    after: "/images/assets/fullStackHover.png",
  },
  "No-code Development": {
    before: "/images/assets/NC.png",
    after: "/images/assets/NCH.png",
  },
  "Mobile Development": {
    before: "/images/assets/fullStack.png",
    after: "/images/assets/fullStackHover.png",
  },
  "n8n Automation": {
    before: "/images/assets/n8nIcon.png",
    after: "/images/assets/n8nHover.png",
  },
  "SEO": {
    before: "/images/assets/seoSearch.png",
    after: "/images/assets/seoHover.png",
  },
};

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
      <Section as="section" className="max-w-[560px] mx-auto px-6 text-center flex flex-col items-center" amount={0.25}>

        <AnimatedHeading
          as="h1"
          text="Our Projects"
          className="w-full text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "32px",

            lineHeight: "44.8px",
            letterSpacing: "0px",
            color: "#000000",
          }}
        />

        <AnimatedText
          as="p"
          text="We offer advanced chatbot development to enhance engagement and streamline communication, with tailored solutions and 24/7 support."
          className="w-full text-center mt-[16px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0px",
            color: "#707070",
          }}
        />

      </Section>

      {/* ── FILTER BAR ── */}
      <section className="max-w-[560px] mx-auto px-6 pt-[48px] pb-[64px]">
        <div className="flex flex-wrap gap-[6px] justify-start">

          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const images = categoryImages[cat as keyof typeof categoryImages];

            return (
              <ProjectCategoryPill
                key={cat}
                label={cat}
                isSelected={isSelected}
                onClick={() => setActiveCategory(cat)}
                iconBefore={images?.before}
                iconAfter={images?.after}
                size="md"
              />
            );
          })}

        </div>
      </section>

      {/* ── PROJECT LIST ── */}
      <Section as="section" className="w-full max-w-[828px] mx-auto md:px-0 px-6 pb-24 flex flex-col gap-[64px] items-center" amount={0.25}>
        <StaggerContainer className="w-full flex flex-col gap-[64px] items-center">
          {filtered.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <ProjectRowCard
                key={project.id}
                project={project}
                isEven={isEven}
              />
            );
          })}
        </StaggerContainer>
      </Section>

      {/* ── FAQ ── */}
      <FAQAccordion />

    </div>
  );
}