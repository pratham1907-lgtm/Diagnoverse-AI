/**
 * DiagnoVerse — Home Page (Landing)
 *
 * Sections (in order):
 *  1. Navbar         – sticky, blurred, responsive with hamburger
 *  2. Hero           – headline, dual CTA, animated dashboard mockup
 *  3. ConnectionFlow – Doctor↔AI↔Patient diagram + 3 care-loop steps
 *  4. AIFeatures     – 6-card AI tool grid for doctors
 *  5. RoleCards      – Doctor vs Patient feature comparison
 *  6. PatientBenefits– 4-tile dark strip
 *  7. HowItWorks     – 4 numbered steps with connecting line
 *  8. Trust          – privacy, consent, encryption + AI disclaimer
 *  9. FinalCTA       – gradient banner with dual login buttons
 * 10. Footer         – logo, links, contact, copyright
 *
 * Tech: Next.js 16 (App Router) • Tailwind v4 • Framer Motion • lucide-react
 */

import Navbar         from "@/components/Navbar";
import Hero           from "@/components/Hero";
import ConnectionFlow from "@/components/ConnectionFlow";
import AIFeatures     from "@/components/AIFeatures";
import RoleCards      from "@/components/RoleCards";
import PatientBenefits from "@/components/PatientBenefits";
import HowItWorks     from "@/components/HowItWorks";
import Trust          from "@/components/Trust";
import FinalCTA       from "@/components/FinalCTA";
import Footer         from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* ── Navigation ──────────────────────────────────── */}
      <Navbar />

      {/* ── Main content ────────────────────────────────── */}
      <main id="main-content">
        {/* Skip-to-content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 rounded-lg gradient-brand text-white text-sm font-semibold"
        >
          Skip to main content
        </a>

        <Hero />
        <ConnectionFlow />
        <AIFeatures />
        <RoleCards />
        <PatientBenefits />
        <HowItWorks />
        <Trust />
        <FinalCTA />
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <Footer />
    </>
  );
}
