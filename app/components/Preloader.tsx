"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Longer preloader duration: 3.5s (3500ms) allowing 2 full 360° rotations before fading out
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0c3b3c] transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient Radial Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#eadab2]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Clock Container */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
        {/* Clock Outer Rim */}
        <div className="absolute inset-0 rounded-full border-2 border-[#eadab2] shadow-[0_0_20px_rgba(234,218,178,0.25)]" />

        {/* 12 Hour Ticks */}
        <div className="absolute inset-0 rounded-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-2 -translate-x-1/2 origin-[50%_64px] sm:origin-[50%_80px]"
              style={{ transform: `rotate(${i * 30}deg)` }}
            >
              <div
                className={`bg-[#eadab2] ${
                  i % 3 === 0 ? "w-1 h-3 sm:h-3.5" : "w-0.5 h-2 sm:h-2.5 opacity-75"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Clock Hand - Spins 2 full 360° revolutions over 3.5s before fading out */}
        <div
          className="absolute top-1/2 left-1/2 w-1 h-13 sm:h-16 bg-[#eadab2] rounded-full z-10 shadow-[0_0_12px_rgba(234,218,178,0.8)] origin-bottom animate-[clockFullSweep_1.75s_linear_2]"
          style={{ transform: "translate(-50%, -100%)" }}
        />

        {/* Center Pin Cap */}
        <div className="absolute z-20 w-3.5 h-3.5 rounded-full bg-[#eadab2] border-2 border-[#0c3b3c] shadow-md" />
      </div>

      <style jsx global>{`
        @keyframes clockFullSweep {
          0% {
            transform: translate(-50%, -100%) rotate(0deg);
          }
          25% {
            transform: translate(-50%, -100%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
