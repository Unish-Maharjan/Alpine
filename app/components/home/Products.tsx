"use client";

import React, { useRef } from "react";
import Button from "@/app/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const glow1Ref    = useRef<HTMLDivElement>(null);
  const glow2Ref    = useRef<HTMLDivElement>(null);
  const row1Ref     = useRef<HTMLDivElement>(null);
  const row2Ref     = useRef<HTMLDivElement>(null);
  const row3Ref     = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Ambient glows drift at different speeds (always active)
      const glowTrigger = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      };
      gsap.to(glow1Ref.current, { y: -160, x: 30, ease: "none", scrollTrigger: glowTrigger });
      gsap.to(glow2Ref.current, { y: -120, x: -40, ease: "none", scrollTrigger: glowTrigger });

      // Header parallax + reveal
      gsap.from(headerRef.current, {
        opacity: 0, y: 60,
        duration: 1.1, ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(headerRef.current, {
        y: -40, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "30% top", scrub: 1 },
      });

      // Each product row: alternate slide-in from left or right
      [
        { ref: row1Ref, x: -70 },
        { ref: row2Ref, x: 70 },
        { ref: row3Ref, x: -70 },
      ].forEach(({ ref, x }) => {
        if (!ref.current) return;

        // Entrance
        gsap.from(ref.current, {
          opacity: 0, x, y: 30,
          duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Subtle parallax while in view
        gsap.to(ref.current, {
          y: -30, ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="products"
      ref={sectionRef}
      className="w-full bg-[#0c3b3c] text-[#f8f6f0] py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Ambient background glows â€” parallax-driven */}
      <div ref={glow1Ref} className="absolute top-1/3 -left-32 w-96 h-96 bg-[#eadab2]/5 rounded-full blur-3xl pointer-events-none parallax-slow" />
      <div ref={glow2Ref} className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#124d4e]/40 rounded-full blur-3xl pointer-events-none parallax-medium" />

      {/* Section Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto px-4 mb-20 lg:mb-28 relative z-10">
        <span className="font-saldo text-xs sm:text-sm tracking-[0.35em] text-[#eadab2] uppercase block font-medium mb-4">
          Alpine Timepieces
        </span>
        <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl tracking-[0.16em] text-[#fcfbf8] uppercase font-normal">
          OUR PRODUCTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 lg:space-y-40 relative z-10">
        {/* Feature 1: Uncompromising Luxury */}
        <div ref={row1Ref} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-7 bg-[#0c3b3c] p-2 sm:p-6 lg:p-8">
            <span className="font-saldo text-xs tracking-[0.3em] text-[#eadab2] uppercase">
              Edition No. 01 &bull; Precious Metals
            </span>

            <h3 className="font-saldo text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] leading-tight text-[#fcfbf8] uppercase font-normal">
              UNCOMPROMISING
              <span className="block mt-2 text-gold-gradient">LUXURY</span>
            </h3>

            <p className="font-inter text-[#e5e0d3] text-base sm:text-lg leading-relaxed font-light max-w-xl">
              From 18k Rose Gold cases to ultra-resilient anti-reflective sapphire crystals, we source only the world&apos;s most exceptional materials. Every Alpine watch is a testament to the belief that true beauty should be as enduring as the mechanical heartbeat within.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-[#eadab2]/30 via-[#eadab2]/10 to-transparent my-2" />

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-8 pt-2">
              <div className="border-l-2 border-[#eadab2] pl-4">
                <span className="font-saldo text-2xl sm:text-3xl tracking-widest text-[#fcfbf8] block font-medium">
                  18K GOLD
                </span>
                <span className="font-inter text-[11px] tracking-[0.25em] text-[#eadab2] uppercase mt-1 block font-medium">
                  CASE MATERIAL
                </span>
              </div>
              <div className="border-l-2 border-[#eadab2] pl-4">
                <span className="font-saldo text-2xl sm:text-3xl tracking-widest text-[#fcfbf8] block font-medium">
                  10 ATM
                </span>
                <span className="font-inter text-[11px] tracking-[0.25em] text-[#eadab2] uppercase mt-1 block font-medium">
                  WATER RESISTANCE
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="#priorities" variant="gold" size="sm">
                Explore Caliber
              </Button>
            </div>
          </div>

          {/* Right: Media Container */}
          <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] bg-[#072526] rounded-sm overflow-hidden shadow-2xl flex items-center justify-center border border-[#eadab2]/20 group">
            <video
              src="/media/watch-video-12.mp4"
              autoPlay loop muted playsInline
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-[#0c3b3c]/80 backdrop-blur-md px-3 py-1 border border-[#eadab2]/30 text-[10px] tracking-[0.2em] uppercase text-[#eadab2] font-saldo">
              Swiss Made
            </div>
          </div>
        </div>

        {/* Feature 2: Meticulous Engineering */}
        <div ref={row2Ref} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left: Media Container */}
          <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] bg-[#072526] rounded-sm overflow-hidden shadow-2xl flex items-center justify-center order-2 lg:order-1 border border-[#eadab2]/20 group">
            <video
              src="/media/watch-video-13.mp4"
              autoPlay loop muted playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#0c3b3c]/80 backdrop-blur-md px-3 py-1 border border-[#eadab2]/30 text-[10px] tracking-[0.2em] uppercase text-[#eadab2] font-saldo">
              In-House Movement
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center space-y-7 bg-[#0c3b3c] p-2 sm:p-6 lg:p-8 order-1 lg:order-2">
            <span className="font-saldo text-xs tracking-[0.3em] text-[#eadab2] uppercase">
              Edition No. 02 &bull; Chronometer Caliber
            </span>

            <h3 className="font-saldo text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] leading-tight text-[#fcfbf8] uppercase font-normal">
              METICULOUS
              <span className="block mt-2 text-gold-gradient">ENGINEERING</span>
            </h3>

            <p className="font-inter text-[#e5e0d3] text-base sm:text-lg leading-relaxed font-light max-w-xl">
              Every Alpine movement is a symphony of over three hundred components, each hand-polished and precisely aligned. Our craftsmen dedicate hundreds of hours to ensuring every heartbeat maintains chronometric precision.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-[#eadab2]/30 via-[#eadab2]/10 to-transparent my-2" />

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-8 pt-2">
              <div className="border-l-2 border-[#eadab2] pl-4">
                <span className="font-saldo text-2xl sm:text-3xl tracking-widest text-[#fcfbf8] block font-medium">
                  72 HOURS
                </span>
                <span className="font-inter text-[11px] tracking-[0.25em] text-[#eadab2] uppercase mt-1 block font-medium">
                  POWER RESERVE
                </span>
              </div>
              <div className="border-l-2 border-[#eadab2] pl-4">
                <span className="font-saldo text-2xl sm:text-3xl tracking-widest text-[#fcfbf8] block font-medium">
                  28,800
                </span>
                <span className="font-inter text-[11px] tracking-[0.25em] text-[#eadab2] uppercase mt-1 block font-medium">
                  VIBRATIONS / HOUR
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="#priorities" variant="gold" size="sm">
                Discover Movement
              </Button>
            </div>
          </div>
        </div>

        {/* Feature 3: Grand Complications */}
        <div ref={row3Ref} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-7 bg-[#0c3b3c] p-2 sm:p-6 lg:p-8">
            <span className="font-saldo text-xs tracking-[0.3em] text-[#eadab2] uppercase">
              Edition No. 03 &bull; Haute Horlogerie
            </span>

            <h3 className="font-saldo text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] leading-tight text-[#fcfbf8] uppercase font-normal">
              TIMELESS
              <span className="block mt-2 text-gold-gradient">CRAFTSMANSHIP</span>
            </h3>

            <p className="font-inter text-[#e5e0d3] text-base sm:text-lg leading-relaxed font-light max-w-xl">
              From hand-beveled chamfers to CÃ´te de GenÃ¨ve decorations, our master watchmakers infuse each timepiece with soul. Designed not merely to tell time, but to encapsulate the pinnacle of human artistry and generational legacy.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-[#eadab2]/30 via-[#eadab2]/10 to-transparent my-2" />

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-8 pt-2">
              <div className="border-l-2 border-[#eadab2] pl-4">
                <span className="font-saldo text-2xl sm:text-3xl tracking-widest text-[#fcfbf8] block font-medium">
                  31 JEWELS
                </span>
                <span className="font-inter text-[11px] tracking-[0.25em] text-[#eadab2] uppercase mt-1 block font-medium">
                  RUBY BEARINGS
                </span>
              </div>
              <div className="border-l-2 border-[#eadab2] pl-4">
                <span className="font-saldo text-2xl sm:text-3xl tracking-widest text-[#fcfbf8] block font-medium">
                  5 YEARS
                </span>
                <span className="font-inter text-[11px] tracking-[0.25em] text-[#eadab2] uppercase mt-1 block font-medium">
                  GLOBAL GUARANTEE
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="#contact" variant="gold" size="sm">
                Request Private Viewing
              </Button>
            </div>
          </div>

          {/* Right: Media Container */}
          <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] bg-[#072526] rounded-sm overflow-hidden shadow-2xl flex items-center justify-center border border-[#eadab2]/20 group">
            <video
              src="/media/watch-video-14.mp4"
              autoPlay loop muted playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-[#0c3b3c]/80 backdrop-blur-md px-3 py-1 border border-[#eadab2]/30 text-[10px] tracking-[0.2em] uppercase text-[#eadab2] font-saldo">
              Limited Series
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
