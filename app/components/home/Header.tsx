"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0c3b3c]/95 backdrop-blur-md border-b border-[#eadab2]/15 sticky top-0 z-50 text-[#f8f6f0] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f8f6f0] hover:text-[#eadab2] transition-colors"
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
                className="object-contain transition-all duration-300 group-hover:opacity-90 drop-shadow-[0_0_15px_rgba(234,218,178,0.2)]"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="#products"
              className="font-saldo text-xs uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#eadab2] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="font-saldo text-xs uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#eadab2] hover:after:w-full after:transition-all after:duration-300"
            >
              Timepieces
            </Link>
            <Link
              href="#priorities"
              className="font-saldo text-xs uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#eadab2] hover:after:w-full after:transition-all after:duration-300"
            >
              Maison
            </Link>
            <Link
              href="#contact"
              className="font-saldo text-xs uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#eadab2] hover:after:w-full after:transition-all after:duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <button
              className="p-2 text-[#f8f6f0]/85 hover:text-[#eadab2] transition-colors rounded-full hover:bg-white/5"
              aria-label="Search"
            >
              <Search size={19} />
            </button>
            <Link
              href="/cart"
              className="p-2 text-[#f8f6f0]/85 hover:text-[#eadab2] transition-colors relative rounded-full hover:bg-white/5"
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#eadab2] text-[10px] text-[#0c3b3c] font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c3b3c] border-t border-[#eadab2]/15 px-6 py-6 space-y-4">
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-saldo text-sm uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] py-2"
          >
            Timepieces
          </Link>
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-saldo text-sm uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] py-2"
          >
            Collections
          </Link>
          <Link
            href="#priorities"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-saldo text-sm uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] py-2"
          >
            Craftsmanship &amp; Priorities
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-saldo text-sm uppercase text-[#f8f6f0]/85 hover:text-[#eadab2] py-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}