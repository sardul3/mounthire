"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { subscribeToNewsletter } from "@/app/actions"
import SuccessModal from "@/components/SuccessModal"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const result = await subscribeToNewsletter(email)

    setIsSubmitting(false)

    if (result.success) {
      setEmail("")
      setShowSuccessModal(true)
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="relative h-10 w-10 mr-3">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mountHireLLClogo.jpg-Jk6L7zE8lW6NthRmByg2FNc466hSEz.jpeg"
                    alt="Mount Hire LLC"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <span className="text-xl font-bold">Mount Hire</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting top tech talent with innovative companies to build exceptional teams and advance careers.
              </p>
              <div className="flex space-x-4">
                {["linkedin", "twitter", "facebook", "instagram"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com/jobs/collections" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="https://roadmap.sh/full-stack" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="https://www.pluralsight.com/product/skills-assessment" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Skill Assessment
                  </a>
                </li>
                <li>
                  <a href="https://www.levels.fyi/?compare=JPMorgan%20Chase,Capital%20One,Microsoft&track=Software%20Engineer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              {/* Add your content for the third column */}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-4">Get the latest job listings and career advice delivered to your inbox.</p>
              <form onSubmit={handleSubscribe} className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Button 
                  type="submit" 
                  className="rounded-l-none bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <ArrowRight className="h-4 w-4 animate-pulse" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {currentYear} Mount Hire LLC. All rights reserved.</p>
              <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Successfully Subscribed!"
        description="Thank you for subscribing to our newsletter."
        type="newsletter"
      />
    </>
  )
}

