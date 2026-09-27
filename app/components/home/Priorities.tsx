"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Button from "@/app/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Priorities() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="priorities"
      ref={sectionRef}
      className="w-full bg-primary py-24 lg:py-36 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">
        {/* Left: Content Column */}
        <div
          ref={contentRef}
          className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl mx-auto lg:mx-0 will-change-transform"
        >
          {/* Eyebrow */}
          <p className="font-inter text-xs tracking-[0.25em] uppercase text-secondary/90 font-medium mb-3">
            OUR PRIORITIES
          </p>

          {/* Main Headline */}
          <h2 className="font-saldo text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-white font-normal uppercase mb-5">
            QUALITY, TRUST &amp;
            <span className="block mt-1">TIMELESS VALUE.</span>
          </h2>

          {/* Divider Line */}
          <div className="w-20 h-[1px] bg-secondary/30 mb-6" />

          {/* Brand Emblem */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-6 opacity-85">
            <Image
              src="/logo/logo1.webp"
              alt="Alpine Emblem"
              fill
              className="object-contain"
              sizes="56px"
            />
          </div>

          {/* Streamlined Editorial Copy */}
          <p className="font-inter text-sm sm:text-base text-tertiary/85 font-light leading-relaxed mb-8 max-w-md">
            We bring together genuine timepieces from trusted global watchmakers—selected for their enduring design, authentic heritage, and everyday reliability.
          </p>

          {/* Action Button */}
          <Button href="/shop" variant="gold" size="md">
            DISCOVER MORE
          </Button>
        </div>

        {/* Right Column: Reserved for floating WatchAnimation */}
        <div className="hidden lg:block min-h-[420px]" />
      </div>
    </section>
  );
}