"use client";

import React from "react";
import Link from "next/link";

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

// Pink pattern background for service images
function ServicePattern() {
  const icons = ["◎", "✳", "▷", "Mc", "N", "●", "↗", "◉", "△"];
  return (
    <div className="w-full h-full bg-[#FFCFCF] rounded-2xl flex items-center justify-center p-4">
      <div className="grid grid-cols-3 gap-3">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-bold text-gray-700 shadow-sm"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

// Contact form for services page
function ContactForm() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <span className="text-xs font-medium bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">
          Contact us Form
        </span>
        <h2 className="text-3xl font-black text-[#121212] mt-4 mb-2">Get in touch</h2>
        <p className="text-gray-500 text-sm">
          We&apos;d love to hear from you. Please fill out this form.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">First name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
          />
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Phone number</label>
          <div className="flex gap-2">
            <select className="border border-gray-200 rounded-lg px-2 py-2.5 text-sm focus:outline-none w-20">
              <option>US</option>
              <option>IN</option>
              <option>UK</option>
            </select>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Message</label>
          <textarea
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors resize-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="privacy" className="accent-[#D62828]" />
          <label htmlFor="privacy" className="text-xs text-gray-500">
            You agree to our friendly privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#D62828] text-white font-semibold py-3 rounded-full hover:bg-[#b82020] transition-colors"
        >
          Get in touch
        </button>

        {/* Contact info */}
        <div className="flex items-center justify-center gap-8 pt-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center">
              @
            </span>
            team@enfiq.com
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center">
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
        <h1 className="text-4xl md:text-5xl font-black text-[#121212] mb-4">Our Services</h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          We offer advanced chatbot development to enhance engagement and streamline communication,
          with tailored solutions and 24/7 support.
        </p>
      </section>

      {/* ── SERVICE LIST ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        {services.map((service, index) => (
          <div key={service.num} className="relative">
            {/* Vertical dashed connector */}
            {index < services.length - 1 && (
              <div className="absolute left-8 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-200" />
            )}

            <div className="flex flex-col md:flex-row items-start gap-10 py-10 relative">
              {/* Number on the left */}
              <div className="flex-shrink-0 w-16 text-center relative z-10">
                <span className="text-4xl font-black text-[#D62828] leading-none block">
                  {service.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#121212] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm font-medium text-[#121212]">
                      <span className="w-1.5 h-1.5 bg-[#D62828] rounded-full flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pattern Image */}
              <div className="flex-shrink-0 w-full md:w-56 h-44">
                <ServicePattern />
              </div>
            </div>

            {/* Bottom number echo */}
            {index < services.length - 1 && (
              <div className="flex-shrink-0 w-16 text-center relative z-10 pb-2">
                <span className="text-sm font-medium text-gray-300">06</span>
              </div>
            )}
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
