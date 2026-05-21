"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "../components/FAQAccordion";

const partners = ["Framer", "Notion", "Voiceflow", "furlough"];

/** Our Projects section â€” screenshots from `public/images/assets/VS` */
const vsProjectScreenshots = [
  "/images/assets/card1.png",
  "/images/assets/card2.png",
  "/images/assets/card3.png",
  "/images/assets/card4.png",
] as const;

const projects = [
  {
    id: 1,
    name: "TartanHQ",
    type: "Website Development",
    tags: ["Design", "Framer Development"],
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
      "Your All-in-One Platform for Personalized Newsletters â€” built for creators and businesses.",
    img: "/images/newslettr.png",
    logo: "/images/assets/newsteller.png",
    bg: "#FFF3E8",
  },
  {
    id: 3,
    name: "ReelerAI",
    type: "AI Product",
    tags: ["Development"],
    description: "End-to-end AI-powered design partner for marketing teams.",
    img: "/images/assets/ReelerAi.png",
    logo: "/images/assets/reelerIcon.png",
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

// Services section ai” tool sticker collage (pink panel + overlapping logo circles)
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
      <div className="relative w-full flex justify-center pt-20 pb-10">
        {/* Subtle Small Grid Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000 40%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000 40%, transparent 100%)'
          }}
        ></div>
        <section className="max-w-5xl w-full mx-auto px-6 text-center relative z-10">


          {/* Floating chat bubble */}
          <div className="absolute top-30 right-8 hidden md:flex flex-col items-end -rotate-[18deg] animate-float pointer-events-none">
            <div className="bg-white border border-[#121212] rounded-full px-5 py-2.5 text-sm text-gray-600 shadow-sm relative z-10 font-medium">
              Need to start a SaaS company?
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

          {/* Floating website modification bubble */}
          <div className="absolute left-[20px] top-[350px] hidden md:flex flex-col items-start -rotate-[4.44deg] z-20 animate-float pointer-events-none">

            {/* Main bubble */}
            <div className="h-[40px] rounded-full border-[1.47px] border-[#FF0000] bg-white px-[20px] flex items-center justify-center whitespace-nowrap shadow-sm">
              <span
                className="w-[218px] h-[24px] text-center text-[#707070]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                }}
              >
                Need to modify the website?
              </span>
            </div>

            {/* Cursor + name */}
            <div className="flex flex-col items-start ml-[42px] -mt-[6px] relative z-20">

              {/* Cursor */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
                aria-hidden
              >
                <path
                  d="M4 4.5L22 11.5C23.5 12 23.5 14 22 14.5L14.5 17L12 24.5C11.5 26 9.5 26 9 24.5L3 6C2.5 4.5 4 3 5 3.5L4 4.5Z"
                  fill="#D41717"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Name tag */}
              <div
                className="flex items-center justify-center bg-[#D41717] rounded-[68px] shadow-sm"
                style={{
                  width: "65px",
                  height: "29px",
                  padding: "4px 8px",
                  gap: "10px",
                }}
              >
                <span
                  className="text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "10px",
                    lineHeight: "10px",
                    letterSpacing: "0%",
                  }}
                >
                  Bhavya
                </span>
              </div>

            </div>
          </div>


          <h1
            className="max-w-[949px] w-full mx-auto flex flex-col items-center text-center text-[64px] leading-[83.2px] text-[#000000] font-normal tracking-normal mb-6 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="flex flex-wrap justify-center">
              {"Your Product".split("").map((char, i) => (
                <span
                  key={`p1-${i}`}
                  className="relative inline-block cursor-default group/char"
                >
                  <span className="invisible font-bold whitespace-pre">
                    {char}
                  </span>

                  <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-pre text-[#000000] font-normal transition-all duration-300 group-hover/char:font-bold">
                    {char}
                  </span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center">
              {"Delivered Right".split("").map((char, i) => (
                <span
                  key={`p2-${i}`}
                  className="relative inline-block cursor-default group/char"
                >
                  <span className="invisible font-bold whitespace-pre">
                    {char}
                  </span>

                  <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-pre text-[#000000] transition-all duration-300 group-hover/char:font-bold">
                    {char}
                  </span>
                </span>
              ))}
            </div>
          </h1>
          <p
            className="w-[949px] h-[24px] text-center text-[#707070] mb-8 mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
            }}
          >
            Your revenue, Elevated. Let&apos;s build a path to success together.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap relative">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[16px] bg-[#D41717] text-white pl-[24px] pr-[10px] py-[10px] rounded-full hover:bg-black transition-colors shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)]"
            >
              <span className="w-[117px] h-[24px] text-[16px] leading-[24px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                Book a free call
              </span>
              <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[#D41717] shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[26px] w-[26px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </span>
            </Link>
            <Link
              href="/projects"
              className="border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-full hover:border-black hover:text-black hover:bg-transparent transition-colors"
            >
              View our Work
            </Link>

          </div>

        </section>
      </div>

      {/* "Our Proud Partners" Section */}
      <section className="max-w-[857px] mx-auto px-6 pt-20 md:pt-24 pb-16 flex flex-col items-center gap-4">

        {/* Label Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center w-[160px] h-[33px] rounded-[12424px] border border-[#DDDDDD] bg-[#FDFDFD] px-4 py-2 text-[14px] font-normal leading-none text-[#000000] gap-[16px]">
            Our Proud Partners
          </span>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-12 md:gap-16 w-full">
          <Image src="/images/assets/company/a.png" alt="Framer" width={159} height={42.72} className="object-contain h-7 sm:h-8 md:h-9 w-auto" />
          <Image src="/images/assets/company/b.png" alt="Notion" width={139} height={48.08} className="object-contain h-7 sm:h-8 md:h-9 w-auto" />
          <Image src="/images/assets/company/c.png" alt="Voiceflow" width={213} height={38.77} className="object-contain h-7 sm:h-8 md:h-9 w-auto" />
          <Image src="/images/assets/company/d.png" alt="furlough" width={154} height={48} className="object-contain h-7 sm:h-8 md:h-9 w-auto" />
        </div>
      </section>

      {/*  OUR PROJECTS */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-[10px] py-[40px] px-[24px] xl:px-[148px]">
        <div className="w-full max-w-[1144px] mx-auto flex flex-col  gap-[64px]">
          <div className="text-center">
            <span
              className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] mb-4"
              style={{
                width: "114px",
                height: "33px",
                padding: "8px 16px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#000000",
                verticalAlign: "middle",
              }}
            >
              Our Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#121212] tracking-tight">
              Ideas Turned Into Scalable Projects
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12 xl:gap-14">
            {/* Left: copy + CTA */}
            <div className="shrink-0 lg:w-[32%] lg:max-w-sm lg:pt-1 text-center lg:text-left">
              <h3
                className="w-[268px] h-[90px] text-[32px] leading-[44.8px] text-[#121212] mb-4 mx-auto lg:mx-0"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0%' }}
              >
                Where your ideas find <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 400 }}>direction</span>
              </h3>
              <p
                className="w-[365px] h-[48px] text-[16px] leading-[24px] text-[#707070] mb-8 mx-auto lg:mx-0"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0%' }}
              >
                A proven record of delivering our services across 10 industries over 7 years
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-[16px] bg-[#D41717] text-white pl-[24px] pr-[10px] py-[10px] rounded-full hover:bg-black transition-colors shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)]"
              >
                <span className="w-[117px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0%' }}>
                  Book a free call
                </span>
                <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[#D41717] shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[26px] w-[26px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Right: 2—2 project grid */}
            <div className="min-w-0 flex-1 lg:max-w-[62%]">
              <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px]">
                {projects.slice(0, 4).map((proj, i) => (
                  <Link
                    href="/projects"
                    key={proj.id}
                    aria-label={`View ${proj.name}`}
                    className="flex flex-col gap-[24px] w-full group"
                  >
                    <article
                      className="relative w-full overflow-hidden border-[0.5px] border-[#CCCCCE] rounded-[8px] bg-white transition-all duration-300 cursor-pointer hover:border-[#D41717] hover:shadow-[4px_4px_0px_0px_#D41717] aspect-[366/256]"
                    >
                      <Image
                        src={vsProjectScreenshots[i]}
                        alt={`${proj.name} product screenshot`}
                        fill
                        sizes="(max-width: 1024px) 45vw, 320px"
                        className="object-cover object-top"
                      />
                      <div className="absolute top-[10px] right-[10px] z-10 flex w-[42px] h-[42px] items-center justify-center rounded-[22.83px] border-[0.59px] border-[#707070]/[0.3] bg-white p-[9.36px] transition-colors duration-300 group-hover:border-[#D41717]">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-full h-full text-[#121212] transition-colors duration-300 group-hover:text-[#D41717]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M7 17L17 7M17 7H9M17 7V15" />
                        </svg>
                      </div>
                    </article>

                    <div className="flex flex-col w-full gap-[8px]">
                      <div className="flex flex-row items-center gap-[8px]">
                        <div className="relative w-[30px] h-[30px] flex shrink-0 items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-[6px] bg-[#FFFFFF] overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={proj.logo}
                              alt={`${proj.name} Logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <span
                          className="text-[24px] font-normal text-[#000000] leading-[33.6px]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {proj.name}
                        </span>
                      </div>

                      <div className="flex flex-row flex-wrap items-center gap-[8px]">
                        {proj.tags.map((tag) => {
                          let widthClass = "w-auto";
                          const t = tag.toUpperCase();
                          if (t === "DESIGN") widthClass = "w-[78px]";
                          else if (t === "DEVELOPMENT") widthClass = "w-[120px]";
                          else if (t === "FRAMER DEVELOPMENT") widthClass = "w-[171px]";

                          return (
                            <span
                              key={tag}
                              className={`inline-flex items-center justify-center rounded-[33px] border border-[#707070]/[0.3] bg-white px-[16px] py-[2px] gap-[10px] text-[14px] font-normal text-[#707070] leading-[21px] group-hover:text-[#000000] transition-colors duration-300 h-[25px] ${widthClass}`}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="w-full max-w-[1440px] mx-auto pt-[40px] pb-[40px] px-[24px] xl:px-[148px]">
        <div className="w-full max-w-[1144px] mx-auto flex flex-col items-center mb-[40px]">

          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#707070] hover:text-black transition-colors duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Our Services
          </span>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#121212] tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
            Services Built to Grow Your Business
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row items-start justify-center w-full max-w-[1144px] mx-auto gap-[64px] xl:gap-[23.28px]">

          {/* Left Content Wrapper */}
          <div className="flex flex-row w-full xl:w-[500px] shrink-0 gap-[41px] items-start">
            {/* Number Column */}
            <div className="flex flex-col w-[56px] shrink-0 items-center -mt-[22px]">
              <div className="flex items-center justify-center w-[56px] h-[77px] shrink-0">
                <span className="text-[64px] leading-[76.8px] text-[#707070] font-normal tracking-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>01</span>
              </div>
              <svg width="2" height="304" viewBox="0 0 2 304" fill="none" className="shrink-0" aria-hidden>
                <line x1="1" y1="0" x2="1" y2="304" stroke="#707070" strokeWidth="1" strokeDasharray="30 20" />
              </svg>
              <div className="flex items-center justify-center w-[56px] h-[77px] shrink-0">
                <span className="text-[64px] leading-[76.8px] text-[#D41717] font-normal tracking-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>06</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <div className="flex flex-col w-[403px] gap-[16px] mb-[24px]">
                <h3
                  className="w-[403px] h-[34px] text-[24px] font-normal text-[#000000] leading-[33.6px] tracking-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Comprehensive Digital Solutions
                </h3>
                <p
                  className="w-[403px] h-[90px] text-[16px] font-normal text-[#707070] leading-[22.4px] tracking-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our holistic approach combines creativity, technical expertise, and strategic growth to build scalable digital experiences that elevate your brand and streamline your operations.
                </p>
              </div>

              <ul className="flex flex-col w-[325px] gap-[8px]">
                {[
                  "Creative UI/UX design",
                  "Custom Website development",
                  "Custom No-code development",
                  "Strategic SEO optimization",
                  "Smart workflow automation",
                  "Professional video editing",
                ].map((bullet) => (
                  <li key={bullet} className="flex flex-row items-center w-fit h-[28px] gap-[8px]">
                    <span className="w-[10px] h-[10px] bg-[#D41717] rounded-full shrink-0" />
                    <span className="font-bold text-[20px] text-[#000000] leading-[28px] tracking-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full xl:w-[620.72px] h-[368px] rounded-[17.73px] overflow-hidden shrink-0 mt-[20px] xl:mt-0">
            <Image
              src="/images/assets/pinkSticker.png"
              alt="Services Overview"
              fill
              className="object-cover"
            />
          </div>

        </div>

        <div className="flex justify-center w-full mt-[40px]">
          <Link
            href="/contact"
            className="inline-flex items-center gap-[16px] bg-[#D41717] text-white pl-[24px] pr-[10px] py-[10px] rounded-full hover:bg-black transition-colors shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)]"
          >
            <span className="w-[117px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0%' }}>
              Book a free call
            </span>
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[#D41717] shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-[26px] w-[26px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 17L17 7M17 7H9M17 7V15" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="w-full max-w-[1144px] mx-auto px-[24px] xl:px-0 pt-[40px]">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#707070] hover:text-black transition-colors duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Our Products
          </span>
          <h2 className="text-3xl font-black text-[#121212]">
            Tools Designed to Solve Real Problems
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-[23px]">
          {/* Card 1 */}
          <div className="flex flex-col gap-[24px] w-full xl:w-[560px] group">
            <article className="relative w-full h-[350px] overflow-hidden border-[0.5px] border-[#CCCCCE] rounded-[8px] bg-white transition-all duration-300 cursor-pointer hover:border-[#D41717] hover:shadow-[4px_4px_0px_0px_#D41717]">
              <Image src="/images/assets/whiteOAK/domComp.png" alt="Domain Comp" fill sizes="(max-width: 1024px) 45vw, 560px" className="object-cover object-top" />
              <Link
                href="#"
                className="absolute top-[10px] right-[10px] z-10 flex w-[42px] h-[42px] items-center justify-center rounded-[22.83px] border-[0.59px] border-[#707070]/[0.3] bg-white p-[9.36px] transition-colors duration-300 group-hover:border-[#D41717]"
              >
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#121212] transition-colors duration-300 group-hover:text-[#D41717]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </Link>
            </article>
            <div className="flex flex-col items-start gap-[8px]">
              <div className="flex flex-row items-center gap-[8px]">
                <div className="relative w-[30px] h-[30px] flex shrink-0 items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-[6px] bg-[#FFFFFF] overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image src="/images/assets/VS/DomainCompLogo.png" alt="Domain Comp Logo" fill className="object-contain" />
                  </div>
                </div>
                <span className="text-[24px] font-normal text-[#000000] leading-[33.6px]" style={{ fontFamily: "'Inter', sans-serif" }}>Domain Comp</span>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-[8px]">
                <span className="inline-flex items-center justify-center rounded-[33px] border border-[#707070]/[0.3] bg-white px-[16px] py-[2px] gap-[10px] text-[14px] font-normal text-[#707070] leading-[21px] transition-colors duration-300 h-[25px] w-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Domain Comparator
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-[24px] w-full xl:w-[560px] group">
            <article className="relative w-full h-[350px] overflow-hidden border-[0.5px] border-[#CCCCCE] rounded-[8px] bg-white transition-all duration-300 cursor-pointer hover:border-[#D41717] hover:shadow-[4px_4px_0px_0px_#D41717]">
              <Image src="/images/assets/phiV.png" alt="Phi Variate" fill sizes="(max-width: 1024px) 45vw, 560px" className="object-cover object-top" />
              <Link
                href="#"
                className="absolute top-[10px] right-[10px] z-10 flex w-[42px] h-[42px] items-center justify-center rounded-[22.83px] border-[0.59px] border-[#707070]/[0.3] bg-white p-[9.36px] transition-colors duration-300 group-hover:border-[#D41717]"
              >
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#121212] transition-colors duration-300 group-hover:text-[#D41717]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </Link>
            </article>
            <div className="flex flex-col items-start gap-[8px]">
              <div className="flex flex-row items-center gap-[8px]">
                <div className="relative w-[30px] h-[30px] flex shrink-0 items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-[6px] bg-[#FFFFFF] overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image src="/images/assets/VS/phiVirateLogo.png" alt="Phi Variate Logo" fill className="object-contain" />
                  </div>
                </div>
                <span className="text-[24px] font-normal text-[#000000] leading-[33.6px]" style={{ fontFamily: "'Inter', sans-serif" }}>Phi Variate</span>
              </div>
              <div className="flex flex-row flex-wrap items-center gap-[8px]">
                <span className="inline-flex items-center justify-center rounded-[33px] border border-[#707070]/[0.3] bg-white px-[16px] py-[2px] gap-[10px] text-[14px] font-normal text-[#707070] leading-[21px] transition-colors duration-300 h-[25px] w-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Martech SaaS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="w-full max-w-[1440px] mx-auto px-6 xl:px-[148px] py-10">
        <div className="w-full max-w-[1144px] mx-auto text-center mb-10">
          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#707070] hover:text-black transition-colors duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Why choose us
          </span>
          <h2
            className="w-[550px] h-[45px] mx-auto text-center text-[32px] leading-[44.8px] tracking-normal font-semibold text-[#000000]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built for Speed, Quality, and Growth
          </h2>
        </div>
        <div className="w-full max-w-[1144px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          {[
            {
              title: "Scalable-Driven\nProduct Design",
              desc: "Our projects combine clean UX, strong performance, and SEO-ready design, built to scale as your business grows.",
              icon: "i1",
              hoverIcon: "cube3",
              iconWidth: "106px",
              iconHeight: "106px",
              iconRight: "19.88px",
              titleDims: "w-[301px] h-[90px]"
            },
            {
              title: "Fast MVP\nDevelopment",
              desc: "We help startups and businesses launch MVPs quickly using Framer and modern tech, so you can test ideas and reach users faster.",
              icon: "i2",
              hoverIcon: "cube2",
              iconWidth: "106px",
              iconHeight: "106px",
              iconRight: "22px",
              titleDims: "w-[301px] h-[90px]"
            },
            {
              title: "End-to-End\nProject Delivery",
              desc: "From strategy to design to development and launch, we handle everything no handoffs, no delays, just execution.",
              icon: "i3",
              hoverIcon: "cube1",
              iconWidth: "106px",
              iconHeight: "106px",
              iconRight: "22.16px",
              titleDims: "w-[239px] h-[90px]"
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative w-full max-w-[365px] h-[409px] group cursor-pointer"
            >
              {/* Dynamic Border via Drop Shadow on Masked Shape */}
              <div
                className="absolute inset-0 transition-all duration-300 [filter:drop-shadow(1px_0_0_#707070)_drop-shadow(-1px_0_0_#707070)_drop-shadow(0_1px_0_#707070)_drop-shadow(0_-1px_0_#707070)] group-hover:[filter:drop-shadow(1px_0_0_#D41717)_drop-shadow(-1px_0_0_#D41717)_drop-shadow(0_1px_0_#D41717)_drop-shadow(0_-1px_0_#D41717)_drop-shadow(4px_4px_0_#D41717)]"
              >
                <div
                  className="w-full h-full bg-[#EFEFEF]"
                  style={{
                    WebkitMaskImage: `url('/images/assets/maskcard.png')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskPosition: 'center',
                    WebkitMaskRepeat: 'no-repeat',
                    maskImage: `url('/images/assets/maskcard.png')`,
                    maskSize: 'contain',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 p-[24px_32px] flex flex-col justify-between">
                <h3
                  className={`text-[32px] text-[#000000] leading-[44.8px] font-light group-hover:font-normal transition-all duration-300 ${card.titleDims}`}
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0%' }}
                >
                  {card.title.split('\n').map((line, j) => (
                    <React.Fragment key={j}>
                      {line}
                      {j === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>

                {/* Icon */}
                <div
                  className="absolute top-[50%] -translate-y-[50%]"
                  style={{
                    width: card.iconWidth,
                    height: card.iconHeight,
                    right: card.iconRight
                  }}
                >
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <Image
                      src={`/images/assets/${card.icon}.png`}
                      alt="icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <Image
                      src={`/images/assets/${card.hoverIcon}.png`}
                      alt="icon hover"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p
                  className="w-[290px] h-[96px] text-[16px] text-[#707070] font-normal leading-[24px] text-left transition-colors duration-300 group-hover:text-[#000000]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0%' }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-12 overflow-hidden w-full max-w-[1440px] mx-auto px-6 xl:px-[108.5px]">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8 md:mb-10">
          Trusted by 20+ Brands
        </p>

        {/* Infinite Marquee Slider */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="flex w-max items-center animate-marquee-ltr"
          >
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
                  "/images/assets/bikerr (1).png",
                  "/images/assets/bikerr (2).png",
                  "/images/assets/bikerr (3).png",
                  "/images/assets/expify.png",
                  "/images/assets/collaborators/Frame 1437255827.png"
                ].map((src, idx) => (
                  <div
                    key={`${groupIndex}-${idx}`}
                    className="relative h-7 sm:h-8 md:h-10 w-24 sm:w-28 md:w-32 transition-all duration-300 hover:scale-110 opacity-100 hover:opacity-100 hover:brightness-110 cursor-pointer"
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
            className="inline-flex items-center gap-[16px] bg-[#D41717] text-white pl-[24px] pr-[10px] py-[10px] rounded-full hover:bg-black transition-colors shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)]"
          >
            <span className="w-[117px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0%' }}>
              Book a free call
            </span>
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[#D41717] shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-[26px] w-[26px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 17L17 7M17 7H9M17 7V15" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-12 overflow-hidden w-full max-w-[1440px] mx-auto px-6 xl:px-[108.5px]">
        <div className="w-full text-center mb-10 flex flex-col items-center">
          <span
            className="inline-flex items-center justify-center rounded-[12424px] border border-[#DDDDDD] bg-white px-[16px] py-[8px] mb-4 text-[#707070] hover:text-black transition-colors duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#707070"
            }}
          >
            Our Testimonials
          </span>
          <h2
            className="w-[669px] h-[45px] text-[32px] text-[#000000] text-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, lineHeight: "44.8px", letterSpacing: "0%" }}
          >
            Trusted by Founders and Teams Worldwide
          </h2>
        </div>

        <div
          className="flex flex-col gap-[16px] w-full relative overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* Row 1: Moves LTR (Right) */}
          <div className="flex w-max animate-marquee-ltr">
            {[1, 2, 3].map((groupIndex) => (
              <div key={groupIndex} className="flex gap-[16px] pr-[16px]">
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
                  <div
                    key={`${groupIndex}-${i}`}
                    className="w-[400px] shrink-0 bg-white rounded-[15px] border border-[#EAEAEA] transition-shadow hover:shadow-sm"
                    style={{
                      paddingTop: "20px",
                      paddingRight: "20px",
                      paddingBottom: "18.8px",
                      paddingLeft: "20px"
                    }}
                  >
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
              <div key={groupIndex} className="flex gap-[16px] pr-[16px]">
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
                  <div
                    key={`${groupIndex}-${i}`}
                    className="w-[400px] shrink-0 bg-white rounded-[15px] border border-[#EAEAEA] transition-shadow hover:shadow-sm"
                    style={{
                      paddingTop: "20px",
                      paddingRight: "20px",
                      paddingBottom: "18.8px",
                      paddingLeft: "20px"
                    }}
                  >
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
      <section className="max-w-[1248px] mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium text-gray-600 mb-4">
            Our Blogs
          </span>
          <h2
            className="w-[549px] h-[45px] text-center text-[32px] leading-[44.8px] tracking-normal text-[#000000] mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            What We’re Learning While Building
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] justify-items-center">
          {[
            {
              image: "/images/assets/UX.png",
              date: "Oct 18, 2024",
              readTime: "4 min read",
              title: "Why Bad Website UX Design Is Killing Your Startup's Growth",
              tagText: "Designing / Branding",
              tagIcon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              )
            },
            {
              image: "/images/assets/enfiqFrame.png",
              date: "Oct 24, 2024",
              readTime: "4 min read",
              title: "How Fast Website Speed Boosts SEO: Top Tips for 2025",
              tagText: "SEO",
              tagIcon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              )
            },
            {
              image: "/images/assets/nocode.png",
              date: "Nov 9, 2024",
              readTime: "4 min read",
              title: "No-Code vs Full-Stack Dev: The Best Choice for Your Startup...",
              tagText: "No-code Development",
              tagIcon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
              )
            }
          ].map((blog, i) => (
            <div
              key={i}
              className="flex flex-col w-[380px] h-[319px] rounded-[16px] border-[1px] border-[#000000] bg-[#FFFFFF] p-[10px] overflow-hidden gap-[10px] cursor-pointer hover:-translate-y-1 hover:border-[#D41717] hover:shadow-[4px_4px_0px_0px_#D41717] transition-all duration-300"
            >
              {/* 1. IMAGE FRAME */}
              <div className="relative w-[358px] h-[171px] rounded-[8px] overflow-hidden shrink-0 bg-gray-50 border-[0.5px] border-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
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
                    <span className="text-[12px] font-medium text-[#121212]">{blog.date}</span>
                    <span className="text-[12px] font-medium text-[#121212]">{blog.readTime}</span>
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
                    {blog.title}
                  </h3>
                </div>

                {/* C) Category tag pill */}
                <div className="flex items-end mb-[2px]">
                  <div className="flex items-center rounded-[8px] border border-[#D41717] bg-[#FFFFFF] px-[8px] py-[4px] gap-[4px]">
                    <div className="text-[#D41717] flex items-center justify-center">
                      {blog.tagIcon}
                    </div>
                    <span className="text-[#D41717] text-[11px] font-semibold leading-none whitespace-nowrap mt-px">
                      {blog.tagText}
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
        <div className="bg-[#F8F9FA] rounded-[40px] px-6 py-16 md:py-20 flex flex-col items-center text-center gap-[32px]">
          <span
            className="inline-flex items-center justify-center w-[132px] h-[33px] rounded-[12424px] border border-[#DDDDDD] bg-[#FFFFFF]"
            style={{
              padding: "8px 16px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
              color: "#000000",
            }}
          >
            Our Contact us
          </span>
          <h2
            className="w-[484px] h-[45px] text-center text-[32px] leading-[44.8px] tracking-normal text-[#000000]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            Start Your Next Project With Us
          </h2>
          <p
            className="w-[729px] h-[64px] flex items-center justify-center text-center text-[24px] leading-[32px] text-[#323232]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.6px",
            }}
          >
            Let&apos;s create solutions that takes your start-up to the next level.<br className="hidden sm:block" />
            Contact us today to get started. Your future customers are waiting.
          </p>

          <form className="w-full max-w-[560px] flex flex-col gap-4">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-[580px] h-[100px] rounded-[16px] border border-[#DDDDDD] bg-[#FFFFFF] resize-none outline-none shadow-none"
              style={{
                padding: "15px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
              }}
            />

            <div className="flex items-center gap-[16px] w-[580px]">

              <input
                type="email"
                placeholder="Enter your mail"
                className="flex-1 h-[48.67px] rounded-[50px] border border-[#DDDDDD] bg-[#FFFFFF] outline-none shadow-none"
                style={{
                  padding: "15px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000",
                }}
              />
              <button
                className="inline-flex items-center justify-center gap-[16px] rounded-[77px] bg-[#D41717] px-[24px] py-[12px] shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)]"
              >
                <span
                  className="w-[93px] h-[24px] text-center text-[16px] leading-[24px] tracking-normal text-[#FFFFFF] whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Get in touch
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
