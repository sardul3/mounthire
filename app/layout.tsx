import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import type React from "react" // Import React
import JsonLd from "@/components/JsonLd"
import { reportWebVitals as reportWebVitalsUtil } from "@/lib/performance"
import './globals.css'
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font display
  preload: true,
})

export const metadata = {
  title: "Mount Hire LLC - Expert IT Career Guidance",
  description:
    "Boost your IT career with expert guidance in Software Engineering, Data Analysis, and Full-Stack Development.",
  generator: 'v0.dev',
  keywords: [
    "IT career guidance", 
    "software engineering career", 
    "data analysis jobs", 
    "full-stack development career", 
    "tech job placement", 
    "IT career coaching",
    "tech career mentoring"
  ],
  authors: [{ name: "Mount Hire LLC" }],
  creator: "Mount Hire LLC",
  publisher: "Mount Hire LLC",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  themeColor: '#2563eb',
  openGraph: {
    title: "Mount Hire LLC - Expert IT Career Guidance",
    description: "Boost your IT career with expert guidance in Software Engineering, Data Analysis, and Full-Stack Development.",
    url: "https://mounthire.com",
    siteName: "Mount Hire LLC",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mountHireLLClogo.jpg-Jk6L7zE8lW6NthRmByg2FNc466hSEz.jpeg",
        width: 1200,
        height: 630,
        alt: "Mount Hire LLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Hire LLC - Expert IT Career Guidance",
    description: "Boost your IT career with expert guidance in Software Engineering, Data Analysis, and Full-Stack Development.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mountHireLLClogo.jpg-Jk6L7zE8lW6NthRmByg2FNc466hSEz.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Export a reportWebVitals function to measure performance
export function reportWebVitals(metric: any) {
  reportWebVitalsUtil(metric);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  )
}
