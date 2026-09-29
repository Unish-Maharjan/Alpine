"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TimepiecesAbout() {
  const containerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !contentRef.current) return;

      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="timepieces-about"
      className="relative min-h-screen py-28 sm:py-36 flex items-center 
      -mt-1 justify-center overflow-hidden bg-[#06334a]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image.png"
          alt="Alpine Timepieces Craftsmanship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Soft oceanic tint overlay */}
        <div className="absolute inset-0 bg-[#06334a]/30 backdrop-brightness-95" />

        {/* Ocean blue top gradient */}
        <div className="absolute top-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-b from-[#06334a] via-[#06334a]/60 to-transparent" />

        {/* Ocean blue bottom gradient */}
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-t from-[#06334a] via-[#06334a]/60 to-transparent" />

        {/* Subtle lateral oceanic edge shadows */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06334a]/65 via-transparent to-[#06334a]/65" />
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center gap-6"
      >
        {/* Structured Luxury Heading */}
        <div className="space-y-2 max-w-4xl">
          <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl text-secondary uppercase tracking-wide leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            WATER RESISTANCE
          </h2>
          <span className="block font-saldo text-xl sm:text-3xl md:text-4xl text-[#eadab2] tracking-wider uppercase font-medium drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
            BUILT TO GO BEYOND THE SURFACE
          </span>
        </div>

        {/* Narrative Description */}
        <p className="font-inter text-sm sm:text-base md:text-lg text-[#d8d2c4] leading-relaxed max-w-2xl font-light tracking-wide drop-shadow-md">
          Engineered to conquer the crushing pressures of the oceanic abyss. With hermetically sealed screw-down crowns, reinforced helium-safe architecture, and corrosion-proof 316L marine steel, Alpine timepieces deliver uncompromising reliability beneath the waves.
        </p>
      </div>
    </section>
  );
}
