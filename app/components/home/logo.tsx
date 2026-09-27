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

      // Master timeline that slides the about section content up from below as user scrolls from Hero
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 20%",
          scrub: 1.2,
        },
      });

      tl.fromTo(
        contentRef.current,
        { y: 180, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out", duration: 1 }
      )
        .fromTo(
          ".logo-emblem",
          { scale: 0.82, opacity: 0 },
          { scale: 1, opacity: 1, ease: "power2.out", duration: 0.6 },
          "-=0.6"
        )
        .fromTo(
          ".word-headline",
          { opacity: 0, y: 30 },
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
      className="relative z-10 w-full bg-primary py-24 px-6 sm:px-12 lg:px-16 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.35)]"
    >
      <div
        ref={contentRef}
        className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10 will-change-transform"
      >
        {/* Logo Emblem */}
        <div className="logo-emblem relative w-28 h-28 sm:w-36 sm:h-36 mb-8 filter drop-shadow-md will-change-transform">
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
            <span
              key={idx}
              className="word-headline inline-block mr-3 will-change-transform"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Story Description with Word Stagger */}
        <p className="desc-text font-inter text-sm sm:text-base md:text-lg
         text-[#e5e0d3]/85 font-light leading-relaxed max-w-2xl will-change-transform">
          {DESC_TEXT}
        </p>
      </div>
    </section>
  );
};

export default LogoSection;