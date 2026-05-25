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
    <div className="bg-white border border-gray-200 rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between gap-4">
          <div />
          <button className="text-sm font-semibold bg-[#F8F8F8] border border-gray-200 rounded-full px-5 py-2 text-[#121212] shadow-sm">
            Book a Call
          </button>
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-500">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            Overlay my calendar
          </div>
        </div>
      </div>

      <div className="p-6">
        <div>
          <Cal
            namespace="30min"
            calLink="enfiq/30min"
            style={{ width: "100%", height: "600px" }}
            config={{
              layout: "month_view",
            }}
          />
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
          className="inline-flex items-center justify-center border border-[#DDDDDD] rounded-full px-[16px] py-[8px] bg-white"
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
            Message
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

        <button
          type="submit"
          className="w-full h-[48px] rounded-[77px] px-[24px] py-[12px] text-white transition-colors"
          style={{
            backgroundColor: "#D41717",
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
