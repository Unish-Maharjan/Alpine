"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "@/app/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Titlesection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!contentRef.current || !sectionRef.current) return;

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
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#06334a]"
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

      {/* Content positioned on the left */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex justify-start items-center">
        <div ref={contentRef} className="text-left max-w-2xl flex flex-col items-start">
          <h1 className="font-saldo text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest text-[#eadab2] uppercase drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
            Timepieces
          </h1>
          <p className="mt-4 font-inter text-xs sm:text-sm tracking-[0.3em] uppercase text-tertiary/80">
            Mastery of the Depths & Precision
          </p>
          <div className="mt-8">
            <Button href="#products" variant="gold" size="md">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Titlesection;