"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BRAND_LOGOS = [
  { name: "Citizen", tag: "Eco-Drive Precision", logo: "/logo/Rhythm.png" },
  { name: "Rhythm", tag: "Master Clockmakers", logo: "/logo/Rhythm.png" },
  { name: "Daniel Klein", tag: "Modern Elegance", logo: "/logo/Rhythm.png" },
  { name: "Q&Q", tag: "Quality & Style", logo: "/logo/Rhythm.png" },
  { name: "Casio", tag: "Pioneer in Digital", logo: "/logo/Rhythm.png" },
  { name: "G-SHOCK", tag: "Absolute Toughness", logo: "/logo/Rhythm.png" },
  { name: "Alpine Atelier", tag: "Swiss Fine Horology", logo: "/logo/Rhythm.png" },
  { name: "Grand Edition", tag: "Complicated Timepieces", logo: "/logo/Rhythm.png" },
];

export default function BrandSelection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".brand-card");

      // Initial states
      gsap.set(cards, { opacity: 0, y: 60, scale: 0.92 });
      if (headerRef.current) {
        gsap.set(headerRef.current, { opacity: 0, y: 30 });
      }

      // Pinned & scrubbed timeline: cards appear one by one
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      if (headerRef.current) {
        tl.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      tl.to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
        },
        "-=0.2"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-tertiary text-[#0c3b3c] py-10 px-6 sm:px-12
       lg:px-16 border-t border-[#0c3b3c]/10 relative flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div ref={headerRef} className="text-center mb-16 will-change-transform">
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-medium
           text-primary mb-4">
            OUR BRANDS
          </h2>
          <p className="font-inter text-xs sm:text-base text-[#0c3b3c]/80 font-light max-w-xl mx-auto">
            Discover iconic timepieces from world-renowned watchmakers selected for distinction and craftsmanship.
          </p>
        </div>

        {/* 2 Rows x 4 Columns Card Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {BRAND_LOGOS.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="brand-card bg-primary border border-[#eadab2]/30 p-8 flex flex-col justify-between text-center rounded-sm relative overflow-hidden group shadow-lg will-change-transform"
            >
              {/* Subtle metallic top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#eadab2]/40 to-transparent" />

              <div className="flex flex-col items-center justify-center w-full min-h-22.5">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  width={300}
                  height={150}
                  className="max-h-25 w-auto object-contain brightness-0 invert opacity-100"
                />
              </div>

              {/* Card Footer Action */}
              <div className="mt-8 pt-4 border-t border-[#eadab2]/20 flex items-center justify-center">
                <span className="font-inter text-[11px] text-[#eadab2] uppercase tracking-widest font-medium">
                  Explore Collection
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

