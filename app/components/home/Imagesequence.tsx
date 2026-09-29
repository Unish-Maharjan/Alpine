"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 120;

export default function Imagesequence() {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    // Preload image frame sequence array
    const images: HTMLImageElement[] = [];
    const frameObj = { frame: 1 };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/${i}.jpg`;
      images.push(img);
    }

    const renderFrame = () => {
      const currentFrameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(frameObj.frame) - 1)
      );
      const img = images[currentFrameIndex];
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
          end: "+=280%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 1. Scrub canvas frame sequence (0% to ~75% of scroll)
      tl.to(
        frameObj,
        {
          frame: TOTAL_FRAMES,
          snap: "frame",
          ease: "power1.inOut",
          onUpdate: renderFrame,
        },
        0
      );

      // 3. Reveal "BUILT TO GO DEEP" after image sequence is completed
      if (!reduceMotion) {
        const textElements = [taglineRef.current, titleRef.current].filter(Boolean);
        if (textElements.length > 0) {
          tl.fromTo(
            textElements,
            { opacity: 0, y: 45, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              ease: "power3.out",
              duration: 0.28,
            },
            0.72
          );
        }
      } else {
        if (titleContainerRef.current) {
          tl.to(titleContainerRef.current, { opacity: 1, duration: 0.2 }, 0.75);
        }
      }
    }, root);

    // Refresh ScrollTrigger so all downstream components (like WatchAnimation) receive correct pin offsets
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="beyond"
      className="relative h-screen overflow-hidden flex items-center justify-center bg-[#06334a]"
    >
      {/* HTML5 Canvas Frame Sequence Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Oceanic bottom gradient for smooth transition to the section below */}
      <div className="absolute bottom-0 inset-x-0 h-44 sm:h-64 bg-gradient-to-t from-[#06334a] via-[#06334a]/60 to-transparent z-10 pointer-events-none" />

      {/* Subtle central vignette to enhance contrast and depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,51,74,0.65)_100%)] z-10 pointer-events-none" />

      {/* "BUILT TO GO DEEP" Title Reveal */}
      <div
        ref={titleContainerRef}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none max-w-5xl mx-auto select-none"
      >
        <h2
          ref={titleRef}
          className="font-saldo text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-secondary uppercase font-normal opacity-0 drop-shadow-[0_0_40px_rgba(234,218,178,0.45)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
        >
          BUILT TO GO DEEP
        </h2>
      </div>
    </section>
  );
}
