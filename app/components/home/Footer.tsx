"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      // Ambient glow orb floats upward as footer enters view
      gsap.to(glowRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Nav grid — staggered reveal from below
      gsap.from(navRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Bottom bar fades up after nav
      gsap.from(bottomRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-primary text-[#f8f6f0] border-t border-[#eadab2]/15 pt-16 pb-12 font-sans relative overflow-hidden"
    >
      {/* Parallax ambient glow */}
      <div
        ref={glowRef}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#eadab2]/8 rounded-full blur-3xl pointer-events-none parallax-slow"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div
          ref={navRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10 border-b border-[#eadab2]/15 text-sm"
        >
          {/* Brand & Store Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/logo1.webp"
                alt="Alpine Timepieces Logo"
                width={180}
                height={45}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="font-inter text-[#d8d2c4] text-xs leading-relaxed max-w-md">
              Nepal&apos;s leading authorized retailer for Casio, G-SHOCK, Citizen, and Rhythm.
              <br />
              Genuine products backed by official warranty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-inter text-xs text-[#d8d2c4] pt-2">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3.5 h-3.5 text-[#eadab2] mt-0.5 shrink-0" />
                  <span>Durbarmarg, Kathmandu</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 text-[#eadab2] shrink-0" />
                  <a href="tel:9801022393" className="hover:text-[#eadab2] transition-colors">980-1022393</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-[#eadab2] shrink-0" />
                  <a href="mailto:support@alpinetimepieces.com" className="hover:text-[#eadab2] transition-colors">
                    support@alpinetimepieces.com
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3.5 h-3.5 text-[#eadab2] mt-0.5 shrink-0" />
                  <span>Shop no 102, First floor, CIVIL MALL</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 text-[#eadab2] shrink-0" />
                  <a href="tel:9700056616" className="hover:text-[#eadab2] transition-colors">970-0056616</a>
                </div>
              </div>
            </div>
          </div>

          {/* OUR BRANDS */}
          <div className="lg:col-span-3">
            <h5 className="font-saldo text-xs font-semibold uppercase text-[#eadab2] mb-4">
              OUR BRANDS
            </h5>
            <ul className="space-y-2.5 font-inter text-xs text-[#d8d2c4]">
              {["Casio", "Citizen", "Daniel Klein", "Q&Q", "Rhythm"].map((brand) => (
                <li key={brand}>
                  <Link href="#products" className="hover:text-[#eadab2] transition-colors">
                    {brand}
                  </Link>
                </li>
              ))}
              <li className="pt-1 text-[#eadab2] font-medium italic">
                Something Iconic Is Coming !!
              </li>
            </ul>
          </div>

          {/* OTHER LINKS */}
          <div className="lg:col-span-2">
            <h5 className="font-saldo text-xs font-semibold uppercase text-[#eadab2] mb-4">
              OTHER LINKS
            </h5>
            <ul className="space-y-2.5 font-inter text-xs text-[#d8d2c4]">
              <li>
                <Link href="#contact" className="hover:text-[#eadab2] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#eadab2] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#eadab2] transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL & FOLLOW US */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h5 className="font-saldo text-xs font-semibold uppercase text-[#eadab2] mb-4">
                LEGAL
              </h5>
              <ul className="space-y-2.5 font-inter text-xs text-[#d8d2c4]">
                {["Privacy Policy", "Terms & Conditions", "Return & Refund", "Warranty Policy"].map((legal) => (
                  <li key={legal}>
                    <Link href="#" className="hover:text-[#eadab2] transition-colors">
                      {legal}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-saldo text-xs font-semibold uppercase text-[#eadab2] mb-3">
                FOLLOW US
              </h5>
              <div className="flex items-center gap-2.5 flex-wrap">
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
                    className="w-8 h-8 rounded-full border border-[#eadab2]/30 flex items-center justify-center text-[#f8f6f0] hover:text-[#0c3b3c] hover:bg-[#eadab2] hover:border-[#eadab2] transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Designed By */}
        <div
          ref={bottomRef}
          className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#d8d2c4]/70 font-light gap-4 font-inter"
        >
          <p>&copy; {new Date().getFullYear()} Alpine Timepieces. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-[#d8d2c4] text-xs font-inter">Designed By</span>
            <Link href="https://www.webxnepal.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Image src="/logo/webx-logo.svg" alt="WebX Nepal" width={60} height={20} className="h-5 w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
