"use client"

import { useState, useMemo, useCallback } from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { Search } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

// Categorized FAQs for better organization
const faqData = [
  {
    category: "Program Details",
    items: [
      {
        question: "How long does the program typically take?",
        answer:
          "Most students complete their chosen track within 3-6 months, depending on their prior experience and time commitment. We offer flexible scheduling options to accommodate different learning paces and work schedules.",
      },
      {
        question: "What technologies and skills will I learn?",
        answer:
          "Our curriculum covers in-demand technologies including JavaScript, React, Node.js, Python, SQL, and cloud services. You'll also develop soft skills like problem-solving, communication, and teamwork that are essential for career success.",
      },
      {
        question: "How is the program structured?",
        answer:
          "The program combines self-paced learning modules, live instructor-led sessions, hands-on projects, and one-on-one mentoring. This blended approach ensures you gain both theoretical knowledge and practical experience.",
      },
    ],
  },
  {
    category: "Career Support",
    items: [
      {
        question: "Do you offer job placement guarantees?",
        answer:
          "While we don't offer guarantees, our career services team works tirelessly to connect graduates with our hiring partners. Our job placement rate is over 85% within three months of graduation.",
      },
      {
        question: "What kind of support do you offer after graduation?",
        answer:
          "We provide ongoing career support, including resume reviews, interview preparation, and access to our alumni network. Graduates also receive lifetime access to our learning materials and community forums.",
      },
      {
        question: "How do you help with the job search process?",
        answer:
          "Our career coaches provide personalized guidance throughout your job search. This includes portfolio development, resume optimization, interview practice, salary negotiation advice, and direct introductions to hiring managers in our network.",
      },
    ],
  },
  {
    category: "Eligibility & Prerequisites",
    items: [
      {
        question: "Can I enroll if I have no prior coding experience?",
        answer:
          "We offer tracks suitable for complete beginners, as well as more advanced courses for those with some experience. Our admissions team will help determine the best path based on your background and goals.",
      },
      {
        question: "Is there an application process?",
        answer:
          "Yes, we have a simple application process that includes a brief interview to understand your goals and ensure our program is a good fit for your career objectives. No technical assessment is required for beginner tracks.",
      },
      {
        question: "What equipment do I need?",
        answer:
          "You'll need a reliable computer (Windows, Mac, or Linux), stable internet connection, and a quiet space to work. All software and tools used in the program are either free or provided as part of your enrollment.",
      },
    ],
  },
]

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "100px",
  });

  // Flatten all FAQs for search functionality - moved inside the component
  const allFaqs = useMemo(() => 
    faqData.flatMap(category => 
      category.items.map(item => ({
        ...item,
        category: category.category
      }))
    ), 
  []);

  // Memoized filtered FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    
    const query = searchQuery.toLowerCase();
    const filteredItems = allFaqs.filter(
      faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
    );
    
    // Group filtered items by category
    const groupedFiltered = filteredItems.reduce((acc, item) => {
      const categoryIndex = acc.findIndex(cat => cat.category === item.category);
      
      if (categoryIndex >= 0) {
        acc[categoryIndex].items.push({
          question: item.question,
          answer: item.answer
        });
      } else {
        acc.push({
          category: item.category,
          items: [{
            question: item.question,
            answer: item.answer
          }]
        });
      }
      
      return acc;
    }, [] as typeof faqData);
    
    return groupedFiltered;
  }, [searchQuery, allFaqs]);

  // Handle search input change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <LazyMotion features={domAnimation}>
          <m.h2
            className="text-3xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </m.h2>
          <m.p
            className="text-xl text-center text-gray-600 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about our program
          </m.p>

          {/* Search input */}
          <m.div 
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search questions..."
                className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500 rounded-full"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </m.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, categoryIndex) => (
                <m.div 
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">{category.category}</h3>
                  <Accordion type="single" collapsible>
                    {category.items.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="mb-4 border border-mount-blue-100 rounded-lg overflow-hidden"
                      >
                        <AccordionTrigger className="px-4 py-3 bg-mount-blue-50 text-left font-medium text-gray-800">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="bg-white border-t border-mount-blue-100">
                          <div className="text-gray-600">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </m.div>
              ))
            ) : (
              <m.div 
                className="text-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-500">No questions found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-2 text-blue-600 hover:underline"
                >
                  Clear search
                </button>
              </m.div>
            )}
          </div>
        </LazyMotion>
      </div>
    </section>
  )
}

