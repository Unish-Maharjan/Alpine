"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface BrandItem {
  id: string;
  name: string;
  logo: string;
  href: string;
  scaleClass?: string;
}

const BRANDS: BrandItem[] = [
  {
    id: "01",
    name: "CASIO",
    logo: "/logo/casio-logo.png",
    href: "/not-found",
    scaleClass: "scale-125 sm:scale-135 lg:scale-145",
  },
  {
    id: "02",
    name: "CITIZEN",
    logo: "/logo/citizen-logo.png",
    href: "/not-found",
    scaleClass: "scale-135 sm:scale-145 lg:scale-155",
  },
  {
    id: "03",
    name: "G-SHOCK",
    logo: "/logo/gshock-logo.png",
    href: "/not-found",
    scaleClass: "scale-130 sm:scale-140 lg:scale-150",
  },
  {
    id: "04",
    name: "DANIEL KLEIN",
    logo: "/logo/daniel-logo.png",
    href: "/not-found",
    scaleClass: "scale-100",
  },
  {
    id: "05",
    name: "RHYTHM",
    logo: "/logo/Rhythm.png",
    href: "/not-found",
    scaleClass: "scale-110 sm:scale-120 lg:scale-100",
  },
];

export default function BrandSelection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;

      // Duplicate list is rendered twice to make seamless infinite loop (-50%)
      const animation = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 18,
        repeat: -1,
      });

      // Pause/slow on hover for interactive polish
      const slider = sliderRef.current;
      if (slider) {
        const onEnter = () => gsap.to(animation, { timeScale: 0.2, duration: 0.4 });
        const onLeave = () => gsap.to(animation, { timeScale: 1, duration: 0.4 });

        slider.addEventListener("mouseenter", onEnter);
        slider.addEventListener("mouseleave", onLeave);

        return () => {
          slider.removeEventListener("mouseenter", onEnter);
          slider.removeEventListener("mouseleave", onLeave);
          animation.kill();
        };
      }
    },
    { scope: sliderRef }
  );

  // Repeat the array twice for an uninterrupted infinite loop
  const displayBrands = [...BRANDS, ...BRANDS];

  return (
    <section
      id="brandselection"
      ref={sliderRef}
      className="relative z-10 w-full bg-[#f7f5ef] pt-14 sm:pt-18 lg:pt-20 pb-14
       sm:pb-18 lg:pb-20 overflow-hidden select-none"
    >
      {/* Editorial Section Header */}
      <div className="text-center max-w-3xl -mt-8 sm:mt-1 mx-auto mb-12 sm:mb-14 px-6 flex flex-col items-center">
        <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase 
        font-normal text-primary tracking-tight leading-[1.08]">
          THE NAMES WE CARRY
        </h2>
        <p className="font-inter text-xs sm:text-sm text-primary/70 font-light mt-2.5 leading-relaxed max-w-xl mx-auto">
          Discover the master watchmakers behind the timepieces we curate.
        </p>
      </div>

      {/* Subtle edge fade gradients */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#f7f5ef] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#f7f5ef] to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Brand Slider (fits exactly 4 brands on desktop) */}
      <div className="w-full overflow-hidden flex">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform shrink-0 w-max"
        >
          {displayBrands.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="w-[50vw] sm:w-[33.333vw] lg:w-[25vw] shrink-0 flex items-center justify-center px-4 sm:px-8 lg:px-12"
            >
              <Link
                href={brand.href}
                className="group relative h-20 sm:h-24 md:h-28 lg:h-32 w-48 sm:w-60 md:w-72 lg:w-80 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300"
                aria-label={brand.name}
              >
                <div className={`relative w-full h-full flex items-center justify-center transition-transform duration-300 ${brand.scaleClass || ""}`}>
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 360px"
                    className="object-contain p-1"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
