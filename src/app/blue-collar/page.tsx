import { IndustryTemplate } from "@/components/industry-template"
import { HardHat } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blue Collar Recruiting | Hotlist Engine",
  description: "Recruit reliable workers for manufacturing and warehousing with our done-for-you recruiting system.",
}

const data = {
  title: "Blue Collar Recruiting",
  subtitle: "Recruit reliable workers for manufacturing, warehousing, and trades",
    icon: <HardHat className="h-16 w-16" />,
  problems: [
    {
      title: "High Turnover",
      description: "Workers quit after a few weeks or don't show up for their first shift",
    },
    {
      title: "Expensive Agencies",
      description: "Staffing agencies charge huge fees and deliver inconsistent quality",
    },
    {
      title: "Slow Hiring Process",
      description: "It takes weeks to fill positions, leaving shifts understaffed",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Role-Specific Pages",
      description: "Landing pages highlighting pay, benefits, and advancement opportunities",
    },
    {
      step: "02",
      title: "Targeted Campaigns",
      description: "Facebook and Google ads reaching blue collar workers in your area",
    },
    {
      step: "03",
      title: "Qualification Screening",
      description: "Automated questions verify experience, certifications, and availability",
    },
    {
      step: "04",
      title: "Interview Scheduling",
      description: "Pre-qualified candidates book directly for phone or in-person interviews",
    },
  ],
  results: [
    {
      metric: "50-100+",
      description: "Qualified applicants monthly",
    },
    {
      metric: "75%+",
      description: "Meeting minimum requirements",
    },
    {
      metric: "1-2 weeks",
      description: "Average time to fill roles",
    },
  ],
}

export default function BlueCollarPage() {
  return <IndustryTemplate data={data} />
}
