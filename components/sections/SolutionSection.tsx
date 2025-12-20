'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const SolutionSection: React.FC = () => {
  // Icon URL from Figma
  const iconAncient = "http://localhost:3845/assets/0e999887a7ea38b0a894cfe7bb46433837ef73b9.svg"

  const methods = [
    'Bread risen slowly on the counter.',
    'Grains soaked to unlock their nutrition.',
    'Vegetables fermented in jars — alive with beneficial cultures.',
    'Pantries stocked not with packages, but with real food.',
  ]

  const [iconError, setIconError] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side - Left */}
            <div className="relative h-[370px] md:h-[500px] order-2 md:order-1">
              {/* Main Image Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rotate-[1deg]">
                  <div className="w-full h-full bg-gray-200 rounded-[16px] shadow-xl" />
                  {/* Placeholder for image - replace with actual image from Figma */}
                </div>
              </div>
              
              {/* Decorative blur elements */}
              <div className="absolute bg-[rgba(215,111,48,0.1)] blur-2xl rounded-full w-24 h-24 -left-4 top-0" />
              <div className="absolute bg-[rgba(30,62,47,0.1)] blur-2xl rounded-full w-32 h-32 right-0 bottom-1/3" />
            </div>

            {/* Content Side - Right */}
            <div className="order-1 md:order-2">
              {/* "The Ancient Way" Label */}
              <div className="flex items-center gap-2 mb-4">
                {iconError ? (
                  <div className="w-5 h-5 text-[#d76f30]">🌾</div>
                ) : (
                  <img 
                    src={iconAncient} 
                    alt="" 
                    className="w-5 h-5"
                    onError={() => setIconError(true)}
                  />
                )}
                <span 
                  className="text-sm font-bold text-[#d76f30] uppercase tracking-[1.4px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  The Ancient Way
                </span>
              </div>
              
              {/* Main Heading */}
              <h2 
                className="text-4xl md:text-[48px] font-medium mb-4 leading-[60px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                There Is Another Way.
              </h2>
              
              {/* Subheading - Orange */}
              <h3 
                className="text-4xl md:text-[48px] font-medium italic mb-6 leading-[60px] text-[#d76f30]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                And It's Older Than Any of Us.
              </h3>
              
              {/* Paragraph 1 */}
              <p 
                className="text-lg mb-6 leading-[29.25px] text-[rgba(42,42,42,0.8)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Before grocery stores. Before convenience foods. Before "wellness" became a $4 trillion industry... Families fed themselves.
              </p>
              
              {/* Paragraph 2 */}
              <p 
                className="text-lg mb-6 leading-[29.25px] text-[rgba(42,42,42,0.8)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Not with complicated techniques or expensive equipment. With simple skills passed down through generations:
              </p>
              
              {/* Bullet List */}
              <ul className="space-y-3 mb-6">
                {methods.map((method, index) => (
                  <li key={index} className="flex items-start">
                    <span 
                      className="text-[#d76f30] mr-3 text-base leading-[24px]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      •
                    </span>
                    <span 
                      className="text-base leading-[24px] text-[rgba(42,42,42,0.8)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {method}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Quote with left border */}
              <div className="border-l-4 border-[rgba(215,111,48,0.3)] pl-6">
                <p 
                  className="text-xl italic leading-[28px] text-[#555]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "This is the way your great-grandparents lived. Pantry of Plenty is your path back."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
