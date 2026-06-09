import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardWrapper from "./CardWrapper";

interface ProjectGridCardProps {
  project: {
    id: number;
    name: string;
    logo: string;
    tags: readonly string[] | string[];
  };
  screenshot: string;
}

export default function ProjectGridCard({
  project,
  screenshot,
}: ProjectGridCardProps) {
  return (
    <CardWrapper className="w-full">
      <Link
        href="/projects"
        aria-label={`View ${project.name}`}
        className="flex flex-col gap-[24px] w-full group"
      >
        <article className="relative w-full overflow-hidden border-[0.5px] border-[#CCCCCE] rounded-[8px] bg-white transition-all duration-300 cursor-pointer md:hover:border-[#D41717] md:hover:shadow-[4px_4px_0px_0px_#D41717] aspect-[366/256]">
          <Image
            src={screenshot}
            alt={`${project.name} product screenshot`}
            fill
            sizes="(max-width: 1024px) 45vw, 320px"
            className="object-cover object-top"
          />
          <div className="absolute top-[10px] right-[10px] z-10 flex w-[42px] h-[42px] items-center justify-center rounded-[22.83px] border-[0.59px] border-[#707070]/[0.3] bg-white p-[9.36px] transition-colors duration-300 group-hover:border-[#D41717]">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-[#121212] transition-colors duration-300 group-hover:text-[#D41717]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7 17L17 7M17 7H9M17 7V15" />
            </svg>
          </div>
        </article>

        <div className="flex flex-col w-full gap-[8px]">
          <div className="flex flex-row items-center gap-[8px]">
            <div className="relative w-[30px] h-[30px] flex shrink-0 items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-[6px] bg-[#FFFFFF] overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span
              className="text-[24px] font-normal text-[#000000] leading-[33.6px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.name}
            </span>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-[8px]">
            {project.tags.map((tag) => {
              let widthClass = "w-auto";
              const t = tag.toUpperCase();
              if (t === "DESIGN") widthClass = "w-[78px]";
              else if (t === "DEVELOPMENT") widthClass = "w-[120px]";
              else if (t === "FRAMER DEVELOPMENT") widthClass = "w-[171px]";

              return (
                <span
                  key={tag}
                  className={`inline-flex items-center justify-center rounded-[33px] border border-[#707070]/[0.3] bg-white px-[16px] py-[2px] gap-[10px] text-[14px] font-normal text-[#707070] leading-[21px] group-hover:text-[#000000] transition-colors duration-300 h-[25px] ${widthClass}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </CardWrapper>
  );
}
