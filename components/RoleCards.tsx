"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope,
  User,
  ClipboardList,
  ScanLine,
  Pill,
  TestTubeDiagonal,
  Share2,
  QrCode,
  Bell,
  HeartHandshake,
  Repeat,
} from "lucide-react";

/* ── Framer helpers ──────────────────────────────────────── */
const inView = { once: true, amount: 0.2 };

/* ── Feature list item ──────────────────────────────────── */
function FeatureItem({ icon: Icon, text, color }: { icon: React.ElementType; text: string; color: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-[#64748B]">
      <span
        className="mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}18` }}
        aria-hidden="true"
      >
        <Icon className="w-3.5 h-3.5" style={{ color }} />
      </span>
      {text}
    </li>
  );
}

/* ── Role card ─────────────────────────────────────────── */
type RoleCardProps = {
  role:     "doctor" | "patient";
  headline: string;
  sub:      string;
  items:    { icon: React.ElementType; text: string }[];
  accentColor: string;
  gradient: string;
  href:     string;
  label:    string;
  dir:      "left" | "right";
};

function RoleCard({
  role, headline, sub, items, accentColor, gradient, href, label, dir,
}: RoleCardProps) {
  const isDr = role === "doctor";
  return (
    <motion.div
      initial={{ opacity: 0, x: dir === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={inView}
      transition={{ duration: 0.6 }}
      className="flex flex-col rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Card header */}
      <div className={`${gradient} px-7 py-8 text-white`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
            {isDr
              ? <Stethoscope className="w-6 h-6 text-white" aria-hidden="true" />
              : <User        className="w-6 h-6 text-white" aria-hidden="true" />}
          </div>
          <div>
            <p className="text-xs font-semibold opacity-70 uppercase tracking-widest">
              {isDr ? "For Doctors" : "For Patients"}
            </p>
            <h3
              className="font-extrabold text-xl leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {headline}
            </h3>
          </div>
        </div>
        <p className="text-sm opacity-80 leading-relaxed">{sub}</p>
      </div>

      {/* Feature list */}
      <div className="bg-white px-7 py-6 flex-1">
        <ul className="space-y-3.5" role="list" aria-label={`${headline} features`}>
          {items.map(({ icon, text }) => (
            <FeatureItem key={text} icon={icon} text={text} color={accentColor} />
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-white px-7 pb-7">
        <Link
          href={href}
          className="block text-center w-full py-3 rounded-2xl font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            background: accentColor,
            color:      "#fff",
            boxShadow:  `0 8px 20px -6px ${accentColor}60`,
          }}
          aria-label={label}
        >
          {label}
        </Link>
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
const DOCTOR_ITEMS = [
  { icon: ClipboardList,     text: "View full patient records & history" },
  { icon: ScanLine,          text: "Run AI-powered symptom & scan analysis" },
  { icon: Pill,              text: "Prescribe medicines digitally" },
  { icon: TestTubeDiagonal,  text: "Order lab tests with one click" },
  { icon: HeartHandshake,    text: "Give personalised health advice & notes" },
  { icon: Share2,            text: "Optional specialist referral workflow" },
];

const PATIENT_ITEMS = [
  { icon: QrCode,       text: "Access records via QR code or token number" },
  { icon: Bell,         text: "Smart medicine & appointment reminders" },
  { icon: HeartHandshake, text: "Government health scheme information" },
  { icon: Repeat,       text: "Structured health follow-up schedule" },
  { icon: ClipboardList, text: "View past prescriptions & lab results" },
];

export default function RoleCards() {
  return (
    <section
      id="for-doctors"
      aria-labelledby="roles-heading"
      className="py-20 md:py-28 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.5 }}
            className="text-[#0EA5A4] text-sm font-bold uppercase tracking-widest"
          >
            Who is DiagnoVerse for?
          </motion.p>
          <motion.h2
            id="roles-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Built for <span className="gradient-brand-text">both sides</span> of care
          </motion.h2>
        </div>

        {/* Cards */}
        <div id="for-patients" className="grid md:grid-cols-2 gap-6">
          <RoleCard
            role="doctor"
            headline="Doctor Dashboard"
            sub="Everything a clinician needs — AI tools, records and patient communication — in one focused workspace."
            items={DOCTOR_ITEMS}
            accentColor="#0EA5A4"
            gradient="gradient-brand"
            href="/doctor-login"
            label="Doctor Login"
            dir="left"
          />
          <RoleCard
            role="patient"
            headline="Patient Portal"
            sub="Simple, guided access to your health records, reminders and advice from your doctor — no app download required."
            items={PATIENT_ITEMS}
            accentColor="#2563EB"
            gradient="bg-gradient-to-br from-[#2563EB] to-[#F97066]"
            href="/patient-login"
            label="Patient Login"
            dir="right"
          />
        </div>
      </div>
    </section>
  );
}
