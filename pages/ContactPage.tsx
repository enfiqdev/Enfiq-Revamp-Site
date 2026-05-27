"use client";

import React, { useEffect } from "react";
import FAQAccordion from "../components/FAQAccordion";
import Cal, { getCalApi } from "@calcom/embed-react";

// Calendar mock component
function CalendarWidget() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#D41717" },
          dark: { "cal-brand": "#fafafa" },
        },
      });
    })();
  }, []);

  const calDays = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, null, null, null, null, null],
  ];

  const times = [
    "00:00", "00:30", "09:00", "09:30", "10:00",
    "10:30", "11:00", "11:30", "15:00",
  ];

  return (
    <div
      className="max-w-[1200px] w-full mx-auto bg-[#F3F4F6] rounded-[16px] overflow-hidden border border-[#707070] flex flex-col items-center pt-[40px] pb-[40px] px-4 md:px-[40px]"
    >
      {/* Book a Call Button */}
      <button
        className="
          group relative overflow-hidden
          inline-flex items-center justify-center
          rounded-[12424px]
          border border-[#DDDDDD]
          bg-[#F8F8F8]
          h-[33px] px-[16px]
          transition-all duration-300
          hover:border-black
        "
      >
        <div className="relative h-[20px] overflow-hidden">
          {/* First Text */}
          <span
            className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-[20px] text-[#121212] whitespace-nowrap"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Book a Call
          </span>

          {/* Second Text */}
          <span
            className="absolute left-0 top-[20px] flex w-full items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-[20px] text-[#121212] whitespace-nowrap"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            Book a Call
          </span>
        </div>
      </button>

      {/* Calendar container with 32px gap */}
      <div className="w-full mt-[32px] flex justify-center [&_iframe]:w-full [&_iframe]:min-h-[700px]">
        <Cal
          namespace="30min"
          calLink="enfiq/30min"
          style={{ width: "100%", height: "700px" }}
          config={{
            layout: "month_view",
          }}
        />
      </div>

      {/* CONTACT INFO FOOTER IN THE FRAME */}
      <div className="flex flex-wrap items-center justify-center gap-x-[48px] gap-y-[16px] mt-[32px] w-full px-4">
        {/* EMAIL */}
        <div className="flex items-center gap-[10px]">
          <div
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF]"
            style={{
              border: "1px solid #7070704D",
            }}
          >
            <img
              src="/images/assets/@.png"
              alt="mail"
              className="w-[24px] h-[24px]"
            />
          </div>
          <span
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              color: "#323232",
            }}
          >
            team@enfiq.com
          </span>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-[10px]">
          <div
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF]"
            style={{
              border: "1px solid #7070704D",
            }}
          >
            <img
              src="/images/assets/contactSymbol.png"
              alt="phone"
              className="w-[24px] h-[24px]"
            />
          </div>
          <span
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              color: "#323232",
            }}
          >
            49987 78675
          </span>
        </div>
      </div>
    </div>
  );
}

