"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "../components/FAQAccordion";

const partners = ["Framer", "Notion", "Voiceflow", "furlough"];

const projects = [
  {
    id: 1,
    name: "TartanHQ",
    type: "Website Development",
    description:
      "A sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation.",
    img: "/images/tartanhq.png",
    bg: "#E8F4FD",
  },
  {
    id: 2,
    name: "Newslettr",
    type: "SaaS Product",
    description:
      "Your All-in-One Platform for Personalized Newsletters — built for creators and businesses.",
    img: "/images/newslettr.png",
    bg: "#FFF3E8",
  },
  {
    id: 3,
    name: "KeeleAI",
    type: "AI Product",
    description: "End-to-end AI-powered design partner for marketing teams.",
    img: "/images/keeleai.png",
    bg: "#F0F8F0",
  },
  {
    id: 4,
    name: "Toasty Design",
    type: "Branding",
    description: "Brand identity and visual system for a modern design studio.",
    img: "/images/toasty.png",
    bg: "#FEF3E8",
  },
];

const services = [
  {
    num: "01",
    title: "Comprehensive Digital Solutions",
    bullets: [
      "Creative UI/UX design",
      "Custom Web/App development",
      "Custom No-code development",
      "Strategic SEO optimization",
      "Professional video editing",
    ],
  },
];

const tools = [
  { name: "Domain Comp", desc: "Domain Prospector" },
  { name: "Pin Variate", desc: "Pinterest Tool" },
];

const trustItems = [
  { name: "uihen", company: "White Oak Wealth Management Company" },
  { name: "a ii", company: "White Oak Wealth Management Company" },
  { name: "uihen", company: "White Oak Wealth Management Company" },
  { name: "Civil labs", company: "Civil labs" },
];

const blogs = [
  {
    date: "Oct 18, 2024",
    read: "4 min read",
    title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
    tag: "Designing / Branding",
    img: "/images/blog1.png",
  },
  {
    date: "Oct 24, 2024",
    read: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
    img: "/images/blog2.png",
  },
  {
    date: "Nov 9, 2024",
    read: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
    img: "/images/blog3.png",
  },
];

