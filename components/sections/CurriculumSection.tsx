'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { BookOpen, Utensils, Wheat, Sprout, Home, Soup, LeafyGreen, LayoutGrid } from 'lucide-react'

export const CurriculumSection: React.FC = () => {
  const modules = [
    {
      icon: Home,
      title: 'Module 1: Welcome to Your Pantry',
      desc: 'Setting up your kitchen for success — mindset, tools, and the rhythm of traditional cooking.',
    },
    {
      icon: BookOpen,
      title: 'Module 2: Foundations',
      desc: 'Understanding why these methods matter — the science and wisdom behind traditional preparation.',
    },
    {
      icon: Sprout,
      title: 'Module 3: Traditional Prep',
      desc: 'Soaking, sprouting, and fermenting — unlocking nutrition and digestibility.',
    },
    {
      icon: Soup,
      title: 'Module 4: Stocks & Bases',
      desc: 'Building depth of flavor from scratch — vegetable stocks, rich broths, and foundational liquids.',
    },
    {
      icon: Wheat,
      title: 'Module 5: Sourdough Fundamentals',
      desc: 'From starter to loaf — bread the way it was meant to be made.',
    },
    {
      icon: LeafyGreen,
      title: 'Module 6: Fermentation',
      desc: 'Sauerkraut, pickles, kimchi, and beyond — gut health without the supplement aisle.',
    },
    {
      icon: LayoutGrid,
      title: 'Module 7: Building Your Pantry',
      desc: 'Stocking, organizing, and maintaining a pantry that sustains your family year-round.',
    },
    {
      icon: Utensils,
      title: 'Module 8: Hands-On Workshops',
      desc: `Putting it all together — real meals using everything you've learned.`,
    },
  ]

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
            {modules.map((module, index) => {
              const IconComponent = module.icon
              return (
                <div
                  key={index}
                  className="bg-[#f8f5f1] border border-[#e6e2d6] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-6"
                >
                  {/* Icon Container - Orange circle background, 40px */}
                  <div className="bg-[rgba(215,111,48,0.1)] rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-[#d76f30]" />
                  </div>
                  
                  {/* Title - Playfair Display Medium, 18px, #1e3e2f, leading 28px */}
                  <h3
                    className="text-lg font-medium mb-3 leading-[28px] text-[#1e3e2f]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {module.title}
                  </h3>
                  
                  {/* Description - Lato Regular, 14px, rgba(42,42,42,0.7), leading 22.75px */}
                  <p
                    className="text-sm leading-[22.75px] text-[rgba(42,42,42,0.7)]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {module.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

