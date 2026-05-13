"use client";

import React, { useState } from "react";
import Image from "next/image";

const categories = [
  "Designing / Branding",
  "No-code Development",
  "Full Stack Development",
  "SEO",
  "TrendFIQ",
  "From the Desk of ENFIQ",
];

interface BlogPost {
  id: number;
  date: string;
  readTime: string;
  title: string;
  tag: string;
  bg: string;
  tagColor: string;
}

const allPosts: BlogPost[] = [
  {
    id: 1,
    date: "Oct 18, 2024",
    readTime: "4 min read",
    title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
    tag: "Designing / Branding",
    bg: "#F0F0FF",
    tagColor: "#D62828",
  },
  {
    id: 2,
    date: "Oct 24, 2024",
    readTime: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
    bg: "#FFF5F0",
    tagColor: "#D62828",
  },
  {
    id: 3,
    date: "Nov 9, 2024",
    readTime: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
    bg: "#F5F0FF",
    tagColor: "#D62828",
  },
  {
    id: 4,
    date: "Nov 9, 2024",
    readTime: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
    bg: "#F5F0FF",
    tagColor: "#D62828",
  },
  {
    id: 5,
    date: "Oct 18, 2024",
    readTime: "4 min read",
    title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
    tag: "Designing / Branding",
    bg: "#F0F0FF",
    tagColor: "#D62828",
  },
  {
    id: 6,
    date: "Oct 24, 2024",
    readTime: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
    bg: "#FFF5F0",
    tagColor: "#D62828",
  },
  {
    id: 7,
    date: "Oct 24, 2024",
    readTime: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
    bg: "#FFF5F0",
    tagColor: "#D62828",
  },
  {
    id: 8,
    date: "Nov 9, 2024",
    readTime: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
    bg: "#F5F0FF",
    tagColor: "#D62828",
  },
  {
    id: 9,
    date: "Oct 18, 2024",
    readTime: "4 min read",
    title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
    tag: "Designing / Branding",
    bg: "#F0F0FF",
    tagColor: "#D62828",
  },
];

// Blog card placeholder image
function BlogImagePlaceholder({ bg, tag }: { bg: string; tag: string }) {
  return (
    <div
      className="w-full aspect-[16/9] rounded-xl flex items-center justify-center relative overflow-hidden"
      style={{ background: bg }}
    >
      {/* Decorative elements based on tag */}
      {tag.includes("UX") || tag.includes("Design") ? (
        <span className="text-4xl font-black text-red-500 opacity-60">UX</span>
      ) : tag === "SEO" ? (
        <div className="text-center">
          <p className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Search Engine Optimization
          </p>
          <div className="w-16 h-8 border-2 border-red-300 rounded mt-2 mx-auto flex items-center justify-center">
            <span className="text-xs font-bold text-gray-600">ENFIQ</span>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
            NO-CODE VS FULL STACK
          </p>
        </div>
      )}
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="p-3">
        <BlogImagePlaceholder bg={post.bg} tag={post.title} />
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-semibold text-sm text-[#121212] leading-snug mb-3">
          {post.title}
        </h3>
        <div className="flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D62828" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-xs text-[#D62828] font-medium">{post.tag}</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("Designing / Branding");
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <div className="pt-16">
      {/* ── PAGE HEADER ── */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#121212] mb-4">
          Read some quality studies
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          We offer advanced chatbot development to enhance engagement and streamline communication,
          with tailored solutions and 24/7 support.
        </p>
      </section>

      {/* ── SEARCH + FILTERS ── */}
      <section className="max-w-3xl mx-auto px-6 pb-10 space-y-4">
        {/* Search bar */}
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                activeCategory === cat
                  ? "bg-[#D62828] text-white border-[#D62828]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── BLOG GRID (3-column) ── */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allPosts.slice(0, visibleCount).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < allPosts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="border border-gray-200 text-gray-700 font-medium px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* ── SUBSCRIBE SECTION ── */}
      <section className="max-w-4xl mx-auto px-6 py-12 mb-12">
        <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center shadow-sm">
          <span className="text-xs font-medium bg-gray-50 border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">
            Subscribe Us
          </span>
          <h2 className="text-3xl font-black text-[#121212] mt-4 mb-3">
            Subscribe to Our Insights
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8">
            Stay ahead of the curve with exclusive tips, industry insights, and expert advice. Sign
            up today and elevate your website development knowledge!
          </p>
          <div className="flex items-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button className="bg-[#D62828] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b82020] transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
