"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/app/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const START_FRAME = 9;
const TOTAL_FRAMES = 120;

export default function Priorities() {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    // Preload image frame sequence array starting from frame 9
    const images: HTMLImageElement[] = [];
    const frameObj = { frame: START_FRAME };

    for (let i = START_FRAME; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames1/${i}.jpg`;
      images.push(img);
    }

    const renderFrame = () => {
      const currentFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(START_FRAME, Math.round(frameObj.frame))
      );
      const imgIndex = currentFrame - START_FRAME;
      const img = images[imgIndex];
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        ctx2d.clearRect(0, 0, canvas.width, canvas.height);
        ctx2d.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShiftX,
          centerShiftY,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderFrame();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (images[0]) {
      images[0].onload = renderFrame;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 1. Scrub canvas frame sequence starting from frame 9 to 120
      tl.to(
        frameObj,
        {
          frame: TOTAL_FRAMES,
          snap: "frame",
          ease: "none",
          onUpdate: renderFrame,
        },
        0
      );

      // 2. Reveal text & button overlay as watch zooms out and settles
      if (!reduceMotion) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 0 },
          {
            opacity: 1,
            y: -190,
            ease: "power2.out",
            duration: 0.35,
          },
          0.62
        );

        tl.fromTo(
          buttonRef.current,
          { opacity: 0, y: 0 },
          {
            opacity: 1,
            y: 190,
            ease: "power2.out",
            duration: 0.35,
          },
          0.62
        );
      } else {
        if (titleContainerRef.current) {
          tl.to(titleContainerRef.current, { opacity: 1, duration: 0.2 }, 0.65);
        }
      }
    }, root);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="priorities"
      className="relative w-full h-screen overflow-hidden flex items-center
       justify-center bg-[#e2e6e7] text-primary select-none border-0 border-none outline-none -mb-1"
    >
      {/* HTML5 Canvas Frame Sequence Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover border-0 border-none outline-none"
      />

      {/* Seamless bottom edge fade gradient to Footer */}
      <div className="absolute bottom-0 inset-x-0 h-36 sm:h-56 bg-gradient-to-t from-[#d3dedf] via-[#d3dedf]/60 to-transparent z-10 pointer-events-none" />

      {/* Editorial Content Overlay */}
      <div
        ref={titleContainerRef}
        className="relative z-20 max-w-5xl mx-auto px-6 sm:px-12 flex flex-col
        items-center text-center select-none"
      >
        {/* Title above watch */}
        <h2
          ref={headingRef}
          className="font-saldo text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-normal tracking-tight text-primary opacity-0 max-w-5xl whitespace-nowrap will-change-transform drop-shadow-sm"
        >
          DEFINED BY PRECISION
        </h2>

        {/* Dark variant button below watch */}
        <div
          ref={buttonRef}
          className="opacity-0 will-change-transform mt-4"
        >
          <Button href="/not-found" variant="dark" size="md">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
}