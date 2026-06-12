export interface Project {
  id: number;
  name: string;
  type: string;
  tags: string[];
  description: string;
  img?: string;
  logo: string;
  category?: string;
  image?: string;
}

// Card mock images for the homepage grid preview
export const projectLogoPreviews = [
  "/images/assets/card1.png",
  "/images/assets/card2.png",
  "/images/assets/card3.png",
  "/images/assets/card4.png",
] as const;

// Projects featured in the grid on the homepage
export const homepageProjects: Project[] = [
  {
    id: 1,
    name: "TartanHQ",
    type: "Website Development",
    tags: ["Design", "Framer Development"],
    description:
      "A sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation.",
    img: "/images/tartanhq.png",
    logo: "/images/assets/tartanHQLogo.png",
  },
  {
    id: 2,
    name: "Newslettr",
    type: "SaaS Product",
    tags: ["Design", "Development"],
    description:
      "Your All-in-One Platform for Personalized Newsletters — built for creators and businesses.",
    img: "/images/newslettr.png",
    logo: "/images/assets/newsteller.png",
  },
  {
    id: 3,
    name: "ReelerAI",
    type: "AI Product",
    tags: ["Development"],
    description: "End-to-end AI-powered design partner for marketing teams.",
    img: "/images/assets/ReelerAi.png",
    logo: "/images/assets/reelerIcon.png",
  },
  {
    id: 4,
    name: "Toasty Design",
    type: "Branding",
    tags: ["Framer Development"],
    description: "Brand identity and visual system for a modern design studio.",
    img: "/images/toasty.png",
    logo: "/images/assets/tD (1).png",
  },
];

// Filter category tabs on the dedicated /projects page
export const projectCategories = [
  "All",
  "Design",
  "Web Development",
  "No-code Development",
  "Mobile Development",
  "n8n Automation",
  "SEO",
];

// Active vs hover icon image assets for the category pills
export const categoryImages: Record<string, { before: string; after: string }> = {
  "All": {
    before: "/images/assets/A1.png",
    after: "/images/assets/allHover.png",
  },
  "Design": {
    before: "/images/assets/v1.png",
    after: "/images/assets/v2.png",
  },
  "Web Development": {
    before: "/images/assets/fullStack.png",
    after: "/images/assets/fullStackHover.png",
  },
  "No-code Development": {
    before: "/images/assets/NC.png",
    after: "/images/assets/NCH.png",
  },
  "Mobile Development": {
    before: "/images/assets/fullStack.png",
    after: "/images/assets/fullStackHover.png",
  },
  "n8n Automation": {
    before: "/images/assets/n8nIcon.png",
    after: "/images/assets/n8nHover.png",
  },
  "SEO": {
    before: "/images/assets/seoSearch.png",
    after: "/images/assets/seoHover.png",
  },
};

// Projects listed on the dedicated /projects page
export const projectsPageProjects: Project[] = [
  {
    id: 1,
    name: "TartanHQ",
    type: "Website Development",
    description:
      "TartanHQ is a sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation. By leveraging Unified APIs, they provide businesses with real-time access to payroll, work, and financial data through a single integration.",
    tags: ["Design", "Framer Development", "On-Page SEO"],
    category: "Web Development",
    logo: "/images/assets/tartanHQLogo.png",
    image: "/images/assets/card.png",
  },
  {
    id: 2,
    name: "TartanHQ",
    type: "Website Development",
    description:
      "TartanHQ is a sophisticated orchestration platform that bridges the gap between fragmented data and intelligent automation. By leveraging Unified APIs, they provide businesses with real-time access to payroll, work, and financial data through a single integration.",
    tags: ["Design", "Framer Development", "On-Page SEO"],
    category: "Design",
    logo: "/images/assets/tartanHQLogo.png",
    image: "/images/assets/card.png",
  },
];
