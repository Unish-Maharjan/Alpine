"use client";

import React, { useRef } from "react";
import NextImage from "next/image";
import Button from "@/app/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef   = useRef<HTMLElement>(null);
  const logoRef      = useRef<HTMLDivElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const taglineRef   = useRef<HTMLParagraphElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const videoColRef  = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const glowRef      = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // ── Entrance animations (play once on load) ──────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(logoRef.current,     { y: -30, opacity: 0, duration: 1.1 })
        .from(headlineRef.current, { y: 40,  opacity: 0, duration: 1   }, "-=0.6")
        .from(taglineRef.current,  { y: 24,  opacity: 0, duration: 0.9 }, "-=0.5")
        .from(ctaRef.current,      { y: 20,  opacity: 0, duration: 0.8 }, "-=0.4");

      // ── Parallax scroll on each depth layer (scrub) ──────────
      const common = {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      };

      // Logo — slowest (feels furthest away)
      gsap.to(logoRef.current, { y: -60, ease: "none", ...common });

      // Headline — medium depth
      gsap.to(headlineRef.current, { y: -110, ease: "none", ...common });

      // Tagline + CTA — faster (feels closest)
      gsap.to(taglineRef.current, { y: -140, ease: "none", ...common });
      gsap.to(ctaRef.current,     { y: -155, ease: "none", ...common });

      // Background glow orb drifts up slowly
      gsap.to(glowRef.current, { y: -80, ease: "none", ...common });

      // Video panel scrolls at 60% speed (classic parallax)
      gsap.to(videoRef.current, {
        y: "18%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Video column subtly scales down as it exits
      gsap.to(videoColRef.current, {
        scale: 0.96,
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "60% top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0c3b3c] text-[#f8f6f0] lg:h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
    >
      {/* Ambient parallax glow orb */}
      <div
        ref={glowRef}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#eadab2]/5 rounded-full blur-[120px] pointer-events-none parallax-slow"
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-full lg:h-[calc(100vh-80px)] relative z-10">
        {/* Content Column (Left Side) */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24 z-10 h-full bg-gradient-to-b lg:bg-gradient-to-r from-[#0c3b3c] via-[#0c3b3c]/90 to-transparent">

          {/* Logo Emblem — slowest parallax layer */}
          <div ref={logoRef} className="mb-6 md:mb-8 relative parallax-slow">
            <NextImage
              src="/logo/logo1.webp"
              alt="Alpine Emblem"
              width={100}
              height={100}
              className="object-contain filter relative z-10"
              priority
            />
          </div>

          {/* Main Headline — medium parallax layer */}
          <h1
            ref={headlineRef}
            className="font-saldo text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-[0.18em] leading-[1.2] text-[#fcfbf8] uppercase font-normal max-w-xl parallax-medium"
          >
            WELCOME TO
            <span className="block mt-2 text-gold-shimmer font-medium">ALPINE</span>
          </h1>

          {/* Tagline — fastest parallax layer */}
          <p
            ref={taglineRef}
            className="font-inter text-sm sm:text-base md:text-lg tracking-[0.25em] text-[#e5e0d3] uppercase font-light mt-4 mb-10 max-w-md parallax-fast"
          >
            Time, Perfected Forever.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 parallax-fast">
            <Button href="#products" variant="gold" size="md">
              Discover Alpine
            </Button>
          </div>
        </div>

        {/* Video Column (Right Side) — parallax at 60% scroll rate */}
        <div
          ref={videoColRef}
          className="relative w-full h-[450px] sm:h-[550px] lg:h-full min-h-[450px] bg-[#072526] overflow-hidden flex items-center justify-center border-l border-[#eadab2]/10"
        >
          <video
            ref={videoRef}
            src="/media/homevideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[120%] object-cover opacity-90 parallax-medium"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0c3b3c] via-transparent to-black/30 pointer-events-none" />
          <div className="absolute inset-0 border-t lg:border-t-0 border-[#eadab2]/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;