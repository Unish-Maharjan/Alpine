"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_TEXT = "CRAFTING ETERNAL LEGACIES IN HOROLOGY";
const DESC_TEXT =
  "Founded on principles of unwavering precision and uncompromising elegance, Alpine represents the pinnacle of watchmaking mastery. Every timepiece is meticulously engineered to capture the essence of time itself.";

const LogoSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !contentRef.current) return;

      // Pin section and scrub content reveal timeline from bottom across scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        contentRef.current,
        { y: 140, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out", duration: 0.8 }
      )
        .from(logoRef.current, { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(
          ".word-headline",
          {
            opacity: 0,
            y: 30,
            stagger: 0.08,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".word-desc",
          {
            opacity: 0,
            y: 20,
            stagger: 0.04,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(statsRef.current, { y: 30, opacity: 0, duration: 0.5 }, "-=0.3");
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full bg-[#0c3b3c] text-[#fcfbf8] py-24 px-6 sm:px-12 lg:px-16 border-y border-[#eadab2]/15 overflow-hidden"
    >
      <div
        ref={contentRef}
        className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10"
      >
     

        {/* Logo Emblem */}
        <div
          ref={logoRef}
          className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8 filter drop-shadow-md"
        >
          <Image
            src="/logo/logo1.webp"
            alt="Alpine Emblem"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 112px, 144px"
          />
        </div>

        {/* Main About Headline with Word Stagger */}
        <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl text-[#fcfbf8] uppercase font-normal leading-tight max-w-3xl mb-6">
          {HEADLINE_TEXT.split(" ").map((word, idx) => (
            <span key={idx} className="word-headline inline-block mr-3">
              {word}
            </span>
          ))}
        </h2>

        {/* Story Description with Word Stagger */}
        <p className="font-inter text-sm sm:text-base md:text-lg text-[#e5e0d3]/85 font-light leading-relaxed max-w-2xl mb-12">
          {DESC_TEXT.split(" ").map((word, idx) => (
            <span key={idx} className="word-desc inline-block mr-1.5">
              {word}
            </span>
          ))}
        </p>

        {/* Highlights Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-14 w-full max-w-3xl pt-10 border-t border-[#eadab2]/20"
        >
          <div>
            <span className="font-saldo text-3xl sm:text-4xl text-[#eadab2] block font-normal mb-1">
              1988
            </span>
            <span className="font-inter text-xs text-[#e5e0d3]/70 uppercase font-medium tracking-wider block">
              ESTABLISHED
            </span>
          </div>

          <div>
            <span className="font-saldo text-3xl sm:text-4xl text-[#eadab2] block font-normal mb-1">
              100%
            </span>
            <span className="font-inter text-xs text-[#e5e0d3]/70 uppercase font-medium tracking-wider block">
              SWISS PRECISION
            </span>
          </div>

          <div className="col-span-2 md:col-span-1">
            <span className="font-saldo text-3xl sm:text-4xl text-[#eadab2] block font-normal mb-1">
              50+
            </span>
            <span className="font-inter text-xs text-[#e5e0d3]/70 uppercase font-medium tracking-wider block">
              MASTER WATCHMAKERS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;