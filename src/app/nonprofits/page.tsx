import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nonprofit Donor Engagement | Hotlist Engine",
  description: "Convert visitors into monthly donors and volunteers with our done-for-you engagement system.",
}

const data = {
  title: "Nonprofit Donor Engagement",
  subtitle: "Convert website visitors into monthly donors and engaged volunteers",
  iconName: "Heart" as const,
  problems: [
    {
      title: "One-Time Donors",
      description: "People give once but never become recurring monthly supporters",
    },
    {
      title: "Low Volunteer Conversion",
      description: "Lots of interest in volunteering, but few actually show up",
    },
    {
      title: "Grant Dependency",
      description: "You rely too heavily on grants instead of building sustainable donor base",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Impact-Focused Funnels",
      description: "Landing pages that showcase your mission and the tangible impact of donations",
    },
    {
      step: "02",
      title: "Multi-Channel Campaigns",
      description: "Reach potential donors through Facebook, Instagram, and Google Search",
    },
    {
      step: "03",
      title: "Engagement Nurture",
      description: "Automated email sequences convert one-time donors to monthly supporters",
    },
    {
      step: "04",
      title: "Volunteer Onboarding",
      description: "Streamlined process gets volunteers from interest to active participation",
    },
  ],
  results: [
    {
      metric: "50-150",
      description: "New donors monthly",
    },
    {
      metric: "30-40%",
      description: "Monthly recurring conversion",
    },
    {
      metric: "3-4x",
      description: "Increase in volunteer signups",
    },
  ],
}

export default function NonprofitsPage() {
  return <IndustryTemplate data={data} />
}
