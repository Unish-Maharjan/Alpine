"use client";

import React, { useRef } from "react";
import NextImage from "next/image";
import Button from "@/app/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  return (
    <section
  
      className="relative w-full bg-[#e7eaea] h-screen
       min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient parallax glow orb */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#eadab2]/5 
        rounded-full blur-[120px] pointer-events-none parallax-slow"
      />

      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 h-full lg:h-[calc(100vh-80px)] relative z-10">
        {/* Content Column (Left Side) */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-16 sm:px-12 lg:px-16 
        xl:px-24 z-10 h-full">

          {/* Logo Emblem — slowest parallax layer */}
          <div className=" relative mb-6">
            <NextImage
              src="/logo/logo1.webp"
              alt="Alpine Emblem"
              width={110}
              height={110}
              className="object-contain filter relative z-10 invert"
              priority
            />
          </div>

          {/* Main Headline — medium parallax layer */}
          <h1
            className="font-saldo mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 
             text-primary uppercase font-normal max-w-xl"
          >
            WELCOME
            <span className="block mt-2 font-medium">TO ALPINE</span>
          </h1>

          {/* Tagline — fastest parallax layer */}
          <p
            className="font-inter text-sm sm:text-base md:text-lg text-primary
             uppercase font-medium mt-7 mb-10 max-w-md"
          >
            Time, Perfected Forever.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="#products" variant="dark" size="md">
              Discover Alpine
            </Button>
          </div>
        </div>

        {/* Video Column (Right Side) — parallax at 60% scroll rate */}
        <div
          className="relative w-full h-[450px] sm:h-[550px] lg:h-full min-h-[450px] bg-[#072526] 
          overflow-hidden flex items-center justify-center"
        >
          <video
            src="/media/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[120%] object-cover opacity-90 parallax-medium"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;