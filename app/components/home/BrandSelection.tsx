"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BrandItem {
  id: string;
  name: string;
  image: string;
  gridClass: string;
  titleClass: string;
}

const BRANDS: BrandItem[] = [
  {
    id: "01",
    name: "CASIO",
    image: "/images/watch1.png",
    gridClass: "lg:col-span-7 lg:row-span-2",
    titleClass: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest",
  },
  {
    id: "02",
    name: "CITIZEN",
    image: "/images/watch2.avif",
    gridClass: "lg:col-span-5 lg:row-span-1",
    titleClass: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider",
  },
  {
    id: "03",
    name: "G-SHOCK",
    image: "/images/watch5.png",
    gridClass: "lg:col-span-5 lg:row-span-1",
    titleClass: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider",
  },
  {
    id: "04",
    name: "RHYTHM",
    image: "/images/watch4.avif",
    gridClass: "lg:col-span-4 lg:row-span-1",
    titleClass: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide",
  },
  {
    id: "05",
    name: "DANIEL KLEIN",
    image: "/images/watch3.avif",
    gridClass: "lg:col-span-4 lg:row-span-1",
    titleClass: "text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide",
  },
  {
    id: "06",
    name: "Q&Q",
    image: "/images/animatedImage.png",
    gridClass: "lg:col-span-4 lg:row-span-1",
    titleClass: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest",
  },
];

export default function BrandSelection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".editorial-brand-card");

      // Initial hidden states
      gsap.set(cards, { opacity: 0, y: 50, scale: 0.94 });
      if (headerRef.current) {
        gsap.set(headerRef.current, { opacity: 0, y: 25 });
      }

      // Pinned timeline with smooth scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Animate header in first
      if (headerRef.current) {
        tl.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      // Staggered reveal for the brand cards one by one
      tl.to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.45,
          ease: "power2.out",
        }
      );

      // Hold pause buffer ensuring all cards stay fully visible before unpinning
      tl.to({}, { duration: 0.8 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="brandselection"
      className="relative z-10 w-full min-h-screen lg:h-screen bg-tertiary text-primary py-8 sm:py-10 lg:py-6 px-6 sm:px-12 lg:px-16 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center h-full">
        {/* Editorial Section Heading */}
        <div ref={headerRef} className="text-center mb-6 sm:mb-8 will-change-transform">
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-medium text-primary mb-3">
            THE NAMES WE CARRY
          </h2>
          <p className="font-inter text-sm sm:text-base text-primary/80 font-light max-w-xl mx-auto">
           Discover the watchmakers behind the timepieces we curate.
          </p>
        </div>

        {/* 6-Brand Asymmetric Editorial Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-3 gap-3.5 sm:gap-4 lg:gap-4 lg:h-[68vh] max-h-[680px]"
        >
          {BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href="/"
              className={`editorial-brand-card group relative p-4 sm:p-6 lg:p-8 bg-primary border border-secondary/20 hover:border-secondary/40 hover:bg-[#0f4445] flex items-center justify-center text-center rounded-none overflow-hidden transition-all duration-500 will-change-transform ${brand.gridClass}`}
            >
              {/* Inner light secondary border */}
              <div className="absolute inset-2 sm:inset-2.5 lg:inset-3 border border-secondary/25 pointer-events-none transition-colors duration-300 group-hover:border-secondary/50 z-20" />

              {/* Watch Imagery on Hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <div className="relative w-3/4 h-3/4 opacity-0 scale-90 translate-y-3 group-hover:opacity-70
                 group-hover:scale-110 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} Timepiece`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 300px, 450px"
                  />
                </div>
              </div>

              {/* Brand Name Title */}
              <h3
                className={`font-saldo text-secondary uppercase font-normal relative z-10 transition-all duration-300 group-hover:text-white drop-shadow-md select-none ${brand.titleClass}`}
              >
                {brand.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
