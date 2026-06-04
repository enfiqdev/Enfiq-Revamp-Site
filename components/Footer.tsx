"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#222222]">

    {/* LEFT VECTOR */}
<div
  className="
    pointer-events-none
    absolute
    top-1/2
    -translate-y-1/2
 
    left-[-220px]
    sm:left-[-280px]
    md:left-[-450px]
 
    opacity-100
    z-0
  "
>
  <Image
    src="/images/assets/vector.png"
    alt=""
    width={488.69}
    height={526.19}
    className="
      object-contain
      w-[300px]
      sm:w-[450px]
      md:w-[620px]
      h-auto
      opacity-70 md:opacity-100
    "
    style={{
      transform: "rotate(-90deg) scaleX(-1)",
    }}
  />
</div>

{/* RIGHT VECTOR */}
<div
  className="
    pointer-events-none
    absolute
    top-1/2
    -translate-y-1/2
 
    right-[-220px]
    sm:right-[-280px]
    md:right-[-450px]
 
    opacity-100
    z-0
  "
>
  <Image
    src="/images/assets/vector.png"
    alt=""
    width={488.69}
    height={526.19}
    className="
      object-contain
      w-[300px]
      sm:w-[450px]
      md:w-[620px]
      h-auto
      opacity-70 md:opacity-100
    "
    style={{
      transform: "rotate(-90deg) scaleX(-1)",
    }}
  />
</div>
      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full px-[20px] md:px-[48px] pt-[72px] pb-0">

        {/* TOP TEXT */}
        <div className="flex flex-col items-center">

          <p
            className="w-full text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "#707070",
              maxWidth: "749px",
            }}
          >
            We&apos;re always eager to hear your vision.
            Share your thoughts, and let&apos;s kickstart your digital journey!
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-[40px] flex items-center gap-[8px]">

            {/* LINKEDIN */}
            <a href="https://www.linkedin.com/company/enfiq" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
              <Image
                src="/images/assets/linkdin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>

            {/* TWITTER */}
            <a href="https://x.com/EnfiqOfficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
              <Image
                src="/images/assets/twitter.png"
                alt="Twitter"
                width={25}
                height={24}
              />
            </a>

            {/* MEDIUM */}
            <a href="https://medium.com/@enfiq" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
              <Image
                src="/images/assets/medium.png"
                alt="Medium"
                width={24}
                height={24}
              />
            </a>

            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/enfiqofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
              <Image
                src="/images/assets/insta.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>

            {/* WHATSAPP */}
            <a href="https://wa.me/914998778675" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
              <Image
                src="/images/assets/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>

            {/* AT SIGN */}
            <a href="mailto:team@enfiq.com" className="hover:opacity-85 transition-opacity">
              <Image
                src="/images/assets/at-sign.png"
                alt="At Sign"
                width={24}
                height={24}
              />
            </a>

            {/* CAL */}
            <a href="https://cal.com/enfiq/30min" target="_blank" rel="noopener noreferrer" className="hover:opacity-85 transition-opacity">
              <Image
                src="/images/assets/cal.png"
                alt="Cal"
                width={24}
                height={24}
              />
            </a>

          </div>
        </div>
{/* DIVIDER */}
<div className="flex justify-center w-full">
  <div
    className="
      w-full
      max-w-[350px]
      sm:max-w-[520px]
      md:max-w-[720px]
      lg:max-w-[1144px]
    "
    style={{
      marginTop: "64px",
      borderTop: "1px solid rgba(137,137,137,0.2)",
      transform: "rotate(-180deg)",
    }}
  />
</div>

        {/* BOTTOM ROW */}
        
        <div className="mt-[32px] flex flex-col items-center">

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex flex-wrap justify-center gap-x-[32px] gap-y-[16px]">
            <Link
              href="/projects"
              className="text-[#898989] hover:text-white transition-colors"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="text-[#898989] hover:text-white transition-colors"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-[#898989] hover:text-white transition-colors"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              Contact Us
            </Link>
            <Link
              href="/terms"
              className="text-[#898989] hover:text-white transition-colors"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="text-[#898989] hover:text-white transition-colors"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              Privacy Policy
            </Link>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="flex md:hidden flex-col items-center gap-y-[16px] w-full">
            {/* Row 1 */}
            <div className="flex justify-center gap-x-[32px]">
              <Link
                href="/projects"
                className="text-[#898989] hover:text-white transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-[#898989] hover:text-white transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                Blogs
              </Link>
            </div>
            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[12px] px-4 text-center">
              <Link
                href="/contact"
                className="text-[#898989] hover:text-white transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                Contact Us
              </Link>
              <Link
                href="/terms"
                className="text-[#898989] hover:text-white transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="text-[#898989] hover:text-white transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* COPYRIGHT */}
          <p
            className="mt-[24px] text-center"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              color: "#898989",
            }}
          >
            © Copyright 2026, All Rights Reserved by{" "}

            <span
              style={{
                fontFamily: "'Pavelt', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
                color: "#898989",
              }}
            >
              ENFIQ
            </span>
          </p>

        </div>
      {/* HUGE ENFIQ TEXT */}
<div className="relative z-0 mt-[20px] md:mt-[48px] flex justify-center leading-none">

  <h1
    className="translate-y-[18px] md:translate-y-[30px]"
    style={{
      fontFamily: "'Pavelt', sans-serif",
      fontWeight: 400,
      fontSize: "clamp(102px, 24vw, 300px)",
      lineHeight: "0.78",
      letterSpacing: "0%",
      color: "#70707026",
      textAlign: "center",
      margin: 0,
      padding: 0,
      width: "100%",
    }}
  >
    ENFIQ
  </h1>

</div>
      </div>
    </footer>
  );
};

export default Footer;