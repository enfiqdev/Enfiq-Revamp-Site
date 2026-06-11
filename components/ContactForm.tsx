"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedText from "./AnimatedText";

const validatePhoneNumber = (phone: string, country: any): boolean => {
  const cleanPhone = phone.replace(/\D/g, "");
  if (!cleanPhone) return false;

  if (country && country.dialCode) {
    const dialCode = country.dialCode.replace(/\D/g, "");
    if (cleanPhone === dialCode) return false;

    if (country.format) {
      const dotCount = (country.format.match(/\./g) || []).length;
      const expectedLength = dotCount;
      return cleanPhone.length === expectedLength;
    } else {
      const localLength = cleanPhone.length - dialCode.length;
      return localLength >= 7 && localLength <= 12;
    }
  }

  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = React.useState<any>(null);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    // Validate phone number using the selected country's format
    const cleanPhone = formData.phone.replace(/\D/g, "");
    const dialCode = selectedCountry?.dialCode?.replace(/\D/g, "") || "";

    if (!cleanPhone || cleanPhone === dialCode) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhoneNumber(formData.phone, selectedCountry)) {
      newErrors.phone = "Please enter a complete phone number";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxpfmwad1nKychrtbtl6JQglJ4Dr1n4G7kHVJjXC2TpG8pZ04KqfNRgsBhNFCODqQj2/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.text();

      console.log("Response:", result);

      alert("Message sent!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error("FULL ERROR:", error);
      alert("Error submitting form");
    }
  };

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
        <AnimatedHeading
          as="h2"
          text="Get in touch"
          className="text-[32px] leading-[44.8px] font-semibold text-[#000000] mt-4 mb-[32px]"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        />
        <AnimatedText
          as="p"
          text="We'd love to hear from you. Please fill out this form."
          className="text-[#323232] text-[24px] leading-[32px] text-center mb-[32px]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.6px",
          }}
        />
      </div>

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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  firstName: e.target.value,
                });
                if (errors.firstName) {
                  setErrors((prev) => ({ ...prev, firstName: "" }));
                }
              }}
              className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                border: errors.firstName ? "1px solid #D41717" : "1px solid #4C4C4C33",
                color: "#000000",
              }}
            />
            {errors.firstName && (
              <span className="text-[#D41717] text-xs mt-1 block font-medium">
                {errors.firstName}
              </span>
            )}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  lastName: e.target.value,
                });
                if (errors.lastName) {
                  setErrors((prev) => ({ ...prev, lastName: "" }));
                }
              }}
              className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
              style={{
                fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22.4px",
                letterSpacing: "0%",
                border: errors.lastName ? "1px solid #D41717" : "1px solid #4C4C4C33",
                color: "#000000",
              }}
            />
            {errors.lastName && (
              <span className="text-[#D41717] text-xs mt-1 block font-medium">
                {errors.lastName}
              </span>
            )}
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
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
            className="w-full h-[47px] rounded-[12px] px-[16px] py-[12px] bg-[#F3F4F6] border focus:outline-none focus:border-[#D41717] transition-colors"
            style={{
              fontFamily: "'Instrument Sans', 'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22.4px",
              letterSpacing: "0%",
              borderColor: errors.email ? "#D41717" : "rgba(76,76,76,0.2)",
              color: "#000000",
              boxShadow: "0px 1px 2px rgba(16,24,40,0.05)",
            }}
          />
          {errors.email && (
            <span className="text-[#D41717] text-xs mt-1 block font-medium">
              {errors.email}
            </span>
          )}
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
              border: errors.phone ? "1px solid #D41717" : "1px solid #4C4C4C33",
              boxShadow: "0px 1px 2px #1018280D",
            }}
          >
            <PhoneInput
              placeholder="+1 (555) 000-0000"
              country={"in"}
              enableSearch={true}
              value={formData.phone}
              onMount={(_, country) => {
                setSelectedCountry(country);
              }}
              onChange={(phone, country) => {
                setFormData({
                  ...formData,
                  phone,
                });
                setSelectedCountry(country);
                if (errors.phone) {
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }
              }}
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
          {errors.phone && (
            <span className="text-[#D41717] text-xs mt-1 block font-medium">
              {errors.phone}
            </span>
          )}
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
