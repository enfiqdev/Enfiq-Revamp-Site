"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";
import CardWrapper from "./CardWrapper";
import { motion } from "framer-motion";

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

interface Service {
  num: string;
  title: string;
  description: string;
  bullets: string[];
}

type Props = {
  service: Service;
};

const formatBullet = (bullet: string) => {
  const mapping: { [key: string]: { bold: string; regular: string } } = {
    "Brand identity design": { bold: "Brand identity design", regular: "" },
    "UX/UI design": { bold: "UX/UI design", regular: "" },
    "Web & product visuals": { bold: "Web & product visuals", regular: "" },
    "High-fidelity prototyping": { bold: "High-fidelity prototyping", regular: "" },

    "Web application development": { bold: "Web application development", regular: "" },
    "Mobile app development": { bold: "Mobile app development", regular: "" },
    "Backend & API development": { bold: "Backend & API development", regular: "" },
    "Custom dashboards & software": { bold: "Custom dashboards & software", regular: "" },

    "Custom Framer & WP development": { bold: "Custom Framer & WP development", regular: "" },
    "Responsive design for all devices": { bold: "Responsive design for all devices", regular: "" },
    "CMS setup & content management": { bold: "CMS setup & content management", regular: "" },
    "Landing pages, blogs & business sites": { bold: "Landing pages, blogs & business sites", regular: "" },

    "On-page & off-page SEO": { bold: "On-page & off-page SEO", regular: "" },
    "Technical SEO audits": { bold: "Technical SEO audits", regular: "" },
    "Keyword research & strategy": { bold: "Keyword research & strategy", regular: "" },
    "Content optimization": { bold: "Content optimization", regular: "" },

    "Social media reels & shorts": { bold: "Social media reels & shorts", regular: "" },
    "YouTube video editing": { bold: "YouTube video editing", regular: "" },
    "Promo & brand videos": { bold: "Promo & brand videos", regular: "" },
    "Motion graphics & titles": { bold: "Motion graphics & titles", regular: "" },

    "Business process automation": { bold: "Business process automation", regular: "" },
    "Lead, CRM & sales workflows": { bold: "Lead, CRM & sales workflows", regular: "" },
    "Custom triggers, logic & alerts": { bold: "Custom triggers, logic & alerts", regular: "" },
    "API & app integrations": { bold: "API & app integrations", regular: "" },
  };

  const match = mapping[bullet];

  if (match) {
    return (
      <>
        <span style={{ fontWeight: 700 }}>{match.bold}</span>
        {match.regular}
      </>
    );
  }

  const words = bullet.split(" ");

  if (words.length <= 2) {
    return <span style={{ fontWeight: 700 }}>{bullet}</span>;
  }

  return (
    <>
      <span style={{ fontWeight: 700 }}>
        {words.slice(0, 2).join(" ")}
      </span>{" "}
      {words.slice(2).join(" ")}
    </>
  );
};

export default function ServiceCard({ service }: Props) {
  return (
    <CardWrapper className="flex flex-col xl:flex-row items-start xl:items-stretch justify-between w-full max-w-[1144px] mx-auto gap-[32px] sm:gap-[40px] xl:gap-[60.31px] xl:h-[448px]">
      {/* Mobile Numbers */}
      <div className="flex xl:hidden items-center justify-between w-full max-w-[560px] mx-auto px-4 mb-2">
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

        <div className="flex-1 max-w-[200px] sm:max-w-[300px] md:max-w-[360px] flex flex-row items-center justify-between px-4">
          {[
            "w-[28px] sm:w-[75px]",
            "w-[18px] sm:w-[40px]",
            "w-[12px] sm:w-[30px]",
            "w-[8px] sm:w-[20px]",
            "w-[6px] sm:w-[10px]",
            "w-[4px] sm:w-[6px]",
          ].map((widthClass, i) => (
            <div
              key={i}
              className={`h-[2px] rounded-full shrink-0 transition-all duration-300 ${widthClass}`}
              style={{
                backgroundColor: i === 0 ? "#D41717" : "#707070",
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
            color: "#707070",
          }}
        >
          06
        </span>
      </div>

      {/* Left Wrapper */}
      <div className="relative flex flex-row items-center flex-1 min-w-0 w-full xl:min-w-[450px] xl:h-full max-w-[560px] mx-auto px-4 xl:max-w-none xl:px-0">

        {/* Desktop Number Column */}
        <div
          className="hidden xl:flex absolute top-0 bottom-0 left-0 flex-col items-center justify-between"
          style={{ width: "54.11px" }}
        >

          {/* Top Number */}
          <div
            className="flex items-center justify-center shrink-0"
            style={{ width: "54.11px", height: "75px" }}
          >
            <motion.span
              variants={topNumberVariants}
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "61.84px",
                lineHeight: "74.21px",
                color: "#D41717",
              }}
            >
              {service.num}
            </motion.span>
          </div>
{/*the idth ofthe dashes are modified in descending order*/}
<div className="flex-1 w-full flex flex-col items-center justify-between py-2 sm:py-3 md:py-4">
  {[75, 40, 30, 20, 10, 6].map((height, i) => (
    <motion.div
      key={i}
      custom={i}
      variants={dashVariants}
      className="w-[2px] rounded-full transition-all duration-300"
      style={{
        height: `${height}px`,
        backgroundColor: i === 0 ? "#D41717" : "#707070",
      }}
    />
  ))}
</div>

          {/* Bottom Number */}
          <div
            className="flex items-center justify-center shrink-0"
            style={{ width: "54.11px", height: "75px" }}
          >
            <motion.span
              variants={bottomNumberVariants}
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "61.84px",
                lineHeight: "74.21px",
                color: "#707070",
              }}
            >
              06
            </motion.span>
          </div>
        </div>

        {/* Spacer */}
        <div
          style={{
            width: "54.11px",
            marginRight: "39.61px",
          }}
          className="shrink-0 hidden xl:block"
        />

        {/* Content */}
        <div className="flex-1 flex flex-col gap-[10px] xl:gap-[16px] py-[6px] w-full text-left items-start">

          <AnimatedText
            as="h3"
            text={service.title}
            className="text-[#000000]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "23.19px",
              lineHeight: "32.46px",
              letterSpacing: "0%",
            }}
          />

          <AnimatedText
            as="p"
            text={service.description}
            className="text-[#707070] text-[15.46px] leading-[21.64px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0%",
              fontWeight: 400,
            }}
          />

          <motion.ul
            variants={bulletContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-[8px] mt-[2px] xl:mt-[8px] w-fit text-left"
          >
            {service.bullets.map((bullet) => (
              <motion.li
                key={bullet}
                variants={bulletItemVariants}
                className="flex flex-row items-start gap-[12px] min-h-[28px] h-auto py-0.5"
              >
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
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Right Image */}
      <CardWrapper
        enableHoverEffect={false}
        className="relative w-full xl:w-[560px] xl:h-full flex items-center justify-center shrink-0 mt-[4px] xl:mt-0 px-4 xl:px-0"
      >
        <motion.div
          variants={stickerVariants}
          whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 20 } }}
          whileTap={{ scale: 0.96 }}
          className="relative w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[332px] rounded-[16px] overflow-hidden shadow-sm origin-center cursor-pointer"
          style={{ maxWidth: "560px" }}
        >
          <Image
            src="/images/assets/pinkSticker.png"
            alt={service.title}
            fill
            className="object-cover"
            sizes="560px"
          />
        </motion.div>
      </CardWrapper>
    </CardWrapper>
  );
}