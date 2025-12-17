import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gym Member Acquisition | Hotlist Engine",
  description: "Turn trial members into long-term gym commitments with our done-for-you conversion system.",
}

const data = {
  title: "Gym Member Acquisition",
  subtitle: "Turn trial members into long-term committed gym members",
  iconName: "Dumbbell" as const,
  problems: [
    {
      title: "Trial No-Shows",
      description: "People sign up for free trials but never actually show up",
    },
    {
      title: "Low Conversion Rate",
      description: "Trial members visit once or twice and never commit to a membership",
    },
    {
      title: "High Churn",
      description: "Members cancel after a few months, making growth nearly impossible",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Trial Offer Funnels",
      description: "Compelling landing pages promoting free week trials and intro classes",
    },
    {
      step: "02",
      title: "Local Targeting",
      description: "Facebook and Instagram ads reaching fitness enthusiasts in your area",
    },
    {
      step: "03",
      title: "Automated Reminders",
      description: "SMS and email sequences ensure trial members actually show up",
    },
    {
      step: "04",
      title: "Conversion Optimization",
      description: "Follow-up campaigns convert trial members to paying memberships",
    },
  ],
  results: [
    {
      metric: "100-200",
      description: "Trial signups monthly",
    },
    {
      metric: "40-50%",
      description: "Trial to paid conversion",
    },
    {
      metric: "25-35%",
      description: "Increase in monthly revenue",
    },
  ],
}

export default function FitnessPage() {
  return <IndustryTemplate data={data} />
}
