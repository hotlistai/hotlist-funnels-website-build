import { IndustryTemplate } from "@/components/industry-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Staffing Funnels | HOTLIST FUNNELS",
  description: "Your next dinner rush starts in 48 hours and you're still short two servers. HOTLIST puts qualified applicants in your inbox today — no job boards required.",
}

const data = {
  title: "Restaurant Staffing Funnels",
  subtitle: "Your next rush starts in 48 hours and you're still short two servers. HOTLIST fixes that today.",
  iconName: "UtensilsCrossed" as const,
  problems: [
    {
      title: "The Interview Ghost",
      description: "You post the job, screen the applicants, schedule the interview — and nobody shows. You've done all the work for nothing, and the shift is still uncovered.",
    },
    {
      title: "The Indeed Trap",
      description: "$300/mo on job boards. 80 applications. 3 that show up. 1 that lasts 2 weeks. You're not hiring — you're running a revolving door with a monthly subscription.",
    },
    {
      title: "Perpetual Understaffing",
      description: "Every shift is short-handed. Your best people are burning out picking up the slack. And you're about to lose them too if something doesn't change.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Role-Specific Landing Pages",
      description: "Dedicated pages for servers, cooks, bartenders, and shift leads — each one speaking directly to what that worker wants: pay, schedule flexibility, and culture.",
    },
    {
      step: "02",
      title: "Hyper-Local Social Recruiting",
      description: "Facebook and Instagram campaigns reaching active job-seekers within 10 miles of your location. We target by work history and life stage — not just zip code.",
    },
    {
      step: "03",
      title: "Automated Pre-Screening",
      description: "Every applicant answers availability, experience, and culture-fit questions before you ever see their name. You only see people worth your time.",
    },
    {
      step: "04",
      title: "One-Click Interview Scheduling",
      description: "Qualified candidates book directly into your interview calendar. Two SMS reminders go out automatically. Show-up rates go from 30% to 70%+.",
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
      description: "Average time to fill open positions",
    },
  ],
}

export default function RestaurantsPage() {
  return <IndustryTemplate data={data} />
}
