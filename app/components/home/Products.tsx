"use client";

import React from "react";

const Products = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#0c3b3c] via-[#0c3b3c]/60 to-[#f8f6f0] pt-12 lg:pt-24">
      {/* Product Feature Showcase Section */}
      <section id="products" className="min-h-screen w-full bg-[#F5F3ED] text-secondary flex flex-col lg:flex-row items-stretch">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 md:px-20 py-16 lg:py-24">
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-primary mb-8 max-w-lg">
            THE ART OF ETERNAL PRECISION
          </h2>

          <p className="font-inter text-black text-sm sm:text-base leading-relaxed font-light max-w-md mb-12">
            Our journey began with a single vision: to create timepieces that transcend generations. We combine traditional horological artistry with avant-garde engineering to redefine what a watch can be.
          </p>

          {/* Divider */}
          <div className="w-full border-b border-primary/20 mb-10 max-w-md" />

          {/* Specs Grid */}
          <div className="flex items-center gap-16 sm:gap-24">
            <div>
              <span className="font-saldo text-3xl sm:text-4xl text-primary block mb-2 font-normal">
                328
              </span>
              <span className="font-inter text-xs text-primary/70 uppercase block font-medium">
                COMPONENTS
              </span>
            </div>

            <div>
              <span className="font-saldo text-3xl sm:text-4xl text-primary block mb-2 font-normal">
                100%
              </span>
              <span className="font-inter text-xs text-primary/70 uppercase block font-medium">
                HAND-FINISHED
              </span>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-screen bg-black overflow-hidden">
          <video
            src="/media/watch-video-12.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Products;