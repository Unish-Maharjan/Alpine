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
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // 1. Subtle parallax on section header
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          y: -25,
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1,
          },
        });
      }

      // 2. Cinematic Parallax on Right Video
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { yPercent: -12, scale: 1.08 },
          {
            yPercent: 12,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // 3. Smooth Depth Parallax on Left Editorial Column
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative z-10 w-full bg-primary pt-16 lg:pt-24 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div ref={headerRef} className="text-center mb-16 will-change-transform">
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-medium text-secondary mb-4">
            FEATURED TIMEPIECE
          </h2>
          <p className="font-inter text-sm sm:text-base text-offwhite font-light max-w-xl mx-auto leading-relaxed">
            Explore the pinnacle of horological innovation, where master engineering meets timeless elegance.
          </p>
        </div>
      </div>

      {/* Product Feature Showcase Section with Split Parallax */}
      <section
        id="products"
        ref={sectionRef}
        className="min-h-screen w-full bg-[#F5F3ED] text-secondary flex flex-col lg:flex-row items-stretch relative overflow-hidden"
      >
        {/* Left Column (Parallax Floating Text) */}
        <div
          ref={leftColRef}
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-16 lg:py-24 relative z-10 will-change-transform"
        >
          {/* Main Title */}
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-primary tracking-tight leading-[1.15] mb-6 max-w-xl">
            TIME, CHOSEN WITH PURPOSE
          </h2>

          {/* Lead & Story Description */}
          <div className="space-y-3.5 mb-8 max-w-lg">
            <p className="font-inter text-base sm:text-lg text-primary/90 font-medium leading-snug">
              Some watches simply tell time. Others become part of your story.
            </p>
            <p className="font-inter text-sm sm:text-base text-primary/75 font-light leading-relaxed">
              We curate exceptional timepieces from respected global watchmakers, bringing together enduring design, precision horology, and heritage for those who appreciate the details that make every second matter.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-primary/15 mb-8 max-w-lg" />

          {/* Specs / Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-lg mb-10">
            <div className="pl-4 py-1">
              <span className="font-inter text-3xl sm:text-4xl text-primary block mb-1 font-normal tracking-tight">
                100%
              </span>
              <span className="font-inter text-xs text-primary/80 uppercase tracking-wider block font-semibold">
                Authentic &amp; Certified
              </span>
            </div>

            <div className="pl-4 py-1">
              <span className="font-inter text-3xl sm:text-4xl text-primary block mb-1 font-normal tracking-tight">
                328+
              </span>
              <span className="font-inter text-xs text-primary/80 uppercase tracking-wider block font-semibold">
                Crafted Details
              </span>
            </div>
          </div>

          <Button href="/shop" variant="dark" size="md" className="w-fit">
            Learn more
          </Button>
        </div>

        {/* Right Video (Cinematic Video Parallax) */}
        <div className="w-full lg:w-1/2 relative min-h-[420px] lg:min-h-screen bg-black overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            src="/media/watch-video-12.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover min-h-[130%] will-change-transform pointer-events-none select-none"
          />
        </div>
      </section>
    </div>
  );
};

export default Products;