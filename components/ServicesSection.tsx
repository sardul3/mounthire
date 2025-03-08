"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Code,
    title: "Software Engineering",
    description: "Master the art of building robust and scalable software solutions.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Unlock insights from complex datasets and drive data-informed decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    icon: Server,
    title: "Full-Stack Development",
    description: "Become proficient in both front-end and back-end technologies.",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800&auto=format&fit=crop&q=60",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Dive into AI and create intelligent systems that learn and adapt.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Expertise Areas
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 group">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white mr-2" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </motion.div>
              </div>
              <motion.div
                className="p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

