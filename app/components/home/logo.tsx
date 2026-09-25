"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoSection = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const logoRef     = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const dividerRef  = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      };

      // Entrance reveal
      gsap.from([logoRef.current, headlineRef.current, dividerRef.current], {
        opacity: 0,
        y: 50,
        stagger: 0.18,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax depth layers (scrub)
      gsap.to(logoRef.current,     { y: -55, ease: "none", scrollTrigger: trigger });
      gsap.to(headlineRef.current, { y: -90, ease: "none", scrollTrigger: trigger });
      gsap.to(dividerRef.current,  { y: -120, ease: "none", scrollTrigger: trigger });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8f6f0] text-[#0c3b3c] min-h-screen md:min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24 border-y border-[#eadab2]/30 parallax-grain"
    >
      {/* Centered Content Container */}
      <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10 px-4">
        {/* Large Logo Emblem — slowest layer */}
        <div
          ref={logoRef}
          className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-8 filter drop-shadow-sm opacity-90 parallax-slow"
        >
          <Image
            src="/logo/logo1.webp"
            alt="Alpine Logo Emblem"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 224px"
          />
        </div>

        {/* Statement Headline — medium layer */}
        <h2
          ref={headlineRef}
          className="font-saldo text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#0c3b3c] leading-[1.15] text-center uppercase parallax-medium"
        >
          Your Time
          <span className="block mt-1 sm:mt-2 text-[#91753c] font-light italic">
            Starts Here.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default LogoSection;