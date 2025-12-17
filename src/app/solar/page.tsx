import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solar Installation Lead Generation | Hotlist Engine",
  description: "Generate qualified solar installation appointments with our done-for-you lead generation system.",
}

const data = {
  title: "Solar Installation Leads",
  subtitle: "Generate qualified solar appointments with homeowners ready to go green",
  iconName: "Sun" as const,
  problems: [
    {
      title: "Unqualified Prospects",
      description: "Most leads don't own their home or have poor credit for financing",
    },
    {
      title: "High Cost Per Lead",
      description: "Solar leads are expensive and most don't convert into installations",
    },
    {
      title: "Long Sales Cycles",
      description: "Prospects take forever to decide, tying up your sales team",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Homeowner Targeting",
      description: "We target qualified homeowners with high electric bills in your service area",
    },
    {
      step: "02",
      title: "Educational Funnels",
      description: "Landing pages that educate on savings, incentives, and environmental impact",
    },
    {
      step: "03",
      title: "Financial Pre-Qualification",
      description: "AI screening ensures leads meet your credit and financing requirements",
    },
    {
      step: "04",
      title: "Appointment Setting",
      description: "Hot leads are routed directly to your calendar for consultations",
    },
  ],
  results: [
    {
      metric: "30-50",
      description: "Qualified appointments monthly",
    },
    {
      metric: "60%+",
      description: "Homeowner qualification rate",
    },
    {
      metric: "$50-75",
      description: "Cost per qualified appointment",
    },
  ],
}

export default function SolarPage() {
  return <IndustryTemplate data={data} />
}
