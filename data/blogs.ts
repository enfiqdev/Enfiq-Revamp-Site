export interface BlogPost {
  id: number;
  date: string;
  readTime: string;
  title: string;
  tag: string;
}

// Categories shown on the blog feed filter
export const blogCategories = [
  "Designing / Branding",
  "No-code Development",
  "Full Stack Development",
  "SEO",
  "TrendFIQ",
  "From the Desk of ENFIQ",
];

// Mock list of articles shown on the /blogs page
export const allBlogPosts: BlogPost[] = [
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
];

// Icon asset configurations for blog category tabs
export const blogCategoryImages = {
  "Designing / Branding": {
    before: "/images/assets/v1.png",
    after: "/images/assets/v2.png",
  },
  "No-code Development": {
    before: "/images/assets/NC.png",
    after: "/images/assets/NCH.png",
  },
  "Full Stack Development": {
    before: "/images/assets/fullStack.png",
    after: "/images/assets/fullStackHover.png",
  },
  "SEO": {
    before: "/images/assets/seoSearch.png",
    after: "/images/assets/seoHover.png",
  },
  "TrendFIQ": {
    before: "/images/assets/trend (1).png",
    after: "/images/assets/trendHover.png",
  },
  "From the Desk of ENFIQ": {
    before: "/images/assets/enfiqDesk.png",
    after: "/images/assets/enfiqDeskHover.png",
  },
};
export type BlogCategoryType = keyof typeof blogCategoryImages;
