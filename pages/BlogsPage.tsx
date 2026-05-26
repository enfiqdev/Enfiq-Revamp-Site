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
}

const allPosts: BlogPost[] = [
  {
    id: 1,
    date: "Oct 18, 2024",
    readTime: "4 min read",
    title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
    tag: "Designing / Branding",
  },
  {
    id: 2,
    date: "Oct 24, 2024",
    readTime: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
  },
  {
    id: 3,
    date: "Nov 9, 2024",
    readTime: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
  },
  {
    id: 4,
    date: "Nov 9, 2024",
    readTime: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
  },
  {
    id: 5,
    date: "Oct 18, 2024",
    readTime: "4 min read",
    title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
    tag: "Designing / Branding",
  },
  {
    id: 6,
    date: "Oct 24, 2024",
    readTime: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
  },
  {
    id: 7,
    date: "Oct 24, 2024",
    readTime: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
  },
  {
    id: 8,
    date: "Nov 9, 2024",
    readTime: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
  },
  {
    id: 9,
    date: "Oct 18, 2024",
    readTime: "4 min read",
    title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
    tag: "Designing / Branding",
  },
];

const getBlogCardData = (tag: string) => {
  switch (tag) {
    case "Designing / Branding":
      return {
        image: "/images/assets/UX.png",
        tagIcon: (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        )
      };
    case "SEO":
      return {
        image: "/images/assets/enfiqFrame.png",
        tagIcon: (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        )
      };
    case "No-code Development":
    default:
      return {
        image: "/images/assets/blogNoCode.png",
        tagIcon: (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
          </svg>
        )
      };
  }
};

const getCategoryIcon = (category: string, color: string) => {
  switch (category) {
    case "Designing / Branding":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      );
    case "No-code Development":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
        </svg>
      );
    case "Full Stack Development":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case "SEO":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      );
    case "TrendFIQ":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      );
    case "From the Desk of ENFIQ":
      return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      );
    default:
      return null;
  }
};

