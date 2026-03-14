import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Real Estate Lead Generation | HOTLIST FUNNELS",
  description: "Stop paying Zillow for leads they already sold to 3 other agents. HOTLIST builds exclusive funnels that deliver buyers and sellers who only know your name.",
}

const data = {
  title: "Real Estate Lead Generation",
  subtitle: "Every day you don't follow up, your competitor does. HOTLIST closes the gap — automatically.",
  iconName: "Building2" as const,
  problems: [
    {
      title: "Zillow Dependency",
      description: "You're paying $500/mo for leads Zillow already sold to 3 other agents. The first call wins. You're rarely first.",
    },
    {
      title: "Speed-to-Lead Failure",
      description: "The first agent to respond wins 80% of deals. Your CRM wasn't built for that. Your new leads wait hours — and go cold.",
    },
    {
      title: "Feast-or-Famine Pipeline",
      description: "Your GCI swings $20k month to month. You can't hire, can't plan, can't grow. You need a machine that runs whether you're on the phone or not.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Exclusive Funnel Build",
      description: "We build landing pages that capture buyer and seller leads in your market — and route them only to you. No sharing.",
    },
    {
      step: "02",
      title: "Hyper-Local Ad Campaigns",
      description: "Facebook and Google ads targeting move-ready prospects within your zip codes. Not your county. Your zip codes.",
    },
    {
      step: "03",
      title: "AI Lead Scoring",
      description: "Every lead is scored for intent, timeline, and pre-approval status before it hits your CRM. No more chasing renters.",
    },
    {
      step: "04",
      title: "Speed-to-Lead Automation",
      description: "Hot leads trigger instant SMS + email follow-up within 90 seconds. You get notified. They get called. Deals get made.",
    },
  ],
  results: [
    {
      metric: "50-100+",
      description: "Exclusive qualified leads per month",
    },
    {
      metric: "< 90 sec",
      description: "Average lead response time",
    },
    {
      metric: "3-5x",
      description: "Return on ad spend",
    },
  ],
}

export default function RealEstatePage() {
  return <IndustryTemplate data={data} />
}
