"use client";

import React, { useEffect } from "react";
import FAQAccordion from "../components/FAQAccordion";
import Cal, { getCalApi } from "@calcom/embed-react";
import ContactForm from "../components/ContactForm";

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
      className="max-w-[1200px] w-full mx-auto bg-[#F3F4F6] rounded-[16px] overflow-visible border border-[#707070] flex flex-col items-center pt-[40px] pb-[40px] px-4 md:px-[40px]"
    >
      {/* Book a Call Label */}
      <div
        className="
          inline-flex items-center justify-center
          rounded-[12424px]
          border border-[#DDDDDD]
          bg-[#F8F8F8]
          h-[33px] px-[16px]
        "
      >
        <span
          className="whitespace-nowrap text-[#121212] text-center"
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

    {/* CALENDAR SECTION */}
<div className="w-full mt-[24px] md:mt-[32px] flex justify-center">
  <div
    className="
      w-full
      max-w-[820px]
      px-[6px]
      md:px-0
      h-[680px]
      md:h-[760px]
      overflow-auto
      md:overflow-hidden
      rounded-[12px]
    "
  >
    <Cal
      namespace="30min"
      calLink="enfiq/30min"
      style={{
        width: "100%",
        height: "100%",
        border: "0",
      }}
      config={{
        layout: "month_view",
      }}
    />
  </div>
</div>

      {/* CONTACT INFO FOOTER IN THE FRAME */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-[48px] gap-y-3 mt-[32px] w-full px-2 sm:px-4">
        {/* EMAIL */}
        <div className="flex items-center gap-[6px] sm:gap-[10px]">
          <div
            className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF] shrink-0"
            style={{
              border: "1px solid #7070704D",
            }}
          >
            <img
              src="/images/assets/@.png"
              alt="mail"
              className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
            />
          </div>
          <span
            className="text-[14px] sm:text-[16px]"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              lineHeight: "22.4px",
              letterSpacing: "0%",
              color: "#323232",
            }}
          >
            team@enfiq.com
          </span>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-[6px] sm:gap-[10px]">
          <div
            className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center bg-[#EFEFEF] shrink-0"
            style={{
              border: "1px solid #7070704D",
            }}
          >
            <img
              src="/images/assets/contactSymbol.png"
              alt="phone"
              className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
            />
          </div>
          <span
            className="text-[14px] sm:text-[16px]"
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
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


export default function ContactPage() {
  return (
    <div className="pt-[112px] bg-[#FDFDFD] min-h-screen">
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
