import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import type React from "react" // Import React
import JsonLd from "@/components/JsonLd"

const inter = Inter({ subsets: ["latin"] })

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'