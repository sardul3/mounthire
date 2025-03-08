import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import StatsSection from "@/components/StatsSection"
import FAQSection from "@/components/FAQSection"
import ContactSection from "@/components/ContactSection"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

