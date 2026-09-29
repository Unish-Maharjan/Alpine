"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  variant?: "default" | "dark" | "blue";
}

const Footer = ({ variant = "dark" }: FooterProps) => {
  const footerRef = useRef<HTMLElement>(null);
  const brandTitleRef = useRef<HTMLHeadingElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const infoRowRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      // 1. Entrance animation for header elements (Title, Columns, Divider, Info)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        brandTitleRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          columnsRef.current ? columnsRef.current.children : [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          [dividerRef.current, infoRowRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" },
          "-=0.4"
        );

      // 2. Parallax effect for 100vh background image
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { yPercent: -5, scale: 1.05 },
          {
            yPercent: 5,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full h-screen min-h-screen max-h-screen text-[#f8f6f0] flex flex-col justify-between overflow-hidden select-none border-0 outline-none"
    >
      {/* Background: timpiecesfooter.jpg covering 100vw and 100vh */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Image
          ref={bgImageRef}
          src="/images/timpiecesfooter.jpg"
          alt="Alpine Timepieces Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_30%] scale-105 will-change-transform"
        />
        {/* Seamless blend gradient between Titlesection (#06334a) and Footer */}
        <div className="absolute top-0 inset-x-0 h-40 sm:h-64 bg-gradient-to-b from-[#06334a]
         via-[#06334a]/75 to-transparent z-[1]" />
        {/* Soft atmospheric overlay at top for text legibility while keeping the watch visual clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06334a]/60 via-[#06334a]/35
         to-transparent" />
      </div>

      {/* Main Content Area - covers only the top portion of the background */}
      <div className="relative z-10 w-full mt-8 pt-10 sm:pt-12 md:pt-14 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto flex flex-col shrink-0">
        {/* 1. TOP BRAND AREA */}
        <h2
          ref={brandTitleRef}
          className="font-saldo text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[4vw] 
          uppercase text-secondary text-center w-full font-normal will-change-transform mb-6 md:mb-8"
        >
          ALPINE TIMEPIECES
        </h2>

        {/* 2. FOUR COLUMNS CONTENT */}
        <div
          ref={columnsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-14 gap-y-6 max-w-7xl mx-auto w-full"
        >
          {/* Column 1: INFORMATION */}
          <div>
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-[#eadab2] tracking-wider mb-2.5 sm:mb-3 drop-shadow-sm">
              INFORMATION
            </h5>
            <ul className="space-y-1.5 sm:space-y-2 font-inter text-xs sm:text-sm text-[#e4decb]">
              {[
                { label: "About Us", href: "/not-found" },
                { label: "Our Story", href: "/not-found" },
                { label: "Store Locations", href: "/not-found" },
                { label: "Contact Us", href: "/not-found" },
                { label: "Authenticity & Care", href: "/not-found" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#eadab2] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: OUR BRANDS */}
          <div>
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-[#eadab2] tracking-wider mb-2.5 sm:mb-3 drop-shadow-sm">
              OUR BRANDS
            </h5>
            <ul className="space-y-1.5 sm:space-y-2 font-inter text-xs sm:text-sm text-[#e4decb]">
              {["Casio", "Citizen", "Daniel Klein", "Q&Q", "Rhythm"].map((brand) => (
                <li key={brand}>
                  <Link
                    href="/not-found"
                    className="hover:text-[#eadab2] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: LEGAL */}
          <div>
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-[#eadab2] tracking-wider mb-2.5 sm:mb-3 drop-shadow-sm">
              LEGAL
            </h5>
            <ul className="space-y-1.5 sm:space-y-2 font-inter text-xs sm:text-sm text-[#e4decb]">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Return & Refund",
                "Warranty Policy",
              ].map((legal) => (
                <li key={legal}>
                  <Link
                    href="/not-found"
                    className="hover:text-[#eadab2] hover:translate-x-0.5 transition-all inline-block"
                  >
                    {legal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: FOLLOW US */}
          <div>
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-[#eadab2] tracking-wider mb-2.5 sm:mb-3 drop-shadow-sm">
              FOLLOW US
            </h5>
            <div className="flex items-center gap-2.5 flex-wrap pt-0.5">
              {[
                { icon: faFacebookF, label: "Facebook", href: "https://facebook.com" },
                { icon: faInstagram, label: "Instagram", href: "https://instagram.com" },
                { icon: faTiktok, label: "TikTok", href: "https://tiktok.com" },
                { icon: faWhatsapp, label: "WhatsApp", href: "https://wa.me/9801022393" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#eadab2]/30 flex items-center justify-center text-[#f8f6f0] hover:bg-[#eadab2] hover:text-[#06334a] hover:border-[#eadab2] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: DIVIDER & COPYRIGHT */}
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-3 pt-4 sm:pt-6">
          {/* Divider */}
          <div
            ref={dividerRef}
            className="w-full border-t border-[#eadab2]/20"
          />

          {/* Copyright / Info */}
          <div
            ref={infoRowRef}
            className="w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs sm:text-sm text-[#e4decb]/85 font-inter font-light"
          >
            <p>&copy; {new Date().getFullYear()} Alpine Timepieces. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-[#e4decb]/85 text-xs sm:text-sm font-inter">Designed And Developed By</span>
              <Link
                href="https://www.webxnepal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center opacity-85 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/logo/webx-logo.svg"
                  alt="WebX Nepal"
                  width={68}
                  height={22}
                  className="h-4 sm:h-5 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower area left clear to showcase the watch visual on the background image */}
      <div className="flex-1 w-full pointer-events-none min-h-[35vh]" />
    </footer>
  );
};

export default Footer;

