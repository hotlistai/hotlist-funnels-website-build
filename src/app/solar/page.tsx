import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solar Installation Lead Generation | HOTLIST FUNNELS",
  description: "That homeowner requested a quote 72 hours ago. Your competitor already called. HOTLIST puts you first — with pre-qualified, homeowner-verified solar appointments.",
}

const data = {
  title: "Solar Installation Leads",
  subtitle: "That homeowner requested a quote 72 hours ago. Your competitor already called. Let's fix that.",
  iconName: "Sun" as const,
  problems: [
    {
      title: "You're Buying Renter Leads",
      description: "Nearly 40% of solar leads you're paying for are renters who can't sign. You're burning your CPL budget on people who literally cannot say yes.",
    },
    {
      title: "A Saturated Cold Market",
      description: "Every homeowner in your area has been called 8 times. They ignore unknown numbers. Your competitor pre-warmed them with content. You didn't.",
    },
    {
      title: "Set Appointments That Ghost",
      description: "You confirm Thursday at 2pm. You drive out. Nobody answers the door. Your setter's batting .500 and your close rate is suffering for it.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Homeowner-Only Targeting",
      description: "We layer homeownership data, high-utility-bill signals, and solar incentive awareness into every campaign. Renters never see your ads.",
    },
    {
      step: "02",
      title: "Savings-First Funnels",
      description: "Landing pages built around their electric bill, not your product. Prospects self-qualify by entering their monthly usage. Hot intent, every time.",
    },
    {
      step: "03",
      title: "Financial Pre-Screening",
      description: "AI screening filters credit range, homeownership status, and roof suitability before the lead ever reaches your team.",
    },
    {
      step: "04",
      title: "Confirmed Appointment Setting",
      description: "Two-step confirmation via SMS + email before every appointment. No more no-shows eating your windshield time.",
    },
  ],
  results: [
    {
      metric: "30-50",
      description: "Confirmed homeowner appointments monthly",
    },
    {
      metric: "60%+",
      description: "Homeowner qualification rate",
    },
    {
      metric: "$50-75",
      description: "Cost per confirmed appointment",
    },
  ],
}

export default function SolarPage() {
  return <IndustryTemplate data={data} />
}
