"use client";

import React, { useRef } from "react";
import Button from "@/app/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // 1. Subtle parallax on section header
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          y: -20,
          opacity: 0.95,
          ease: "none",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1,
          },
        });
      }

      // 2. Smooth reveal on left editorial column
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: 25, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative z-10 w-full bg-primary pt-10 lg:pt-24 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 -mt-6 lg:px-16">
        <div ref={headerRef} className="text-center mb-9 sm:mb-9 will-change-transform">
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-normal
           text-secondary mb-4">
            FEATURED TIMEPIECE
          </h2>
          <p className="font-inter text-sm sm:text-base text-offwhite font-light max-w-xl
           mx-auto leading-relaxed">
            Explore the pinnacle of horological innovation, where master engineering meets timeless elegance.
          </p>
        </div>
      </div>

      {/* Product Feature Showcase Section with Split Layout (Matching Hero Style) */}
      <section
        id="products"
        ref={sectionRef}
        className="min-h-[70vh] lg:min-h-screen w-full bg-primary text-secondary flex flex-col lg:flex-row items-stretch relative overflow-hidden"
      >
        {/* Left Column: Editorial Copy */}
        <div
          ref={leftColRef}
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-16 lg:py-24 relative z-10 bg-primary will-change-transform"
        >
          {/* Main Title */}
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-secondary tracking-tight leading-[1.15] mb-6 max-w-xl">
            TIME, CHOSEN WITH PURPOSE
          </h2>

          {/* Lead & Story Description */}
          <div className="space-y-3.5 mb-8 max-w-lg">
            <p className="font-inter text-base sm:text-lg text-secondary-light font-medium leading-snug">
              Some watches simply tell time. Others become part of your story.
            </p>
            <p className="font-inter text-sm sm:text-base text-tertiary/85 font-light leading-relaxed">
              We curate exceptional timepieces from respected global watchmakers, bringing together enduring design, precision horology, and heritage for those who appreciate the details that make every second matter.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-secondary/20 mb-8 max-w-lg" />

          {/* Specs / Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-lg mb-10">
            <div className="pl-4 py-1 border-l border-secondary/30">
              <span className="font-saldo text-3xl sm:text-4xl text-secondary block mb-1 font-normal tracking-tight">
                100%
              </span>
              <span className="font-inter text-xs text-secondary/80 uppercase tracking-wider block font-semibold">
                Authentic &amp; Certified
              </span>
            </div>

            <div className="pl-4 py-1 border-l border-secondary/30">
              <span className="font-saldo text-3xl sm:text-4xl text-secondary block mb-1 font-normal tracking-tight">
                328+
              </span>
              <span className="font-inter text-xs text-secondary/80 uppercase tracking-wider block font-semibold">
                Crafted Details
              </span>
            </div>
          </div>

          <Button href="/not-found" variant="gold" size="md" className="w-fit">
            Learn more
          </Button>
        </div>

        {/* Right Video (Cropped Cleanly like Hero Section) */}
        <div className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-auto min-h-[420px] lg:min-h-full bg-primary overflow-hidden flex items-center justify-center">
          <video
            key="product-featured-video"
            src="/media/popularwatch.mp4"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[2] origin-center"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/media/popularwatch.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
};

export default Products;