import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nonprofit Donor Engagement | HOTLIST FUNNELS",
  description: "Your donors gave once and disappeared because no one followed up. HOTLIST turns one-time gifts into monthly commitments — and silent contacts into active supporters.",
}

const data = {
  title: "Nonprofit Donor Engagement",
  subtitle: "Your donors gave once and disappeared because no one followed up. Let's change that.",
  iconName: "Heart" as const,
  problems: [
    {
      title: "The Silent CRM",
      description: "You have 2,000 contacts. They haven't heard from you in 8 months. Not because you don't care — because you don't have a system. That silence is costing you donors.",
    },
    {
      title: "Volunteer No-Shows",
      description: "40 people signed up for Saturday. 8 showed up. You ordered lunch for 40. Volunteer intent is high. Your follow-up isn't converting it into action.",
    },
    {
      title: "Grant Cliff",
      description: "Your largest grant expires in 6 months. You have no recurring revenue to fall back on. You're one decision letter away from a budget crisis.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Impact-First Funnels",
      description: "Landing pages that translate your mission into specific, tangible outcomes. Not 'support our cause' — 'your $25/mo feeds a family of four for a week.'",
    },
    {
      step: "02",
      title: "Multi-Channel Campaigns",
      description: "Facebook, Instagram, and Google campaigns targeting aligned donors by interest, giving history, and proximity. We find people who already want to give.",
    },
    {
      step: "03",
      title: "Monthly Giving Nurture",
      description: "Automated email sequences convert one-time donors into monthly supporters over 30 days. Impact updates, stories, and a clear recurring gift ask.",
    },
    {
      step: "04",
      title: "Volunteer Activation System",
      description: "Streamlined onboarding that moves volunteers from 'I signed up' to 'I showed up' with reminders, role details, and logistics — all automated.",
    },
  ],
  results: [
    {
      metric: "50-150",
      description: "New donors acquired monthly",
    },
    {
      metric: "30-40%",
      description: "One-time to monthly donor conversion",
    },
    {
      metric: "3-4x",
      description: "Increase in volunteer show-up rate",
    },
  ],
}

export default function NonprofitsPage() {
  return <IndustryTemplate data={data} />
}