// Placeholder image component
function PlaceholderImg({
  bg,
  text,
  className,
}: {
  bg: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl ${className}`}
      style={{ background: bg }}
    >
      <span className="text-xs text-gray-400 font-medium">{text}</span>
    </div>
  );
}

// Service icon pattern
function ServicePatternImg({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-xl bg-[#FFCFCF] flex items-center justify-center ${className}`}
    >
      <div className="grid grid-cols-3 gap-2 p-4">
        {["◎", "✳", "▷", "Mc", "N", "●", "↗", "◉", "△"].map((s, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-gray-800"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* ── HERO ── */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center relative">
        {/* Floating chat bubble */}
        <div className="absolute top-16 right-10 hidden md:flex flex-col items-end rotate-[4deg] pointer-events-none">
          <div className="bg-white border border-[#121212] rounded-full px-5 py-2.5 text-sm text-gray-600 shadow-sm relative z-10 font-medium">
            Need to finally, The sales?! 🙌
          </div>
          <div className="flex flex-col items-center mr-12 -mt-1 relative z-20">
            {/* Custom cursor SVG pointing top-left */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm -rotate-12 -ml-2">
              <path d="M6 3L20 10.5L12.5 13.5L10 21L6 3Z" fill="#121212" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <div className="bg-[#121212] text-white text-xs px-3 py-1.5 rounded-full mt-0.5 shadow-md font-medium">
              Naijil
            </div>
          </div>
        </div>
        <div className="absolute top-28 left-8 bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-2 text-xs text-gray-600 hidden md:block">
          Build & Notify The solution!
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-[#121212] leading-none tracking-tight mb-6">
          Your Product <br />
          <span className="italic font-serif text-gray-700">Delivered</span> Right
        </h1>
        <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
          Your revenue-channel. Let&apos;s build a path to success together.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-[#D62828] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#b82020] transition-colors flex items-center gap-2"
          >
            Book a free call 🗓
          </Link>
          <Link
            href="/projects"
            className="border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            View our Work
          </Link>
        </div>

        {/* "Get Paid on" label */}
        <p className="text-xs text-gray-400 mt-6">Get Paid on</p>
      </section>

      {/* ── PARTNER LOGOS ── */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {partners.map((p) => (
            <span key={p} className="text-gray-400 font-semibold text-lg">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ── OUR PROJECTS ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-4">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Our Projects</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#121212]">
            Ideas Turned Into Scalable Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {/* Featured project - wide */}
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-5 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="text-xs text-gray-400 mb-1">TartanHQ</div>
              <h3 className="font-bold text-lg text-[#121212]">
                Unified APIs And Agents{" "}
                <span className="text-[#D62828]">For All Product Integrations</span>
              </h3>
            </div>
            <PlaceholderImg
              bg="#EEF5FF"
              text="TartanHQ Screenshot"
              className="flex-1 h-40"
            />
          </div>

          {projects.slice(1, 4).map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3"
            >
              <PlaceholderImg
                bg={proj.bg}
                text={`${proj.name} Screenshot`}
                className="w-full h-32"
              />
              <div>
                <div className="text-xs text-gray-400">{proj.name}</div>
                <p className="font-semibold text-sm text-[#121212]">{proj.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Our Services</p>
          <h2 className="text-3xl font-black text-[#121212]">
            Services Built to Grow Your Business
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10 border-l-2 border-dashed border-gray-200 pl-8 relative">
          <div className="absolute -left-4 top-0 w-8 h-8 bg-white border-2 border-[#D62828] rounded-full flex items-center justify-center">
            <span className="text-xs font-black text-[#D62828]">01</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-[#121212] mb-3">
              Comprehensive Digital Solutions
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Our design approach blends creativity, user psychology, and brand strategy.
            </p>
            <ul className="space-y-2">
              {services[0].bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-medium text-[#121212]">
                  <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#D62828] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b82020] transition-colors"
            >
              Book a free call 🗓
            </Link>
          </div>
          <ServicePatternImg className="w-full md:w-64 h-44 flex-shrink-0" />
        </div>
        <div className="ml-8 mt-4 text-xs text-gray-400 border-l-2 border-dashed border-gray-200 pl-4 py-2">
          06
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Our Products</p>
          <h2 className="text-3xl font-black text-[#121212]">
            Tools Designed to Solve Real Problems
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white border border-gray-100 rounded-2xl p-5 h-40 flex flex-col justify-end"
            >
              <p className="text-xs text-gray-400">{tool.desc}</p>
              <p className="font-bold text-[#121212]">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl font-black text-[#121212]">
            Built for Speed, Quality, and Growth
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Scalable-Driven Product Design",
              desc: "Our designs evolve with your product — built to scale as your user base and business grow.",
            },
            {
              title: "Fast MVP Development",
              desc: "We ship fast and iterate even faster — so you can test, learn, and move before the market does.",
            },
            {
              title: "End-to-End Project Delivery",
              desc: "From strategy to design to development and launch, everything we handle, end-to-end.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[#121212] mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8">
          Trusted by 20+ Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-60 grayscale">
          {["Ondo Overseas", "Soulace", "BOLL", "Dartfrog Foundation"].map((b) => (
            <span key={b} className="font-bold text-gray-700 text-lg">
              {b}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link
            href="/contact"
            className="bg-[#D62828] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#b82020] transition-colors"
          >
            Book a free call 🗓
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8">
          Get Testimonials
        </p>
        <h2 className="text-center text-3xl font-black text-[#121212] mb-8">
          Trusted by Founders and Teams Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trustItems.map((t, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div>
                  <p className="font-semibold text-sm text-[#121212]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Enfiq is an exceptionally talented team that really understands design deeply. Their
                attention to detail is what sets them apart. From design to deploy everything we
                handled, nothing was missed.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion />

      {/* ── BLOGS ── */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">
          Our Blogs
        </p>
        <h2 className="text-center text-3xl font-black text-[#121212] mb-8">
          What We&apos;re Learning While Building
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <PlaceholderImg bg="#F3F3F3" text="Blog Image" className="w-full h-36" />
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>{blog.date}</span>
                  <span>{blog.read}</span>
                </div>
                <h3 className="font-semibold text-sm text-[#121212] mb-2">{blog.title}</h3>
                <span className="text-xs bg-red-50 text-[#D62828] px-2 py-1 rounded-full">
                  {blog.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/blogs"
            className="border border-gray-200 text-gray-700 font-medium px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">We&apos;re Focused on</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#121212] mb-4">
          Start Your Next Project With Us
        </h2>
        <p className="text-gray-500 mb-8">
          Let&apos;s create solutions that take your start-up to the next level. Contact us today to
          get started. Your future customers are waiting.
        </p>
        <Link
          href="/contact"
          className="bg-[#D62828] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#b82020] transition-colors"
        >
          Do it! 🗓
        </Link>
      </section>
    </div>
  );
}
