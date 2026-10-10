"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Nav links ──────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Features",     href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "For Doctors",  href: "#for-doctors" },
  { label: "For Patients", href: "#for-patients" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  /* Track scroll to add blur + shadow when not at top */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ── Logo ──────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-md"
          aria-label="DiagnoVerse home"
        >
          {/* Pulse / DNA mark */}
          <span className="relative flex items-center justify-center w-8 h-8">
            <span className="absolute inset-0 rounded-full gradient-brand opacity-15 group-hover:opacity-30 transition-opacity" />
            <Activity
              className="w-5 h-5 relative z-10"
              style={{ color: "#0EA5A4" }}
              aria-hidden="true"
            />
          </span>
          <span
            className="text-xl font-bold gradient-brand-text"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            DiagnoVerse
          </span>
        </Link>

        {/* ── Desktop nav links ─────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-[#0B1B33]/70 hover:text-[#0EA5A4] transition-colors focus-visible:outline-none focus-visible:underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA buttons ───────────────────────────── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/patient-login"
            className="px-4 py-2 text-sm font-semibold rounded-xl border-2 border-[#0EA5A4] text-[#0EA5A4] hover:bg-[#0EA5A4]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5A4]"
          >
            Patient Login
          </Link>
          <Link
            href="/doctor-login"
            className="px-4 py-2 text-sm font-semibold rounded-xl text-white gradient-brand hover:opacity-90 transition-opacity shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5A4]"
          >
            Doctor Login
          </Link>
        </div>

        {/* ── Hamburger (mobile) ────────────────────────────── */}
        <button
          className="md:hidden p-2 rounded-lg text-[#0B1B33]/70 hover:text-[#0EA5A4] hover:bg-[#0EA5A4]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5A4]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] px-4 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-[#0B1B33]/80 hover:text-[#0EA5A4] hover:bg-[#0EA5A4]/8 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/patient-login"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2.5 text-sm font-semibold rounded-xl border-2 border-[#0EA5A4] text-[#0EA5A4] hover:bg-[#0EA5A4]/10 transition-colors"
              >
                Patient Login
              </Link>
              <Link
                href="/doctor-login"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2.5 text-sm font-semibold rounded-xl text-white gradient-brand hover:opacity-90 transition-opacity shadow-md"
              >
                Doctor Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
