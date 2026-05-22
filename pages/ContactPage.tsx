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
        <span className="text-xs font-medium bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">
          Contact us Form
        </span>
        <h2 className="text-3xl font-black text-[#121212] mt-4 mb-2">Get in touch</h2>
        <p className="text-gray-500 text-sm">
          We&apos;d love to hear from you. Please fill out this form.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">First name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
          />
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Phone number</label>
          <div className="flex gap-2">
            <select className="border border-gray-200 rounded-lg px-2 py-2.5 text-sm focus:outline-none w-20">
              <option>US</option>
              <option>IN</option>
              <option>UK</option>
            </select>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Message</label>
          <textarea
            rows={5}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D41717] transition-colors resize-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="privacy2" className="accent-[#D41717]" />
          <label htmlFor="privacy2" className="text-xs text-gray-500">
            You agree to our friendly privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#D41717] text-white font-semibold py-3 rounded-full hover:bg-[#B21313] transition-colors"
        >
          Get in touch
        </button>

        <div className="flex items-center justify-center gap-8 pt-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center text-xs">@</span>
            team@enfiq.com
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center text-xs">📞</span>
            49987 78675
          </div>
        </div>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-16 bg-[#F4F5F7] min-h-screen">
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
