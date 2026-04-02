import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotlistfunnels.com"),
  title: {
    default: "HOTLIST FUNNELS | High-Velocity Lead Conversion",
    template: "%s | HOTLIST FUNNELS",
  },
  description: "We build precision-engineered lead funnels that launch in 7 days and convert. Speed over sprawl. Clarity over complexity. 300+ funnels deployed.",
  keywords: ["lead generation funnels", "conversion funnels", "lead capture system", "hotlist funnels", "sales funnel builder"],
  
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
openGraph: {
  images: [{ url: "/og-image.png" }],
type: "website",
    siteName: "HOTLIST FUNNELS",
    url: "https://hotlistfunnels.com",
    title: "HOTLIST FUNNELS | High-Velocity Lead Conversion",
    description: "We build precision-engineered lead funnels that launch in 7 days and convert. Speed over sprawl. Clarity over complexity.",
  },
  twitter: {
    images: ["/og-image.png"],
card: "summary_large_image",
    title: "HOTLIST FUNNELS | High-Velocity Lead Conversion",
    description: "We build precision-engineered lead funnels that launch in 7 days and convert.",
  },
  alternates: {
    canonical: "https://hotlistfunnels.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hotlistfunnels.com/#organization",
      name: "HOTLIST FUNNELS",
      url: "https://hotlistfunnels.com",
      description: "Precision-engineered lead funnels that launch in 7 days. 300+ funnels deployed.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://hotlistfunnels.com/#website",
      url: "https://hotlistfunnels.com",
      name: "HOTLIST FUNNELS",
      publisher: {
        "@id": "https://hotlistfunnels.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QM66K4XY4D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QM66K4XY4D');
          `}
        </Script>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f4bbabc5-4183-4b63-a9ae-a383201c84e5"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "HOTLIST FUNNELS", "version": "2.0.0"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
