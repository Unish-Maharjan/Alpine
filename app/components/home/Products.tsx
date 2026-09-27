"use client";

import React from "react";

const Products = () => {
  return (
    <div className="relative z-10 w-full bg-primary pt-16 lg:pt-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-medium text-secondary mb-4">
            FEATURED TIMEPIECE
          </h2>
          <p className="font-inter text-sm sm:text-base text-offwhite font-light max-w-xl mx-auto leading-relaxed">
            Explore the pinnacle of horological innovation, where master engineering meets timeless elegance.
          </p>
        </div>
      </div>

      {/* Product Feature Showcase Section */}
      <section
        id="products"
        className="min-h-screen w-full bg-[#F5F3ED] text-secondary flex flex-col lg:flex-row items-stretch relative overflow-hidden"
      >
        {/* Left Column */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 md:px-20 py-16 lg:py-24 will-change-transform"
        >
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
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-screen bg-black overflow-hidden flex items-center justify-center">
          <video
            src="/media/watch-video-12.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover min-h-[115%] will-change-transform"
          />
        </div>
      </section>
    </div>
  );
};

export default Products;