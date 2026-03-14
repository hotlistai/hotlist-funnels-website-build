import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blue Collar Recruiting | HOTLIST FUNNELS",
  description: "The best trade workers aren't on Indeed. They're on Facebook, waiting to hear from a company worth working for. HOTLIST finds them and gets them through your door.",
}

const data = {
  title: "Blue Collar Recruiting",
  subtitle: "The best trade workers aren't on Indeed. They're waiting to hear from a company worth working for.",
  iconName: "HardHat" as const,
  problems: [
    {
      title: "First-Week Dropoffs",
      description: "They pass the interview, onboard Monday, and quit by Friday. You wasted two weeks of recruiting to add zero headcount. And now you're back to square one.",
    },
    {
      title: "The Agency Markup Trap",
      description: "Staffing agencies charge 25-30% markup and send you workers other shops already rejected. You're paying a premium for their leftovers.",
    },
    {
      title: "Skills Mismatch at Hire",
      description: "You post forklift operator. You hire someone who drove one in 2018. They fail the floor test day one. Your HR team is doing interviews, not work.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Role-Specific Recruiting Pages",
      description: "Landing pages that lead with pay rate, schedule, benefits, and advancement — the four things trade workers actually care about. Not corporate fluff.",
    },
    {
      step: "02",
      title: "Trade Worker Targeting",
      description: "Facebook and Google campaigns reaching active blue-collar workers in your area, filtered by work history, trade experience, and location radius.",
    },
    {
      step: "03",
      title: "Hard-Skills Pre-Screening",
      description: "Automated questions verify certifications, years of experience, equipment familiarity, and shift availability before you spend 5 minutes on a phone screen.",
    },
    {
      step: "04",
      title: "Fast-Track Interview Scheduling",
      description: "Pre-qualified candidates self-schedule phone or in-person interviews. Confirmation + reminder SMS cuts no-shows down to almost zero.",
    },
  ],
  results: [
    {
      metric: "50-100+",
      description: "Qualified applicants monthly",
    },
    {
      metric: "75%+",
      description: "Meeting your hard-skills criteria",
    },
    {
      metric: "1-2 weeks",
      description: "Average time to fill open roles",
    },
  ],
}

export default function BlueCollarPage() {
  return <IndustryTemplate data={data} />
}
