"use client";

import React from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import CardWrapper from "./CardWrapper";

export interface SpeedQualityCardProps {
  title: string;
  desc: string;
  icon: string;
  hoverIcon: string;
  iconWidth?: string;
  iconHeight?: string;
  iconRight?: string;
  titleDims?: string;
}

export default function SpeedQualityCard({
  title,
  desc,
  icon,
  hoverIcon,
  iconWidth = "106px",
  iconHeight = "106px",
  iconRight = "22px",
  titleDims = "w-full max-w-[301px] min-h-[90px]",
}: SpeedQualityCardProps) {
  return (
    <CardWrapper className="relative w-full max-w-[365px] h-[409px] group cursor-pointer">
      {/* Dynamic Border via Drop Shadow on Masked Shape */}
      <div
        className="absolute inset-0 transition-all duration-300 [filter:drop-shadow(1px_0_0_#D41717)_drop-shadow(-1px_0_0_#D41717)_drop-shadow(0_1px_0_#D41717)_drop-shadow(0_-1px_0_#D41717)_drop-shadow(4px_4px_0_#D41717)] lg:[filter:drop-shadow(1px_0_0_#C4C4C4)_drop-shadow(-1px_0_0_#C4C4C4)_drop-shadow(0_1px_0_#C4C4C4)_drop-shadow(0_-1px_0_#C4C4C4)] lg:group-hover:[filter:drop-shadow(1px_0_0_#D41717)_drop-shadow(-1px_0_0_#D41717)_drop-shadow(0_1px_0_#D41717)_drop-shadow(0_-1px_0_#D41717)_drop-shadow(4px_4px_0_#D41717)]"
      >
        <div
          className="w-full h-full bg-[#EFEFEF]"
          style={{
            WebkitMaskImage: `url('/images/assets/maskcard.png')`,
            WebkitMaskSize: "100% 100%",
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskImage: `url('/images/assets/maskcard.png')`,
            maskSize: "100% 100%",
            maskPosition: "center",
            maskRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Card Content */}
      <div className="absolute inset-0 p-[24px_32px] flex flex-col">
        <AnimatedText
          as="h3"
          text={title.split("\n")}
          className={`text-[32px] text-[#000000] leading-[44.8px] font-normal lg:font-light lg:group-hover:font-normal transition-all duration-300 ${titleDims}`}
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0%" }}
        />

        {/* Icon */}
        <div
          className="absolute top-[50%] -translate-y-[50%]"
          style={{
            width: iconWidth,
            height: iconHeight,
            right: iconRight,
          }}
        >
          {/* Normal Icon - Hidden on mobile, visible on desktop initially, fades on hover */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 lg:opacity-100 lg:group-hover:opacity-0">
            <Image
              src={`/images/assets/${icon}.png`}
              alt="icon"
              fill
              className="object-contain"
            />
          </div>
          {/* Hover Icon - Visible on mobile, hidden on desktop initially, visible on desktop hover */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
            <Image
              src={`/images/assets/${hoverIcon}.png`}
              alt="icon hover"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Description - Black on mobile, gray on desktop initially, turns black on desktop hover */}
        <AnimatedText
          as="p"
          text={desc}
          className="absolute left-[32px] right-[32px] max-w-[290px] bottom-[32px] text-[16px] text-[#000000] lg:text-[#707070] font-normal leading-[24px] text-left transition-colors duration-300 lg:group-hover:text-[#000000]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: "0%" }}
        />
      </div>
    </CardWrapper>
  );
}
