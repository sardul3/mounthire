"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does the program typically take?",
    answer:
      "Most students complete their chosen track within 3-6 months, depending on their prior experience and time commitment.",
  },
  {
    question: "Do you offer job placement guarantees?",
    answer:
      "While we don't offer guarantees, our career services team works tirelessly to connect graduates with our hiring partners.",
  },
  {
    question: "Can I enroll if I have no prior coding experience?",
    answer:
      "We offer tracks suitable for complete beginners, as well as more advanced courses for those with some experience.",
  },
  {
    question: "What kind of support do you offer after graduation?",
    answer:
      "We provide ongoing career support, including resume reviews, interview preparation, and access to our alumni network.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find answers to common questions about our program
        </motion.p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.button
        className="flex justify-between items-center w-full text-left p-4 bg-mount-blue-50 rounded-lg focus:outline-none hover:bg-mount-blue-100 transition-colors duration-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-mount-blue-600" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-white rounded-lg border border-mount-blue-100"
          >
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

