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
    "Brand identity design": { bold: "Brand identity", regular: " design" },
    "UX/UI design": { bold: "UX/UI", regular: " design" },
    "Web & product visuals": { bold: "Web & product", regular: " visuals" },
    "High-fidelity prototyping": { bold: "High-fidelity", regular: " prototyping" },
    
    // 02 Scalable Development Solutions
    "Web application development": { bold: "Web application", regular: " development" },
    "Mobile app development": { bold: "Mobile app", regular: " development" },
    "Backend & API development": { bold: "Backend & API", regular: " development" },
    "Custom dashboards & software": { bold: "Custom dashboards &", regular: " software" },
    
    // 03 No-Code Development Solutions
    "Custom Framer & WP development": { bold: "Custom Framer & WP", regular: " development" },
    "Responsive design for all devices": { bold: "Responsive design", regular: " for all devices" },
    "CMS setup & content management": { bold: "CMS setup &", regular: " content management" },
    "Landing pages, blogs & business sites": { bold: "Landing pages, blogs &", regular: " business sites" },
    
    // 04 SEO & Growth Optimization
    "On-page & off-page SEO": { bold: "On-page & off-page", regular: " SEO" },
    "Technical SEO audits": { bold: "Technical SEO", regular: " audits" },
    "Keyword research & strategy": { bold: "Keyword research &", regular: " strategy" },
    "Content optimization": { bold: "Content", regular: " optimization" },
    
    // 05 Video Editing & Visual Storytelling
    "Social media reels & shorts": { bold: "Social media", regular: " reels & shorts" },
    "YouTube video editing": { bold: "YouTube", regular: " video editing" },
    "Promo & brand videos": { bold: "Promo & brand", regular: " videos" },
    "Motion graphics & titles": { bold: "Motion graphics &", regular: " titles" },
    
    // 06 Workflow Automation with n8n
    "Business process automation": { bold: "Business process", regular: " automation" },
    "Lead, CRM & sales workflows": { bold: "Lead, CRM &", regular: " sales workflows" },
    "Custom triggers, logic & alerts": { bold: "Custom triggers, logic &", regular: " alerts" },
    "API & app integrations": { bold: "API & app", regular: " integrations" },
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

// Contact form for services page
function ContactForm() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
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
          Contact us Form
        </span>
        <h2
          className="text-[32px] leading-[44.8px] font-semibold text-[#000000] mt-2 mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Get in touch
        </h2>
        <p
          className="text-[#707070] text-[16px] leading-[24px] max-w-xl mx-auto mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We&apos;d love to hear from you. Please fill out this form.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-600 mb-1 block" style={{ fontFamily: "'Inter', sans-serif" }}>First name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block" style={{ fontFamily: "'Inter', sans-serif" }}>Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block" style={{ fontFamily: "'Inter', sans-serif" }}>Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block" style={{ fontFamily: "'Inter', sans-serif" }}>Phone number</label>
          <div className="flex gap-2">
            <select className="border border-gray-200 rounded-lg px-2 py-2.5 text-sm focus:outline-none w-20" style={{ fontFamily: "'Inter', sans-serif" }}>
              <option>US</option>
              <option>IN</option>
              <option>UK</option>
            </select>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block" style={{ fontFamily: "'Inter', sans-serif" }}>Message</label>
          <textarea
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors resize-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="privacy" className="accent-[#D41717]" />
          <label htmlFor="privacy" className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
            You agree to our friendly privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#D41717] text-white font-semibold py-3 rounded-full hover:bg-black transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Get in touch
        </button>

        {/* Contact info */}
        <div className="flex items-center justify-center gap-8 pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center text-[#D41717] font-semibold">
              @
            </span>
            team@enfiq.com
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center text-[#D41717]">
              📞
            </span>
            49987 78675
          </div>
        </div>
      </form>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* ── PAGE HEADER ── */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 
          className="text-4xl md:text-5xl font-black text-[#121212] mb-4"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}
        >
          Our Services
        </h1>
        <p 
          className="text-[#707070] text-sm max-w-md mx-auto"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
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
            className="flex flex-col xl:flex-row items-start justify-between w-full max-w-[1144px] mx-auto gap-[60.31px]"
          >
            {/* Left Wrapper (Number + Content) */}
            <div className="flex flex-row gap-[41px] items-start flex-1 min-w-[320px] md:min-w-[450px]">
              {/* Number Column */}
              <div className="flex flex-col w-[56px] shrink-0 items-center -mt-[14px]">
                <div className="flex items-center justify-center w-[56px] h-[77px] shrink-0">
                  <span 
                    className="text-[64px] leading-[76.8px] text-[#D41717] font-normal tracking-normal" 
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {service.num}
                  </span>
                </div>
                <svg width="2" height="178" viewBox="0 0 2 178" fill="none" className="shrink-0" aria-hidden>
                  <line x1="1" y1="0" x2="1" y2="178" stroke="#CCCCCE" strokeWidth="1.5" strokeDasharray="8 6" />
                </svg>
                <div className="flex items-center justify-center w-[56px] h-[77px] shrink-0">
                  <span 
                    className="text-[64px] leading-[76.8px] text-[#CCCCCE] font-normal tracking-normal" 
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    06
                  </span>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 flex flex-col pl-[24px] border-l border-[#D41717]/[0.3] gap-[16px] py-[6px]">
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
                  className="text-[#707070] text-[15px] leading-[22.4px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {service.description}
                </p>
                <ul className="flex flex-col gap-[8px] mt-[8px]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex flex-row items-center gap-[12px] h-[28px]">
                      <span className="w-[8px] h-[8px] bg-[#D41717] rounded-full shrink-0" />
                      <span
                        className="text-[#000000]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "19.32px",
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

            {/* Right Image Container */}
            <div className="relative w-full xl:w-[560px] h-[332px] rounded-[17.73px] overflow-hidden shrink-0 shadow-sm border border-gray-100 mt-6 xl:mt-0">
              <Image
                src="/images/assets/pinkSticker.png"
                alt={service.title}
                fill
                className="object-cover"
                sizes="560px"
              />
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
