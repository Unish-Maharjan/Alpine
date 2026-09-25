import React from "react";
import Image from "next/image";

const POPULAR_WATCHES = [
  {
    id: 1,
    name: "Alpine Chronograph One",
    category: "Chronograph",
    price: "$2,450",
    image: "/images/watch1.png",
  },
  {
    id: 2,
    name: "Alpine Heritage Automatic",
    category: "Automatic",
    price: "$1,890",
    image: "/images/watch5.png",
    description: "Classic dress watch featuring hand-polished steel casing.",
  },
  {
    id: 3,
    name: "Alpine Tourbillon Grand",
    category: "Grand Complication",
    price: "$4,200",
    image: "/images/animatedImage.png",
    description: "Masterpiece horology with exposed flying tourbillon cage.",
  },
];

export default function PopularWatches() {
  return (
    <section className="w-full bg-[#0c3b3c] text-[#fcfbf8] py-20 px-6 sm:px-12 
    lg:px-16 border-t border-[#eadab2]/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-saldo text-xs text-[#eadab2] uppercase tracking-widest block mb-2">
            Curated Selection
          </span>
          <h2 className="font-saldo text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-[#fcfbf8] mb-4">
            POPULAR TIMEPIECES
          </h2>
          <p className="font-inter text-sm sm:text-base text-[#e5e0d3] font-light max-w-xl mx-auto">
            Discover our most sought-after watches crafted with precision and timeless design.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POPULAR_WATCHES.map((watch) => (
            <div
              key={watch.id}
              className="bg-primary border border-[#eadab2]/30 p-5 flex flex-col justify-between"
            >
              <div>
                {/* Cream watch image backdrop container matching screenshot */}
                <div className="w-full h-80 relative mb-6 flex items-center justify-center bg-[#f8f6f0] p-6 overflow-hidden">
                  <div className="w-52 h-52 rounded-full border-2 border-[#b89c57] bg-[#0c3b3c] absolute flex items-center justify-center" />
                  <Image
                    src={watch.image}
                    alt={watch.name}
                    width={220}
                    height={220}
                    className="max-h-full w-auto object-contain relative z-10 filter drop-shadow-lg"
                  />
                </div>

                <span className="font-inter text-[11px] text-[#eadab2] uppercase tracking-wider block mb-2 font-medium">
                  {watch.category}
                </span>

                <h3 className="font-saldo text-lg text-[#fcfbf8] 
                uppercase font-normal mb-3 leading-snug tracking-wide">
                  {watch.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-[#eadab2]/15 flex items-center justify-between mt-auto">
                <span className="font-inter text-sm text-[#eadab2] font-semibold">
                  {watch.price}
                </span>
                <span className="font-inter text-[11px] text-[#fcfbf8] uppercase tracking-wider font-light">
                  IN STOCK
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


