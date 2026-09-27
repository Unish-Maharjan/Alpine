"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_TEXT = "CURATING TIMELESS WATCHES";
const DESC_TEXT =
  "Built on a passion for precision, craftsmanship, and timeless design, Alpine brings together a carefully selected collection of exceptional watches from renowned brands.";

const LogoSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !contentRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 75%",
          scrub: 1.2,
        },
      });

      // 1. Logo emblem background fades & scales in first with subtle opacity
      tl.fromTo(
        ".logo-bg-emblem",
        { scale: 0.88, opacity: 0 },
        { scale: 1.05, opacity: 0.1, ease: "power2.out", duration: 1 }
      )
        // 2. Content appears sequentially after the logo
        .fromTo(
          contentRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
          "+=0.1"
        )
        .fromTo(
          ".word-headline",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".desc-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative z-10 w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-primary py-24 sm:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.35)]"
    >
      {/* Background Watermark Logo Emblem */}
      <div className="absolute inset-1 flex items-center justify-center z-0">
        <div className="logo-bg-emblem relative w-72 h-72 sm:w-96 sm:h-96
         md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] will-change-transform">
          <Image
            src="/logo/logo1.webp"
            alt="Alpine Emblem Background"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 500px, 600px"
          />
        </div>
      </div>

      {/* Centered Content */}
      <div
        ref={contentRef}
        className="relative max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 will-change-transform"
      >
        {/* Main About Headline with Word Stagger */}
        <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl text-secondary
        uppercase font-normal leading-tight max-w-3xl mb-6">
          {HEADLINE_TEXT.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="word-headline inline-block mr-2 sm:mr-3 will-change-transform"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Story Description with Word Stagger */}
        <p className="desc-text font-inter text-sm sm:text-base md:text-lg
         text-tertiary/90 font-light leading-relaxed max-w-2xl will-change-transform">
          {DESC_TEXT}
        </p>
      </div>
    </section>
  );
};

export default LogoSection;