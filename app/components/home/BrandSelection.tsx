import React from "react";
import Image from "next/image";

const BRAND_LOGOS = [
  { name: "Citizen", tag: "Eco-Drive Precision", logo: "/logo/citizen.png" },
  { name: "Rhythm", tag: "Master Clockmakers", logo: "/logo/Rhythm.png" },
  { name: "Daniel Klein", tag: "Modern Elegance", logo: "/logo/danielklein.png" },
  { name: "Q&Q", tag: "Quality & Style", logo: "/logo/q&q.png" },
];

export default function BrandSelection() {
  return (
    <section className="w-full bg-[#e7e9e8] text-[#0c3b3c] py-20 px-6 sm:px-12 lg:px-16 border-t border-[#0c3b3c]/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-saldo text-xs text-[#0c3b3c]/70 uppercase tracking-widest block mb-2 font-medium">
            Authorized Retailer
          </span>
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-[#0c3b3c] mb-4">
            OUR BRANDS
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#0c3b3c]/80 font-light max-w-xl mx-auto">
            Discover iconic timepieces from world-renowned watchmakers selected for distinction and craftsmanship.
          </p>
        </div>

        {/* Luxury 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_LOGOS.map((brand) => (
            <div
              key={brand.name}
              className="bg-primary border border-[#eadab2]/30 p-8 flex flex-col justify-between text-center rounded-sm relative overflow-hidden group shadow-lg"
            >
              {/* Subtle metallic top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#eadab2]/40 to-transparent" />

              <div className="flex flex-col items-center w-full">
                {/* Logo Showcase Area - Focus on Logo */}
               
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    width={260}
                    height={120}
                    className="max-h-24 w-auto object-contain brightness-0 invert opacity-100"
                  />
              </div>

              {/* Card Footer Button Action */}
              <div className="mt-8 pt-4 border-t border-[#eadab2]/20 flex items-center justify-center">
                <span className="font-inter text-[11px] text-[#eadab2] uppercase tracking-widest font-medium">
                  Explore Collection
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

