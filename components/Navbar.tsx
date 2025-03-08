"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="relative h-16 w-16 mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mountHireLLClogo.jpg-Jk6L7zE8lW6NthRmByg2FNc466hSEz.jpeg"
            alt="Mount Hire LLC"
            fill
            className="object-contain rounded-full border-2 border-blue-600 p-1"
            priority
          />
        </Link>
      </nav>
    </motion.header>
  )
}

