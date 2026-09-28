"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Button from "@/app/ui/Button";

interface HeaderProps {
  cartCount?: number;
  variant?: "default" | "dark" | "blue";
}

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Timepieces", href: "/timepieces" },
  { label: "Maison", href: "/not-found" },
  { label: "Contact Us", href: "/not-found" },
];

export default function Header({
  cartCount = 0,
  variant = "default",
}: HeaderProps) {
  const isDarkTheme = variant === "dark" || variant === "blue";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Keep visible at top of page
      if (currentScrollY <= 50) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> reveal navbar immediately
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 5 && currentScrollY > 80) {
        // Scrolling down -> hide navbar unless mobile menu is open
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const headerBgClass = isScrolled
    ? isDarkTheme
      ? "bg-[#06334a]/95 backdrop-blur-md border-b border-[#eadab2]/15 text-tertiary shadow-md"
      : "bg-[#0c3b3c]/92 backdrop-blur-md border-b border-[#eadab2]/10 text-tertiary shadow-sm"
    : isDarkTheme
    ? "bg-transparent border-b border-transparent shadow-none backdrop-blur-none text-tertiary"
    : "bg-transparent border-b border-transparent shadow-none backdrop-blur-none text-primary";

  const linkClass = isScrolled || isDarkTheme
    ? "text-tertiary/90 hover:text-secondary after:bg-secondary"
    : "text-primary/80 hover:text-primary after:bg-primary";

  const iconBtnClass = isScrolled || isDarkTheme
    ? "text-tertiary/90 hover:text-secondary hover:bg-white/5"
    : "text-primary/90 hover:text-primary hover:bg-black/5";

  const mobileToggleClass = isScrolled || isDarkTheme
    ? "text-tertiary hover:text-secondary"
    : "text-primary hover:text-primary/70";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${headerBgClass}`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex items-center justify-between h-18 sm:h-20 relative">
          {/* LEFT: Alpine Timepieces Logo */}
          <div className="shrink-0 flex items-center z-20">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo/logo.webp"
                alt="Alpine Timepieces Logo"
                width={190}
                height={42}
                className={`w-36 sm:w-44 md:w-48 h-auto object-contain ${
                  isScrolled || isDarkTheme
                    ? "drop-shadow-[0_0_15px_rgba(234,218,178,0.15)]"
                    : "invert"
                }`}
                priority
              />
            </Link>
          </div>

          {/* CENTER: Visually Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 xl:space-x-14 absolute left-1/2
           -translate-x-1/2 z-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-saldo text-[13px] tracking-widest uppercase transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${linkClass}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Actions (Search, Cart, and Mobile Menu Toggle) */}
          <div className="flex items-center space-x-3 sm:space-x-4 z-20">
            {/* Search Icon */}
            <button
              className={`p-2 transition-all duration-250 rounded-full hover:scale-105 ${iconBtnClass}`}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Shopping Bag / Cart Icon */}
            <Link
              href="/not-found"
              className={`p-2 transition-all duration-250 relative rounded-full hover:scale-105 ${iconBtnClass}`}
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span
                  className={`absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold shadow-sm ${
                    isScrolled || isDarkTheme
                      ? "bg-secondary text-neutral-950"
                      : "bg-primary text-tertiary"
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Log In Button */}
            <Button
              href="/not-found"
              variant={isScrolled || isDarkTheme ? "solid-gold" : "dark"}
              size="sm"
              className="hidden sm:inline-flex text-[11px] px-5 py-2 border-none"
            >
              Log In
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors rounded-full lg:hidden ${mobileToggleClass}`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-x-0 top-18 sm:top-20 ${
          isDarkTheme ? "bg-[#06334a]" : "bg-[#0c3b3c]"
        } border-b border-secondary/15 px-8 py-10 shadow-2xl flex flex-col justify-between space-y-8 animate-in fade-in slide-in-from-top-4 duration-300`}>
          <nav className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-saldo text-lg sm:text-xl uppercase tracking-widest text-tertiary/90 hover:text-secondary transition-colors duration-200 py-1 border-b border-secondary/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-secondary/60 text-xs font-inter font-normal">
                  0{idx + 1}
                </span>
              </Link>
            ))}
            <Link
              href="/not-found"
              onClick={() => setMobileMenuOpen(false)}
              className="font-saldo text-lg sm:text-xl uppercase tracking-widest text-secondary hover:text-secondary-light transition-colors duration-200 py-1 border-b border-secondary/10 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <User size={18} />
                <span>Log In</span>
              </span>
              <span className="text-secondary/60 text-xs font-inter font-normal">
                Account
              </span>
            </Link>
          </nav>

          {/* Mobile Footer note */}
          <div className="pt-4 border-t border-secondary/10 flex items-center justify-between text-xs font-inter text-tertiary/50">
            <span>Alpine Timepieces</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      )}
    </header>
  );
}
