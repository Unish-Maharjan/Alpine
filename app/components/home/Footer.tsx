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

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const brandTitleRef = useRef<HTMLHeadingElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const infoRowRef = useRef<HTMLDivElement>(null);
  const watchContainerRef = useRef<HTMLDivElement>(null);
  const watchImageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      // 1. Entrance animation for header elements (Title, Columns, Divider, Info)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        brandTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }
      )
        .fromTo(
          columnsRef.current ? columnsRef.current.children : [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          [dividerRef.current, infoRowRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          "-=0.5"
        );

      // 2. Continuous Parallax Scrub for Watch rising from water
      if (watchContainerRef.current && watchImageRef.current) {
        gsap.fromTo(
          watchImageRef.current,
          { yPercent: 10, scale: 1.03 },
          {
            yPercent: -3,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top bottom",
              end: "bottom bottom",
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
      className="relative w-full h-screen min-h-screen max-h-screen bg-[#fcfbf8] text-primary flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Upper Section: Brand Title, 4-Column Content, Divider & Info */}
      <div className="relative z-20 w-full pt-4 sm:pt-6 md:pt-8 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto flex flex-col shrink-0">
        {/* 1. TOP BRAND AREA: Massive clean uppercase brand typography spanning most of the width */}
        <h2
          ref={brandTitleRef}
          className="font-saldo text-[8.5vw] sm:text-[9vw] md:text-[9.5vw] lg:text-[10vw] uppercase tracking-tight text-primary leading-none text-center w-full whitespace-nowrap font-normal will-change-transform drop-shadow-sm mb-3 sm:mb-5"
        >
          ALPINE TIMEPIECES
        </h2>

        {/* 2. FOUR COLUMNS CONTENT (Information, Our Brands, Legal, Follow Us) */}
        <div
          ref={columnsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 lg:gap-x-12 gap-y-3 pb-2 max-w-6xl mx-auto w-full text-xs sm:text-[13px]"
        >
          {/* Column 1: INFORMATION */}
          <div>
            <h5 className="font-saldo text-[11px] sm:text-xs font-semibold uppercase text-primary tracking-wider mb-2">
              INFORMATION
            </h5>
            <ul className="space-y-1 sm:space-y-1.5 font-inter text-[11px] sm:text-xs text-primary/75">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Our Story", href: "/#about" },
                { label: "Store Locations", href: "/#contact" },
                { label: "Contact Us", href: "/#contact" },
                { label: "Authenticity & Care", href: "/timepieces" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-primary hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: OUR BRANDS */}
          <div>
            <h5 className="font-saldo text-[11px] sm:text-xs font-semibold uppercase text-primary tracking-wider mb-2">
              OUR BRANDS
            </h5>
            <ul className="space-y-1 sm:space-y-1.5 font-inter text-[11px] sm:text-xs text-primary/75">
              {["Casio", "Citizen", "Daniel Klein", "Q&Q", "Rhythm"].map((brand) => (
                <li key={brand}>
                  <Link
                    href="/timepieces"
                    className="hover:text-primary hover:translate-x-0.5 transition-all inline-block"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: LEGAL */}
          <div>
            <h5 className="font-saldo text-[11px] sm:text-xs font-semibold uppercase text-primary tracking-wider mb-2">
              LEGAL
            </h5>
            <ul className="space-y-1 sm:space-y-1.5 font-inter text-[11px] sm:text-xs text-primary/75">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Return & Refund",
                "Warranty Policy",
              ].map((legal) => (
                <li key={legal}>
                  <Link
                    href="#"
                    className="hover:text-primary hover:translate-x-0.5 transition-all inline-block"
                  >
                    {legal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: FOLLOW US */}
          <div>
            <h5 className="font-saldo text-[11px] sm:text-xs font-semibold uppercase text-primary tracking-wider mb-2">
              FOLLOW US
            </h5>
            <div className="flex items-center gap-2 flex-wrap pt-0.5">
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
                  className="w-7 h-7 rounded-full border border-primary/25 flex items-center justify-center text-primary hover:bg-primary hover:text-[#f8f6f0] hover:border-primary transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. DIVIDER: Very subtle horizontal hairline divider */}
        <div
          ref={dividerRef}
          className="w-full border-t border-primary/15 my-2.5 sm:my-3 max-w-6xl mx-auto"
        />

        {/* 4. COPYRIGHT / SMALL INFORMATION ROW */}
        <div
          ref={infoRowRef}
          className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-primary/70 font-inter font-light"
        >
          <p>&copy; {new Date().getFullYear()} Alpine Timepieces. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-primary/70 text-[11px] sm:text-xs font-inter">Designed And Developed By</span>
            <Link
              href="https://www.webxnepal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-85 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/logo/webx-logo-black.svg"
                alt="WebX Nepal"
                width={60}
                height={20}
                className="h-4 sm:h-5 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* 5. LARGE VISUAL: Lower half dominated by luxury stainless-steel watch emerging from deep blue water */}
      <div
        ref={watchContainerRef}
        className="relative z-10 w-full flex-1 min-h-[30vh] flex items-end justify-center overflow-hidden"
      >
        {/* Soft top gradient to create seamless transition into off-white background */}
        <div className="absolute top-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-[#fcfbf8] via-[#fcfbf8]/85 to-transparent z-10 pointer-events-none" />

        {/* Watch Image emerging from water */}
        <div className="relative w-full h-full flex items-end justify-center">
          <Image
            ref={watchImageRef}
            src="/images/footer-watch-water.jpg"
            alt="Alpine luxury stainless steel watch emerging from deep ocean water"
            fill
            priority
            className="object-cover object-center lg:object-[center_35%] scale-100 will-change-transform"
            sizes="100vw"
          />
        </div>

        {/* Subtle bottom vignette / deep ocean atmosphere gradient */}
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-[#02111d]/60 to-transparent pointer-events-none z-10" />
      </div>
    </footer>
  );
};

export default Footer;