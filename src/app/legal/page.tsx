import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Law Firm Client Acquisition | HOTLIST FUNNELS",
  description: "Attract and qualify potential clients for your legal practice with our done-for-you lead generation system.",
}

const data = {
  title: "Law Firm Client Acquisition",
  subtitle: "Attract and qualify potential clients for your practice on autopilot",
  iconName: "Scale" as const,
  problems: [
    {
      title: "Inconsistent Caseload",
      description: "Client flow is unpredictable, making it hard to plan and staff effectively",
    },
    {
      title: "Poor Lead Quality",
      description: "You're getting calls from people who can't afford your services or have weak cases",
    },
    {
      title: "High CAC",
      description: "Traditional legal marketing is expensive with unclear ROI",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Practice Area Funnels",
      description: "Custom landing pages for your specific practice areas (PI, family law, etc.)",
    },
    {
      step: "02",
      title: "Targeted Campaigns",
      description: "Geo-targeted ads reaching people actively searching for legal help",
    },
    {
      step: "03",
      title: "Case Qualification",
      description: "AI screening questions filter for case strength and client fit",
    },
    {
      step: "04",
      title: "Consultation Booking",
      description: "Qualified prospects book directly into your consultation calendar",
    },
  ],
  results: [
    {
      metric: "20-40",
      description: "Qualified consultations monthly",
    },
    {
      metric: "70%+",
      description: "Cases meeting your criteria",
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
