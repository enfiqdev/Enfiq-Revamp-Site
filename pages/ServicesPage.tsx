"use client";

import React from "react";
import Image from "next/image";

interface Service {
  num: string;
  title: string;
  description: string;
  bullets: string[];
}

const services: Service[] = [
  {
    num: "01",
    title: "Creative Design Services",
    description:
      "Our design approach blends creativity, user psychology, and brand strategy to craft visually compelling experiences that feel intuitive and leave a lasting impression.",
    bullets: [
      "Brand identity design",
      "UX/UI design",
      "Web & product visuals",
      "High-fidelity prototyping",
    ],
  },
  {
    num: "02",
    title: "Scalable Development Solutions",
    description:
      "We build reliable, scalable, and performance-driven digital products using modern technologies to turn complex ideas into powerful, real-world solutions.",
    bullets: [
      "Web application development",
      "Mobile app development",
      "Backend & API development",
      "Custom dashboards & software",
    ],
  },
  {
    num: "03",
    title: "No-Code Development Solutions",
    description:
      "We build modern, high-performing websites using Framer and WordPress that are easy to manage, fast to launch, and designed to grow with your business.",
    bullets: [
      "Custom Framer & WP development",
      "Responsive design for all devices",
      "CMS setup & content management",
      "Landing pages, blogs & business sites",
    ],
  },
  {
    num: "04",
    title: "SEO & Growth Optimization",
    description:
      "Our SEO strategies focus on long-term visibility and sustainable growth by aligning search intent, technical performance, visibility, traffic and high-quality content.",
    bullets: [
      "On-page & off-page SEO",
      "Technical SEO audits",
      "Keyword research & strategy",
      "Content optimization",
    ],
  },
  {
    num: "05",
    title: "Video Editing & Visual Storytelling",
    description:
      "We craft engaging video content that captures attention, tells your story clearly, and elevates your brand across digital platforms.",
    bullets: [
      "Social media reels & shorts",
      "YouTube video editing",
      "Promo & brand videos",
      "Motion graphics & titles",
    ],
  },
  {
    num: "06",
    title: "Workflow Automation with n8n",
    description:
      "We build smart automations using n8n that save time, reduce manual work, and connect all your tools into one smooth system.",
    bullets: [
      "Business process automation",
      "Lead, CRM & sales workflows",
      "Custom triggers, logic & alerts",
      "API & app integrations",
    ],
  },
];

const formatBullet = (bullet: string) => {
  const mapping: { [key: string]: { bold: string; regular: string } } = {
    // 01 Creative Design Services
    "Brand identity design": { bold: "Brand identity design", regular: "" },
    "UX/UI design": { bold: "UX/UI design", regular: "" },
    "Web & product visuals": { bold: "Web & product visuals", regular: "" },
    "High-fidelity prototyping": { bold: "High-fidelity prototyping", regular: "" },

    // 02 Scalable Development Solutions
    "Web application development": { bold: "Web application development", regular: "" },
    "Mobile app development": { bold: "Mobile app development", regular: "" },
    "Backend & API development": { bold: "Backend & API development", regular: "" },
    "Custom dashboards & software": { bold: "Custom dashboards & software", regular: "" },

    // 03 No-Code Development Solutions
    "Custom Framer & WP development": { bold: "Custom Framer & WP development", regular: "" },
    "Responsive design for all devices": { bold: "Responsive design for all devices", regular: "" },
    "CMS setup & content management": { bold: "CMS setup & content management", regular: "" },
    "Landing pages, blogs & business sites": { bold: "Landing pages, blogs & business sites", regular: "" },

    // 04 SEO & Growth Optimization
    "On-page & off-page SEO": { bold: "On-page & off-page SEO", regular: "" },
    "Technical SEO audits": { bold: "Technical SEO audits", regular: "" },
    "Keyword research & strategy": { bold: "Keyword research & strategy", regular: "" },
    "Content optimization": { bold: "Content optimization", regular: "" },

    // 05 Video Editing & Visual Storytelling
    "Social media reels & shorts": { bold: "Social media reels & shorts", regular: "" },
    "YouTube video editing": { bold: "YouTube video editing", regular: "" },
    "Promo & brand videos": { bold: "Promo & brand videos", regular: "" },
    "Motion graphics & titles": { bold: "Motion graphics & titles", regular: "" },

    // 06 Workflow Automation with n8n
    "Business process automation": { bold: "Business process automation", regular: "" },
    "Lead, CRM & sales workflows": { bold: "Lead, CRM & sales workflows", regular: "" },
    "Custom triggers, logic & alerts": { bold: "Custom triggers, logic & alerts", regular: "" },
    "API & app integrations": { bold: "API & app integrations", regular: "" },
  };

  const match = mapping[bullet];
  if (match) {
    return (
      <>
        <span style={{ fontWeight: 700 }}>{match.bold}</span>{match.regular}
      </>
    );
  }

  // Fallback: bold first two words, make the rest regular
  const words = bullet.split(" ");
  if (words.length <= 2) {
    return <span style={{ fontWeight: 700 }}>{bullet}</span>;
  }
  return (
    <>
      <span style={{ fontWeight: 700 }}>{words.slice(0, 2).join(" ")}</span>{" "}{words.slice(2).join(" ")}
    </>
  );
};

