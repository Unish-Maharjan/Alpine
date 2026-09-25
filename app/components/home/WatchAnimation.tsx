"use client"
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WatchAnimation = () => {
    const watchRef = useRef<HTMLDivElement>(null);
    
useGSAP(() => {
  if (!watchRef.current) return;
  gsap.set(watchRef.current, { yPercent: -80, opacity: 0 });
  
  gsap.timeline({
    scrollTrigger: {
      trigger: watchRef.current,
      start: "top top",
      end: "+=110%",
      scrub: 1,
    },
  })
  .to(watchRef.current, { yPercent: -10, opacity: 1, ease: "power2.out", duration: 1 })
  .to(watchRef.current, { yPercent: 90, scale: 0.6, xPercent: 15, ease: "power1.inOut", duration: 1.5 });
});
    
  return (
     <div className="flex justify-center items-center absolute z-50 w-full translate-x-80 translate-y-40 min-h-80 overflow-visible">
          <div
            ref={watchRef}
            className="relative w-full flex items-center justify-center"
          >
            <Image
              src="/images/watch1.png"
              alt="Alpine Chronograph Luxury Timepiece"
              width={250}
              height={250}
              className="object-contain w-auto z-100 h-60 sm:h-96 lg:h-96 xl:h-128 max-w-none"
              priority
            />
          </div>
    </div>
  )
}

export default WatchAnimation