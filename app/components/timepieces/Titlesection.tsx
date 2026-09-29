"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "@/app/ui/Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Titlesection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!contentRef.current || !sectionRef.current) return;

      // 1. Text entrance animation
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="titlesection"
      className="relative w-full min-h-screen py-16 sm:py-24 overflow-hidden flex items-center justify-center bg-[#06334a]"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-[1.02]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/media/shark-video-1.mp4" type="video/mp4" />
      </video>

      {/* Oceanic top edge fade for smooth transition */}
      <div className="absolute top-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-b from-[#06334a] via-[#06334a]/60 to-transparent z-10 pointer-events-none" />

      {/* Oceanic bottom edge fade to Footer */}
      <div className="absolute bottom-0 inset-x-0 h-40 sm:h-64 bg-gradient-to-t from-[#06334a] via-[#06334a]/70 to-transparent z-10 pointer-events-none" />

      {/* Content Layout: 2-Column Responsive Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 min-h-[50vh]">
        {/* Left Column: Text & CTA */}
        <div ref={contentRef} className="lg:col-span-7 text-left flex flex-col items-start">
          <h1 className="font-saldo text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest text-[#eadab2] uppercase drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
            Timepieces
          </h1>
          <p className="mt-4 font-inter text-xs sm:text-sm tracking-[0.3em] uppercase text-tertiary/80">
            Mastery of the Depths & Precision
          </p>
          <div className="mt-8">
            <Button href="/not-found" variant="gold" size="md">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Titlesection;