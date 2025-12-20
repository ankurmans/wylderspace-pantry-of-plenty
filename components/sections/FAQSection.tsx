'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      question: 'How much time does this take each week?',
      answer: 'Plan for 2–3 hours per week — including watching the livestream, doing the Q&A, and practicing the techniques. This is designed to fit into a real life, not consume it.',
    },
    {
      question: 'What if I can\'t attend the live sessions?',
      answer: 'All livestreams are recorded and available in your member portal within 24 hours. You can watch on your own schedule and still ask questions in the community.',
    },
    {
      question: 'I\'m a complete beginner. Is this for me?',
      answer: 'Yes. This curriculum starts at the very beginning — foundational skills, foundational foods. No prior experience required. Just willingness to learn.',
    },
    {
      question: 'Is this suitable for vegetarians or plant-based eaters?',
      answer: 'Absolutely. The core skills — sourdough, fermentation, preserving, soaking grains, building a stocked pantry — are universal. You\'ll learn to adapt techniques to your way of eating.',
    },
    {
      question: 'What equipment do I need?',
      answer: 'Basic kitchen tools you likely already own — pots, pans, jars, a good knife. I\'ll share my recommendations in Module 1, but you don\'t need anything fancy to start.',
    },
    {
      question: 'Is this a subscription?',
      answer: 'No. $197 is a one-time payment. You get lifetime access to the course modules, plus 3 months in the Questions Kitchen Society.',
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'If you go through the material, show up to the sessions, and genuinely feel this didn\'t deliver value, reach out within 30 days. We\'ll make it right.',
    },
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f1]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-3xl md:text-[30px] font-medium mb-12 text-center leading-[36px] text-[#1e3e2f]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Questions You Might Have
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const isLast = index === faqItems.length - 1

            return (
              <div
                key={index}
                className={`bg-white border border-[#e6e2d6] rounded-[10px] overflow-hidden ${
                  isLast ? 'border-b-0' : ''
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 py-4 flex items-center justify-between text-left"
                >
                  <p
                    className="text-lg font-medium leading-[28px] text-[#1e3e2f] pr-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.question}
                  </p>
                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 text-[#1e3e2f] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4">
                    <p
                      className="text-base leading-[24px] text-[rgba(42,42,42,0.8)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
