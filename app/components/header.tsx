"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "#", label: "DOWNLOAD" },
    { href: "/news", label: "NEWS" },
    { href: "#", label: "GUIDE" },
    { href: "#", label: "TOP UP" },
    { href: "#", label: "FANPAGE" },
    { href: "#", label: "GROUP" },
  ];

  return (
    <>
      <header className="container mx-auto fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between py-2 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="ShinobiWAR"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white uppercase text-xs lg:text-sm hover:text-red-400 transition-colors font-semibold tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Burger Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 text-white hover:text-red-400 transition-colors z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full Screen Drawer Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Full Screen Drawer */}
      <nav
        className={`fixed inset-0 bg-black z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-20 relative">
          {/* Close Button */}
          <button
            type="button"
            onClick={closeMenu}
            className="absolute top-3 right-3 p-2 text-white hover:text-red-400 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-white uppercase text-2xl hover:text-red-400 transition-colors font-semibold tracking-wider py-4 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
