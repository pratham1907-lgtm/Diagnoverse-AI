"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, User } from "lucide-react";

const inView = { once: true, amount: 0.3 };

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 md:py-28 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={inView}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden gradient-brand px-8 py-16 md:px-16 text-center text-white shadow-2xl"
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 80%, #fff 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 space-y-6">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest">
              Get Started Today
            </span>

            {/* Heading */}
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Start your connected
              <br />
              care journey
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg opacity-85 max-w-xl mx-auto leading-relaxed">
              Join thousands of doctors and patients already using DiagnoVerse
              for smarter, faster, and more human healthcare.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/doctor-login"
                className="flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-white text-[#0B1B33] font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0EA5A4]"
                aria-label="Doctor Login"
              >
                <Stethoscope className="w-5 h-5 text-[#0EA5A4]" aria-hidden="true" />
                Doctor Login
              </Link>
              <Link
                href="/patient-login"
                className="flex items-center gap-3 px-7 py-3.5 rounded-2xl border-2 border-white/60 text-white font-bold text-sm hover:bg-white/15 hover:border-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Patient Login"
              >
                <User className="w-5 h-5" aria-hidden="true" />
                Patient Login
              </Link>
            </div>

            {/* Trust note */}
            <p className="text-xs opacity-60 pt-2">
              No payment required • Privacy-first • AI-assisted, doctor-approved
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
