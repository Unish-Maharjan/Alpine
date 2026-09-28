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
  const watchRef = useRef<HTMLDivElement | null>(null);

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

      // 2. Watch entrance & parallax animation on the right side
      if (watchRef.current) {
        gsap.fromTo(
          watchRef.current,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Gentle parallax float on scroll
        gsap.to(watchRef.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
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
      <div className="absolute bottom-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-t from-[#06334a] via-[#06334a]/60 to-transparent z-10 pointer-events-none" />

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

        {/* Right Column: Watch image positioned on the right side */}
        <div
          ref={watchRef}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full will-change-transform"
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient luxury gold glow */}
            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#eadab2]/10 blur-3xl pointer-events-none" />

            <Image
              src="/images/watch1.png"
              alt="Alpine Chronograph Luxury Timepiece"
              width={320}
              height={320}
              className="relative z-10 object-contain w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 max-h-[340px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Titlesection;