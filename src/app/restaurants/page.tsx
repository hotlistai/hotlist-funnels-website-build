import { IndustryTemplate } from "@/components/industry-template"
import { UtensilsCrossed } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Staffing Funnels | Hotlist Engine",
  description: "Build a pipeline of qualified kitchen and service staff with our done-for-you recruiting system.",
}

const data = {
  title: "Restaurant Staffing Funnels",
  subtitle: "Build a reliable pipeline of qualified kitchen and service staff",
  icon: UtensilsCrossed,
  problems: [
    {
      title: "Constant Turnover",
      description: "You're always hiring because staff comes and goes every few months",
    },
    {
      title: "No-Show Interviews",
      description: "Applicants ghost or don't show up to scheduled interviews",
    },
    {
      title: "Poor Job Board ROI",
      description: "Indeed and other job boards cost a fortune with mediocre results",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Position-Specific Pages",
      description: "Dedicated landing pages for servers, cooks, bartenders, and managers",
    },
    {
      step: "02",
      title: "Local Targeting",
      description: "Facebook and Instagram ads targeting job seekers in your area",
    },
    {
      step: "03",
      title: "Pre-Screening",
      description: "Automated questions filter for experience, availability, and culture fit",
    },
    {
      step: "04",
      title: "Interview Scheduling",
      description: "Qualified candidates book directly into your interview calendar",
    },
  ],
  results: [
    {
      metric: "40-80",
      description: "Qualified applicants monthly",
    },
    {
      metric: "70%+",
      description: "Interview show-up rate",
    },
    {
      metric: "2-4 weeks",
      description: "Average time to fill positions",
    },
  ],
}

export default function RestaurantsPage() {
  return <IndustryTemplate data={data} />
}