// Contact form
function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <span
          className="inline-flex items-center justify-center border-[1px] border-[#707070] rounded-full px-[16px] py-[8px] bg-white"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#000000",
          }}
        >
          Contact us Form
        </span>
        <h2
          className="text-[32px] leading-[44.8px] font-semibold text-[#000000] mt-4 mb-[32px]"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Get in touch
        </h2>
        <p
          className="text-[#323232] text-[24px] leading-[32px] text-center mb-[32px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.6px",
          }}
        >
          We&apos;d love to hear from you. Please fill out this form.
        </p>
      </div>

      {/*gap is 16 px*/}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="mb-[6px] block text-[16px] text-[#000000]"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0%",
              }}
            >
              First name
            </label>

            <input
              type="text"
              placeholder="First name"
              className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                border: "1px solid #4C4C4C33",
                color: "#000000",
              }}
            />
          </div>
          <div>
            <label
              className="mb-[6px] block text-[16px] text-[#000000]"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                lineHeight: "22.4px",
                letterSpacing: "0%",
              }}
            >
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                border: "1px solid #4C4C4C33",
                color: "#000000",
              }}
            />
          </div>
        </div>

        <div>
          <label
            className="mb-[6px] block text-[16px] text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              borderColor: "rgba(76,76,76,0.2)",
              color: "#000000",
              boxShadow: "0px 1px 2px rgba(16,24,40,0.05)",
            }}
          />
        </div>
        <div>
          <label
            className="mb-[6px] block text-[16px] text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            Phone number
          </label>

          <div
            className="flex items-center h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6]"
            style={{
              border: "1px solid #4C4C4C33",
              boxShadow: "0px 1px 2px #1018280D",
            }}
          >
            {/* Country Code */}
            <div className="relative flex items-center">
              <select
                className="appearance-none bg-transparent pr-[24px] focus:outline-none"
                style={{
                  fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "22.4px",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                <option>US</option>
                <option>IN</option>
                <option>UK</option>
              </select>

              <svg
                className="absolute right-0 pointer-events-none"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="flex-1 bg-transparent focus:outline-none ml-[16px]"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                color: "#000000",
              }}
            />
          </div>
        </div>

        <div>
          <label
            className="mb-[6px] block text-[16px] text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            message
          </label>
          <textarea
            rows={5}
            className="w-full h-[125px] rounded-[12px] px-[14px] py-[10px] bg-[#F3F4F6] resize-none focus:outline-none"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              color: "#000000",
              border: "1px solid #4C4C4C33",
              boxShadow: "0px 1px 2px #1018280D",
            }}
          />
        </div>
        {/* Privacy Policy */}
        <div className="mt-[16px] mb-[32px] flex items-center gap-[12px]">
          <input
            type="checkbox"
            id="privacy2"
            className="w-[20px] h-[20px] rounded-[6px] border border-[#000000] bg-[#F3F4F6] checked:bg-[#D41717] checked:border-[#D41717] cursor-pointer shrink-0 appearance-none flex items-center justify-center after:content-[''] checked:after:block checked:after:w-[6px] checked:after:h-[11px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45 checked:after:-mt-[1px] checked:after:mr-[0.5px]"
          />
          <label
            htmlFor="privacy2"
            className="text-[#000000]"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
            }}
          >
            You agree to our friendly privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-[48px] rounded-[77px] px-[24px] py-[12px] text-white bg-[#D41717] hover:bg-black transition-colors"
          style={{
            fontFamily: "'Instrument Sans', 'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "22.4px",
            letterSpacing: "0%",
            boxShadow: "inset 0px 4px 6px 2px #FFFFFF4D",
          }}
        >
          Get in touch
        </button>

        <div className="flex items-center justify-center gap-[48px] mt-[32px]">

          {/* EMAIL */}
          <div className="flex items-center gap-[10px]">

            <div
              className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF]"
              style={{
                border: "1px solid #7070704D",
              }}
            >
              <img
                src="/images/assets/@.png"
                alt="mail"
                className="w-[24px] h-[24px]"
              />
            </div>

            <span
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                color: "#323232",
              }}
            >
              team@enfiq.com
            </span>

          </div>

          {/* PHONE */}
          <div className="flex items-center gap-[10px]">

            <div
              className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF]"
              style={{
                border: "1px solid #7070704D",
              }}
            >
              <img
                src="/images/assets/contactSymbol.png"
                alt="phone"
                className="w-[24px] h-[24px]"
              />
            </div>

            <span
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                color: "#323232",
              }}
            >
              49987 78675
            </span>

          </div>

        </div>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-16 bg-[#FDFDFD] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-14">
        <CalendarWidget />
      </section>

      <section className="border-t border-gray-200">
        <ContactForm />
      </section>

      <FAQAccordion />
    </div>
  );
}
