"use client"

import { motion } from "framer-motion"
import { FileSearch, Users, CheckCircle, Award, ArrowRight } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Submit Your Profile",
    description: "Connect with us to create your profile and resume to get started with our personalized matching process.",
    icon: FileSearch,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Expert Matching",
    description:
      "Our team of specialists reviews your skills and experience to match you with the perfect opportunities.",
    icon: Users,
    color: "bg-indigo-600",
  },
  {
    id: 3,
    title: "Interview Preparation",
    description: "Receive personalized coaching and resources to help you excel in your interviews.",
    icon: CheckCircle,
    color: "bg-purple-600",
  },
  {
    id: 4,
    title: "Land Your Dream Job",
    description: "Accept an offer and start your new role with ongoing support from our team.",
    icon: Award,
    color: "bg-pink-600",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="process">
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
            Our Process
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our streamlined process helps you find the perfect job match in four simple steps
          </motion.p>
        </motion.div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-200"></div>

            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center h-full">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center h-full flex flex-col">
                      <div className="flex justify-center mb-4">
                        <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 flex-grow">{step.description}</p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white p-5 rounded-xl shadow-md flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg mr-4`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

