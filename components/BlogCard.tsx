import React from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import CardWrapper from "./CardWrapper";
import { motion } from "framer-motion";

const popInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

interface BlogCardProps {
  title: string;
  date: string;
  readTime: string;
  image: string;
  tagText: string;
  tagIcon: React.ReactNode;
  containerClass?: string;
  imageContainerClass?: string;
  contentContainerClass?: string;
}

export default function BlogCard({
  title,
  date,
  readTime,
  image,
  tagText,
  tagIcon,
  containerClass = "flex flex-col w-full max-w-[380px] min-h-[319px] rounded-[16px] border-[1px] border-[#000000] bg-[#FFFFFF] p-[10px] overflow-hidden gap-[10px] cursor-pointer md:hover:-translate-y-1 md:hover:border-[#D41717] md:hover:shadow-[4px_4px_0px_0px_#D41717] transition-all duration-300",
  imageContainerClass = "relative w-full aspect-[358/171] rounded-[8px] overflow-hidden shrink-0 bg-gray-50 border-[0.5px] border-gray-100",
  contentContainerClass = "flex flex-col justify-between h-full w-full",
}: BlogCardProps) {
  return (
    <CardWrapper className={containerClass} variants={popInVariants}>
      {/* 1. IMAGE FRAME */}
      <div className={imageContainerClass}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="358px"
        />
      </div>

      {/* 2. CONTENT FRAME */}
      <div className={contentContainerClass}>
        <div className="flex flex-col gap-[8px]">
          {/* A) Meta row */}
          <div className="flex justify-between items-center w-full">
            <span className="text-[12px] font-medium text-[#121212]">{date}</span>
            <span className="text-[12px] font-medium text-[#121212]">{readTime}</span>
          </div>

          {/* B) Blog title */}
          <AnimatedText
            as="h3"
            text={title}
            className="text-[#121212] line-clamp-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0.5%",
            }}
          />
        </div>

        {/* C) Category tag pill */}
        <div className="flex items-end mb-[2px]">
          <div className="flex items-center rounded-[8px] border border-[#D41717] bg-[#FFFFFF] px-[8px] py-[4px] gap-[4px]">
            <div className="text-[#D41717] flex items-center justify-center">
              {tagIcon}
            </div>
            <span className="text-[#D41717] text-[11px] font-semibold leading-none whitespace-nowrap mt-px">
              {tagText}
            </span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
