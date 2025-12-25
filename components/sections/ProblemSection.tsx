'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const ProblemSection: React.FC = () => {
  // Icon paths from local assets folder (public/assets/)
  const iconDollar = "/assets/dollar-icon.svg"
  const iconWave = "/assets/wave-icon.svg"
  const iconExclamation = "/assets/exclamation-icon.svg"
  const iconX = "/assets/x-icon.svg"

  const problems = [
    {
      icon: iconDollar,
      fallback: (
        <svg className="w-5 h-5 text-[#d76f30]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.114 1.411c.562.649 1.413 1.076 2.059 1.276V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.114-1.411c-.562-.649-1.413-1.076-2.059-1.276V5z" clipRule="evenodd" />
        </svg>
      ),
      text: "$9–$12 for a sourdough loaf that requires flour, water, salt, and a bit of patience",
    },
    {
      icon: iconWave,
      fallback: (
        <svg className="w-5 h-5 text-[#d76f30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: "$6–$8 for a jar of sauerkraut that your great-grandmother made for nearly nothing — and that actually had live cultures in it",
    },
    {
      icon: iconExclamation,
      fallback: (
        <svg className="w-5 h-5 text-[#d76f30]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      text: "$40/month on probiotics and \"gut health\" supplements when real fermented foods do the job better and cost a fraction",
    },
    {
      icon: iconX,
      fallback: (
        <svg className="w-5 h-5 text-[#d76f30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      text: "$5 for a bag of granola loaded with seed oils — when soaking and toasting your own oats takes 20 minutes",
    },
    {
      icon: iconWave,
      fallback: (
        <svg className="w-5 h-5 text-[#d76f30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: "The hidden costs — fatigue, inflammation, digestive issues — that show up later because the food isn't actually feeding you",
    },
  ]

  const [iconErrors, setIconErrors] = useState<Record<number, boolean>>({})

  return (
    <section className="py-12 md:py-18 bg-[#f8f5f1]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Heading - Playfair Display Medium, 36px, #1e3e2f, centered */}
          <h2 
            className="text-2xl md:text-[36px] font-bold mb-4 text-center leading-[36px] text-[#1e3e2f]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            You Already Know Something Is Off
          </h2>
          
          {/* Intro Paragraph - Lato Regular, 18px, rgba(42,42,42,0.8), centered */}
          <p 
            className="text-lg mb-8 text-center leading-[29.25px] text-[rgba(42,42,42,0.8)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            You feel it every time at the grocery store when you scan an ingredient list you can't pronounce. The system is expensive — and you're paying for it twice. Once at the register. Again with your health.
          </p>

          {/* Problem Cards */}
          <div className="space-y-4 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white border border-[#e6e2d6] rounded-[14px] shadow-sm p-6 flex items-start gap-4"
              >
                {/* Icon Container - Orange circle background */}
                <div className="bg-[rgba(215,111,48,0.1)] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  {iconErrors[index] ? (
                    problem.fallback
                  ) : (
                    <img 
                      src={problem.icon} 
                      alt="" 
                      className="w-5 h-5"
                      onError={() => setIconErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  )}
                </div>
                
                {/* Text - Lato Regular, 18px, rgba(42,42,42,0.8) */}
                <p 
                  className="text-base md:text-lg leading-[28px] text-[rgba(42,42,42,0.8)] flex-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement - Playfair Display Italic, 20px, #1e3e2f, centered */}
          <p 
            className="text-xl md:text-xl font-medium italic text-center leading-[28px] text-[#1e3e2f]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Deep down, you know this isn't how it's supposed to work. You just haven't been shown another way.
          </p>
        </div>
      </Container>
    </section>
  )
}

