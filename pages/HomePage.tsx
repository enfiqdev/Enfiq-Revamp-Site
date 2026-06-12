"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "../components/FAQAccordion";
import SpeedQualityCard from "../components/SpeedQualityCard";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import ProjectGridCard from "../components/ProjectGridCard";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
import AnimatedHeading from "../components/AnimatedHeading";
import AnimatedText from "../components/AnimatedText";
import CardWrapper, { StaggerContainer } from "../components/CardWrapper";
import { motion } from "framer-motion";
import Section, { SectionContext } from "../components/Section";
import FloatingChatBubble from "../components/FloatingChatBubble";


function ControlledMotionDiv({ children, className, style, variants, ...props }: any) {
  const isInView = React.useContext(SectionContext);
  const isControlled = isInView !== undefined;
  return (
    <motion.div
      variants={variants}
      initial={isControlled ? "hidden" : undefined}
      animate={isControlled ? (isInView ? "visible" : "hidden") : undefined}
      whileInView={isControlled ? undefined : "visible"}
      viewport={isControlled ? undefined : { once: true }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function ControlledMotionUl({ children, className, style, variants, ...props }: any) {
  const isInView = React.useContext(SectionContext);
  const isControlled = isInView !== undefined;
  return (
    <motion.ul
      variants={variants}
      initial={isControlled ? "hidden" : undefined}
      animate={isControlled ? (isInView ? "visible" : "hidden") : undefined}
      whileInView={isControlled ? undefined : "visible"}
      viewport={isControlled ? undefined : { once: true }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.ul>
  );
}

const topNumberVariants = {
  hidden: {
    opacity: 0.25,
    y: 10,
    letterSpacing: "0.05em",
  },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0em",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    },
  },
};

const dashVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.08 + 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const bottomNumberVariants = {
  hidden: {
    opacity: 0.25,
    y: 10,
    letterSpacing: "0.05em",
  },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0em",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.0,
    },
  },
};

const bulletContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const bulletItemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stickerVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      delay: 0.6,
    },
  },
};




