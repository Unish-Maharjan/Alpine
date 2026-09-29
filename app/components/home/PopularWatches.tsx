"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/app/ui/Button";

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  index: string;
  name: string;
  collection: string;
  price: string;
  image: string;
  sale?: boolean;
  href: string;
}

const POPULAR_WATCHES: Product[] = [
  {
    id: "ashez",
    index: "01",
    name: "ASHEZ",
    collection: "Endurance Collection",
    price: "$399",
    image: "/images/watch1.png",
    sale: false,
    href: "/not-found",
  },
  {
    id: "manaro",
    index: "02",
    name: "MANARO",
    collection: "Sport Collection",
    price: "$1,199",
    image: "/images/watch5.png",
    sale: true,
    href: "/not-found",
  },
  {
    id: "bling",
    index: "03",
    name: "BLING",
    collection: "Endurance Collection",
    price: "$1,999",
    image: "/images/watch4.avif",
    sale: false,
    href: "/not-found",
  },
  {
    id: "aquaracer",
    index: "04",
    name: "AQUARACER",
    collection: "Maritime Heritage",
    price: "$849",
    image: "/images/bluecasio.png",
    sale: false,
    href: "/not-found",
  },
];

export default function PopularWatches() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Section Header entrance
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );
      }

      // 2. Staggered reveal of product columns
      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(".product-column");
        tl.fromTo(
          columns,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="popular-watches"
      className="relative z-10 w-full bg-[#fcfbf8] text-primary py-12 sm:py-16 lg:py-14 overflow-hidden select-none"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        {/* Centered Editorial Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 flex flex-col items-center"
        >
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-primary tracking-tight leading-[1.08]">
            POPULAR TIMEPIECES
          </h2>
          <p className="font-inter text-xs sm:text-sm text-primary/70 font-light mt-2.5 leading-relaxed max-w-xl mx-auto">
            Explore a considered selection of timepieces defined by precision, design, and enduring style.
          </p>
        </div>

        {/* 4-Column Minimalist Product Showcase Grid */}
        <div
          ref={gridRef}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/90 border-t border-b border-neutral-200/90 bg-white/70 backdrop-blur-[1px]"
        >
          {POPULAR_WATCHES.map((watch) => (
            <Link
              key={watch.id}
              href={watch.href}
              className="product-column group relative flex flex-col justify-between text-center px-4 sm:px-6 lg:px-6 py-8 sm:py-10 hover:bg-[#faf8f5]/60 transition-colors duration-400 min-h-[440px] sm:min-h-[480px]"
            >
              {/* Watch Image Container */}
              <div className="w-full h-56 sm:h-64 lg:h-72 relative flex items-center justify-center my-4 sm:my-6">
                <div className="relative w-full h-full max-w-[220px] sm:max-w-[240px]">
                  <Image
                    src={watch.image}
                    alt={watch.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-[0_15px_30px_rgba(12,59,60,0.08)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority
                  />
                </div>
              </div>

              {/* Bottom Metadata: Name, Collection, Price & Minimal Action */}
              <div className="flex flex-col items-center justify-center w-full mt-auto">
                <h3 className="font-saldo text-lg sm:text-xl lg:text-2xl text-primary uppercase font-normal tracking-[0.2em] transition-transform duration-300 group-hover:-translate-y-1">
                  {watch.name}
                </h3>

                <p className="font-inter text-[11px] sm:text-xs text-primary/60 font-light tracking-wide mt-1 mb-2.5">
                  {watch.collection}
                </p>

                <span className="font-inter text-xs sm:text-sm font-semibold text-primary tracking-wider">
                  {watch.price}
                </span>

                {/* Minimal "VIEW DETAILS →" Action reveal */}
                <div className="h-6 mt-3 flex items-center justify-center overflow-hidden">
                  <span className="font-inter text-[10px] uppercase tracking-[0.25em]
                   text-primary font-medium transition-all duration-300 opacity-0 
                   translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                    VIEW DETAILS →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Minimal Centered Link */}
        <div className="flex items-center justify-center mt-10">
          <Button variant="dark">
            View All Timepieces
          </Button>
        </div>
      </div>
    </section>
  );
}
