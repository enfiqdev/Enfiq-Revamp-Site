"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../components/Button";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`w-full flex flex-col items-center fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled ? "pt-4" : "pt-[32px]"
    }`}>
      {/* 
        Note: The background opacity and backdrop blur are dynamically bound to CSS variables
        defined in styles/globals.css. You can easily adjust them there:
        - --nav-bg-scrolled: transparency/color when scrolled
        - --nav-bg-initial: transparency/color at the very top
        - --nav-blur-scrolled: blur amount when scrolled
        - --nav-blur-initial: blur amount at the very top
      */}
      <div
        className={`w-full flex items-center justify-between relative transition-all duration-500 ease-in-out ${
          scrolled
            ? "w-[calc(100%-2rem)] md:w-full md:max-w-[900px] h-[54px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/[0.04] px-8"
            : "w-full max-w-[1144px] h-[44px] rounded-none border-transparent px-6"
        }`}
        style={{
          backgroundColor: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg-initial)",
          backdropFilter: scrolled ? "blur(var(--nav-blur-scrolled))" : "blur(var(--nav-blur-initial))",
          WebkitBackdropFilter: scrolled ? "blur(var(--nav-blur-scrolled))" : "blur(var(--nav-blur-initial))",
        }}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/images/assets/enfiq.png"
            alt="Enfiq Logo"
            width={138.16}
            height={40}
            className="object-contain h-[40px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] leading-[24px] text-[#000000] hover:text-[#121212] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                letterSpacing: "0%",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="group relative hidden md:inline-flex items-center justify-center bg-[#D41717] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-black transition-colors"
        >
          <div className="relative h-[20px] overflow-hidden flex items-center justify-center">
            {/* First Text */}
            <span className="flex h-[20px] items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[20px] whitespace-nowrap">
              Get Started
            </span>
            {/* Second Text */}
            <span className="absolute left-0 top-[20px] flex h-[20px] w-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[20px] whitespace-nowrap">
              Get Started
            </span>
          </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2.5px] bg-[#D41717] rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-[#D41717] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-[#D41717] rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1144px] px-6 mt-3 overflow-hidden transition-all duration-300 ease-in-out z-50 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-6 px-6 flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#121212] hover:text-[#D41717] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="group relative inline-flex items-center justify-center bg-[#D41717] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-black transition-colors mt-1"
          >
            <div className="relative h-[20px] overflow-hidden flex items-center justify-center">
              {/* First Text */}
              <span className="flex h-[20px] items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[20px] whitespace-nowrap">
                Get Started
              </span>
              {/* Second Text */}
              <span className="absolute left-0 top-[20px] flex h-[20px] w-full items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[20px] whitespace-nowrap">
                Get Started
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
