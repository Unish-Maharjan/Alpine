"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/app/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRIORITIES = [
  {
    line1: "Companion for every new horizon you seek.",
    line2: "Precision is our eternal pursuit.",
  },
  {
    line1: "Enduring presence across every time zone.",
    line2: "Peace measured in microns.",
  },
];

export default function Priorities() {
  const sectionRef = useRef<HTMLElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="priorities"
      ref={sectionRef}
      className="w-full bg-[#0c3b3c] text-[#f8f6f0] py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_40%,rgba(234,218,178,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">
        {/* Left: Content Column */}
        <div ref={contentRef} className="flex flex-col items-center text-center max-w-xl mx-auto lg:mx-0">
          {/* Kicker */}
          <p className="italic font-inter text-xs sm:text-sm text-[#eadab2]/85 mb-4">
            Our Priorities
          </p>

          {/* Main Headline */}
          <h2 className="font-saldo text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-white font-normal mb-6">
            Security, Safety &amp;
            <span className="block mt-1">Longevity.</span>
          </h2>

          {/* Divider Line */}
          <div className="w-50 h-[1px] bg-[#eadab2]/30 mb-8" />
          <Image
            src="/logo/logo1.webp"
            alt="Alpine Emblem"
            width={60}
            height={60}
            className="object-contain mb-10"
          />

          {/* Spaced Text Paragraphs */}
          <div className="space-y-6 mb-10 text-center">
            {PRIORITIES.map((p, i) => (
              <p
                key={i}
                className="font-inter text-[#d8d2c4] text-xs sm:text-sm md:text-base leading-relaxed font-light"
              >
                {p.line1}
                <br />
                {p.line2}
              </p>
            ))}
          </div>

          {/* Button */}
          <Button href="#contact" variant="gold" size="md">
            LEARN MORE
          </Button>
        </div>

        <div className="flex justify-center items-center relative w-full min-h-80 overflow-visible">
          <div
            ref={watchRef}
            className="relative w-full flex items-center justify-center will-change-transform"
          >
            <Image
              src="/images/animatedwatch.webp"
              alt="Alpine Chronograph Luxury Timepiece"
              width={700}
              height={700}
              className="object-contain w-auto z-100 h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] max-w-none filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}