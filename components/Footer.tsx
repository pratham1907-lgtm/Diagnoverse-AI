"use client";

import Link from "next/link";
import { Activity, Mail, Globe, Share2 } from "lucide-react";

const QUICK_LINKS = [
  { label: "Features",     href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "For Doctors",  href: "#for-doctors" },
  { label: "For Patients", href: "#for-patients" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use",   href: "#" },
  { label: "Accessibility",  href: "#" },
];

export default function Footer() {
  const year = 2026; // Static year — update via deploy-time env or server component if needed

  return (
    <footer
      className="bg-[#0B1B33] text-white/70 pt-14 pb-8 px-4"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand col */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 group"
              aria-label="DiagnoVerse AI home"
            >
              <span className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" aria-hidden="true" />
              </span>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                DiagnoVerse AI
              </span>
            </Link>
            {/* Description */}
            <p className="text-sm leading-relaxed max-w-xs">
              A digital health support system connecting Doctors and Patients
              on one platform — powered by AI, guided by humans.
            </p>
            {/* Social links */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {[
                { icon: Globe,  href: "#", label: "X / Twitter" },
                { icon: Share2, href: "#", label: "LinkedIn" },
                { icon: Mail,   href: "#", label: "Email us" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#0EA5A4] text-white/60 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5A4]"
                  role="listitem"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-[#0EA5A4] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contact & Legal
            </h3>
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href="mailto:hello@diagnoverse.example"
                  className="text-sm hover:text-[#0EA5A4] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  hello@diagnoverse.example
                </a>
              </li>
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-[#0EA5A4] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {year} DiagnoVerse AI. All rights reserved. Demo product — not
            a licensed medical service.
          </p>
          <p className="italic text-center sm:text-right max-w-sm">
            DiagnoVerse AI provides decision support only and does not replace
            professional medical diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
}
