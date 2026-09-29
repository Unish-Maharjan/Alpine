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

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        columnsRef.current ? columnsRef.current.children : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power2.out" }
      )
        .fromTo(
          brandTitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          [dividerRef.current, infoRowRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" },
          "-=0.4"
        );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative w-full bg-[#d3dedf] text-primary flex flex-col justify-between overflow-hidden select-none border-0 outline-none pt-12 sm:pt-16 lg:pt-20"
    >
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col shrink-0">
        {/* FOUR COLUMNS CONTENT */}
        <div
          ref={columnsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-14 gap-y-8 w-full max-w-5xl mx-auto"
        >
          {/* Column 1: INFORMATION */}
          <div>
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-primary tracking-wider mb-3 sm:mb-4">
              INFORMATION
            </h5>
            <ul className="space-y-2 sm:space-y-2.5 font-inter text-xs sm:text-sm text-primary/75">
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
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-primary tracking-wider mb-3 sm:mb-4">
              OUR BRANDS
            </h5>
            <ul className="space-y-2 sm:space-y-2.5 font-inter text-xs sm:text-sm text-primary/75">
              {["Casio", "Citizen", "Daniel Klein", "Q&Q", "Rhythm"].map((brand) => (
                <li key={brand}>
                  <Link
                    href="/not-found"
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
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-primary tracking-wider mb-3 sm:mb-4">
              LEGAL
            </h5>
            <ul className="space-y-2 sm:space-y-2.5 font-inter text-xs sm:text-sm text-primary/75">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Return & Refund",
                "Warranty Policy",
              ].map((legal) => (
                <li key={legal}>
                  <Link
                    href="/not-found"
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
            <h5 className="font-saldo text-xs sm:text-sm md:text-[14px] font-semibold uppercase text-primary tracking-wider mb-3 sm:mb-4">
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
                  className="w-8 h-8 rounded-full border border-primary/25 flex items-center justify-center text-primary hover:bg-primary hover:text-[#f8f6f0] hover:border-primary transition-all duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Typography Heading (Above the divider & copyright/WebX row) */}
        <div className="w-full select-none flex items-center justify-center pt-8 sm:pt-14 pb-4 sm:pb-6 pointer-events-none">
          <h2
            ref={brandTitleRef}
            className="font-saldo text-[9.5vw] sm:text-[10vw] md:text-[10.5vw] lg:text-[11vw] xl:text-[128px] 2xl:text-[146px] uppercase text-primary font-normal leading-none tracking-tight text-center w-full whitespace-nowrap will-change-transform"
          >
            ALPINE TIMEPIECES
          </h2>
        </div>

        {/* Hairline Divider */}
        <div
          ref={dividerRef}
          className="w-full border-t border-primary/20 my-4 sm:my-6"
        />

        {/* Bottom Row: Copyright (Left), WebX Info (Right) */}
        <div
          ref={infoRowRef}
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-primary/75 font-inter font-light pb-8 sm:pb-10"
        >
          {/* Left: Copyright */}
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Alpine Timepieces. All rights reserved.
          </p>

          {/* Right: Designed And Developed By WebX Nepal */}
          <div className="flex items-center gap-2">
            <span className="text-primary/75 text-xs sm:text-sm font-inter">Designed And Developed By</span>
            <Link
              href="https://www.webxnepal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-85 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/logo/webx-logo-black.svg"
                alt="WebX Nepal"
                width={68}
                height={22}
                className="h-4 sm:h-5 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;