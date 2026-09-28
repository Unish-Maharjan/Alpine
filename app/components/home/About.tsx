"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_TEXT = "CURATING TIMELESS WATCHES";
const DESC_TEXT =
  `Built on a passion for precision, craftsmanship, and timeless design.`;

const LogoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgLogoRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // 1. Background logo slides in horizontally from the side with low opacity
      tl.fromTo(
        bgLogoRef.current,
        { xPercent: -120, opacity: 0, scale: 0.9 },
        { xPercent: 0, opacity: 0.2, scale: 1, ease: "power2.out", duration: 1 }
      )
        // 2. Headline appears while scrolling
        .fromTo(
          ".word-headline",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "power2.out",
            duration: 0.8,
          },
          "-=0.5"
        )
        // 3. Description appears sequentially
        .fromTo(
          descRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
          "-=0.2"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 w-full h-screen min-h-screen flex items-center justify-center bg-primary py-24 sm:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.35)]"
    >
      {/* Background Logo 1 - Horizontal sliding watermark */}
      <div
        ref={bgLogoRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 px-8 will-change-transform opacity-0"
      >
        <Image
          src="/logo/logo1.webp"
          alt="Alpine Background Emblem"
          width={900}
          height={300}
          className="w-[85vw] max-w-4xl h-auto object-contain opacity-90 drop-shadow-[0_0_40px_rgba(234,218,178,0.15)]"
          priority
        />
      </div>

      {/* Centered Content */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 will-change-transform">
        {/* Main About Headline with Word Stagger */}
        <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl text-secondary uppercase font-normal leading-tight max-w-4xl mb-6">
          {HEADLINE_TEXT.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="word-headline inline-block mr-2 sm:mr-3 will-change-transform whitespace-nowrap opacity-0"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Story Description */}
        <p
          ref={descRef}
          className="font-inter text-xl sm:text-2xl md:text-3xl text-secondary uppercase font-normal leading-tight max-w-4xl mb-6 opacity-0 will-change-transform"
        >
          {DESC_TEXT}
        </p>
      </div>
    </section>
  );
};

export default LogoSection;