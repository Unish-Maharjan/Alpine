"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WatchAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!watchRef.current) return;

      const triggerEl =
        document.getElementById("titlesection") ||
        containerRef.current ||
        watchRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 85%",
          end: "bottom 35%",
          scrub: 1.2,
          invalidateOnRefresh: true,
          refreshPriority: -1,
        },
      });

      tl.fromTo(
        watchRef.current,
        {
          yPercent: -80,
          opacity: 0,
          scale: 1,
          xPercent: 0,
        },
        {
          yPercent: -10,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        }
      ).to(watchRef.current, {
        yPercent: 100,
        scale: 0.65,
        xPercent: 10,
        ease: "power1.inOut",
        duration: 1.5,
      });

      // Recalculate ScrollTrigger positions once hero sequence pins are mounted
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      const handleLoad = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("load", handleLoad);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", handleLoad);
        tl.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center absolute z-50 w-full 
      translate-x-80 translate-y-40 min-h-80 overflow-visible pointer-events-none"
    >
      <div
        ref={watchRef}
        className="relative w-full flex items-center justify-center will-change-transform"
      >
        <Image
          src="/images/bluecasio.png"
          alt="Alpine Chronograph Luxury Timepiece"
          width={250}
          height={250}
          className="object-contain w-auto z-100 h-60 sm:h-96 lg:h-96 xl:h-128 max-w-none"
          priority
        />
      </div>
    </div>
  );
};

export default WatchAnimation;