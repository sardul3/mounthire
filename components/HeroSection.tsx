"use client"

import { useCallback, useMemo, useState, useEffect, useRef } from "react"
import { motion, LazyMotion, domAnimation, useAnimation } from "framer-motion"
import { ArrowRight, Code, Database, Server, Shield as Security } from "lucide-react"
import { Button } from "@/components/ui/button"
import { throttle } from "@/lib/performance"

const techIcons = [
  { icon: Security, label: "IAM Engineering" },
  { icon: Database, label: "Data Analysis" },
  { icon: Server, label: "Full-Stack Development" },
]

export default function HeroSection() {
  // Animation controls for each element
  const titleControls = useAnimation()
  const descriptionControls = useAnimation()
  const iconsControls = useAnimation()
  const buttonControls = useAnimation()
  const backgroundControls = useAnimation()
  
  // Track if animations have played
  const animationsPlayed = useRef(false)
  
  // Memoize the tech icons to prevent unnecessary re-renders
  const memoizedTechIcons = useMemo(() => techIcons, []);
  
  // Use useCallback to memoize the scroll function
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, []);

  // Handle scroll to reset animations when at top
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY
      
      // If scrolled to top and animations have played before, reset them
      if (currentScrollY <= 5 && animationsPlayed.current) {
        // Reset all animations
        titleControls.start({ 
          opacity: 0, 
          y: -50,
          transition: { duration: 0.3 }
        }).then(() => {
          titleControls.start({ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          })
        })
        
        descriptionControls.start({ 
          opacity: 0, 
          y: -30,
          transition: { duration: 0.3 }
        }).then(() => {
          descriptionControls.start({ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
          })
        })
        
        iconsControls.start({ 
          opacity: 0, 
          y: 30,
          transition: { duration: 0.3 }
        }).then(() => {
          iconsControls.start({ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
          })
        })
        
        buttonControls.start({ 
          opacity: 0, 
          y: 30,
          transition: { duration: 0.3 }
        }).then(() => {
          buttonControls.start({ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, delay: 0.8, ease: "easeOut" }
          })
        })
        
        backgroundControls.start({ 
          opacity: 0,
          transition: { duration: 0.3 }
        }).then(() => {
          backgroundControls.start({ 
            opacity: 1,
            transition: { duration: 1.5, delay: 0.5 }
          })
        })
      }
    }, 50),
    [titleControls, descriptionControls, iconsControls, buttonControls, backgroundControls]
  )

  // Set up initial animations and scroll listener
  useEffect(() => {
    // Start initial animations
    titleControls.start({ opacity: 1, y: 0 })
    descriptionControls.start({ opacity: 1, y: 0 })
    iconsControls.start({ opacity: 1, y: 0 })
    buttonControls.start({ opacity: 1, y: 0 })
    backgroundControls.start({ opacity: 1 })
    
    // Mark animations as played
    animationsPlayed.current = true
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [titleControls, descriptionControls, iconsControls, buttonControls, backgroundControls, handleScroll])

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Use LazyMotion to load animations only when needed */}
          <LazyMotion features={domAnimation}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={titleControls}
            >
              Boost Your IT Career with Expert Guidance
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={descriptionControls}
            >
              We specialize in helping candidates upskill, find jobs, and thrive in IT roles such as:
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={iconsControls}
            >
              {memoizedTechIcons.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="flex items-center bg-white/10 rounded-full px-4 py-2 cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <tech.icon className="w-5 h-5 mr-2" />
                  <span>{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={buttonControls}
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                onClick={scrollToContact}
                aria-label="Scroll to contact form"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"
              initial={{ opacity: 0 }}
              animate={backgroundControls}
            />
          </LazyMotion>
        </div>
      </div>
    </section>
  )
}

