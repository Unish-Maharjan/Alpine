import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/ui/Button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-primary text-tertiary 
    flex flex-col items-center justify-between px-6 sm:px-12 py-12 sm:py-16 overflow-hidden select-none">
  
      {/* Watermark Alpine emblem behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-80 h-80 sm:w-[460px] sm:h-[460px] opacity-[0.15]">
          <Image
            src="/logo/logo1.webp"
            alt="Alpine Watermark"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Top Header / Brand identity */}
      <header className="relative z-10 flex items-center justify-center w-full">
        <Link href="/" className="inline-block group">
          <Image
            src="/logo/logo.webp"
            alt="Alpine Timepieces Logo"
            width={180}
            height={42}
            className="w-36 sm:w-44 h-auto object-contain brightness-0 invert"
            priority
          />
        </Link>
      </header>

      {/* Center 404 Editorial Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-4 items-center text-center my-auto py-10">
        {/* Large atmospheric 404 */}
        <span className="font-saldo text-7xl sm:text-9xl tracking-widest
         text-secondary font-normal mb-2">
          404
        </span>

        {/* Main Headline */}
        <h1 className="font-saldo text-xl sm:text-xl md:text-4xl uppercase font-normal text-secondary w-200 whitespace-nowrap mb-16">
          A preview of what’s possible.<br/> The full experience awaits your approval.
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <Button href="/" variant="gold" size="md" className="w-full sm:w-auto">
            RETURN TO BOUTIQUE
          </Button>
        </div>
      </div>
    </main>
  );
}
