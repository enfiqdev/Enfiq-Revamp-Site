"use client";

import React from "react";
import FAQAccordion from "../components/FAQAccordion";

// Calendar mock component
function CalendarWidget() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      {/* Calendly-style header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Left info pane */}
          <div className="w-44 pr-4 border-r border-gray-100">
            <div className="flex items-center gap-1 mb-2">
              <svg width="12" height="14" viewBox="0 0 22 26" fill="none">
                <path
                  d="M11 0C11 0 18 7 18 14C18 18.4 14.9 22 11 22C7.1 22 4 18.4 4 14C4 12 4.6 10.1 5.6 8.5C5.6 8.5 7 12 9 13C9 13 8 10 9 7C10 4 11 0 11 0Z"
                  fill="#D62828"
                />
              </svg>
              <span className="text-xs text-gray-400">enfiq.com</span>
            </div>
            <p className="font-bold text-sm text-[#121212]">30 Min Meeting</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-gray-500">⏱ 30m</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs text-gray-500">📹 Google Meet</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs text-gray-500">🌍 Asia/Kolkata ▾</span>
            </div>
          </div>

          {/* Calendar */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-sm text-[#121212]">December 2024</span>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-gray-600">‹</button>
                <button className="text-gray-400 hover:text-gray-600">›</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-0.5">
              {days.map((d) => (
                <div key={d} className="text-center text-xs text-gray-400 font-medium py-1">
                  {d}
                </div>
              ))}
              {calDays.flat().map((day, i) => (
                <div
                  key={i}
                  className={`text-center text-xs py-1.5 rounded-full cursor-pointer ${
                    day === 27
                      ? "bg-[#D62828] text-white font-bold"
                      : day === 30
                      ? "border border-[#D62828] text-[#D62828] font-medium"
                      : day
                      ? "hover:bg-gray-100 text-gray-700"
                      : ""
                  }`}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          </div>

          {/* Time slots */}
          <div className="w-24 flex flex-col gap-1 overflow-y-auto max-h-52">
            <div className="flex gap-1 mb-2 text-xs">
              <button className="px-2 py-0.5 rounded border border-gray-200 text-gray-500">12h</button>
              <button className="px-2 py-0.5 rounded bg-[#D62828] text-white">24h</button>
            </div>
            <p className="text-xs text-[#D62828] font-medium mb-1">Fri 27</p>
            {times.map((t) => (
              <button
                key={t}
                className="w-full text-xs border border-gray-200 rounded py-1 text-gray-600 hover:border-[#D62828] hover:text-[#D62828] transition-colors text-center"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Cal.com label */}
        <p className="text-center text-xs text-gray-400 mt-4">Cal.com</p>
      </div>

      {/* Contact info at bottom of widget */}
      <div className="p-4 flex items-center justify-center gap-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center text-xs">@</span>
          team@enfiq.com
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center text-xs">📞</span>
          49987 78675
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
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
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
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-600 mb-1 block">Message</label>
          <textarea
            rows={5}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#D62828] transition-colors resize-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="privacy2" className="accent-[#D62828]" />
          <label htmlFor="privacy2" className="text-xs text-gray-500">
            You agree to our friendly privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#D62828] text-white font-semibold py-3 rounded-full hover:bg-[#b82020] transition-colors"
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
    <div className="pt-16">
      {/* ── BOOK A CALL SECTION ── */}
      <section className="max-w-3xl mx-auto px-6 pt-10 pb-6">
        <div className="text-center mb-6">
          <span className="text-xs font-medium bg-white border border-gray-200 px-4 py-1.5 rounded-full text-gray-600">
            Book a Call
          </span>
        </div>
        <CalendarWidget />
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="border-t border-gray-100 mt-6">
        <ContactForm />
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion />
    </div>
  );
}
