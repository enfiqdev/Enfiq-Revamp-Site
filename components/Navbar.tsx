"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          {/* Flame icon + ENFIQ text */}
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
            <path
              d="M11 0C11 0 18 7 18 14C18 18.4 14.9 22 11 22C7.1 22 4 18.4 4 14C4 12 4.6 10.1 5.6 8.5C5.6 8.5 7 12 9 13C9 13 8 10 9 7C10 4 11 0 11 0Z"
              fill="#D62828"
            />
            <path
              d="M11 13C11 13 14 15.5 14 18C14 20.2 12.7 22 11 22C9.3 22 8 20.2 8 18C8 15.5 11 13 11 13Z"
              fill="#B22020"
            />
          </svg>
          <span className="font-black text-xl tracking-tight text-[#121212]">
            ENF<span className="text-[#D62828]">I</span>Q
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#121212] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-[#D62828] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b82020] transition-colors"
        >
          Get Started
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2.5px] bg-[#D62828] rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-[#D62828] rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-[#D62828] rounded-full transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 bg-white rounded-2xl shadow-lg border border-gray-100 py-6 px-6 flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#121212] hover:text-[#D62828] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-[#D62828] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-[#b82020] transition-colors mt-1"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
