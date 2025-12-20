'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const FuturePacingSection: React.FC = () => {
  // Icon URLs from Figma
  const iconPantry = "/assets/pantry-icon.svg"
  const iconClock = "/assets/clock-icon.svg"
  const iconStar = "/assets/star-icon.svg"

  const scenarios = [
    {
      icon: iconPantry,
      title: 'A Pantry That Works Like a Store',
      description: 'No more emergency runs. Your shelves are stocked with real, ready-to-use staples — ferments, soaked grains, preserved vegetables — so you can cook nourishing meals without stress.',
    },
    {
      icon: iconClock,
      title: 'Food Prepared Ahead',
      description: 'There\'s sourdough rising. Beans soaking. Fermented vegetables adding life to every meal. Tomorrow\'s food is already in motion before you even think about it.',
    },
    {
      icon: iconStar,
      title: 'Staples Made Once, Used Many Times',
      description: 'One sourdough starter becomes bread, pancakes, pizza. One afternoon of fermenting gives you weeks of sides. This is where time and money stretch further.',
    },
  ]

  const [iconErrors, setIconErrors] = useState<Record<number, boolean>>({})

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f1]">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Heading - Playfair Display Medium, 36px, #1e3e2f, centered */}
          <h2 
            className="text-3xl md:text-[36px] font-medium mb-16 text-center leading-[40px] text-[#1e3e2f]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Here's Life on the Other Side
          </h2>

          {/* Three Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-white border border-[#e6e2d6] rounded-[16px] shadow-sm p-8"
              >
                {/* Icon Container - Dark green circle background */}
                <div className="bg-[rgba(30,62,47,0.05)] rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  {iconErrors[index] ? (
                    <div className="w-6 h-6 text-[#1e3e2f]">
                      {index === 0 ? '🏪' : index === 1 ? '⏰' : '⭐'}
                    </div>
                  ) : (
                    <img 
                      src={scenario.icon} 
                      alt="" 
                      className="w-6 h-6"
                      onError={() => setIconErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  )}
                </div>
                
                {/* Heading - Playfair Display Bold, 20px, #1e3e2f */}
                <h3 
                  className="text-xl font-bold mb-4 text-[#1e3e2f] leading-[28px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {scenario.title}
                </h3>
                
                {/* Text - Lato Regular, 16px, rgba(42,42,42,0.7) */}
                <p 
                  className="text-base leading-[24px] text-[rgba(42,42,42,0.7)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
