import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Services Contractor Leads | HOTLIST FUNNELS",
  description: "You're running a $500k/yr business off a Facebook page and word of mouth. HOTLIST builds the lead system your operation actually deserves.",
}

const data = {
  title: "Home Services Contractor Leads",
  subtitle: "You're running a $500k/yr operation off word of mouth. Let's build a system that matches.",
  iconName: "Hammer" as const,
  problems: [
    {
      title: "Quote, Ghost, Repeat",
      description: "You drive out, spend 2 hours on a free estimate, and they go with the cheapest guy. You're subsidizing your competitor's sales process every single week.",
    },
    {
      title: "The Seasonal Famine",
      description: "January through March your crew sits idle. You're paying wages to do nothing because you didn't build a pipeline in October. This year will be the same.",
    },
    {
      title: "Shared Lead Platforms",
      description: "HomeAdvisor sold your contact info to 5 other contractors. That's why they don't call back — you're one of six people blowing up their phone at once.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Service-Specific Funnels",
      description: "Custom pages for roofing, HVAC, plumbing, remodeling — each one targeting homeowners with active project intent, not general curiosity.",
    },
    {
      step: "02",
      title: "Geo-Fenced Ad Campaigns",
      description: "Ads running only in your service area, to homeowners actively searching for your trade. Not a 50-mile radius. Your territory. Your leads.",
    },
    {
      step: "03",
      title: "Budget & Timeline Qualification",
      description: "AI screening qualifies project budget, desired timeline, and homeownership before the lead hits your inbox. No more $500 quote requests on $15k jobs.",
    },
    {
      step: "04",
      title: "On-Site Estimate Booking",
      description: "Pre-qualified homeowners book directly into your estimate calendar. You show up to people who are ready to sign — not kicking tires.",
    },
  ],
  results: [
    {
      metric: "30-60",
      description: "Qualified project leads monthly",
    },
    {
      metric: "40-60%",
      description: "Estimate-to-signed rate",
    },
    {
      metric: "3-5x",
      description: "Return on ad spend",
    },
  ],
}

export default function ContractorsPage() {
  return <IndustryTemplate data={data} />
}
