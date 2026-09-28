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
  titleClass?: string;
}

const BRANDS: BrandItem[] = [
  {
    id: "01",
    name: "CASIO",
    image: "/images/watch1.png",
  },
  {
    id: "02",
    name: "CITIZEN",
    image: "/images/watch2.avif",
  },
  {
    id: "03",
    name: "G-SHOCK",
    image: "/images/watch5.png",
  },
  {
    id: "04",
    name: "RHYTHM",
    image: "/images/watch4.avif",
  },
  {
    id: "05",
    name: "DANIEL KLEIN",
    image: "/images/watch3.avif",
  },
  {
    id: "06",
    name: "Q&Q",
    image: "/images/animatedImage.png",
  },
];

export default function BrandSelection() {
  return (
    <section
      id="brandselection"
      className="relative z-10 w-full bg-primary text-secondary pt-16 sm:pt-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Editorial Section Heading */}
      <div className="text-center mb-12 sm:mb-16 px-6 max-w-4xl mx-auto will-change-transform">
        <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl uppercase font-normal text-secondary mb-3">
          THE NAMES WE CARRY
        </h2>
        <p className="font-inter text-sm sm:text-base text-tertiary/80 font-light max-w-xl mx-auto">
          Discover the master watchmakers behind the timepieces we curate.
        </p>
      </div>

      {/* 3-Column Full-Width Grid in Primary Color (each item is 80vh) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-b border-secondary/20">
        {BRANDS.map((brand, idx) => (
          <Link
            key={brand.id}
            href="/"
            className={`editorial-brand-card group relative w-full h-[80vh] bg-primary border-b
               border-secondary/20 md:border-r transition-all duration-500 will-change-transform 
               flex flex-col items-center justify-center text-center overflow-hidden
              hover:bg-primary-surface/40 ${
              (idx + 1) % 3 === 0 ? "lg:border-r-0" : ""
            } ${idx >= 3 ? "lg:border-b-0" : ""}`}
          >
            {/* Inner Refined Hairline Frame */}
            <div className="absolute inset-5 sm:inset-7 lg:inset-9 border
             border-secondary/20 pointer-events-none transition-all duration-500
              group-hover:border-secondary/55 group-hover:inset-4 sm:group-hover:inset-6
               lg:group-hover:inset-8 z-20" />

            {/* Watch Imagery on Hover */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none 
            overflow-hidden select-none z-0">
              <div className="relative w-3/4 h-3/4 opacity-0 scale-90 translate-y-4 group-hover:opacity-85 group-hover:scale-110 group-hover:translate-y-0 transition-all duration-700 ease-out drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                <Image
                  src={brand.image}
                  alt={`${brand.name} Timepiece`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Brand Name Title */}
            <div className="relative z-10 px-6 select-none transition-transform duration-500 group-hover:scale-105">
              <h3 className="font-saldo text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary uppercase font-normal tracking-widest group-hover:text-secondary-light drop-shadow-sm transition-colors duration-300">
                {brand.name}
              </h3>
              <span className="font-inter text-[11px] tracking-[0.25em] text-secondary/80 uppercase block mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                Explore Collection
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
