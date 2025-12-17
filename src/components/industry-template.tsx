import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { MotionDiv, MotionSection, MotionFadeIn } from "@/components/motion-wrapper"
import { ReactNode } from "react"

interface IndustryData {
  title: string
  subtitle: string
  icon: ReactNode
  problems: Array<{ title: string; description: string }>
  howItWorks: Array<{ step: string; title: string; description: string }>
  results: Array<{ metric: string; description: string }>
}

const pricingFeatures = [
  "Custom landing page design",
  "AI-powered lead qualification",
  "Multi-channel ad management",
  "CRM integration setup",
  "Real-time analytics dashboard",
  "Monthly strategy calls",
  "A/B testing & optimization",
  "Dedicated account manager",
]

export function IndustryTemplate({ data }: { data: IndustryData }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <MotionSection className="text-center max-w-4xl mx-auto">
            <MotionFadeIn className="mb-6 flex justify-center">
              {data.icon}
            </MotionFadeIn>
            <MotionFadeIn>
              <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight mb-6">
                {data.title}
              </h1>
            </MotionFadeIn>
            <MotionFadeIn>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {data.subtitle}
              </p>
            </MotionFadeIn>
            <MotionFadeIn>
              <Link href="/contact">
                <Button size="lg" className="text-lg h-12 px-8">
                  Get Started
                </Button>
              </Link>
            </MotionFadeIn>
          </MotionSection>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MotionSection className="text-center mb-16">
            <MotionFadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
                The Problem
              </h2>
            </MotionFadeIn>
            <MotionFadeIn>
              <p className="text-xl text-muted-foreground">
                Challenges you face every day
              </p>
            </MotionFadeIn>
          </MotionSection>

          <MotionSection className="grid md:grid-cols-3 gap-8">
            {data.problems.map((problem, i) => (
              <MotionFadeIn key={i}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{problem.description}</CardDescription>
                  </CardContent>
                </Card>
              </MotionFadeIn>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="py-24 bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MotionSection className="text-center mb-16">
            <MotionFadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
                How It Works
              </h2>
            </MotionFadeIn>
            <MotionFadeIn>
              <p className="text-xl text-muted-foreground">
                Our proven 4-step process
              </p>
            </MotionFadeIn>
          </MotionSection>

          <MotionSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.howItWorks.map((item, i) => (
              <MotionFadeIn key={i}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-5xl font-serif font-semibold text-muted-foreground/20 mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </MotionFadeIn>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MotionSection className="text-center mb-16">
            <MotionFadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
                What You Get
              </h2>
            </MotionFadeIn>
            <MotionFadeIn>
              <p className="text-xl text-muted-foreground">
                Real results that matter
              </p>
            </MotionFadeIn>
          </MotionSection>

          <MotionSection className="grid md:grid-cols-3 gap-8">
            {data.results.map((result, i) => (
              <MotionFadeIn key={i}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="text-4xl font-serif font-semibold mb-2">{result.metric}</div>
                    <CardDescription className="text-base">{result.description}</CardDescription>
                  </CardHeader>
                </Card>
              </MotionFadeIn>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="py-24 bg-muted/50 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <MotionSection className="text-center">
            <MotionFadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
                Simple, Transparent Pricing
              </h2>
            </MotionFadeIn>
            <MotionFadeIn>
              <p className="text-xl text-muted-foreground mb-12">
                One price, everything included
              </p>
            </MotionFadeIn>

            <MotionFadeIn>
              <Card className="border-2">
                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    <div className="text-5xl font-serif font-semibold mb-2">$2,500</div>
                    <div className="text-muted-foreground">One-time setup</div>
                  </div>
                  <div className="text-4xl font-serif font-semibold mb-2">$750/mo</div>
                  <CardDescription className="text-lg">Full service management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pricingFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-left">{feature}</span>
                    </div>
                  ))}
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button size="lg" className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </MotionFadeIn>
          </MotionSection>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <MotionSection>
            <MotionFadeIn>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                Ready to Get Started?
              </h2>
            </MotionFadeIn>
            <MotionFadeIn>
              <p className="text-xl text-muted-foreground mb-8">
                Book a free demo to see how we can transform your lead generation
              </p>
            </MotionFadeIn>
            <MotionFadeIn>
              <Link href="/contact">
                <Button size="lg" className="text-lg h-12 px-8">
                  Book Your Demo
                </Button>
              </Link>
            </MotionFadeIn>
          </MotionSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
