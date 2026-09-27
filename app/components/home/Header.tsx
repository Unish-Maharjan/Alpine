"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // If at the very top, always keep visible
      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show navbar immediately
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 5 && currentScrollY > 80) {
        // Scrolling down past threshold -> hide navbar (unless mobile menu is open)
        if (!mobileMenuOpen) {
          setVisible(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-60 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-tertiary/10 text-tertiary shadow-md"
          : "bg-transparent border-b border-transparent text-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled
                  ? "text-tertiary hover:text-white"
                  : "text-primary hover:text-primary/70"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo/logo.webp"
                alt="Alpine Logo"
                width={180}
                height={42}
                className={`object-contain transition-all duration-300 group-hover:opacity-90 ${
                  isScrolled
                    ? "drop-shadow-[0_0_15px_rgba(231,234,233,0.2)]"
                    : "invert"
                }`}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-15">
            <Link
              href="#products"
              className={`font-saldo text-sm uppercase transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled
                  ? "text-tertiary/85 hover:text-tertiary after:bg-tertiary"
                  : "text-primary/85 hover:text-primary after:bg-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="#products"
              className={`font-saldo text-sm uppercase transition-all 
                relative py-1 after:content-[''] 
                after:absolute after:bottom-0 after:left-0 after:w-0
                 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled
                  ? "text-tertiary/85 hover:text-tertiary after:bg-tertiary"
                  : "text-primary/85 hover:text-primary after:bg-primary"
              }`}
            >
              Timepieces
            </Link>
            <Link
              href="#priorities"
              className={`font-saldo text-sm uppercase transition-all relative py-1 
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                 after:h-px hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled
                  ? "text-tertiary/85 hover:text-tertiary after:bg-tertiary"
                  : "text-primary/85 hover:text-primary after:bg-primary"
              }`}
            >
              Maison
            </Link>
            <Link
              href="#contact"
              className={`font-saldo text-sm uppercase transition-all relative 
                py-1 after:content-[''] after:absolute after:bottom-0 after:left-0
                 after:w-0 after:h-px hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled
                  ? "text-tertiary/85 hover:text-tertiary after:bg-tertiary"
                  : "text-primary/85 hover:text-primary after:bg-primary"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <button
              className={`p-2 transition-colors rounded-full ${
                isScrolled
                  ? "text-tertiary hover:text-white hover:bg-white/5"
                  : "text-primary hover:text-primary/70 hover:bg-black/5"
              }`}
              aria-label="Search"
            >
              <Search size={19} />
            </button>
            <Link
              href="/cart"
              className={`p-2 transition-colors relative rounded-full ${
                isScrolled
                  ? "text-tertiary hover:text-white hover:bg-white/5"
                  : "text-primary hover:text-primary/70 hover:bg-black/5"
              }`}
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span
                  className={`absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold shadow-sm ${
                    isScrolled
                      ? "bg-tertiary text-primary"
                      : "bg-primary text-tertiary"
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-6 py-6 space-y-4 border-t transition-colors ${
            isScrolled
              ? "bg-primary border-tertiary/15 text-tertiary"
              : "bg-tertiary border-primary/10 text-primary shadow-lg"
          }`}
        >
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-saldo text-sm uppercase py-2 ${
              isScrolled
                ? "text-tertiary/85 hover:text-tertiary"
                : "text-primary/85 hover:text-primary"
            }`}
          >
            Timepieces
          </Link>
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-saldo text-sm uppercase py-2 ${
              isScrolled
                ? "text-tertiary/85 hover:text-tertiary"
                : "text-primary/85 hover:text-primary"
            }`}
          >
            Collections
          </Link>
          <Link
            href="#priorities"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-saldo text-sm uppercase py-2 ${
              isScrolled
                ? "text-tertiary/85 hover:text-tertiary"
                : "text-primary/85 hover:text-primary"
            }`}
          >
            Craftsmanship &amp; Priorities
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-saldo text-sm uppercase py-2 ${
              isScrolled
                ? "text-tertiary/85 hover:text-tertiary"
                : "text-primary/85 hover:text-primary"
            }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
