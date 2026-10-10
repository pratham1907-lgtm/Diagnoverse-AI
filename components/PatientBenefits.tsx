"use client";

import { motion } from "framer-motion";
import { QrCode, Bell, HeartHandshake, Repeat } from "lucide-react";

const TILES = [
  {
    icon:  QrCode,
    title: "Records via QR / Token",
    desc:  "Access your full medical history with a single QR scan or token number — no login hurdles.",
    color: "#0EA5A4",
  },
  {
    icon:  Bell,
    title: "Medicine Reminder",
    desc:  "Smart reminders ensure you never miss a dose or an appointment, delivered right to your device.",
    color: "#2563EB",
  },
  {
    icon:  HeartHandshake,
    title: "Government Schemes",
    desc:  "Discover government health insurance and wellness schemes you are eligible for, curated for you.",
    color: "#F59E0B",
  },
  {
    icon:  Repeat,
    title: "Health Follow-up",
    desc:  "Stay on track with structured follow-up schedules and progress notes from your doctor.",
    color: "#F97066",
  },
];

const inView = { once: true, amount: 0.2 };

export default function PatientBenefits() {
  return (
    <section
      aria-labelledby="patient-benefits-heading"
      className="py-16 md:py-20 px-4"
      style={{ background: "linear-gradient(135deg, #0B1B33 0%, #1E3A5F 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.5 }}
            className="text-[#0EA5A4] text-sm font-bold uppercase tracking-widest"
          >
            Patient Benefits
          </motion.p>
          <motion.h2
            id="patient-benefits-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-extrabold text-white"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Everything a patient needs,{" "}
            <span className="gradient-brand-text">all in one place</span>
          </motion.h2>
        </div>

        {/* Tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TILES.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all cursor-default group"
              aria-label={title}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}25` }}
              >
                <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
              </div>
              <h3
                className="font-bold text-white text-sm mb-1.5"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
