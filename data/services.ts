export interface Service {
  num: string;
  title: string;
  description: string;
  bullets: string[];
}

// Core agency service offerings rendered on the /services page
export const services: Service[] = [
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
