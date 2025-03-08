"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const stats = [
  { label: "Graduates Placed", value: 1000, suffix: "+" },
  { label: "Average Salary Increase", value: 45, suffix: "%" },
  { label: "Partner Companies", value: 200, suffix: "+" },
  { label: "Course Completion Rate", value: 95, suffix: "%" },
]

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="bg-mount-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedStat value={stat.value} suffix={stat.suffix} inView={inView} />
              <motion.p
                className="text-gray-700"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedStat({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = Math.ceil(end / (duration / 16)) // 60 FPS

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <motion.h3
      className="text-4xl font-bold text-mount-blue-600 mb-2"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.h3>
  )
}

