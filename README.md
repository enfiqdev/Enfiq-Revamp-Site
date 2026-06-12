This is the official marketing and portfolio website for ENFIQ, built with Next.js + TypeScript + Tailwind CSS, featuring interactive Framer Motion animations and a Cal.com calendar integration.

## Project Structure

```
enfiq/
├── app/                      # Next.js App Router entry points
│   ├── layout.tsx            # Global layout (fonts, metadata, body wrappers)
│   ├── page.tsx              # Renders the Home components
│   ├── projects/page.tsx     
│   ├── services/page.tsx     
│   ├── blogs/page.tsx        
│   └── contact/page.tsx     
│
├── components/               # Shared UI components
│   ├── Layout.tsx            # Main layout layout (Navbar + Footer)
│   ├── Navbar.tsx            # Interactive navigation header
│   ├── Footer.tsx            # Full footer with brand branding
│   └── FAQAccordion.tsx      # FAQ section accordion
│
├── data/                     # Local mock data layers
│   ├── projects.ts           # Unified project config data
│   ├── services.ts           # Services config data
│   ├── blogs.ts              # Blog posts lists
│   ├── testimonials.ts       # Testimonial sliders
│   └── faqs.ts               # FAQ questions list
│
├── pages/                    # Main page content blocks
│   ├── HomePage.tsx          # Full landing page blocks
│   ├── ProjectsPage.tsx      
│   ├── ServicesPage.tsx      
│   ├── BlogsPage.tsx     
│   |── ContactPage.tsx       # Schedule widget + form
│
├── styles/
│   └── globals.css           # Global style declarations and custom utilities
│
├── tailwind.config.ts        # Design tokens and Tailwind theme extension
├── next.config.mjs           # Next.js image domain configurations
└── package.json
```

## Setup & Running

```bash
# Install package dependencies
npm install

# Run dev environment local server
npm run dev

# Compile production bundles
npm run build

# Start production server
npm run start
```

## Design System

| Token | Value |
|-------|-------|
| Primary Red | `#D41717` |
| Dark / Accent | `#121212` |
| Gray text | `#707070` |
| Light Background | `#FAFAFA` |
| Headings Font | Inter (sans-serif) |
| Body Font | DM Sans (sans-serif) |
| Logo Font | Pavelt (local display font) |