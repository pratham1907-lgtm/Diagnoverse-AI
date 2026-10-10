import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ── Fonts ──────────────────────────────────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

/* ── Metadata ───────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "DiagnoVerse — Your Digital Health Support System",
  description:
    "DiagnoVerse connects Doctors and Patients on one platform with AI-assisted diagnosis support, shared records, and continuous follow-up.",
  keywords: [
    "digital health",
    "telemedicine",
    "AI diagnosis",
    "patient records",
    "doctor patient platform",
  ],
  openGraph: {
    title: "DiagnoVerse — Your Digital Health Support System",
    description:
      "AI-assisted clinical support for doctors. Records, reminders and guidance for patients. One connected care loop.",
    type: "website",
  },
};

/* ── Root layout ────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
