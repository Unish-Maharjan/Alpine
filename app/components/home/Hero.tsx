"use client";

import React from "react";
import NextImage from "next/image";
import Button from "@/app/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:h-screen flex items-center bg-white text-primary overflow-hidden"
    >
      <div className="w-full h-full min-h-screen flex flex-col lg:flex-row relative z-10">
        {/* Content Column (Left Side) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-16 xl:px-20 py-24 sm:py-28 lg:py-16 h-full z-10 bg-white">
          {/* Logo Emblem */}
          <div className="relative mb-6">
            <NextImage
              src="/logo/primarylogo.png"
              alt="Alpine Emblem"
              width={110}
              height={110}
              className="object-contain relative z-10"
              priority
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-saldo text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase font-normal max-w-xl leading-tight">
            WELCOME
            <span className="block mt-2 font-medium">TO ALPINE</span>
          </h1>

          {/* Tagline */}
          <p className="font-inter text-sm sm:text-base md:text-lg text-primary/85 uppercase font-medium mt-6 mb-9 max-w-md tracking-wider">
            A Moment Worth Wearing
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button href="#products" variant="dark" size="md">
              Discover Alpine
            </Button>
          </div>
        </div>

        {/* Video Column (Right Side) */}
        <div className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-full min-h-[420px] lg:min-h-full bg-white overflow-hidden flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover object-center scale-[2.1] origin-center"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;