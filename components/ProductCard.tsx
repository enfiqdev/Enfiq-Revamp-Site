import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import CardWrapper from "./CardWrapper";

interface ProductCardProps {
  title: string;
  tag: string;
  logo: string;
  logoAlt: string;
  image: string;
  imageAlt: string;
  href?: string;
}

export default function ProductCard({
  title,
  tag,
  logo,
  logoAlt,
  image,
  imageAlt,
  href = "#",
}: ProductCardProps) {
  return (
    <CardWrapper className="flex flex-col gap-[24px] w-full xl:w-[560px] group">
      <article className="relative w-full h-[350px] overflow-hidden border-[0.5px] border-[#CCCCCE] rounded-[8px] bg-white transition-all duration-300 cursor-pointer md:hover:border-[#D41717] md:hover:shadow-[4px_4px_0px_0px_#D41717]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 45vw, 560px"
          className="object-cover object-top"
        />
        <Link
          href={href}
          className="absolute top-[10px] right-[10px] z-10 flex w-[42px] h-[42px] items-center justify-center rounded-[22.83px] border-[0.59px] border-[#707070]/[0.3] bg-white p-[9.36px] transition-colors duration-300 group-hover:border-[#000000]"
        >
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
        </Link>
      </article>
      <div className="flex flex-col items-start gap-[8px]">
        <div className="flex flex-row items-center gap-[8px]">
          <div className="relative w-[30px] h-[30px] flex shrink-0 items-center justify-center border-[0.5px] border-[#D5D5D5] rounded-[6px] bg-[#FFFFFF] overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={logo}
                alt={logoAlt}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <AnimatedText
            as="span"
            text={title}
            className="text-[24px] font-normal text-[#000000] leading-[33.6px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-[8px]">
          <AnimatedText
            as="span"
            text={tag}
            className="inline-flex items-center justify-center rounded-[33px] border border-[#707070]/[0.3] bg-white px-[16px] py-[2px] gap-[10px] text-[14px] font-normal text-[#707070] leading-[21px] transition-colors duration-300 h-[25px] w-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </div>
    </CardWrapper>
  );
}
