"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_CONTENT = [
  {
    title: "TIME, CHOSEN WITH PURPOSE",
    description:
      "Built on a passion for precision, craftsmanship, and timeless design.",
  },
  {
    title: "CRAFTED FOR EVERY MOMENT",
    description:
      "Every timepiece is selected for precision, character, and lasting design.",
  },
];

const LogoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const layer0Ref = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !logoRef.current ||
        !layer0Ref.current ||
        !layer1Ref.current
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 640px) and (max-width: 1023px)",
          mobile: "(max-width: 639px)",
        },
        (context) => {
          const { desktop, tablet } = context.conditions as {
            desktop: boolean;
            tablet: boolean;
            mobile: boolean;
          };

          const logoStart = desktop ? "-35vw" : tablet ? "-48vw" : "-60vw";
          const logoEnd = "135vw";

          // Initial positions
          gsap.set(logoRef.current, {
            x: logoStart,
            yPercent: -50,
            scale: 1,
            autoAlpha: 1,
          });

          // Layer 0 is 100% visible initially
          gsap.set(layer0Ref.current, {
            clipPath: "inset(0 0% 0 0%)",
            autoAlpha: 1,
          });

          // Layer 1 starts fully clipped on the right
          gsap.set(layer1Ref.current, {
            clipPath: "inset(0 100% 0 0%)",
            autoAlpha: 1,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=260%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          // Continuous linear horizontal travel of the Alpine logo across the screen
          tl.to(
            logoRef.current,
            {
              x: logoEnd,
              ease: "none",
              duration: 4.0,
            },
            0
          );

          // Reveal Content 2 and wipe out Content 1 exactly as the back/end of the logo passes over
          const wipeStartTime = desktop ? 1.6 : tablet ? 1.4 : 1.2;
          const wipeDuration = desktop ? 1.3 : tablet ? 1.4 : 1.6;

          tl.to(
            layer0Ref.current,
            {
              clipPath: "inset(0 0% 0 100%)",
              ease: "none",
              duration: wipeDuration,
            },
            wipeStartTime
          );

          tl.to(
            layer1Ref.current,
            {
              clipPath: "inset(0 0% 0 0%)",
              ease: "none",
              duration: wipeDuration,
            },
            wipeStartTime
          );

          // Final hold on Content 2
          tl.to({}, { duration: 1.0 });
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 w-full h-screen min-h-screen flex items-center justify-center bg-primary overflow-hidden select-none border-0 outline-none"
    >
      <div
        ref={logoRef}
        className="absolute bg-primary left-0 top-1/2 z-30 pointer-events-none 
        will-change-transform -translate-x-1/2"
      >
        <div className="relative w-[48vw] sm:w-[38vw] md:w-[32vw] lg:w-[26vw] xl:w-[24vw] aspect-square rotate-90">
          <Image
            src="/logo/logo1.webp"
            alt="Alpine Emblem"
            fill
            sizes="(max-width: 640px) 48vw, (max-width: 1024px) 38vw, 26vw"
            priority
            className="object-contain"
          />
        </div>
      </div>

     
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 sm:px-12 lg:px-16">
        {/* Layer 0: Content 1 ("TIME, CHOSEN WITH PURPOSE") */}
        <div
          ref={layer0Ref}
          style={{ zIndex: 10 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-16 will-change-transform"
        >
          <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary uppercase font-normal whitespace-nowrap max-w-4xl">
            {ABOUT_CONTENT[0].title}
          </h2>
        </div>

        {/* Layer 1: Content 2 ("CRAFTED FOR EVERY MOMENT") */}
        <div
          ref={layer1Ref}
          style={{ zIndex: 20 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-16 will-change-transform"
        >
          <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary uppercase font-normal whitespace-nowrap max-w-4xl">
            {ABOUT_CONTENT[1].title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;