function BlogCard({ post }: { post: BlogPost }) {
  const { image, tagIcon } = getBlogCardData(post.tag);
  return (
    <div
      className="flex flex-col w-full max-w-[380px] min-h-[319px] rounded-[16px] border-[1px] border-[#000000] bg-[#FFFFFF] p-[10px] overflow-hidden gap-[10px] cursor-pointer hover:-translate-y-1 hover:border-[#D41717] hover:shadow-[4px_4px_0px_0px_#D41717] transition-all duration-300"
    >
      {/* 1. IMAGE FRAME */}
      <div className="relative w-[358px] h-[171px] rounded-[8px] overflow-hidden shrink-0 bg-gray-50 border-[0.5px] border-gray-100">
        <Image
          src={image}
          alt={post.title}
          fill
          className="object-contain"
          sizes="358px"
        />
      </div>

      {/* 2. CONTENT FRAME */}
      <div className="flex flex-col justify-between h-full w-[358px]">
        <div className="flex flex-col gap-[8px]">
          {/* A) Meta row */}
          <div className="flex justify-between items-center w-full">
            <span className="text-[12px] font-medium text-[#121212]">{post.date}</span>
            <span className="text-[12px] font-medium text-[#121212]">{post.readTime}</span>
          </div>

          {/* B) Blog title */}
          <h3
            className="text-[#121212] line-clamp-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0.5%"
            }}
          >
            {post.title}
          </h3>
        </div>

        {/* C) Category tag pill */}
        <div className="flex items-end mb-[2px]">
          <div className="flex items-center rounded-[8px] border border-[#D41717] bg-[#FFFFFF] px-[8px] py-[4px] gap-[4px]">
            <div className="text-[#D41717] flex items-center justify-center">
              {tagIcon}
            </div>
            <span className="text-[#D41717] text-[11px] font-semibold leading-none whitespace-nowrap mt-px">
              {post.tag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("Designing / Branding");

  return (
    <div className="pt-16]">
      {/* ── PAGE HEADER ── */}
      <section className="w-[560px] mx-auto pt-[48px] pb-[48px] flex flex-col items-center gap-[12px] text-center">
        <h1
          className="w-[598px] h-[45px] text-center text-[#000000]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "44.8px",
            letterSpacing: "0px",
          }}
        >
          Read some quality studies
        </h1>
        <p
          className="w-[520px] text-center text-[#707070] mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0px",
          }}
        >
          We offer advanced chatbot development to enhance engagement and streamline communication,
          with tailored solutions and 24/7 support.
        </p>
      </section>

      {/* ── SEARCH + FILTERS ── */}
      <section className="w-full max-w-[560px] mx-auto flex flex-col items-center gap-[16px] pb-[64px]">
        {/* Search bar */}
        {/* Search bar */}
        <div className="relative w-full h-[42px]">

          <svg
            className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#707070]"
            width="20"
            height="20"
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
            className="w-full h-full border border-[#7070704D] rounded-[49px] bg-white pl-[45px] pr-[8px] text-[16px] text-[#707070] placeholder:text-black/30 transition-all duration-300 hover:border-black hover:text-black focus:border-black focus:text-black focus:outline-none"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0px",
              color: "#707070",
            }}
          />

        </div>

        {/* Category filters */}
        {/* Category filters */}
        <div className="w-full flex flex-wrap gap-x-[6px] gap-y-[8px]">

          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const color = isSelected ? "#D41717" : "#707070";

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="
    group
    inline-flex
    items-center
    h-[29px]
    gap-[4px]
    px-[8px]
    py-[4px]
    rounded-[8px]
    border
    border-[#D4D4D4]
    bg-white
    text-[#707070]
    hover:text-[#D41717]
    hover:border-[#D41717]
    transition-all
    duration-200
  "
              >

                <span className="flex items-center justify-center shrink-0">
                  {getCategoryIcon(cat, "currentColor")}
                </span>

                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "21px",
                    letterSpacing: "0px",
                  }}
                >
                  {cat}
                </span>

              </button>
            );
          })}

        </div>
      </section>

      {/* ── BLOG GRID (9 in 3x3) ── */}
      <section className="max-w-[1248px] mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] justify-items-center">
          {allPosts.slice(0, 9).map((post) => (
            <BlogCard key={`${post.id}-${post.title}`} post={post} />
          ))}
        </div>
      </section>

      {/* ── LOAD MORE BUTTON ── */}
      <div className="flex justify-center mt-6 mb-0">
        <button
          className="group relative overflow-hidden border border-[#DDDDDD] rounded-full px-[24px] py-[12px] bg-white hover:bg-gray-50 transition-all duration-300"
        >
          <div className="relative h-[20px] overflow-hidden">
            {/* First Text */}
            <span
              className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-[20px] text-black whitespace-nowrap"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
              }}
            >
              Load More
            </span>

            {/* Second Text */}
            <span
              className="absolute left-0 top-[20px] flex w-full items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[-20px] text-black whitespace-nowrap"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
              }}
            >
              Load More
            </span>
          </div>
        </button>
      </div>

      {/* ── SUBSCRIBE SECTION ── */}
      <section className="max-w-[1248px] mx-auto px-6 py-[40px]">
        <div className="bg-white border border-[#EBEBEB] rounded-2xl p-10 text-center shadow-sm flex flex-col items-center">
          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#707070]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Subscribe Us
          </span>
          {/*gap between the heading and the paragraph  mb-[32px]*/}
          <h2
            className="text-[32px] leading-[44.8px] font-semibold text-[#000000] mt-2 mb-[32px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Subscribe to Our Insights
          </h2>
          <p
            className="w-[873px] h-[64px] mx-auto text-center mb-8 text-[#323232]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "-0.6px",
            }}
          >
            Stay ahead of the curve with exclusive tips, industry insights, and expert advice.
            Sign up today and elevate your website development knowledge!
          </p>
          <div className="flex items-center gap-4 w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 h-[48px] border border-[#DDDDDD] rounded-full px-5 text-[16px] placeholder:text-black/30 focus:outline-none focus:border-gray-400 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              className="group relative overflow-hidden h-[48px] bg-[#D41717] text-white px-[24px] rounded-full whitespace-nowrap transition-all duration-300 hover:bg-[#B91212] shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)]"
            >
              <div className="relative h-[20px] overflow-hidden">
                {/* First Text */}
                <span
                  className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-[20px] text-white whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "20px",
                  }}
                >
                  Subscribe Now
                </span>

                {/* Second Text */}
                <span
                  className="absolute left-0 top-[20px] flex w-full items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[-20px] text-white whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "20px",
                  }}
                >
                  Subscribe Now
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
