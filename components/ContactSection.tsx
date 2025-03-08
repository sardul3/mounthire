"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { motion, LazyMotion, domAnimation, m } from "framer-motion"
import { Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { sendEmail } from "@/app/actions"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  // Use useCallback to memoize the submit handler
  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      const result = await sendEmail(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        })

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
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [toast]);

  // Precompute animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-20 bg-mount-blue-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <LazyMotion features={domAnimation}>
          <m.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </m.h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            <m.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" name="name" required className="bg-white text-black" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required className="bg-white text-black" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required className="bg-white text-black" />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </m.div>
            <m.div
              className="flex-1 flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={containerVariants}
            >
              <m.div
                className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform"
                variants={itemVariants}
              >
                <div className="bg-mount-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-mount-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:3182677421" className="hover:text-mount-blue-600 transition-colors">
                      (318) 267-7421
                    </a>
                  </p>
                </div>
              </m.div>
              <m.div
                className="flex items-center space-x-4 cursor-pointer hover:scale-105 transition-transform"
                variants={itemVariants}
              >
                <div className="bg-mount-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-mount-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:hr@mounthire.com" className="hover:text-mount-blue-600 transition-colors">
                      hr@mounthire.com
                    </a>
                  </p>
                </div>
              </m.div>
            </m.div>
          </div>
        </LazyMotion>
      </div>
    </section>
  )
}

