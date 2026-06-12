"use client";

import React from "react";
import ServiceCard from "../components/serviceCards";
import ContactForm from "../components/ContactForm";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";

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
export default function ServicesPage() {
  return (
    <div className="pt-[112px]">

      {/*Page header*/}
      <section className="max-w-3xl mx-auto px-6 pb-6 sm:pb-[64px] text-center">

        <AnimatedHeading
          as="h1"
          text="Our Services"
          className="w-full max-w-[560px] mx-auto text-center text-[#121212] mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "44.8px",
            letterSpacing: "0px",
          }}
        />

        <AnimatedText
          as="p"
          text="We offer advanced chatbot development to enhance engagement and streamline communication, with tailored solutions and 24/7 support."
          className="w-full max-w-[560px] mx-auto text-center text-[#707070] px-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0px",
          }}
        />

      </section>

      {/*Service list*/}
      <section className="max-w-[1248px] mx-auto px-6 flex flex-col gap-[61.84px] pt-8 pb-[69.81px] sm:py-[69.81px]">
        <div className="flex flex-col gap-[61.84px] w-full">
          {services.map((service) => (
            <ServiceCard
              key={service.num}
              service={service}
            />
          ))}
        </div>
      </section>

      {/*Contact form*/}
      <div className="border-t border-gray-100">
        <ContactForm />
      </div>

    </div>
  );
}