"use client";

import React, { useEffect } from "react";
import FAQAccordion from "../components/FAQAccordion";
import Cal, { getCalApi } from "@calcom/embed-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
      overflow-hidden
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

// Contact form
function ContactForm() {

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxpfmwad1nKychrtbtl6JQglJ4Dr1n4G7kHVJjXC2TpG8pZ04KqfNRgsBhNFCODqQj2/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message sent!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

      } else {
        alert("Something went wrong");
      }

    } catch (error) {
      console.error("FULL ERROR:", error);
      alert("Error submitting form");
    }
  };

  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+91", country: "IN" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "AU" },
    { code: "+971", country: "UAE" },
  ];
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
        onSubmit={handleSubmit}
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
              value={formData.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstName: e.target.value,
                })
              }
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
              value={formData.lastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastName: e.target.value,
                })
              }
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
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
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

            <PhoneInput
              placeholder="+1 (555) 000-0000"
              country={"in"}
              enableSearch={true}
              value={formData.phone}
              onChange={(phone) =>
                setFormData({
                  ...formData,
                  phone,
                })
              }
              containerClass="!flex-1"
              buttonClass="!border-0 !bg-transparent"
              inputStyle={{
                width: "100%",
                height: "47px",
                background: "transparent",
                border: "none",
                boxShadow: "none",
                paddingLeft: "48px",
                fontSize: "16px",
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
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
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
          className="group relative w-full h-[48px] rounded-[77px] px-[24px] py-[12px] text-white bg-[#D41717] hover:bg-black transition-colors flex items-center justify-center"
          style={{
            fontFamily: "'Instrument Sans', 'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "22.4px",
            letterSpacing: "0%",
            boxShadow: "inset 0px 4px 6px 2px #FFFFFF4D",
          }}
        >
          <div className="relative h-[24px] overflow-hidden flex items-center justify-center">
            {/* First Text */}
            <span className="flex h-[24px] items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[24px] whitespace-nowrap">
              Get in touch
            </span>
            {/* Second Text */}
            <span className="absolute left-0 top-[24px] flex h-[24px] w-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[24px] whitespace-nowrap">
              Get in touch
            </span>
          </div>
        </button>

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
      </form>
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
