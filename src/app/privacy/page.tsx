import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-4">Last Updated: December 22, 2025</p>
          <p className="mb-4">At Hotlist Engine, we prioritize your privacy and are committed to protecting your personal data. This policy outlines how we handle information collected through our conversion systems.</p>
          <h2 className="text-xl font-bold mt-8 mb-4">Data Collection</h2>
          <p className="mb-4">We collect information provided voluntarily through our quiz funnels and contact forms, including names, email addresses, phone numbers, and industry-specific data.</p>
          <h2 className="text-xl font-bold mt-8 mb-4">Data Usage</h2>
          <p className="mb-4">Collected data is used solely to provide lead generation services, qualify prospects, and communicate with users regarding their inquiries.</p>
          <h2 className="text-xl font-bold mt-8 mb-4">Security</h2>
          <p className="mb-4">We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
