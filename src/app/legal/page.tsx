import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Law Firm Client Acquisition | HOTLIST FUNNELS",
  description: "Your intake form is where cases go to die. HOTLIST replaces it with a conversion funnel that qualifies, nurtures, and books consultations — while you sleep.",
}

const data = {
  title: "Law Firm Client Acquisition",
  subtitle: "Your intake form is where cases go to die. We replace it with a funnel that converts.",
  iconName: "Scale" as const,
  problems: [
    {
      title: "Intake Ghosting",
      description: "Prospects fill out your form at 10pm. You call back at 9am. They've already hired someone else. Speed wins in legal. You're losing it.",
    },
    {
      title: "Wasted Consultation Hours",
      description: "You're spending 30 minutes a day on consults with people who have $0 cases or can't afford your retainer. That's time you're billing to nobody.",
    },
    {
      title: "Referral Cliff",
      description: "When your referral partners get busy, your pipeline dries up. You have no control over next month's caseload — and it shows in your revenue.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Practice-Area Funnels",
      description: "Custom pages for each area of law — PI, family, criminal, immigration — with copy written for the emotional state of someone searching for legal help.",
    },
    {
      step: "02",
      title: "Intent-Signal Targeting",
      description: "Geo-targeted search and social ads reaching people actively in legal distress — not general audiences. Every dollar targets someone with a real need.",
    },
    {
      step: "03",
      title: "AI Case Qualification",
      description: "Automated intake questions screen for case strength, incident recency, liability, and ability to retain — before anyone picks up the phone.",
    },
    {
      step: "04",
      title: "Instant Consultation Booking",
      description: "Qualified prospects book directly into your calendar via SMS link within minutes of submitting. No back-and-forth. No ghosting.",
    },
  ],
  results: [
    {
      metric: "20-40",
      description: "Pre-qualified consultations monthly",
    },
    {
      metric: "70%+",
      description: "Cases meeting your intake criteria",
    },
    {
      metric: "5-10x",
      description: "ROI on marketing spend",
    },
  ],
}

export default function LegalPage() {
  return <IndustryTemplate data={data} />
}
