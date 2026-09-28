import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/ui/Button";

const POPULAR_WATCHES = [
  {
    id: 1,
    name: "ASHEZ",
    collection: "Endurance Collection",
    price: "$399",
    image: "/images/watch1.png",
    sale: false,
    href: "/timepieces",
  },
  {
    id: 2,
    name: "MANARO",
    collection: "Sport Collection",
    price: "$1,199",
    image: "/images/watch5.png",
    sale: true,
    href: "/timepieces",
  },
  {
    id: 3,
    name: "BLING",
    collection: "Endurance Collection",
    price: "$1,999",
    image: "/images/watch4.avif",
    sale: false,
    href: "/timepieces",
  },
];

export default function PopularWatches() {
  return (
    <section className="w-full bg-white pb-20 sm:pb-24 text-neutral-900 relative z-10">
      {/* Section Title Header */}
      <div className="text-center pt-16 sm:pt-24 pb-12 sm:pb-16 px-6 max-w-4xl mx-auto">
        <h2 className="font-saldo text-3xl sm:text-5xl md:text-6xl uppercase font-normal text-primary tracking-tight mb-3">
          POPULAR TIMEPIECES
        </h2>
        <p className="font-inter text-sm sm:text-base text-primary/80 font-light max-w-xl mx-auto">
          Discover our most sought-after watches crafted with precision and timeless design.
        </p>
      </div>

      {/* 3-Column Minimalist Full-Width Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 border-t border-b border-neutral-200">
        {POPULAR_WATCHES.map((watch) => (
          <Link
            key={watch.id}
            href={watch.href}
            className="group relative flex flex-col items-center justify-between text-center px-6 sm:px-12 py-16 sm:py-24 hover:bg-neutral-50/40 transition-colors duration-300 min-h-[560px]"
          >  
            {/* Watch Image */}
            <div className="w-full h-72 sm:h-80 relative flex items-center justify-center mb-8">
              <div className="relative w-full h-full max-w-[280px]">
                <Image
                  src={watch.image}
                  alt={watch.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>

            {/* Metadata (Name, Collection, Price) */}
            <div className="flex flex-col items-center justify-center w-full">
              {/* Watch Name */}
              <h3 className="font-inter font-bold text-sm sm:text-base text-neutral-800 uppercase tracking-[0.35em] mb-1.5">
                {watch.name}
              </h3>

              {/* Collection Subtitle */}
              <p className="font-inter text-[11px] sm:text-xs text-neutral-500 font-normal tracking-normal mb-8">
                {watch.collection}
              </p>

              {/* Price */}
              <span className="font-inter text-xs sm:text-sm font-semibold text-neutral-800 tracking-wide">
                {watch.price}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex items-center justify-center pt-14 sm:pt-16 px-6">
        <Button href="/timepieces" variant="dark" size="md">
          View All Timepieces
        </Button>
      </div>
    </section>
  );
}


