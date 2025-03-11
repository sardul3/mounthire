"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Send, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { sendEmail } from "@/app/actions"
import SuccessModal from "@/components/SuccessModal"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    setIsSubmitting(false)

    if (result.success) {
      setShowSuccessModal(true)
      // Safely reset the form using the ref
      if (formRef.current) {
        formRef.current.reset()
      }
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <section id="contact" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Us
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Whether you're looking for your next opportunity or seeking talent, we're here to help
            </motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-blue-600 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  <motion.div className="flex items-start space-x-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Our Location</h4>
                      <p className="text-blue-100">
                        123 Tech Avenue, Suite 400
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start space-x-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-blue-100">
                        <a href="tel:3182677421" className="hover:text-white transition-colors">
                          (318) 267-7421
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start space-x-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-blue-100">
                        <a href="mailto:hr@mounthire.com" className="hover:text-white transition-colors">
                          hr@mounthire.com
                        </a>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start space-x-4" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Working Hours</h4>
                      <p className="text-blue-100">
                        Monday - Friday: 9AM - 6PM
                        <br />
                        Saturday: 10AM - 2PM
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        className="bg-gray-50 border-gray-200 focus-visible:ring-blue-500"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        className="bg-gray-50 border-gray-200 focus-visible:ring-blue-500"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        disabled={isSubmitting}
                        className="bg-gray-50 border-gray-200 focus-visible:ring-blue-500"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Desired Position
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        disabled={isSubmitting}
                        className="bg-gray-50 border-gray-200 focus-visible:ring-blue-500"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us about your experience and goals
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-50 border-gray-200 focus-visible:ring-blue-500"
                      placeholder="Include your experience, skills, and career goals..."
                    />
                  </motion.div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message Sent Successfully!"
        description="We've received your message and will get back to you soon."
        type="contact"
      />
    </>
  )
}

