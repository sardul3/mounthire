"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamic imports with no SSR for interactive components
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gradient-to-r from-blue-600 to-indigo-600" />
})

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50" />
})

const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-white" />
})

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  ssr: false,
  loading: () => <div className="h-96 bg-white" />
})

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-white" />
})

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50" />
})

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-900" />
})

export default function Page() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-screen bg-gradient-to-r from-blue-600 to-indigo-600" />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-white" />}>
        <StatsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-white" />}>
        <HowItWorks />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-white" />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50" />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-900" />}>
        <Footer />
      </Suspense>
    </main>
  )
}

