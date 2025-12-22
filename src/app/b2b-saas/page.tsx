import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B SaaS Lead Generation | HOTLIST FUNNELS",
  description: "Identify and convert decision-makers with high-velocity SaaS funnels and lead intelligence.",
}

const data = {
  title: "B2B SaaS Lead Generation",
  subtitle: "Identify and convert decision-makers on autopilot",
  iconName: "Building2" as const,
  problems: [
    {
      title: "Silent Funnels",
      description: "Visitors land on your site but never sign up for a demo or trial",
    },
    {
      title: "Poor Lead Quality",
      description: "You're getting signups, but they're not from your ideal customer profile",
    },
    {
      title: "Long Sales Cycles",
      description: "Deals get stuck in the pipeline for months without moving forward",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Intent Mapping",
      description: "We use account-based marketing data to find decision-makers at target companies",
    },
    {
      step: "02",
      title: "Precision Funnels",
      description: "Landing pages tailored to the software buyer's psychology and needs",
    },
    {
      step: "03",
      title: "AI Lead Scoring",
      description: "Automatically qualify leads based on firmographics and tech-stack intent",
    },
    {
      step: "04",
      title: "Direct demo booking",
      description: "Hyper-qualified leads route directly to your sales team's calendar",
    },
  ],
  results: [
    {
      metric: "40-70",
      description: "Qualified demos monthly",
    },
    {
      metric: "80%+",
      description: "ICP qualification rate",
    },
    {
      metric: "$75-125",
      description: "Cost per qualified demo",
    },
  ],
}

export default function B2BSaaSPage() {
  return <IndustryTemplate data={data} />
}
