"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, Users, TrendingUp, Award, Briefcase } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Backend Software Engineers",
    description: "Market and place top-tier developers skilled in modern frameworks and languages such as Spring Boot, Java, Python and more.",
    color: "bg-blue-500",
  },
  {
    icon: Database,
    title: "Data Analyst",
    description: "Train and help land a top-tier role for an analyst who transforms complex data into actionable business insights.",
    color: "bg-indigo-500",
  },
  {
    icon: Server,
    title: "Full-Stack Development",
    description: "Recruit versatile developers proficient in both front-end and back-end technologies.",
    color: "bg-purple-500",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Source AI specialists who build intelligent systems that learn and adapt.",
    color: "bg-pink-500",
  },
  {
    icon: Users,
    title: "Sailpoint Engineers",
    description: "Source Sailpoint engineers who are experts in identity and access management.",
    color: "bg-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Training",
    description: "Provide training and development services to help candidates and employees grow their skills and knowledge.",
    color: "bg-amber-500",
  },
  {
    icon: Award,
    title: "Skills Assessment",
    description: "Evaluate technical abilities and prepare candidates for interviews.",
    color: "bg-emerald-500",
  },
  {
    icon: Briefcase,
    title: "Job Support",
    description: "Provide job support services to help candidates and employees find and keep their next role.",
    color: "bg-rose-500",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-20">
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
            What We Offer
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Expertise Areas
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We specialize in connecting top talent with leading companies across these technology domains
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`h-2 ${service.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

