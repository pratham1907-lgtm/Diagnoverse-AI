"use client";

import { motion } from "framer-motion";
import { Stethoscope, User, ArrowRight, Cpu } from "lucide-react";

/* ── Framer helpers ──────────────────────────────────────── */
const inView = { once: true, amount: 0.25 };

/* ── Steps ──────────────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "Patient shares symptoms & records",
    desc:  "The patient provides symptom details, uploads scans or history using their token / QR. Consent is granted per session.",
    color: "#0EA5A4",
  },
  {
    num: "02",
    title: "Doctor reviews with AI support",
    desc:  "The doctor sees the full picture — AI flags patterns, suggests differential diagnoses, and surfaces relevant history. Final decision is always the doctor&apos;s.",
    color: "#2563EB",
  },
  {
    num: "03",
    title: "Prescription, advice & follow-up flow back",
    desc:  "The prescription, lab orders and follow-up schedule are sent directly to the patient&apos;s profile, with automated reminders and progress tracking.",
    color: "#F97066",
  },
];

export default function ConnectionFlow() {
  return (
    <section
      id="connection-flow"
      aria-labelledby="flow-heading"
      className="py-20 md:py-28 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ── Section header ────────────────────────────── */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55 }}
            className="text-[#0EA5A4] text-sm font-bold uppercase tracking-widest"
          >
            The Care Loop
          </motion.p>
          <motion.h2
            id="flow-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            One platform, two sides,{" "}
            <span className="gradient-brand-text">one care loop</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#64748B] leading-relaxed"
          >
            DiagnoVerse bridges the gap between clinical expertise and patient
            needs — with an AI layer that amplifies the doctor&apos;s judgment.
          </motion.p>
        </div>

        {/* ── Horizontal flow diagram ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative flex flex-col md:flex-row items-center justify-center gap-0"
          role="img"
          aria-label="Doctor connected to AI layer connected to Patient"
        >
          {/* Doctor node */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="w-20 h-20 rounded-3xl gradient-brand flex items-center justify-center shadow-xl shadow-[#0EA5A4]/30">
              <Stethoscope className="w-9 h-9 text-white" aria-hidden="true" />
            </div>
            <p className="font-bold text-[#0B1B33]">Doctor</p>
            <p className="text-xs text-[#64748B] text-center max-w-[100px]">
              Clinical decision maker
            </p>
          </div>

          {/* Connector 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-px md:w-16 h-10 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-[#0EA5A4] to-[#2563EB]" aria-hidden="true" />
            <ArrowRight className="hidden md:block w-4 h-4 text-[#2563EB] -ml-2" aria-hidden="true" />
          </div>

          {/* AI node (centre) */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="relative">
              {/* Outer pulse ring */}
              <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0EA5A4]/30 to-[#2563EB]/30 animate-ping" aria-hidden="true" />
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-[#0B1B33] to-[#1E3A5F] flex items-center justify-center shadow-xl">
                <Cpu className="w-9 h-9 text-[#0EA5A4]" aria-hidden="true" />
              </div>
            </div>
            <p className="font-bold text-[#0B1B33]">AI Layer</p>
            <p className="text-xs text-[#64748B] text-center max-w-[100px]">
              Supports, never decides
            </p>
          </div>

          {/* Connector 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-px md:w-16 h-10 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-[#2563EB] to-[#F97066]" aria-hidden="true" />
            <ArrowRight className="hidden md:block w-4 h-4 text-[#F97066] -ml-2" aria-hidden="true" />
          </div>

          {/* Patient node */}
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#F97066] flex items-center justify-center shadow-xl shadow-[#F97066]/20">
              <User className="w-9 h-9 text-white" aria-hidden="true" />
            </div>
            <p className="font-bold text-[#0B1B33]">Patient</p>
            <p className="text-xs text-[#64748B] text-center max-w-[100px]">
              Always in the loop
            </p>
          </div>
        </motion.div>

        {/* ── 3-step cards ──────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map(({ num, title, desc, color }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step number */}
              <span
                className="text-5xl font-black opacity-10 absolute top-4 right-4 leading-none select-none"
                style={{ color }}
                aria-hidden="true"
              >
                {num}
              </span>
              {/* Accent bar */}
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ background: color }}
                aria-hidden="true"
              />
              <h3
                className="font-bold text-[#0B1B33] text-base mb-2"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
