import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Services Contractor Leads | Hotlist Engine",
  description: "Fill your calendar with ready-to-buy homeowners with our done-for-you lead generation system.",
}

const data = {
  title: "Home Services Contractor Leads",
  subtitle: "Fill your calendar with homeowners ready to start their projects",
  iconName: "Hammer" as const,
  problems: [
    {
      title: "Price Shoppers",
      description: "Leads are just getting quotes with no intention of hiring",
    },
    {
      title: "Feast or Famine",
      description: "Work is inconsistent, making it hard to keep your crew busy year-round",
    },
    {
      title: "Long Sales Cycles",
      description: "Prospects take weeks or months to make a decision",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Service-Specific Funnels",
      description: "Custom pages for roofing, HVAC, remodeling, or whatever you specialize in",
    },
    {
      step: "02",
      title: "Geo-Targeted Ads",
      description: "Reach homeowners in your service area actively searching for contractors",
    },
    {
      step: "03",
      title: "Project Qualification",
      description: "AI screening qualifies budget, timeline, and project scope",
    },
    {
      step: "04",
      title: "Estimate Booking",
      description: "Hot leads book directly into your calendar for on-site estimates",
    },
  ],
  results: [
    {
      metric: "30-60",
      description: "Qualified project leads monthly",
    },
    {
      metric: "40-60%",
      description: "Estimate to close rate",
    },
    {
      metric: "3-5x",
      description: "ROI on ad spend",
    },
  ],
}

export default function ContractorsPage() {
  return <IndustryTemplate data={data} />
}
