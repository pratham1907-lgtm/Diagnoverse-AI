"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, User, ShieldCheck, Cpu, Bell } from "lucide-react";

/* ── Floating chip ───────────────────────────────────────── */
function Chip({
  label,
  icon: Icon,
  className = "",
}: {
  label: string;
  icon: React.ElementType;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass shadow-lg ${className}`}
    >
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      {label}
    </div>
  );
}

/* ── Dashboard mockup (right side illustration) ─────────── */
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto" aria-hidden="true">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#0EA5A4]/20 via-[#2563EB]/10 to-transparent blur-2xl" />

      {/* Main card */}
      <div className="rounded-3xl border border-[#E2E8F0] bg-white/80 backdrop-blur-sm shadow-2xl p-6 space-y-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#64748B] uppercase tracking-widest">
            Connected Care Dashboard
          </span>
          <span className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </span>
        </div>

        {/* Doctor card */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0EA5A4]/10 to-[#2563EB]/10 border border-[#0EA5A4]/30 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-[#0B1B33] text-sm">Dr. Meera Kapoor</p>
            <p className="text-xs text-[#64748B]">Cardiologist · Online</p>
          </div>
          <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Animated connection line */}
        <div className="relative flex items-center justify-center gap-2 py-1">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#0EA5A4]/60" />
          <div className="relative w-16 h-5 flex items-center">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#0EA5A4] to-[#2563EB] flow-dot"
                style={{
                  left: 0,
                  animationDelay: `${i * 0.8}s`,
                  ["--flow-dist" as string]: "56px",
                }}
              />
            ))}
          </div>
          <span className="px-2 py-1 rounded-full text-[10px] font-bold gradient-brand text-white shadow-sm">
            AI
          </span>
          <div className="relative w-16 h-5 flex items-center">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#0EA5A4] flow-dot"
                style={{
                  left: 0,
                  animationDelay: `${i * 0.8}s`,
                  ["--flow-dist" as string]: "56px",
                }}
              />
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2563EB]/60" />
        </div>

        {/* Patient card */}
        <div className="rounded-2xl bg-gradient-to-r from-[#2563EB]/10 to-[#F97066]/10 border border-[#2563EB]/30 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#F97066] flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-[#0B1B33] text-sm">Patient: Arjun Sharma</p>
            <p className="text-xs text-[#64748B]">Token #A-204 · Follow-up due</p>
          </div>
          <Bell className="ml-auto w-4 h-4 text-[#F59E0B]" />
        </div>

        {/* Stat bar */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[
            { label: "Scans",     val: "12", color: "#0EA5A4" },
            { label: "Records",   val: "38", color: "#2563EB" },
            { label: "Reminders", val: "5",  color: "#F97066" },
          ].map(({ label, val, color }) => (
            <div
              key={label}
              className="rounded-xl bg-gray-50 border border-[#E2E8F0] p-2 text-center"
            >
              <p className="text-lg font-bold" style={{ color }}>{val}</p>
              <p className="text-[10px] text-[#64748B]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        className="absolute -top-4 -left-4"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Chip label="Symptom check" icon={Cpu} className="text-[#0EA5A4]" />
      </motion.div>

      <motion.div
        className="absolute -top-2 -right-6"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Chip label="Skin scan" icon={Cpu} className="text-[#2563EB]" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -right-4"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Chip label="Med reminder" icon={Bell} className="text-[#F97066]" />
      </motion.div>
    </div>
  );
}

/* ── Hero section ─────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 px-4"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#0EA5A4]/10 via-[#2563EB]/8 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#F97066]/6 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Copy ──────────────────────────────────── */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0EA5A4]/10 border border-[#0EA5A4]/30 text-[#0EA5A4] text-xs font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5A4] animate-pulse" />
              AI-Assisted · Doctor-Approved
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight text-[#0B1B33]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Your Digital Health{" "}
              <span className="gradient-brand-text">Support System</span>
              {", "}
              Doctor and Patient,{" "}
              <span className="gradient-brand-text">Always Connected.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-lg text-[#64748B] max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              AI-powered symptom analysis and scan tools support the doctor&apos;s
              decision — while patients access their records, reminders, and
              continuous follow-up in one secure place.
            </motion.p>

            {/* CTA cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Doctor CTA */}
              <Link
                href="/doctor-login"
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl gradient-brand text-white font-semibold shadow-xl hover:shadow-[#0EA5A4]/40 hover:opacity-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5A4]"
                aria-label="Login as a Doctor"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 group-hover:bg-white/30 transition-colors">
                  <Stethoscope className="w-5 h-5" aria-hidden="true" />
                </span>
                <div className="text-left">
                  <p className="font-bold">Login as Doctor</p>
                  <p className="text-xs opacity-80">Access AI clinical tools</p>
                </div>
              </Link>

              {/* Patient CTA */}
              <Link
                href="/patient-login"
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border-2 border-[#0EA5A4]/40 text-[#0B1B33] font-semibold shadow-lg hover:border-[#0EA5A4] hover:shadow-[#0EA5A4]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5A4]"
                aria-label="Login as a Patient"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0EA5A4]/10 group-hover:bg-[#0EA5A4]/20 transition-colors">
                  <User className="w-5 h-5 text-[#0EA5A4]" aria-hidden="true" />
                </span>
                <div className="text-left">
                  <p className="font-bold">Login as Patient</p>
                  <p className="text-xs text-[#64748B]">Access records & reminders</p>
                </div>
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-[#64748B]"
            >
              <ShieldCheck className="w-4 h-4 text-[#0EA5A4]" aria-hidden="true" />
              <span>Secure records</span>
              <span aria-hidden="true">·</span>
              <span>Consent-based sharing</span>
              <span aria-hidden="true">·</span>
              <span>AI-assisted, doctor-approved</span>
            </motion.p>
          </div>

          {/* ── Right: Illustration ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="flex justify-center lg:justify-end"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
