"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#222222]">

      {/* LEFT VECTOR */}
      <div className="pointer-events-none absolute left-[-320px] top-1/2 -translate-y-1/2 opacity-100">
        <Image
          src="/images/assets/vector.png"
          alt=""
          width={488.69}
          height={526.19}
          className="object-contain"
          style={{
            transform: "rotate(-90deg) scaleX(-1)",
          }}
        />
      </div>

      {/* RIGHT VECTOR */}
      <div className="pointer-events-none absolute right-[-320px] top-1/2 -translate-y-1/2 opacity-100">
        <Image
          src="/images/assets/vector.png"
          alt=""
          width={488.69}
          height={526.19}
          className="object-contain"
          style={{
            transform: "rotate(-90deg) scaleX(-1)",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full px-[48px] pt-[72px]">

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
            <a href="#">
              <Image
                src="/images/assets/linkdin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>

            {/* TWITTER */}
            <a href="#">
              <Image
                src="/images/assets/twitter.png"
                alt="Twitter"
                width={25}
                height={24}
              />
            </a>

            {/* MEDIUM */}
            <a href="#">
              <Image
                src="/images/assets/medium.png"
                alt="Medium"
                width={24}
                height={24}
              />
            </a>

            {/* INSTAGRAM */}
            <a href="#">
              <Image
                src="/images/assets/insta.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>

            {/* WHATSAPP */}
            <a href="#">
              <Image
                src="/images/assets/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>

            {/* AT SIGN */}
            <a href="#">
              <Image
                src="/images/assets/at-sign.png"
                alt="At Sign"
                width={24}
                height={24}
              />
            </a>

            {/* CAL */}
            <a href="#">
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
        <div
          className="w-full"
          style={{
            marginTop: "64px",
            borderTop: "1px solid rgba(137,137,137,0.2)",
            transform: "rotate(-180deg)",
          }}
        />

        {/* BOTTOM ROW */}
        <div className="mt-[32px] flex items-center justify-between">

          {/* COPYRIGHT */}
          <p
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              color: "#898989",
            }}
          >
            © Copyright 2026, All Rights Reserved by{" "}

            <span
              style={{
                fontFamily: "Pavelt",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
                color: "#898989",
                verticalAlign: "middle",
              }}
            >
              ENFIQ
            </span>
          </p>

          {/* NAVIGATION */}
          <div className="flex items-center gap-[24px]">

            <Link
              href="/projects"
              className="text-[#898989] hover:text-white transition-colors"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0%"
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
                letterSpacing: "0%"
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
                letterSpacing: "0%"
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
                letterSpacing: "0%"
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
                letterSpacing: "0%"
              }}
            >
              Privacy Policy
            </Link>

          </div>
        </div>
      </div>

      {/* HUGE ENFIQ TEXT */}
      <div className="relative z-0 mt-[48px] flex justify-center overflow-hidden">

        <h1
          style={{
            fontFamily: "Pavelt",
            fontWeight: 400,
            fontSize: "300px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#70707026",
            textAlign: "center",
          }}
        >
          ENFIQ
        </h1>

      </div>
    </footer>
  );
};

export default Footer;