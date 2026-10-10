"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ScanLine,
  Mic,
  Brain,
  Bot,
  ClipboardList,
} from "lucide-react";

/* ── Feature data ─────────────────────────────────────────── */
const FEATURES = [
  {
    icon:  Activity,
    title: "Symptom Analysis",
    desc:  "AI cross-references reported symptoms with clinical data to surface likely diagnoses for doctor review.",
    color: "#0EA5A4",
    bg:    "#0EA5A4/10",
  },
  {
    icon:  ScanLine,
    title: "Skin & Eye Scan",
    desc:  "Upload dermatological or ophthalmic images for AI-powered pattern recognition — validated by the doctor.",
    color: "#2563EB",
    bg:    "#2563EB/10",
  },
  {
    icon:  Mic,
    title: "Voice Scan",
    desc:  "Analyse vocal biomarkers for indicators of respiratory or neurological conditions as a screening aid.",
    color: "#7C3AED",
    bg:    "#7C3AED/10",
  },
  {
    icon:  Brain,
    title: "Mental Health Screening",
    desc:  "Structured PHQ/GAD-style assessments with AI-scored summaries presented to the attending physician.",
    color: "#F97066",
    bg:    "#F97066/10",
  },
  {
    icon:  Bot,
    title: "AI Health Agent",
    desc:  "A conversational assistant that gathers history, pre-fills intake forms, and answers clinical protocol queries.",
    color: "#F59E0B",
    bg:    "#F59E0B/10",
  },
  {
    icon:  ClipboardList,
    title: "Patient Treatment History",
    desc:  "Full longitudinal record — past diagnoses, medications, labs and referrals — surfaced at the point of care.",
    color: "#10B981",
    bg:    "#10B981/10",
  },
];

/* ── Framer helpers ──────────────────────────────────────── */
const inView = { once: true, amount: 0.15 };

/* ── Feature card ─────────────────────────────────────────── */
function FeatureCard({
  icon: Icon,
  title,
  desc,
  color,
  delay,
}: (typeof FEATURES)[number] & { delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -4, boxShadow: `0 20px 40px -12px ${color}30` }}
      className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm cursor-default"
      aria-label={title}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{ background: `${color}18` }}
      >
        <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
      </div>
      {/* Title */}
      <h3
        className="font-bold text-[#0B1B33] text-base mb-2"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h3>
      {/* Description */}
      <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>

      {/* Bottom accent on hover */}
      <div
        className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export default function AIFeatures() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 md:py-28 px-4"
      style={{ background: "#F7FAFC" }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55 }}
            className="text-[#0EA5A4] text-sm font-bold uppercase tracking-widest"
          >
            For Doctors
          </motion.p>
          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            AI tools that{" "}
            <span className="gradient-brand-text">support the doctor</span>,
            not replace them.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#64748B] leading-relaxed"
          >
            Every AI output is a suggestion — the clinical decision, prescription
            and diagnosis always belong to the qualified physician.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
