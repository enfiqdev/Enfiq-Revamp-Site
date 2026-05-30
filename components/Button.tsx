import Link from "next/link";

type Props = {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ href, text, variant = "primary", className = "" }: Props) {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white px-6 py-3 transition-all duration-300 hover:border-black ${className}`}
      >
        <div className="relative h-[24px] overflow-hidden">
          {/* First Text */}
          <span
            className="flex h-[24px] items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[24px] group-hover:text-black whitespace-nowrap text-[#707070]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
            }}
          >
            {text}
          </span>

          {/* Second Text */}
          <span
            className="absolute left-0 top-[24px] flex h-[24px] w-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[24px] group-hover:text-black whitespace-nowrap text-[#707070]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
            }}
          >
            {text}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden inline-flex items-center gap-[16px] bg-[#D41717] text-white pl-[24px] pr-[10px] py-[10px] rounded-full hover:bg-[#B91212] transition-all duration-300 shadow-[inset_0px_4px_6px_2px_rgba(255,255,255,0.3)] ${className}`}
    >
      <div className="relative h-[24px] overflow-hidden">
        {/* First Text */}
        <span
          className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-[24px] text-white whitespace-nowrap"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {text}
        </span>

        {/* Second Text */}
        <span
          className="absolute left-0 top-[24px] flex w-full items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[-24px] text-white whitespace-nowrap"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {text}
        </span>
      </div>
      <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white text-[#D41717] shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-[26px] w-[26px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M7 17L17 7M17 7H9M17 7V15" />
        </svg>
      </span>
    </Link>
  );
}
