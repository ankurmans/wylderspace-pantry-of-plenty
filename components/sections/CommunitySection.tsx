'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const CommunitySection: React.FC = () => {
  // Checkmark icon path from local assets folder (public/assets/)
  const checkIconUrl = "/assets/check-icon.svg"

  const communityBenefits = [
    'Ask questions between sessions',
    'Share wins, troubleshoot failures',
    'Get encouragement when the sourdough flops',
    'Connect with others who are building the same kind of kitchen you are',
  ]

  const [iconErrors, setIconErrors] = useState<Record<number, boolean>>({})

  return (
    <section className="bg-[#f8f5f1] py-12 md:py-16">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              {/* Heading - Playfair Display Medium, 36px, #1e3e2f */}
              <h3
                className="text-3xl md:text-[36px] font-medium mb-6 leading-[40px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                3 Months Inside the Questions Kitchen Society
              </h3>

              {/* Description - Lato Regular, 18px, rgba(42,42,42,0.8) */}
              <p
                className="text-lg mb-6 leading-[29.25px] text-[rgba(42,42,42,0.8)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                You won't do this alone. The Questions Kitchen Society is our private community (off social media) where women learning these skills support each other.
              </p>

              {/* List Items */}
              <ul className="space-y-4 mb-6">
                {communityBenefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#d76f30] rounded-full w-6 h-6 flex items-center justify-center mr-4 flex-shrink-0">
                      {iconErrors[index] ? (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <img
                          src={checkIconUrl}
                          alt=""
                          className="w-3 h-3"
                          onError={() => setIconErrors(prev => ({ ...prev, [index]: true }))}
                        />
                      )}
                    </div>
                    <span
                      className="text-base font-medium leading-[24px] text-[rgba(42,42,42,0.9)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Closing Statement - Playfair Display Italic, 20px, #1e3e2f */}
              <p
                className="text-xl italic leading-[28px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                This is where the transformation sticks — because you're surrounded by people doing it with you.
              </p>
            </div>

            {/* Right Side - Image with Decorative Background */}
            <div className="relative h-[500px]">
              {/* Rotated Decorative Background Shape */}
              <div className="absolute -left-7 -top-2 w-[590px] h-[539px] flex items-center justify-center">
                <div className="rotate-[2deg]">
                  <div className="bg-[#1e3e2f] opacity-20 w-[573px] h-[519px] rounded-t-[160px] rounded-b-[16px]" />
                </div>
              </div>

              {/* Image Container */}
              <div className="absolute left-0 top-0 w-full h-full rounded-t-[160px] rounded-b-[16px] shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gray-200" />
                {/* Placeholder for community image */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

