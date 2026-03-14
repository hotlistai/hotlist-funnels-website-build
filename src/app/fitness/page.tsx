import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gym Member Acquisition | HOTLIST FUNNELS",
  description: "New members cancel in 90 days because you never had a system to keep them. HOTLIST builds the acquisition and retention engine your gym has been missing.",
}

const data = {
  title: "Gym Member Acquisition",
  subtitle: "New members cancel in 90 days because you never had a system to keep them. HOTLIST builds that system.",
  iconName: "Dumbbell" as const,
  problems: [
    {
      title: "The Trial Leak",
      description: "60% of free trial sign-ups never set foot in your gym. You're running ads, paying for leads, and watching most of them evaporate before the first visit.",
    },
    {
      title: "The January Mirage",
      description: "The New Year surge feels great — until February when half of them cancel. You scaled your expenses for a member count that doesn't exist anymore.",
    },
    {
      title: "Zero Referral Engine",
      description: "Your best members love you. They just never think to refer their friends — because you never built a system that makes it easy, automatic, and rewarding to do so.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Trial Offer Funnels",
      description: "High-converting pages promoting your free week, intro class, or transformation challenge — built for the specific fitness goal of whoever sees the ad.",
    },
    {
      step: "02",
      title: "Fitness-Intent Targeting",
      description: "Facebook and Instagram campaigns reaching people who just searched for gyms, follow fitness content, or recently moved into your area. Hot audiences only.",
    },
    {
      step: "03",
      title: "Show-Up Automation",
      description: "SMS + email sequences that confirm the trial visit, remind 24 hours before, and follow up after the first class. Attendance goes up. Conversions follow.",
    },
    {
      step: "04",
      title: "Membership Conversion Campaigns",
      description: "Targeted follow-up campaigns move trial members to paid memberships in the first 7 days — before the initial motivation window closes.",
    },
  ],
  results: [
    {
      metric: "100-200",
      description: "Trial sign-ups monthly",
    },
    {
      metric: "40-50%",
      description: "Trial-to-paid member conversion",
    },
    {
      metric: "25-35%",
      description: "Increase in monthly recurring revenue",
    },
  ],
}

export default function FitnessPage() {
  return <IndustryTemplate data={data} />
}