// Contact form — exact code from ContactPage.tsx
function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 ">
      <div className="text-center mb-8">
        <span
          className="inline-flex items-center justify-center border-[1px] border-[#DDDDDD] rounded-full px-[16px] py-[8px] bg-white"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#000000",
          }}
        >
          Contact us Form
        </span>
        <h2
          className="text-[32px] leading-[44.8px] font-semibold text-[#000000] mt-4 mb-[32px]"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Get in touch
        </h2>
        <p
          className="text-[#323232] text-[24px] leading-[32px] text-center mb-[32px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.6px",
          }}
        >
          We&apos;d love to hear from you. Please fill out this form.
        </p>
      </div>

      {/*gap is 16 px*/}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="mb-[6px] block text-[16px] text-[#000000]"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0%",
              }}
            >
              First name
            </label>

            <input
              type="text"
              placeholder="First name"
              className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                border: "1px solid #4C4C4C33",
                color: "#000000",
              }}
            />
          </div>
          <div>
            <label
              className="mb-[6px] block text-[16px] text-[#000000]"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0%",
              }}
            >
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                border: "1px solid #4C4C4C33",
                color: "#000000",
              }}
            />
          </div>
        </div>

        <div>
          <label
            className="mb-[6px] block text-[16px] text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              borderColor: "rgba(76,76,76,0.2)",
              color: "#000000",
              boxShadow: "0px 1px 2px rgba(16,24,40,0.05)",
            }}
          />
        </div>
        <div>
          <label
            className="mb-[6px] block text-[16px] text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            Phone number
          </label>

          <div
            className="flex items-center h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6]"
            style={{
              border: "1px solid #4C4C4C33",
              boxShadow: "0px 1px 2px #1018280D",
            }}
          >
            {/* Country Code */}
            <div className="relative flex items-center shrink-0">
              <select
                className="appearance-none bg-transparent pr-[24px] focus:outline-none"
                style={{
                  fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "22.4px",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                <option>US</option>
                <option>IN</option>
                <option>UK</option>
              </select>

              <svg
                className="absolute right-0 pointer-events-none"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="flex-1 min-w-0 bg-transparent focus:outline-none ml-[16px]"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                color: "#000000",
              }}
            />
          </div>
        </div>

        <div>
          <label
            className="mb-[6px] block text-[16px] text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            message
          </label>
          <textarea
            rows={5}
            className="w-full h-[125px] rounded-[12px] px-[14px] py-[10px] bg-[#F3F4F6] resize-none focus:outline-none"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              color: "#000000",
              border: "1px solid #4C4C4C33",
              boxShadow: "0px 1px 2px #1018280D",
            }}
          />
        </div>

        {/* Privacy Policy */}
        <div className="mt-[16px] mb-[32px] flex items-center gap-[12px]">
          <input
            type="checkbox"
            id="privacy"
            className="w-[20px] h-[20px] rounded-[6px] border border-[#000000] bg-[#F3F4F6] checked:bg-[#D41717] checked:border-[#D41717] cursor-pointer shrink-0 appearance-none flex items-center justify-center after:content-[''] checked:after:block checked:after:w-[6px] checked:after:h-[11px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45 checked:after:-mt-[1px] checked:after:mr-[0.5px]"
          />
          <label
            htmlFor="privacy"
            className="text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            You agree to our friendly privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-[48px] rounded-[77px] px-[24px] py-[12px] text-white bg-[#D41717] hover:bg-black transition-colors"
          style={{
            fontFamily: "'Instrument Sans', 'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "22.4px",
            letterSpacing: "0%",
            boxShadow: "inset 0px 4px 6px 2px #FFFFFF4D",
          }}
        >
          Get in touch
        </button>

        <div className="flex flex-row items-center justify-center gap-[12px] sm:gap-[48px] mt-[32px] w-full flex-nowrap">

          {/* EMAIL */}
          <div className="flex items-center gap-[6px] sm:gap-[10px] shrink-0">

            <div
              className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF] shrink-0"
              style={{
                border: "1px solid #7070704D",
              }}
            >
              <img
                src="/images/assets/@.png"
                alt="mail"
                className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
              />
            </div>

            <span
              className="text-[13px] xs:text-[14px] sm:text-[16px]"
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0%",
                color: "#323232",
              }}
            >
              team@enfiq.com
            </span>

          </div>

          {/* PHONE */}
          <div className="flex items-center gap-[6px] sm:gap-[10px] shrink-0">

            <div
              className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF] shrink-0"
              style={{
                border: "1px solid #7070704D",
              }}
            >
              <img
                src="/images/assets/contactSymbol.png"
                alt="phone"
                className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
              />
            </div>

            <span
              className="text-[13px] xs:text-[14px] sm:text-[16px]"
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0%",
                color: "#323232",
              }}
            >
              49987 78675
            </span>

          </div>

        </div>
      </form>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-[64px]">
      {/* ── PAGE HEADER ── */}
      <section className="max-w-3xl mx-auto px-6 pb-[64px] text-center">
        <h1
          className="w-full max-w-[560px] mx-auto text-center text-[#121212] mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "44.8px",
            letterSpacing: "0px",
          }}
        >
          Our Services
        </h1>
        <p
          className="w-full max-w-[560px] mx-auto text-center text-[#707070] px-4"
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

      {/* ── SERVICE LIST ── */}
      <section className="max-w-[1248px] mx-auto px-6 flex flex-col gap-[61.84px] py-[69.81px]">
        {services.map((service) => (
          <div
            key={service.num}
            className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between w-full max-w-[1144px] mx-auto gap-[60.31px] xl:h-[448px]"
          >
            {/* Horizontal mobile-only numbers header */}
            <div className="flex xl:hidden items-center justify-center w-full gap-4 mb-2">
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontWeight: 400,
                  fontSize: "48px",
                  lineHeight: "1",
                  color: "#D41717",
                }}
              >
                {service.num}
              </span>
              <div className="flex-1 max-w-[120px] border-b border-dashed border-[#707070]" />
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontWeight: 400,
                  fontSize: "48px",
                  lineHeight: "1",
                  color: "#707070",
                }}
              >
                06
              </span>
            </div>

            {/* Left Wrapper — relative ,so number column is absolute inside it. */}
            <div className="relative flex flex-row items-center flex-1 min-w-0 w-full xl:min-w-[450px] xl:h-full">

              {/* ── NUMBER COLUMN: absolute top-0 bottom-0, fills exact height of left wrapper ── */}
              <div className="hidden xl:flex absolute top-0 bottom-0 left-0 flex-col items-center justify-between" style={{ width: "54.11px" }}>

                {/* Top 61.84px / 74.21px lh / container 54.11×75 */}
                <div className="flex items-center justify-center shrink-0" style={{ width: "54.11px", height: "75px" }}>
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontWeight: 400,
                      fontSize: "61.84px",
                      lineHeight: "74.21px",
                      color: "#D41717",
                    }}
                  >
                    {service.num}
                  </span>
                </div>

                {/* Dashed line — flex-1 fills all space between the two numbers */}
                <div className="flex-1 w-full flex justify-center overflow-hidden">
                  <svg width="2" className="h-full" aria-hidden preserveAspectRatio="none">
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="100%"
                      stroke="#707070"
                      strokeWidth="1.5"
                      strokeDasharray="8 6"
                    />
                  </svg>
                </div>

                {/* Bottom number 06 — same container */}
                <div className="flex items-center justify-center shrink-0" style={{ width: "54.11px", height: "75px" }}>
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontWeight: 400,
                      fontSize: "61.84px",
                      lineHeight: "74.21px",
                      color: "#707070",
                    }}
                  >
                    06
                  </span>
                </div>
              </div>

              {/* space 54.11px for number col + 39.61px gap before content and the number column */}
              <div style={{ width: "54.11px", marginRight: "39.61px" }} className="shrink-0 hidden xl:block" />

              {/* Content Column */}
              <div className="flex-1 flex flex-col gap-[16px] py-[6px] w-full text-center xl:text-left items-center xl:items-start">
                <h3
                  className="text-[#000000]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "23.19px",
                    lineHeight: "32.46px",
                    letterSpacing: "0%",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#707070] text-[15.46px] leading-[21.64px]"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0%", fontWeight: 400 }}
                >
                  {service.description}
                </p>
                <ul className="flex flex-col gap-[8px] mt-[8px] w-fit text-left">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex flex-row items-start gap-[12px] min-h-[28px] h-auto py-0.5">
                      <span className="w-[8px] h-[8px] bg-[#D41717] rounded-full shrink-0 mt-[10px]" />
                      <span
                        className="text-[#000000]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "19.32px",
                          fontWeight: 700,
                          lineHeight: "27.05px",
                          letterSpacing: "0%",
                        }}
                      >
                        {formatBullet(bullet)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image Container — 448px tall on desktop, centers the 332px image vertically */}
            <div className="relative w-full xl:w-[560px] xl:h-full flex items-center justify-center shrink-0">
              <div
                className="relative w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[332px] rounded-[16px] overflow-hidden shadow-sm"
                style={{ maxWidth: "560px" }}
              >
                <Image
                  src="/images/assets/pinkSticker.png"
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="560px"
                >
                </Image>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CONTACT FORM ── */}
      <div className="border-t border-gray-100">
        <ContactForm />
      </div>
    </div>
  );
}
