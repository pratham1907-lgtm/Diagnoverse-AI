"use client";

import { motion } from "framer-motion";
import { Lock, UserCheck, ShieldCheck, AlertTriangle } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon:  Lock,
    title: "End-to-End Encryption",
    desc:  "All health data — records, prescriptions and scan results — is encrypted in transit and at rest.",
    color: "#0EA5A4",
  },
  {
    icon:  UserCheck,
    title: "Patient Consent First",
    desc:  "No data is shared with a doctor without explicit, session-based patient consent. You stay in control.",
    color: "#2563EB",
  },
  {
    icon:  ShieldCheck,
    title: "Privacy by Design",
    desc:  "Minimal data collection, role-based access controls and audit logs ensure your information is protected.",
    color: "#7C3AED",
  },
];

const inView = { once: true, amount: 0.2 };

export default function Trust() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="py-20 md:py-28 px-4"
      style={{ background: "#F7FAFC" }}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.5 }}
            className="text-[#0EA5A4] text-sm font-bold uppercase tracking-widest"
          >
            Trust & Safety
          </motion.p>
          <motion.h2
            id="trust-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Your health data,{" "}
            <span className="gradient-brand-text">protected always</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#64748B] leading-relaxed"
          >
            We built DiagnoVerse with privacy and safety as non-negotiables,
            not afterthoughts.
          </motion.p>
        </div>

        {/* Trust cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm text-center"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
              </div>
              <h3
                className="font-bold text-[#0B1B33] mb-2"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* AI disclaimer banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex items-start gap-4 rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/8 p-5"
          role="note"
          aria-label="AI safety disclaimer"
        >
          <AlertTriangle
            className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <p className="font-semibold text-[#0B1B33] text-sm mb-1">
              AI Decision-Support Disclaimer
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              DiagnoVerse AI tools provide clinical{" "}
              <strong>decision support only</strong> and do not replace
              professional medical diagnosis, examination, or treatment. All
              clinical decisions are made solely by the licensed medical
              professional in charge of the patient's care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
