import React from "react";

interface FloatingChatBubbleProps {
  text: string;
  name: string;
  themeColor: string; // e.g. "#121212" or "#D41717"
  align?: "left" | "right";
  containerClassName?: string;
  animateClass?: string; // defaults to "animate-float"
}

export default function FloatingChatBubble({
  text,
  name,
  themeColor,
  align = "right",
  containerClassName = "",
  animateClass = "animate-float",
}: FloatingChatBubbleProps) {
  const isRight = align === "right";

  return (
    <div
      className={`${containerClassName} ${animateClass}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Main message bubble */}
      <div
        className="bg-white rounded-full px-5 py-2.5 text-sm text-gray-600 shadow-sm relative z-10 font-medium whitespace-nowrap"
        style={{ borderColor: themeColor, borderWidth: "1px" }}
      >
        {text}
      </div>

      {/* Cursor + Name Tag container */}
      <div
        className={`flex flex-col items-center -mt-1 relative z-20 ${
          isRight ? "items-end mr-12" : "items-start ml-12"
        }`}
      >
        {/* Custom cursor SVG pointing top-right or top-left */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-sm ${
            isRight ? "rotate-12 -mr-2 scale-x-[-1]" : "-rotate-12 -ml-2"
          }`}
          aria-hidden="true"
        >
          <path
            d="M6 3L20 10.5L12.5 13.5L10 21L6 3Z"
            fill={themeColor}
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* Name tag */}
        <div
          className="text-white text-xs px-3 py-1.5 rounded-full -mt-[12px] shadow-md font-medium"
          style={{
            backgroundColor: themeColor,
            transform: isRight ? "rotate(-13deg)" : "rotate(12deg)",
            marginLeft: isRight ? "0px" : "66px",
            marginRight: isRight ? "49px" : "0px",
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
