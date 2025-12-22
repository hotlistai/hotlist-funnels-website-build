import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-4">Last Updated: December 22, 2025</p>
          <p className="mb-4">By accessing or using the HOTLIST FUNNELS website and services, you agree to comply with and be bound by the following terms and conditions.</p>
          <h2 className="text-xl font-bold mt-8 mb-4">Service Description</h2>
          <p className="mb-4">HOTLIST FUNNELS provides lead generation and conversion system services. We do not guarantee specific revenue outcomes as they depend on various factors including market conditions.</p>
          <h2 className="text-xl font-bold mt-8 mb-4">User Obligations</h2>
          <p className="mb-4">Users must provide accurate information when using our funnels and must not use our services for any fraudulent or illegal activities.</p>
          <h2 className="text-xl font-bold mt-8 mb-4">Intellectual Property</h2>
          <p className="mb-4">All content, systems, and "engines" forged by HOTLIST FUNNELS are the intellectual property of HOTLIST FUNNELS or its licensors.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
