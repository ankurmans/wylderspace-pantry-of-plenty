import React from 'react'
import { Container } from '@/components/ui/Container'

export const WhatThisIsSection: React.FC = () => {
  const benefits = [
    'Cuts your grocery bill by making staples yourself instead of buying them',
    'Improves your family\'s health with nutrient-dense, traditionally prepared foods',
    'Reduces waste by using what you have and preserving what you grow or buy',
    'Gives you confidence in the kitchen — real confidence, not just following instructions',
    'Creates calm because tomorrow\'s meals are already in motion',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            This Is Not a Course. It's a Kitchen Transformation.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Pantry of Plenty is an 8-week guided experience that teaches you the foundational food skills behind a truly nourishing home.
          </p>
          <p className="text-lg md:text-xl font-semibold mb-8">
            You won't just learn recipes. You'll learn a way of living that:
          </p>

          <ul className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-xl md:text-2xl font-semibold mb-2">
              This is the shift from <em>consumer</em> to <em>creator</em>.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              From dependent to capable.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              From stressed to steady.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

