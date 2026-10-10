"use client";

import { motion } from "framer-motion";
import { LogIn, FileText, Cpu, ClipboardCheck } from "lucide-react";

const STEPS = [
  {
    icon:  LogIn,
    num:   1,
    title: "Login",
    desc:  "Doctor or Patient logs in securely. Patients use a token or QR code — no complicated sign-up required.",
    color: "#0EA5A4",
  },
  {
    icon:  FileText,
    num:   2,
    title: "Share & Review records",
    desc:  "Patient provides symptoms and history with full consent. Doctor gets a clean, structured overview instantly.",
    color: "#2563EB",
  },
  {
    icon:  Cpu,
    num:   3,
    title: "AI-assisted consultation",
    desc:  "Built-in AI scans and symptom tools assist the doctor. Every suggestion is reviewed and approved by the physician.",
    color: "#7C3AED",
  },
  {
    icon:  ClipboardCheck,
    num:   4,
    title: "Prescription & follow-up",
    desc:  "Prescription, lab orders and follow-up schedule are sent to the patient's profile with automated reminders.",
    color: "#F97066",
  },
];

const inView = { once: true, amount: 0.2 };

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="py-20 md:py-28 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.5 }}
            className="text-[#0EA5A4] text-sm font-bold uppercase tracking-widest"
          >
            Simple process
          </motion.p>
          <motion.h2
            id="how-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            How DiagnoVerse{" "}
            <span className="gradient-brand-text">works</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[38px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-[#0EA5A4] via-[#2563EB] to-[#F97066]"
            aria-hidden="true"
          />

          <ol
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="How DiagnoVerse works — 4 steps"
          >
            {STEPS.map(({ icon: Icon, num, title, desc, color }, i) => (
              <motion.li
                key={num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Numbered icon circle */}
                <div className="relative flex-shrink-0">
                  {/* Outer ring */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                    style={{ background: `${color}18`, boxShadow: `0 0 0 4px ${color}20, 0 8px 20px -6px ${color}50` }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} aria-hidden="true" />
                  </div>
                  {/* Step number badge */}
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-black text-white flex items-center justify-center"
                    style={{ background: color }}
                    aria-label={`Step ${num}`}
                  >
                    {num}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-bold text-[#0B1B33] text-base mb-1"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