/** Our Projects section â€” preview images from `public/images/assets/VS` */
const projectLOGO = [
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





const testimonials = [
  {
    name: "Bhushan",
    company: "Reeler AI",
    img: "/images/assets/ReelerFrame.png",
    text: "Enfiq built a landing page for us and did exactly that. They took our ideas and turned them into a reality for our brand. The creativity and their attention to detail..."
  },
  {
    name: "White Oak",
    company: "Wealth Management Company",
    img: "/images/assets/whiteOAKLogo.png",
    text: "Enfiq's designs are truly exceptional! The creativity and attention to detail in their work set them apart. Their ability to understand my vision and design accordingly is impressive."
  },
  {
    name: "White Oak",
    company: "Wealth Management Company",
    img: "/images/assets/whiteOAKLogo.png",
    text: "Enfiq's designs are truly exceptional! The creativity and attention to detail in their work set them apart. Their ability to understand my vision and design accordingly is impressive."
  },
  {
    name: "Civil labs",
    company: "Civil Contracting",
    img: "/images/assets/civiLogo (1).png",
    text: "ENFIQ took our business to the next level with a stunning new website. Their design skills and attention to detail made a big difference in our brand visibility and customer engagement. We're thrilled with the result and highly recommend their services to any business looking to grow online!"
  }
];

export default function HomePage() {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const targetRate = React.useRef(1);
  const currentRate = React.useRef(1);
  const rafId = React.useRef<number>();

  const testimonialsRef = React.useRef<HTMLDivElement>(null);
  const testimonialTargetRate = React.useRef(1.4);
  const testimonialCurrentRate = React.useRef(1.4);
  const testimonialRafId = React.useRef<number>();

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

  const updateTestimonialRate = React.useCallback(() => {
    const diff = testimonialTargetRate.current - testimonialCurrentRate.current;
    if (Math.abs(diff) < 0.01) {
      testimonialCurrentRate.current = testimonialTargetRate.current;
    } else {
      testimonialCurrentRate.current += diff * 0.05;
      testimonialRafId.current = requestAnimationFrame(updateTestimonialRate);
    }
    if (testimonialsRef.current) {
      const anims: Animation[] = [];
      testimonialsRef.current.querySelectorAll("*").forEach((el) => {
        anims.push(...el.getAnimations());
      });
      anims.forEach((anim) => {
        anim.playbackRate = testimonialCurrentRate.current;
      });
    }
  }, []);

  const handleMouseEnter = () => {
    targetRate.current = 0.5;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateRate);
  };

  const handleMouseLeave = () => {
    targetRate.current = 1;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateRate);
  };

  const handleTestimonialMouseEnter = () => {
    testimonialTargetRate.current = 0.5;
    if (testimonialRafId.current) cancelAnimationFrame(testimonialRafId.current);
    testimonialRafId.current = requestAnimationFrame(updateTestimonialRate);
  };

  const handleTestimonialMouseLeave = () => {
    testimonialTargetRate.current = 1.4;
    if (testimonialRafId.current) cancelAnimationFrame(testimonialRafId.current);
    testimonialRafId.current = requestAnimationFrame(updateTestimonialRate);
  };

  React.useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (testimonialRafId.current) cancelAnimationFrame(testimonialRafId.current);
    };
  }, []);

  return (
    <div>

      {/* ── HERO ── */}
      <div className="relative w-full flex justify-center pt-0 pb-10">
        {/* Subtle Small Grid Background */}
        <div
          className="absolute top-[-110px] left-0 right-0 bottom-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #E4E4E480 1px, transparent 1px), linear-gradient(to bottom, #E4E4E4 1px, transparent 1px)`,
            backgroundSize: '10px 10px',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000 40%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, #000 40%, transparent 100%)'
          }}
        ></div>
        {/*hero  section height*/}
       <Section as="section" className="
           max-w-5xl w-full mx-auto px-6 text-center relative z-10
           min-h-[400px]
           md:min-h-[550px]
           lg:min-h-[300px]
           pt-[250px] md:pt-[240px] lg:pt-[192px]
          " amount={0.25}>

          {/* Floating chat bubble - Desktop */}
          <FloatingChatBubble
            text="Need to start a SaaS company?"
            name="Naijil"
            themeColor="#121212"
            align="right"
            containerClassName="absolute top-[140px] right-[-30px] lg:right-[-100px] hidden lg:flex flex-col items-end -rotate-[-30deg] pointer-events-none"
          />

          {/* Floating chat bubble - Tablet/Mobile */}
          <FloatingChatBubble
            text="Need to start a SaaS company?"
            name="Naijil"
            themeColor="#121212"
            align="right"
            containerClassName="absolute top-[110px] right-[40px] sm:right-[30px] md:right-[50px] lg:hidden flex flex-col items-end -rotate-[-30deg] pointer-events-none z-20"
          />

          {/* Floating website modification bubble - Desktop */}
          <FloatingChatBubble
            text="Need to modify the website?"
            name="Bhavya"
            themeColor="#D41717"
            align="left"
            containerClassName="absolute right-[40px] md:right-[80px] lg:right-[850px] top-[620px] md:top-[640px] lg:top-[500px] hidden lg:flex flex-col items-start -rotate-[-164deg] z-20 pointer-events-none"
          />

          <AnimatedHeading
             as="h1"
            text={["Your Product", "Delivered Right"]}
            enableHoverEffect={true}
            className="max-w-[949px] w-full mx-auto flex flex-col items-center text-center text-[40px] sm:text-[56px] md:text-[64px] leading-[1.1] sm:leading-[1.15] md:leading-[83.2px] text-[#000000] font-normal tracking-normal mb-6 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          <AnimatedText
            as="p"
            text="Your revenue, Elevated. Let's build a path to success together."
            className="w-full max-w-[949px] md:h-[24px] text-center text-[#707070] mb-8 mx-auto px-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
            }}
          />
          <div className="flex items-center justify-center gap-4 flex-wrap relative">
            <Button href="https://cal.com/enfiq/30min" target="_blank" rel="noopener noreferrer" text="Book a free call" />
            <Button href="/projects" text="View Our Work" variant="secondary" />
          </div>

          {/* Orange Bubble (Bhavya) for Tablet & Mobile - positioned between CTA and Our Proud Partners */}
          <div className="lg:hidden flex justify-start w-full mt-24 md:mt-44 mb-2 pl-[3px] sm:pl-[8px] md:pl-[18px]">
            <FloatingChatBubble
              text="Need to modify the website?"
              name="Bhavya"
              themeColor="#D41717"
              align="left"
              containerClassName="relative flex flex-col items-start rotate-[-4.44deg] pointer-events-none z-20"
            />
          </div>

        </Section>
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
      <Section as="section" className="w-full max-w-[1440px] mx-auto flex flex-col gap-[10px] py-[40px] px-[24px] xl:px-[148px]" amount={0.25}>
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
            <AnimatedHeading
              as="h2"
              text="Ideas Turned Into Scalable Projects"
              className="text-3xl md:text-4xl font-black text-[#121212] tracking-tight"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-12 xl:gap-14">
            {/* Left: copy + CTA */}
            {/* pt- controls the equal level of text and image */}
            {/*mb-8 give 32px and 8px specifically the gap between the button and the subheading*/}
            <div className="shrink-0 lg:w-[32%] lg:max-w-sm lg:pt-0 text-center lg:text-left w-full">
              <AnimatedText
                as="h3"
                text="Where your ideas find direction"
                boldWords={["direction"]}
                className="w-full max-w-[268px] text-[32px] leading-[44.8px] text-[#121212] mb-[8px] mx-auto lg:mx-0 font-normal"
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  letterSpacing: "0px",
                }}
              />
              <AnimatedText
                as="p"
                text="A proven record of delivering our services across 10 industries over 7 years"
                className="w-full max-w-[365px] md:h-[48px] text-[16px] leading-[24px] text-[#707070] mb-[8px] mx-auto lg:mx-0"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: '0%' }}
              />
              <Button href="https://cal.com/enfiq/30min" target="_blank" rel="noopener noreferrer" text="Book a free call" className="mb-8" />
            </div>

            {/* Right: 2—2 project grid */}
            <div className="min-w-0 flex-1 lg:max-w-[62%] w-full">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[32px]">
                {projects.slice(0, 4).map((proj, i) => (
                  <ProjectGridCard
                    key={proj.id}
                    project={proj}
                    previewImage={projectLOGO[i]}
                  />
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section as="section" className="w-full max-w-[1440px] mx-auto pt-[40px] pb-[40px] px-[24px] xl:px-[148px]" amount={0.25}>
        <div className="w-full max-w-[1144px] mx-auto flex flex-col items-center mb-[64px]">

          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#000000] hover:text-black transition-colors duration-300"
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
          <AnimatedHeading
            as="h2"
            text="Services Built to Grow Your Business"
            className="text-[32px] md:text-[40px] font-semibold text-[#121212] tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        <div className="flex flex-col xl:flex-row items-stretch justify-center w-full max-w-[1144px] mx-auto gap-[64px] xl:gap-0">

          {/* Horizontal mobile-only numbers header */}
          <div className="flex xl:hidden items-center justify-between w-full max-w-[620.72px] mx-auto px-6 mb-2">
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "48px",
                lineHeight: "1",
                color: "#707070",
              }}
            >
              01
            </span>
            <div className="flex-1 max-w-[200px] sm:max-w-[320px] md:max-w-[400px] flex flex-row items-center justify-between px-4">
              {[
                "w-[4px] sm:w-[6px]",
                "w-[6px] sm:w-[10px]",
                "w-[8px] sm:w-[20px]",
                "w-[12px] sm:w-[30px]",
                "w-[18px] sm:w-[40px]",
                "w-[28px] sm:w-[75px]",
              ].map((widthClass, i, arr) => (
                <div
                  key={i}
                  className={`h-[2px] rounded-full shrink-0 transition-all duration-300 ${widthClass}`}
                  style={{
                    backgroundColor: i === arr.length - 1 ? "#D41717" : "#707070",
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "48px",
                lineHeight: "1",
                color: "#D41717",
              }}
            >
              06
            </span>
          </div>

          {/* Left Content Wrapper */}
          {/* Changed to relative so we can cleanly control the vertical baseline alignment */}
          <div className="relative flex flex-col xl:flex-row w-full xl:w-[523.28px] shrink-0 gap-0 xl:gap-[41px] items-start xl:items-stretch xl:h-[484px] px-6 xl:px-0 mx-auto max-w-[620.72px] xl:max-w-none">

            {/* ==================== EXACT NUMBER COLUMN CORRECTION ==================== */}
            {/* Uses absolute positioning inside the flex row to cleanly map from the header top down to the list base */}
            <ControlledMotionDiv
              className="hidden xl:flex absolute top-0 bottom-0 left-0 flex-col w-[56px] shrink-0 items-center justify-between"
            >

              {/* Number 01 */}
              {/* Scaled line-height to 0.7 to pull the visual baseline up to perfectly align with the top of the H3 text */}
              <div className="flex items-center justify-center w-[56px] h-[34px] shrink-0">
                <motion.span
                  variants={topNumberVariants}
                  className="text-[64px] font-normal tracking-normal"
                  style={{ fontFamily: "'Instrument Serif', serif", lineHeight: '0.7', color: "#707070" }}
                >
                  01
                </motion.span>
              </div>

              {/* Dynamic Stretched Line */}
              {/* flex-grow automatically scales the dashed line to fill the precise empty gap */}
              <div className="flex-1 w-full flex flex-col items-center justify-between py-8">
                {[6, 10, 20, 30, 40, 75].map((height, i, arr) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={dashVariants}
                    className="w-[2px] rounded-full transition-all duration-300"
                    style={{
                      height: `${height}px`,
                      backgroundColor: i === arr.length - 1 ? "#D41717" : "#707070",
                    }}
                  />
                ))}
              </div>
              {/* Number 06 */}
              {/* Boxed to align neatly right below the final list bullet element */}
              <div className="flex items-center justify-center w-[56px] h-[34px] shrink-0">
                <motion.span
                  variants={bottomNumberVariants}
                  className="text-[64px] font-normal tracking-normal"
                  style={{ fontFamily: "'Instrument Serif', serif", lineHeight: '0.7', color: "#D41717" }}
                >
                  06
                </motion.span>
              </div>
            </ControlledMotionDiv>
            {/* Dummy spacer element ensures your content column layout retains its original 41px gap spacing */}
            <div className="w-[56px] shrink-0 hidden xl:block" />
            {/* END NUMBER COLUMN CORRECTION  */}

            {/* Content */}
            <div className="flex flex-col flex-1 w-full items-start text-left pt-0 xl:pt-[58px]">
              <div className="flex flex-col w-full max-w-[403px] gap-[16px] mb-[20px] items-start">
                <h3
                  className="w-full max-w-[403px] md:h-[34px] text-[24px] font-normal text-[#000000] leading-[33.6px] tracking-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Comprehensive Digital Solutions
                </h3>
                <AnimatedText
                  as="p"
                  text="Our holistic approach combines creativity, technical expertise, and strategic growth to build scalable digital experiences that elevate your brand and streamline your operations."
                  className="w-full max-w-[403px] md:h-[90px] text-[16px] font-normal text-[#707070] leading-[22.4px] tracking-normal px-4 xl:px-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <ControlledMotionUl
                variants={bulletContainerVariants}
                className="flex flex-col w-fit max-w-[325px] gap-[8px] text-left"
              >
                {[
                  "Creative UI/UX design",
                  "Custom Website development",
                  "Custom No-code development",
                  "Strategic SEO optimization",
                  "Smart workflow automation",
                  "Professional video editing",
                ].map((bullet) => (
                  <motion.li
                    key={bullet}
                    variants={bulletItemVariants}
                    className="flex flex-row items-start gap-[12px] min-h-[28px] h-auto py-0.5"
                  >
                    <span className="w-[8px] h-[8px] bg-[#D41717] rounded-full shrink-0 mt-[10px]" />
                    <span className="font-bold text-[20px] text-[#000000] leading-[28px] tracking-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ControlledMotionUl>
            </div>
          </div>
          {/* Right Image */}
          <CardWrapper
            enableHoverEffect={false}
            className="relative w-full xl:w-[620.72px] xl:h-[484px] flex items-center justify-center shrink-0 mt-0 px-6 xl:px-0"
          >
            <motion.div
              variants={stickerVariants}
              whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              whileTap={{ scale: 0.96 }}
              className="relative w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[320px] xl:h-[368px] rounded-[17.73px] overflow-hidden shadow-sm origin-center cursor-pointer"
            >
              <Image
                src="/images/assets/pinkSticker.png"
                alt="Services Overview"
                fill
                className="object-cover"
              />
            </motion.div>
          </CardWrapper>

        </div>

        <div className="flex justify-center w-full mt-[40px]">
          <Button href="https://cal.com/enfiq/30min" target="_blank" rel="noopener noreferrer" text="Book a free call" />
        </div>
      </Section>

      {/* Tools */}
      <Section as="section" className="w-full max-w-[1144px] mx-auto px-[24px] xl:px-0 pt-[40px]" amount={0.25}>
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#000000] hover:text-black transition-colors duration-300"
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
          <AnimatedHeading
            as="h2"
            text="Tools Designed to Solve Real Problems"
            className="text-3xl font-black text-[#121212]"
          />
        </div>
        <StaggerContainer className="flex flex-col md:flex-row gap-[23px]">
          <ProductCard
            title="Domain Comp"
            tag="Domain Comparator"
            logo="/images/assets/whiteOAK/DomainCompLogo.png"
            logoAlt="Domain Comp Logo"
            image="/images/assets/whiteOAK/domComp.png"
            imageAlt="Domain Comp"
          />
          <ProductCard
            title="Phi Variate"
            tag="Martech SaaS"
            logo="/images/assets/whiteOAK/phiVirateLogo.png"
            logoAlt="Phi Variate Logo"
            image="/images/assets/phiV.png"
            imageAlt="Phi Variate"
          />
        </StaggerContainer>
      </Section>

      {/* ── WHY US ── */}
      <Section as="section" className="w-full max-w-[1440px] mx-auto px-6 xl:px-[148px] py-[40px]" amount={0.25}>
        <div className="w-full max-w-[1144px] mx-auto text-center mb-10">
          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#000000] hover:text-black transition-colors duration-300"
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
        <AnimatedHeading
          as="h2"
          text="Built for Speed, Quality, and Growth"
          className="w-full max-w-[550px] mx-auto text-center text-[32px] leading-[44.8px] font-semibold text-[#000000]"
          style={{
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0px",
          }}
        />
        </div>
        <StaggerContainer className="w-full max-w-[1144px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          {[
            {
              title: "Scalable-Driven\nProduct Design",
              desc: "Our projects combine clean UX, strong performance, and SEO-ready design, built to scale as your business grows.",
              icon: "i1",
              hoverIcon: "cube3",
              iconWidth: "106px",
              iconHeight: "106px",
              iconRight: "19.88px",
              titleDims: "w-full max-w-[301px] min-h-[90px]"
            },
            {
              title: "Fast MVP\nDevelopment",
              desc: "We help startups and businesses launch MVPs quickly using Framer and modern tech, so you can test ideas and reach users faster.",
              icon: "i2",
              hoverIcon: "cube02",
              iconWidth: "106px",
              iconHeight: "106px",
              iconRight: "22px",
              titleDims: "w-full max-w-[301px] min-h-[90px]"
            },
            {
              title: "End-to-End\nProject Delivery",
              desc: "From strategy to design to development and launch, we handle everything no handoffs, no delays, just execution.",
              icon: "i3",
              hoverIcon: "cube1",
              iconWidth: "106px",
              iconHeight: "106px",
              iconRight: "22.16px",
              titleDims: "w-full max-w-[239px] min-h-[90px]"
            },
          ].map((card, index) => (
            <SpeedQualityCard
              key={index}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
              hoverIcon={card.hoverIcon}
              iconWidth={card.iconWidth}
              iconHeight={card.iconHeight}
              iconRight={card.iconRight}
              titleDims={card.titleDims}
            />
          ))}
        </StaggerContainer>
      </Section>

      {/* ── TRUSTED BY ── */}
      <Section as="section" className="py-12 overflow-hidden w-full max-w-[1440px] mx-auto px-6 xl:px-[108.5px]" amount={0.25}>
        <p
          className="text-center mb-8 md:mb-10 text-[#000000]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
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
                  "/images/assets/ironwala.png",
                  "/images/assets/astro.png",
                  "/images/assets/newslettr (1).png",
                  "/images/assets/toasty Design.png",
                  "/images/assets/ReelerAi.png",
                  "/images/assets/newslettr (2).png",
                  "/images/assets/tartan (1).png",
                  "/images/assets/spacecom (2).png",
                  "/images/assets/navo (1).png",
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
          <Button href="https://cal.com/enfiq/30min" target="_blank" rel="noopener noreferrer" text="Book a free call" />
        </div>
      </Section>
      {/* ── TESTIMONIALS ── */}
      <Section as="section" className="py-12 overflow-hidden w-full max-w-[1440px] mx-auto px-6 xl:px-[108.5px]" amount={0.25}>
        <StaggerContainer className="w-full">
          {/* Heading */}
          <div className="w-full text-center mb-10 flex flex-col items-center">

            <span
              className="inline-flex items-center justify-center rounded-[12424px] border border-[#DDDDDD] bg-white px-[16px] py-[8px] mb-4 hover:text-black transition-colors duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#000000",
              }}
            >
              Our Testimonials
            </span>

            <AnimatedHeading
              as="h2"
              text="Trusted by Founders and Teams Worldwide"
              className="w-full max-w-[700px] md:w-[700px] whitespace-nowrap h-auto md:h-[45px] text-center text-[22px] md:text-[32px] leading-[30px] md:leading-[44.8px] font-semibold text-[#000000] mx-auto px-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0px",
              }}
            />

          </div>

          {/* Marquee Wrapper */}
          <div
            ref={testimonialsRef}
            onMouseEnter={handleTestimonialMouseEnter}
            onMouseLeave={handleTestimonialMouseLeave}
            className="flex flex-col gap-[16px] w-full relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >

            {/* ROW 1 */}
            <div className="flex w-max animate-marquee-ltr">
              {[1, 2, 3].map((groupIndex) => (
                <div key={groupIndex} className="flex gap-[16px] pr-[16px]">
                  {testimonials.map((t, i) => (
                    <TestimonialCard key={`${groupIndex}-${i}`} testimonial={t} />
                  ))}
                </div>
              ))}
            </div>

            {/* ROW 2 */}
            <div className="flex w-max animate-marquee-rtl">
              {[1, 2, 3].map((groupIndex) => (
                <div key={groupIndex} className="flex gap-[16px] pr-[16px]">
                  {testimonials.map((t, i) => (
                    <TestimonialCard key={`${groupIndex}-${i}`} testimonial={t} />
                  ))}
                </div>
              ))}
            </div>

          </div>
        </StaggerContainer>
      </Section>

      {/* ── FAQ ── */}
      <FAQAccordion />

      {/* ── BLOGS ── */}
      <Section as="section" className="max-w-[1248px] mx-auto px-6 py-12" amount={0.25}>
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center justify-center bg-white border border-[#DDDDDD] rounded-[12424px] px-[16px] py-[8px] mb-4 text-[#000000]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Our Blogs
          </span>
          <AnimatedHeading
            as="h2"
            text="What We’re Learning While Building"
            className="w-full max-w-[700px] md:w-[700px] h-auto md:h-[45px] text-center text-[24px] md:text-[32px] leading-[32px] md:leading-[44.8px] tracking-normal text-[#000000] mx-auto whitespace-nowrap"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          />
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
              image: "/images/assets/blogNoCode.png",
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
            <BlogCard
              key={i}
              title={blog.title}
              date={blog.date}
              readTime={blog.readTime}
              image={blog.image}
              tagText={blog.tagText}
              tagIcon={blog.tagIcon}
              containerClass="flex flex-col w-[380px] h-[319px] rounded-[16px] border-[1px] border-[#000000] bg-[#FFFFFF] p-[10px] overflow-hidden gap-[10px] cursor-pointer md:hover:-translate-y-1 md:hover:border-[#D41717] md:hover:shadow-[4px_4px_0px_0px_#D41717] transition-all duration-300"
              imageContainerClass="relative w-[358px] h-[171px] rounded-[8px] overflow-hidden shrink-0 bg-gray-50 border-[0.5px] border-gray-100"
              contentContainerClass="flex flex-col justify-between h-full w-[358px]"
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/blogs"
            className="group relative overflow-hidden border border-gray-200 text-[#121212] px-8 py-2.5 rounded-full hover:bg-gray-50 hover:border-black transition-all duration-300 text-sm font-semibold"
          >
            <div className="relative h-[20px] overflow-hidden">
              {/* First Text */}
              <span
                className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-[20px] text-[#121212] whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Read More
              </span>

              {/* Second Text */}
              <span
                className="absolute left-0 top-[20px] flex w-full items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[-20px] text-[#121212] whitespace-nowrap"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Read More
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section as="section" className="max-w-[1150px] mx-auto px-6 py-12 mb-10" amount={0.25}>
        {/*changed the bg from #F8F9FA to #F4F4F4*/}
        <div className="bg-[#F4F4F4] rounded-[40px] px-6 py-16 md:py-20 flex flex-col items-center text-center gap-[32px]">
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
          <AnimatedHeading
            as="h2"
            text="Start Your Next Project With Us"
            className="w-full max-w-[484px] md:h-[45px] text-center text-[32px] leading-[44.8px] tracking-normal text-[#000000] px-4 md:px-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          />
          <p
            className="w-full max-w-[729px] md:h-[64px] flex items-center justify-center text-center text-[18px] sm:text-[24px] leading-[32px] text-[#323232] px-6 md:px-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.6px",
            }}
          >
            Let&apos;s create solutions that takes your start-up to the next level.<br className="hidden sm:block" />
            Contact us today to get started. Your future customers are waiting.
          </p>

          <form className="w-full max-w-[560px] flex flex-col gap-4 px-4 items-center">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full max-w-[580px] h-[100px] rounded-[16px] border border-[#DDDDDD] bg-[#FFFFFF] resize-none outline-none shadow-none"
              style={{
                padding: "15px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
              }}
            />

            <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full max-w-[580px]">

              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full sm:flex-1 h-[48.67px] rounded-[50px] border border-[#DDDDDD] bg-[#FFFFFF] outline-none shadow-none"
                style={{
                  padding: "15px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000",
                }}
              />
            <Button
              href="/contact"
              text="Get in touch"
              hoverClassName="hover:bg-black"
              showArrow={false}
              className="w-full sm:w-auto px-[24px] py-[12px] rounded-[77px] shrink-0"
            />
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
