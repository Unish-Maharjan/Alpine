"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface WatchAnimationProps {
  triggerRef?: React.RefObject<HTMLElement | null>;
}

const WatchAnimation = ({ triggerRef }: WatchAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targetTrigger = triggerRef?.current || containerRef.current;
      if (!targetTrigger || !watchRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetTrigger,
          start: "top 95%",
          end: "bottom 20%",
          scrub: 1.2,
        },
      });

      tl.fromTo(
        watchRef.current,
        {
          y: -140,
          opacity: 0,
          scale: 1.25,
          rotate: -8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "power2.out",
        }
      ).to(
        watchRef.current,
        {
          y: 60,
          scale: 0.92,
          rotate: 4,
          ease: "power1.inOut",
        },
        "+=0.1"
      );

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.25,
          opacity: 0.45,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: containerRef, dependencies: [triggerRef] }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center select-none py-6"
    >
      <div
        ref={glowRef}
        className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-[#eadab2]/15 via-[#0f4445]/30 to-transparent blur-3xl pointer-events-none z-0"
      />

      <div
        ref={watchRef}
        className="relative z-10 flex items-center justify-center will-change-transform drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
      >
        <Image
          src="/images/watch1.png"
          alt="Alpine Chronograph Luxury Timepiece"
          width={320}
          height={320}
          className="object-contain w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 max-h-[340px] h-auto max-w-none"
          priority
        />
      </div>
    </div>
  );
};

export default WatchAnimation;