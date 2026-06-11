This is the official ENFIQ website built with Next.js 14 + TypeScript + Tailwind CSS.It is the official site of ENFIQ using Next.js 14 + TypeScript + Tailwind CSS.

Perfectly recreate the ENFIQ agency website from its design files.

## Project Structure

```
enfiq/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (fonts, metadata)
│   ├── page.tsx              # Home → /
│   ├── projects/page.tsx     # Projects → /projects
│   ├── services/page.tsx     # Services → /services
│   ├── blogs/page.tsx        # Blogs → /blogs
│   └── contact/page.tsx      # Contact → /contact
│
├── components/
│   ├── Layout.tsx            # Root layout wrapper (Navbar + Footer)
│   ├── Navbar.tsx            # Sticky glassmorphism header
│   ├── Footer.tsx            # Dark footer with ENFIQ watermark
│   └── FAQAccordion.tsx      # Reusable FAQ with grid-pattern bg
│
├── pages/
│   ├── HomePage.tsx          # Hero, Projects, Services, Tools, Testimonials, FAQ, Blogs, CTA
│   ├── ProjectsPage.tsx      # Filter bar + alternating 2-col layout
│   ├── ServicesPage.tsx      # Numbered list (01–06) with dashed border + contact form
│   ├── BlogsPage.tsx         # Search, category filters, 3-col grid, subscribe
│   └── ContactPage.tsx       # Cal.com widget, contact form, FAQ
│
├── styles/
│   └── globals.css           # Tailwind directives + custom utilities
│
├── tailwind.config.ts        # Tailwind theme (colors, fonts, grid pattern)
├── next.config.ts            # Next.js image domains config
└── package.json
```

## Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Design System

| Token | Value |
|-------|-------|
| Primary Red | `#D62828` |
| Dark / Footer | `#121212` |
| Background | `#FAFAFA` |
Playfair Display (serif) |
Bold Face | DM Sans-Bold (sans-serif) |=

## Key Design Patterns

### Navbar
Using a backdrop blurry type will add a frosted glass effect on scroll.The backdrop-blur-md type will add a frosted glass effect to scroll.
Clicks on the "Get Started" CTA.Clicking on the "Get Started" CTA.

### Grid Pattern (FAQ / Contact sections)
```css
background-image:
  repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.04) 39px, rgba(0,0,0,0.04) 40px),
  repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.04) 39px, rgba(0,0,0,0.04) 40px);
```

### Service Numbering
- Large red `01`–`06` on the left
Vertically connecting them with `border-l-2 border-dashed border-gray-200`

### Filter Pills
- Active: `bg-[#121212] text-white`
- Inactive: `bg-white text-gray-600 border-gray-200`

### FAQ Accordion
- Compact style: when the chat bubble is closed (`bg-[#121212] text-white rounded-compact`)
There are a number of codes on this page.There are several code boxes on this page.

### Footer Watermark
```tsx
<span style={{ fontSize: "clamp(80px, 20vw, 200px)" }} className="text-white/[0.04] font-black">
  ENFIQ
</span>
```

## Images
Change out placeholder `<div>` components in project/product blog cards to `<Image>` components in Next.js.

```tsx
import Image from "next/image";

<Image
  src="/images/tartanhq.png"
  alt="TartanHQ project cardImage"
  width={600}
  height={400}
  className="rounded-xl object-cover"
/>
```