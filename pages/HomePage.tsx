"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "../components/FAQAccordion";

const partners = ["Framer", "Notion", "Voiceflow", "furlough"];

/** Our Projects section — screenshots from `public/images/assets/VS` */
const vsProjectScreenshots = [
  "/images/assets/VS/3.png", // TartanHQ
  "/images/assets/VS/2.png", // Newslettr
  "/images/assets/VS/4.png", // ReelerAI
  "/images/assets/VS/1.png", // Toasty Design
] as const;

const projects = [
  {
    id: 1,
    name: "TartanHQ",
    type: "Website Development",
    tags: ["Framer Development"],
    description:
      "A sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation.",
    img: "/images/tartanhq.png",
    logo: "/images/assets/tartanHQLogo.png",
    bg: "#E8F4FD",
  },
  {
    id: 2,
    name: "Newslettr",
    type: "SaaS Product",
    tags: ["Design", "Development"],
    description:
      "Your All-in-One Platform for Personalized Newsletters — built for creators and businesses.",
    img: "/images/newslettr.png",
    logo: "/images/assets/tD (2).png",
    bg: "#FFF3E8",
  },
  {
    id: 3,
    name: "ReelerAI",
    type: "AI Product",
    tags: ["Development"],
    description: "End-to-end AI-powered design partner for marketing teams.",
    img: "/images/assets/ReelerAi.png",
    logo: "/images/assets/ReelerFrame.png",
    bg: "#F0F8F0",
  },
  {
    id: 4,
    name: "Toasty Design",
    type: "Branding",
    tags: ["Framer Development"],
    description: "Brand identity and visual system for a modern design studio.",
    img: "/images/toasty.png",
    logo: "/images/assets/tD (1).png",
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
    img: "/images/assets/g1.png",
  },
  {
    date: "Oct 24, 2024",
    read: "4 min read",
    title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
    tag: "SEO",
    img: "/images/assets/g2.png",
  },
  {
    date: "Nov 9, 2024",
    read: "4 min read",
    title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
    tag: "No-code Development",
    img: "/images/assets/g3.png",
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

// Services section — tool sticker collage (pink panel + overlapping logo circles)
const serviceStickerLogos: { src: string; label: string; box: string }[] = [
  {
    src: "/images/assets/company/devicon-plain_figma.png",
    label: "Figma",
    box: "left-[4%] top-[14%] z-30 h-[3.25rem] w-[3.25rem] sm:h-14 sm:w-14 -rotate-[14deg] md:h-16 md:w-16",
  },
  {
    src: "/images/assets/company/simple-icons_notion.png",
    label: "Notion",
    box: "left-[30%] top-[6%] z-20 h-12 w-12 sm:h-[3.25rem] sm:w-[3.25rem] rotate-[10deg] md:h-14 md:w-14",
  },
  {
    src: "/images/assets/company/devicon-plain_vscode.png",
    label: "VS Code",
    box: "right-[6%] top-[16%] z-10 h-[3.25rem] w-[3.25rem] sm:h-14 sm:w-14 rotate-[16deg] md:h-16 md:w-16",
  },
  {
    src: "/images/assets/company/Voiceflow-wordmark-dark%201.png",
    label: "Voiceflow",
    box: "left-[18%] top-[40%] z-40 h-16 w-16 sm:h-[4.25rem] sm:w-[4.25rem] -rotate-[8deg] md:h-[4.5rem] md:w-[4.5rem]",
  },
  {
    src: "/images/assets/company/enfiqLOGO.png",
    label: "Enfiq",
    box: "right-[10%] top-[38%] z-[25] h-12 w-12 sm:h-14 sm:w-14 rotate-[12deg] md:h-[3.75rem] md:w-[3.75rem]",
  },
  {
    src: "/images/assets/nocode.png",
    label: "No-code",
    box: "left-[8%] bottom-[16%] z-[15] h-12 w-12 sm:h-[3.25rem] sm:w-[3.25rem] rotate-[4deg] md:h-14 md:w-14",
  },
  {
    src: "/images/assets/company/simple-icons_notion-1.png",
    label: "Notion",
    box: "left-[42%] bottom-[10%] z-[35] h-11 w-11 sm:h-12 sm:w-12 -rotate-[18deg] md:h-14 md:w-14",
  },
  {
    src: "/images/assets/devicon-plain_vscode.png",
    label: "VS Code",
    box: "right-[18%] bottom-[20%] z-20 h-11 w-11 sm:h-12 sm:w-12 rotate-[6deg] md:h-[3.25rem] md:w-[3.25rem]",
  },
];

function ServiceStickerCollage({ className }: { className?: string }) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[1.75rem] bg-[#FFDDE3] shadow-sm ring-1 ring-black/[0.04] ${className ?? ""}`}
      aria-label="Tools and platforms we work with, including Figma, Notion, and VS Code"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)`,
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto h-[min(22rem,52vw)] w-full max-w-[20rem] min-h-[240px] sm:min-h-[260px] md:h-[18rem] md:max-w-none">
        <Image
          src="/images/assets/VS/stickers.png"
          alt="Tool stickers"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const targetRate = React.useRef(1);
  const currentRate = React.useRef(1);
  const rafId = React.useRef<number>();

  const updateRate = React.useCallback(() => {
    const diff = targetRate.current - currentRate.current;
    if (Math.abs(diff) < 0.01) {
      currentRate.current = targetRate.current;
    } else {
      currentRate.current += diff * 0.05;
      rafId.current = requestAnimationFrame(updateRate);
    }
    if (marqueeRef.current) {
      marqueeRef.current.getAnimations().forEach((anim) => {
        anim.playbackRate = currentRate.current;
      });
    }
  }, []);

  const handleMouseEnter = () => {
    targetRate.current = 0.2;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateRate);
  };

  const handleMouseLeave = () => {
    targetRate.current = 1;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateRate);
  };

  React.useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

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
              <path d="M6 3L20 10.5L12.5 13.5L10 21L6 3Z" fill="#121212" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <div className="bg-[#121212] text-white text-xs px-3 py-1.5 rounded-full mt-0.5 shadow-md font-medium">
              Naijil
            </div>
          </div>
        </div>


        <h1 className="text-4xl md:text-[64px] font-normal not-italic text-[#000000] leading-[1.3] md:leading-[83.2px] tracking-normal mb-6 flex flex-col items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="flex flex-wrap justify-center">
            {"Your Product".split("").map((char, i) => (
              <span key={`p1-${i}`} className="relative inline-block cursor-default group/char">
                <span className="invisible font-bold whitespace-pre">{char}</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-150 group-hover/char:font-bold whitespace-pre text-[#000000]">
                  {char}
                </span>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {"Delivered Right".split("").map((char, i) => (
              <span key={`p2-${i}`} className="relative inline-block cursor-default group/char">
                <span className="invisible font-bold whitespace-pre">{char}</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-0 transition-all duration-150 group-hover/char:font-bold whitespace-pre text-[#000000]">
                  {char}
                </span>
              </span>
            ))}
          </div>
        </h1>
        <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
          Your revenue-channel. Let&apos;s build a path to success together.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap relative">
          <Link
            href="/contact"
            className="bg-[#D41717] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#B21313] transition-colors flex items-center gap-2"
          >
            Book a free call 🗓
          </Link>
          <Link
            href="/projects"
            className="border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-black hover:text-black hover:bg-transparent transition-colors"
          >
            View our Work
          </Link>

          {/* Need to modify the website? — pill bubble + cursor + tag */}
          <div className="absolute top-[85px] right-[calc(50%+60px)] hidden md:flex flex-col items-start pointer-events-none -rotate-[4.44deg] z-20">
            <div className="border border-[#D41717] bg-white rounded-full px-4 py-2 h-[40px] flex items-center justify-center text-[13px] font-medium text-gray-500 shadow-sm relative z-10 whitespace-nowrap">
              Need to modify the website?
            </div>
            <div className="flex flex-col items-start ml-6 -mt-2.5 relative z-20">
              <svg
                width="22"
                height="22"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
                aria-hidden
              >
                <path d="M4 4.5L22 11.5C23.5 12 23.5 14 22 14.5L14.5 17L12 24.5C11.5 26 9.5 26 9 24.5L3 6C2.5 4.5 4 3 5 3.5L4 4.5Z" fill="#D41717" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
              </svg>
              <div className="bg-[#D41717] text-white text-[10px] px-2.5 py-1 rounded-full -mt-0.5 ml-3 font-medium shadow-sm">
                Bhavya
              </div>
            </div>
          </div>
        </div>

        {/* "Our Proud Partners" label */}
        <div className="mt-20 md:mt-24 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600">
            Our Proud Partners
          </span>
        </div>
      </section>

      {/* ── PARTNER LOGOS ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap mt-8">
          <Image src="/images/assets/company/a.png" alt="Framer" width={140} height={40} className="object-contain h-6 sm:h-8 md:h-9 w-auto" />
          <Image src="/images/assets/company/b.png" alt="Notion" width={140} height={40} className="object-contain h-6 sm:h-8 md:h-9 w-auto" />
          <Image src="/images/assets/company/c.png" alt="Voiceflow" width={160} height={40} className="object-contain h-6 sm:h-8 md:h-9 w-auto" />
          <Image src="/images/assets/company/d.png" alt="furlough" width={140} height={40} className="object-contain h-6 sm:h-8 md:h-9 w-auto" />
        </div>
      </section>

      {/* ── OUR PROJECTS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#121212] tracking-tight">
            Ideas Turned Into Scalable Projects
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12 xl:gap-14">
          {/* Left: copy + CTA */}
          <div className="shrink-0 lg:w-[32%] lg:max-w-sm lg:pt-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#121212] leading-tight tracking-tight mb-4">
              Where your ideas find <span className="font-extrabold">direction</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              A proven record of delivering our services across 10 industries over 7 years
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#D41717] text-white text-sm font-semibold pl-5 pr-1.5 py-1.5 rounded-full hover:bg-[#B21313] transition-colors shadow-sm"
            >
              Book a free call
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#D41717]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Right: 2×2 project grid */}
          <div className="min-w-0 flex-1 lg:max-w-[62%]">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {projects.slice(0, 4).map((proj, i) => (
                <article
                  key={proj.id}
                  className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex flex-col gap-2 min-h-0 hover:[filter:drop-shadow(0_0_1px_#D41717)_drop-shadow(3px_3px_0_#D41717)] transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative w-full shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 aspect-[1.4] sm:aspect-[1.5]">
                    <Image
                      src={vsProjectScreenshots[i]}
                      alt={`${proj.name} product screenshot`}
                      fill
                      sizes="(max-width: 1024px) 45vw, 320px"
                      className="object-cover object-top"
                    />
                    <Link
                      href="/projects"
                      aria-label={`View ${proj.name}`}
                      className="absolute top-1.5 right-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gray-100 bg-white text-[#121212] shadow-sm transition-colors hover:bg-gray-50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M7 17L17 7M17 7H9M17 7V15" />
                      </svg>
                    </Link>
                  </div>
                  <div className="min-w-0 px-0.5">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={proj.logo}
                        alt={`${proj.name} Logo`}
                        width={30}
                        height={30}
                        className="object-contain shrink-0"
                      />
                      <p className="truncate text-[15px] sm:text-[17px] font-medium text-[#121212]">
                        {proj.name}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
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
          <div className="absolute -left-4 top-0 w-8 h-8 bg-white border-2 border-[#D41717] rounded-full flex items-center justify-center">
            <span className="text-xs font-black text-[#D41717]">01</span>
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
                  <span className="w-1.5 h-1.5 bg-[#D41717] rounded-full" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#D41717] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#B21313] transition-colors"
            >
              Book a free call 🗓
            </Link>
          </div>
          <ServiceStickerCollage className="w-full shrink-0 md:max-w-[min(100%,22rem)] lg:max-w-[24rem]" />
        </div>
        <div className="ml-8 mt-4 text-xs text-gray-400 border-l-2 border-dashed border-gray-200 pl-4 py-2">
          06
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 mb-4">
            Our Products
          </span>
          <h2 className="text-3xl font-black text-[#121212]">
            Tools Designed to Solve Real Problems
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 flex flex-col gap-4 shadow-sm hover:[filter:drop-shadow(0_0_1px_#D41717)_drop-shadow(3px_3px_0_#D41717)] transition-all duration-300 cursor-pointer group">
            <div className="relative w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50 aspect-[1.6]">
              <Image src="/images/assets/VS/domComp.png" alt="Domain Comp" fill className="object-cover" />
              <Link
                href="#"
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212] shadow-sm transition-colors hover:bg-gray-50"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </Link>
            </div>
            <div className="px-1 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-md overflow-hidden bg-white shrink-0 flex items-center justify-center">
                  <Image src="/images/assets/VS/DomainCompLogo.png" alt="Domain Comp Logo" fill className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-[#121212]">Domain Comp</h3>
              </div>
              <span className="inline-flex rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-500">
                Domain Comparator
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-3 md:p-4 flex flex-col gap-4 shadow-sm hover:[filter:drop-shadow(0_0_1px_#D41717)_drop-shadow(3px_3px_0_#D41717)] transition-all duration-300 cursor-pointer group">
            <div className="relative w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50 aspect-[1.6]">
              <Image src="/images/assets/VS/phiVariate.png" alt="Phi Variate" fill className="object-cover object-top" />
              <Link
                href="#"
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#D41717] shadow-sm transition-colors hover:bg-gray-50"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </Link>
            </div>
            <div className="px-1 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-md overflow-hidden bg-white shrink-0 flex items-center justify-center">
                  <Image src="/images/assets/VS/phiVirateLogo.png" alt="Phi Variate Logo" fill className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-[#121212]">Phi Variate</h3>
              </div>
              <span className="inline-flex rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-500">
                Martech SaaS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-black text-[#121212]">
            Built for Speed, Quality, and Growth
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Scalable-Driven Product Design",
              img: "/images/assets/VS/cmp1.png",
              hasTextOverlay: false
            },
            {
              title: "Fast MVP\nDevelopment",
              desc: "We help startups and businesses launch MVPs quickly using Framer and modern tech, so you can test ideas and reach users faster.",
              img: "/images/assets/VS/cmp2.png",
              hasTextOverlay: true
            },
            {
              title: "End-to-End\nProject Delivery",
              desc: "From strategy to design to development and launch, we handle everything no handoffs, no delays, just execution.",
              img: "/images/assets/VS/cmp3.png",
              hasTextOverlay: true
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="relative w-full aspect-[4/5] md:aspect-[3/4] group cursor-pointer"
            >
              <div className="absolute inset-0 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:[filter:drop-shadow(0_0_1px_#D41717)_drop-shadow(3px_3px_0_#D41717)]">
                <Image src={card.img} alt={card.title} fill className="object-contain" />
              </div>
              {card.hasTextOverlay && (
                <div 
                  className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between pointer-events-none" 
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <h3 className="text-xl lg:text-[22px] text-[#121212] leading-snug font-normal mt-2">
                    {card.title.split('\n').map((line, j) => (
                      <React.Fragment key={j}>
                        {line}
                        {j === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed max-w-[85%] md:max-w-[75%] transition-colors duration-300 group-hover:text-[#121212] mb-6 md:mb-10 lg:mb-12">
                    {card.desc!}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-12 overflow-hidden w-full">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8 md:mb-10 px-6">
          Trusted by 20+ Brands
        </p>

        {/* Infinite Marquee Slider */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="flex w-max items-center animate-marquee-ltr"
          >
            {/* 
              Render two identical groups to create a seamless infinite loop.
              The gap between groups is implicitly created by padding-right on each group.
            */}
            {[1, 2].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex items-center gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16"
              >
                {[
                  "/images/assets/collaborators/Frame 1437255747.png",
                  "/images/assets/collaborators/Frame 1437255750.png",
                  "/images/assets/collaborators/Frame 1437255825.png",
                  "/images/assets/collaborators/Frame 1437255826@3x.png",
                  "/images/assets/collaborators/Frame 1437255827.png"
                ].map((src, idx) => (
                  <div
                    key={`${groupIndex}-${idx}`}
                    className="relative h-7 sm:h-8 md:h-10 w-24 sm:w-28 md:w-32 transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100 hover:brightness-110 cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={`Trusted Brand ${idx + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 6rem, (max-width: 768px) 7rem, 8rem"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10 md:mt-12 px-6">
          <Link
            href="/contact"
            className="bg-[#D41717] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#B21313] transition-colors"
          >
            Book a free call 🗓
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-12 overflow-hidden w-full">
        <div className="max-w-[1150px] mx-auto px-6 text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium text-gray-600 mb-4">
            Our Testimonials
          </span>
          <h2 className="text-3xl font-black text-[#121212]">
            Trusted by Founders and Teams Worldwide
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full relative max-w-[1600px] mx-auto">
          {/* Row 1: Moves LTR (Right) */}
          <div className="flex w-max animate-marquee-ltr">
            {[1, 2, 3].map((groupIndex) => (
              <div key={groupIndex} className="flex gap-4 md:gap-5 pr-4 md:pr-5">
                {[
                  {
                    name: "Bhushan",
                    company: "Reeler AI",
                    img: "/images/assets/ReelerAi.png",
                    text: "Enfiq built a landing page for us and did exactly that. They took our ideas and turned them into a reality for our brand. The creativity and their attention to detail..."
                  },
                  {
                    name: "White Oak",
                    company: "Wealth Management Company",
                    img: "/images/assets/whiteOAK.png",
                    text: "Enfiq's designs are truly exceptional! The creativity and attention to detail in their work set them apart. Their ability to understand my vision and design accordingly is impressive."
                  },
                  {
                    name: "White Oak",
                    company: "Wealth Management Company",
                    img: "/images/assets/whiteOAK.png",
                    text: "Enfiq's designs are truly exceptional! The creativity and attention to detail in their work set them apart. Their ability to understand my vision and design accordingly is impressive."
                  },
                  {
                    name: "Civil labs",
                    company: "Civil Contracting",
                    img: "/images/assets/civillabs.png",
                    text: "ENFIQ took our business to the next level with a stunning new website. Their design skills and attention to detail made a big difference in our brand visibility and customer engagement. We're thrilled with the result and highly recommend their services to any business looking to grow online!"
                  }
                ].map((t, i) => (
                  <div key={`${groupIndex}-${i}`} className="w-[340px] md:w-[380px] shrink-0 bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 relative rounded-full overflow-hidden shrink-0 border border-gray-100 bg-white">
                        <Image src={t.img} alt={t.name} fill className="object-contain" />
                      </div>
                      <div>
                        <p className="font-bold text-[15px] text-[#121212] leading-tight">{t.name}</p>
                        <p className="text-[12px] font-medium text-gray-500 mt-0.5">{t.company}</p>
                      </div>
                    </div>
                    <p className="text-[12.5px] sm:text-[13px] text-[#121212] leading-relaxed font-medium">
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2: Moves RTL (Left) */}
          <div className="flex w-max animate-marquee-rtl">
            {[1, 2, 3].map((groupIndex) => (
              <div key={groupIndex} className="flex gap-4 md:gap-5 pr-4 md:pr-5">
                {[
                  {
                    name: "Bhushan",
                    company: "Reeler AI",
                    img: "/images/assets/ReelerAi.png",
                    text: "Enfiq built a landing page for us and did exactly that. They took our ideas and turned them into a reality for our brand. The creativity and their attention to detail..."
                  },
                  {
                    name: "White Oak",
                    company: "Wealth Management Company",
                    img: "/images/assets/whiteOAK.png",
                    text: "Enfiq's designs are truly exceptional! The creativity and attention to detail in their work set them apart. Their ability to understand my vision and design accordingly is impressive."
                  },
                  {
                    name: "White Oak",
                    company: "Wealth Management Company",
                    img: "/images/assets/whiteOAK.png",
                    text: "Enfiq's designs are truly exceptional! The creativity and attention to detail in their work set them apart. Their ability to understand my vision and design accordingly is impressive."
                  },
                  {
                    name: "Civil labs",
                    company: "Civil Contracting",
                    img: "/images/assets/civillabs.png",
                    text: "ENFIQ took our business to the next level with a stunning new website. Their design skills and attention to detail made a big difference in our brand visibility and customer engagement. We're thrilled with the result and highly recommend their services to any business looking to grow online!"
                  }
                ].map((t, i) => (
                  <div key={`${groupIndex}-${i}`} className="w-[340px] md:w-[380px] shrink-0 bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 relative rounded-full overflow-hidden shrink-0 border border-gray-100 bg-white">
                        <Image src={t.img} alt={t.name} fill className="object-contain" />
                      </div>
                      <div>
                        <p className="font-bold text-[15px] text-[#121212] leading-tight">{t.name}</p>
                        <p className="text-[12px] font-medium text-gray-500 mt-0.5">{t.company}</p>
                      </div>
                    </div>
                    <p className="text-[12.5px] sm:text-[13px] text-[#121212] leading-relaxed font-medium">
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion />

      {/* ── BLOGS ── */}
      <section className="max-w-[1150px] mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium text-gray-600 mb-4">
            Our Blogs
          </span>
          <h2 className="text-3xl font-black text-[#121212]">
            What We&apos;re Learning While Building
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:[filter:drop-shadow(0_0_1px_#D41717)_drop-shadow(3px_3px_0_#D41717)] transition-all duration-300 cursor-pointer group">
              <div className="p-3">
                <div className="relative w-full aspect-[1.7] rounded-2xl overflow-hidden bg-[#F9F9F9]">
                  <Image src={blog.img} alt={blog.title} fill className="object-cover object-top" />
                </div>
              </div>
              <div className="px-5 pb-6 pt-1 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500">
                  <span>{blog.date}</span>
                  <span>{blog.read}</span>
                </div>
                <h3 className="font-bold text-[16px] text-[#121212] leading-snug line-clamp-2 min-h-[44px]">
                  {blog.title}
                </h3>
                <div className="mt-1">
                  <div className="inline-flex items-center gap-1.5 border border-[#D41717] rounded-full px-2.5 py-1">
                    <span className="text-[#D41717] flex items-center justify-center">
                      {blog.tag === "Designing / Branding" && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      )}
                      {blog.tag === "SEO" && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      )}
                      {blog.tag === "No-code Development" && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                        </svg>
                      )}
                    </span>
                    <span className="text-[10px] font-bold text-[#D41717] tracking-wide">
                      {blog.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/blogs"
            className="border border-gray-200 text-[#121212] font-semibold px-8 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-[1150px] mx-auto px-6 py-12 mb-10">
        <div className="bg-[#F8F9FA] rounded-[40px] px-6 py-16 md:py-20 flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium text-gray-600 mb-6">
            Our Contact us
          </span>
          <h2 className="text-3xl md:text-[38px] font-black text-[#121212] mb-5 tracking-tight">
            Start Your Next Project With Us
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#333] mb-10 max-w-[560px] leading-[1.6]">
            Let&apos;s create solutions that takes your start-up to the next level.<br className="hidden sm:block" />
            Contact us today to get started. Your future customers are waiting.
          </p>
          
          <form className="w-full max-w-[560px] flex flex-col gap-4">
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl resize-none outline-none focus:border-gray-300 text-[13px] placeholder:text-gray-400 font-medium shadow-sm"
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your mail" 
                className="flex-1 px-5 py-3.5 bg-white border border-gray-200 rounded-full outline-none focus:border-gray-300 text-[13px] placeholder:text-gray-400 font-medium shadow-sm"
              />
              <button 
                type="button" 
                className="bg-[#D41717] text-white font-medium text-[14px] px-8 py-3.5 rounded-full hover:bg-[#B21313] transition-colors shadow-[0_8px_20px_rgba(212,23,23,0.3)] shrink-0"
              >
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
