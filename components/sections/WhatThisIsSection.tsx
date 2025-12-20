'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const WhatThisIsSection: React.FC = () => {
  // Icon URL from Figma
  const checkIcon = "http://localhost:3845/assets/21f2f48c30d9be4921205a1fa3310c3ca3af3ba2.svg"

  const benefits = [
    'Cuts your grocery bill by making staples yourself instead of buying them',
    'Improves your family\'s health with nutrient-dense, traditionally prepared foods',
    'Reduces waste by using what you have and preserving what you grow or buy',
    'Gives you confidence in the kitchen — real confidence, not just following instructions',
    'Creates calm because tomorrow\'s meals are already in motion',
  ]

  const [iconError, setIconError] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-[#1e3e2f]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Heading - Playfair Display Medium, 36px, white, centered */}
          <h2 
            className="text-3xl md:text-[36px] font-medium mb-6 text-center leading-[40px] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            This Is Not a Course. It's a Kitchen Transformation.
          </h2>
          
          {/* Intro Paragraph - Lato Regular, 18px, rgba(255,255,255,0.8), centered */}
          <p 
            className="text-lg mb-12 text-center leading-[29.25px] text-[rgba(255,255,255,0.8)] max-w-3xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Pantry of Plenty is an 8-week guided experience that teaches you the foundational food skills behind a truly nourishing home. You won't just learn recipes. You'll learn a way of living that:
          </p>

          {/* Benefits Grid - 2 columns, 5 items (2-2-1 layout) */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[10px] p-4 flex items-start gap-4"
              >
                {/* Icon Container - Orange circle background */}
                <div className="bg-[#d76f30] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  {iconError ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <img 
                      src={checkIcon} 
                      alt="" 
                      className="w-3 h-3"
                      onError={() => setIconError(true)}
                    />
                  )}
                </div>
                
                {/* Text - Lato Regular, 18px, rgba(255,255,255,0.9) */}
                <p 
                  className="text-lg leading-[28px] text-[rgba(255,255,255,0.9)] flex-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement - Playfair Display Italic, 24px, #d76f30 (orange), centered */}
          <div className="text-center">
            <p 
              className="text-2xl italic leading-[32px] text-[#d76f30]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From consumer to creator. From dependent to capable. From stressed to steady.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

