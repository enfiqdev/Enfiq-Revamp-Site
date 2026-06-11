import React from "react";
import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedText from "./AnimatedText";

import CardWrapper from "./CardWrapper";

interface ProjectRowCardProps {
  project: {
    id: number;
    name: string;
    type: string;
    description: string;
    tags: string[];
    logo: string;
    image: string;
  };
  isEven: boolean;
}

export default function ProjectRowCard({
  project,
  isEven,
}: ProjectRowCardProps) {
  return (
    <CardWrapper
      className={`w-full flex flex-col md:flex-row gap-[37px] items-start ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text side */}
      <div className="w-full md:w-[425px] shrink-0 flex flex-col items-start text-left">
        {/* Project title & logo */}
        <div className="flex items-center gap-[12px] h-[34px] mb-[16px]">
          <div className="w-[30px] h-[30px] relative overflow-hidden flex shrink-0 items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-[6px] bg-[#FFFFFF]">
            <Image
              src={project.logo}
              alt={`${project.name} Logo`}
              fill
              className="object-contain"
            />
          </div>

          <AnimatedHeading
            as="h2"
            text={`${project.name} - ${project.type}`}
            className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#000000] leading-[33.6px] whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        {/* Description */}
        <AnimatedText
          as="p"
          text={project.description}
          className="text-[16px] text-[#707070] leading-[22.4px] mb-[16px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            letterSpacing: "0px",
          }}
        />

        {/* Tags */}
        <div className="flex flex-nowrap gap-[8px] overflow-x-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center whitespace-nowrap rounded-[33px] border border-[#707070]/30 bg-white px-[16px] py-[2px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0%",
                color: "#707070",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image side */}
      <div className="relative w-full aspect-[366/256] md:aspect-auto md:w-[366px] md:h-[256px] shrink-0 border-[0.5px] border-[#CCCCCE] rounded-[8px] overflow-hidden bg-white group cursor-pointer transition-all duration-300 md:hover:border-[#D41717] md:hover:shadow-[4px_4px_0px_0px_#D41717]">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover object-top"
          sizes="366px"
        />
        {/* Arrow icon button */}
        <div className="absolute top-[10px] right-[10px] z-10 flex w-[42px] h-[42px] items-center justify-center rounded-[22.83px] border-[0.59px] border-[#707070]/[0.3] bg-white p-[9.36px] transition-colors duration-300 group-hover:border-[#D41717]">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-[#121212] transition-colors duration-300 group-hover:text-[#D41717]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </div>
      </div>
    </CardWrapper>
  );
}
