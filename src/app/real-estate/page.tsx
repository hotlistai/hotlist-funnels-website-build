import { IndustryTemplate } from "@/components/industry-template"
import { Building2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Real Estate Lead Generation | Hotlist Engine",
  description: "Convert property leads into qualified buyers and sellers with our done-for-you lead generation system.",
}

const data = {
  title: "Real Estate Lead Generation",
  subtitle: "Convert property leads into qualified buyers and sellers on autopilot",
  icon: Building2,
  problems: [
    {
      title: "Low-Quality Leads",
      description: "You're getting leads, but they're tire-kickers, not ready to buy or sell",
    },
    {
      title: "Wasted Ad Spend",
      description: "Your Facebook and Google ads aren't converting into actual appointments",
    },
    {
      title: "Inconsistent Pipeline",
      description: "Some months are feast, others are famine. You need predictable lead flow",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Custom Funnel Build",
      description: "We create high-converting landing pages optimized for buyer and seller leads in your market",
    },
    {
      step: "02",
      title: "Ad Campaign Launch",
      description: "Targeted campaigns across Facebook, Google, and Instagram reaching ready-to-move prospects",
    },
    {
      step: "03",
      title: "AI Lead Scoring",
      description: "Our AI qualifies every lead, routing hot prospects directly to your CRM",
    },
    {
      step: "04",
      title: "Continuous Optimization",
      description: "We test, refine, and scale what works to maximize your ROI",
    },
  ],
  results: [
    {
      metric: "50-100+",
      description: "Qualified leads per month",
    },
    {
      metric: "3-5x",
      description: "Return on ad spend",
    },
    {
      metric: "24-48hrs",
      description: "Average lead response time",
    },
  ],
}

export default function RealEstatePage() {
  return <IndustryTemplate data={data} />
}
