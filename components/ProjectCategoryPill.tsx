import React from "react";
import Image from "next/image";

interface ProjectCategoryPillProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  iconBefore?: string;
  iconAfter?: string;
  size?: "sm" | "md";
}

export default function ProjectCategoryPill({
  label,
  isSelected,
  onClick,
  iconBefore,
  iconAfter,
  size = "md",
}: ProjectCategoryPillProps) {
  const isSm = size === "sm";

  const buttonClasses = isSm
    ? `group/pill inline-flex items-center justify-center h-[29px] gap-[4px] px-[8px] py-[4px] rounded-[8px] border bg-white transition-all duration-200 w-fit ${
        isSelected
          ? "border-[#D41717] text-[#D41717]"
          : "border-[#D4D4D4] text-[#707070] hover:text-[#D41717] hover:border-[#D41717]"
      }`
    : `group/pill inline-flex items-center justify-center gap-[6px] px-[8px] py-[4px] rounded-[8px] border-[1px] transition-all duration-300 w-fit ${
        isSelected
          ? "border-[#D41717] text-[#D41717] bg-white"
          : "border-[#707070] text-[#707070] bg-white hover:border-[#D41717] hover:text-[#D41717]"
      }`;

  const textStyle = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: isSm ? "12px" : "14px",
    lineHeight: "21px",
    letterSpacing: "0px",
  };

  return (
    <button onClick={onClick} className={buttonClasses} style={textStyle}>
      {(iconBefore || iconAfter) && (
        <span className="relative shrink-0 w-[16px] h-[16px] block">
          {iconBefore && (
            <Image
              src={iconBefore}
              alt={label}
              width={16}
              height={16}
              className={`object-contain w-full h-full absolute inset-0 ${
                isSelected ? "opacity-0" : "opacity-100 group-hover/pill:opacity-0"
              }`}
            />
          )}
          {iconAfter && (
            <Image
              src={iconAfter}
              alt={label}
              width={16}
              height={16}
              className={`object-contain w-full h-full absolute inset-0 ${
                isSelected ? "opacity-100" : "opacity-0 group-hover/pill:opacity-100"
              }`}
            />
          )}
        </span>
      )}
      {label}
    </button>
  );
}
