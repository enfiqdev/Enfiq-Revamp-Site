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
  },
  {
    id: 2,
    name: "TartanHQ",
    type: "Website Development",
    description:
      "TartanHQ is a sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation. By leveraging Unified APIs, they provide businesses with real-time access to payroll, work, and financial data through a single integration.",
    tags: ["Design", "Framer Development", "On-Page SEO", "Framer Development", "On-Page SEO"],
    category: "Design",
    bg: "#EEF5FF",
  },
  {
    id: 3,
    name: "ReelerAI",
    type: "AI Product Design",
    description:
      "End-to-end AI-powered design partner for marketing teams, enabling faster campaign production with intelligent automation and brand consistency.",
    tags: ["Design", "No-code Development", "SEO"],
    category: "No-code Development",
    bg: "#F0F8F0",
  },
  {
    id: 4,
    name: "Newslettr",
    type: "SaaS Platform",
    description:
      "Your All-in-One Platform for Personalized Newsletters. Built for creators and businesses who want to grow their audience with tailored content.",
    tags: ["Web Development", "n8n Automation"],
    category: "Web Development",
    bg: "#FFF3E8",
  },
];

// Placeholder for project image
function ProjectImage({ bg, label }: { bg: string; label: string }) {
  return (
    <div
      className="w-full h-full rounded-xl flex items-center justify-center"
      style={{ background: bg }}
    >
      <div className="text-center">
        <p className="text-sm font-bold text-gray-600">{label}</p>
        <p className="text-xs text-gray-400 mt-1">Unified APIs And Agents</p>
        <p className="text-xs font-semibold text-[#D41717]">For All Product Integrations</p>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <div className="pt-16">
      {/* ── PAGE HEADER ── */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#121212] mb-4">Our Projects</h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          We offer advanced chatbot development to enhance engagement and streamline communication,
          with tailored solutions and 24/7 support.
        </p>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat
                  ? "bg-[#121212] text-white border-[#121212]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat === "All" && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── PROJECT LIST (Alternating layout) ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-12">
        {filtered.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Text side */}
              <div className="flex-1">
                {/* Project icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#D41717]/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#D41717] rounded-sm" />
                  </div>
                  <h2 className="text-xl font-black text-[#121212]">
                    {project.name} — {project.type}
                  </h2>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-gray-200 px-3 py-1 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="flex-1 h-52 w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <ProjectImage bg={project.bg} label={project.name} />
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
