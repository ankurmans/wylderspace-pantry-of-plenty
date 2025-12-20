'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const CurriculumSection: React.FC = () => {
  // Icon URLs from Figma
  const icons = [
    "http://localhost:3845/assets/cfa9bcb0f53604bb39e05fe0829e95629b9f25c1.svg", // Module 1
    "http://localhost:3845/assets/5bcb295a7d8f9755ed1a1ba271765b4fc8d65155.svg", // Module 2
    "http://localhost:3845/assets/ec5cbc9b72728d754302c6fd0a674757dbc0c330.svg", // Module 3
    "http://localhost:3845/assets/bf7feb2a61b5f3ace51474988f44355d05950b26.svg", // Module 4
    "http://localhost:3845/assets/5fda912ab3501ac042ad1f3e2290665499abdea5.svg", // Module 5
    "http://localhost:3845/assets/9c12a33b33a483946561e9f895c36909522f162c.svg", // Module 6
  ]

  const modules = [
    {
      number: 1,
      title: 'Welcome to Your Pantry',
      description: 'Setting up your kitchen for success — mindset, tools, and the rhythm of traditional cooking.',
      icon: icons[0],
    },
    {
      number: 2,
      title: 'Foundations',
      description: 'Understanding why these methods matter — the science and wisdom behind traditional preparation.',
      icon: icons[1],
    },
    {
      number: 3,
      title: 'Traditional Prep',
      description: 'Soaking, sprouting, and fermenting — unlocking nutrition and digestibility.',
      icon: icons[2],
    },
    {
      number: 4,
      title: 'Stocks & Bases',
      description: 'Building depth of flavor from scratch — vegetable stocks, rich broths, and foundational liquids.',
      icon: icons[3],
    },
    {
      number: 5,
      title: 'Sourdough Fundamentals',
      description: 'From starter to loaf — bread the way it was meant to be made.',
      icon: icons[4],
    },
    {
      number: 6,
      title: 'Fermentation',
      description: 'Sauerkraut, pickles, kimchi, and beyond — gut health without the supplement aisle.',
      icon: icons[5],
    },
    {
      number: 7,
      title: 'Building Your Pantry',
      description: 'Stocking, organizing, and maintaining a pantry that sustains your family year-round.',
      icon: icons[5], // Reuses Module 6 icon
    },
    {
      number: 8,
      title: 'Hands-On Workshops',
      description: `Putting it all together — real meals using everything you've learned.`,
      icon: icons[3], // Reuses Module 4 icon
    },
  ]

  const [iconErrors, setIconErrors] = useState<Record<string | number, boolean>>({})

  return (
    <section className="bg-white py-16 md:py-24" id="curriculum">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Heading - Playfair Display Medium, 36px, #1e3e2f, centered */}
          <div className="mb-12 text-center">
            <h2
              className="text-3xl md:text-[36px] font-medium mb-4 leading-[40px] text-[#1e3e2f]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Pantry of Plenty Curriculum
            </h2>
            
            {/* Subtitle - Lato Regular, 18px, rgba(42,42,42,0.7), centered */}
            <p
              className="text-lg leading-[28px] text-[rgba(42,42,42,0.7)]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              8 modules of hands-on instruction covering the foundations of nutrient-dense, traditional cooking.
            </p>
          </div>

          {/* Module Cards Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div
                key={module.number}
                className="bg-[#f8f5f1] border border-[#e6e2d6] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-6"
              >
                {/* Icon Container - Orange circle background, 40px */}
                <div className="bg-[rgba(215,111,48,0.1)] rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  {iconErrors[module.number] ? (
                    <span className="text-xl text-[#d76f30]">📚</span>
                  ) : (
                    <img
                      src={module.icon}
                      alt=""
                      className="w-5 h-5"
                      onError={() => setIconErrors(prev => ({ ...prev, [module.number]: true }))}
                    />
                  )}
                </div>
                
                {/* Title - Playfair Display Medium, 18px, #1e3e2f, leading 28px */}
                <h3
                  className="text-lg font-medium mb-3 leading-[28px] text-[#1e3e2f]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Module {module.number}: {module.title}
                </h3>
                
                {/* Description - Lato Regular, 14px, rgba(42,42,42,0.7), leading 22.75px */}
                <p
                  className="text-sm leading-[22.75px] text-[rgba(42,42,42,0.7)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

