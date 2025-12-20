'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export const HeroSection: React.FC = () => {
  const handleCTA = () => {
    const element = document.getElementById('investment')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  // Background image URL from Figma
  const heroImage = "http://localhost:3845/assets/hero-image.png"

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Left Side - Text Content */}
          <div className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-[563px]">
              {/* Main Headline - Playfair Display Medium, 60px, #1e3e2f */}
              <h1 
                className="text-4xl md:text-[60px] font-medium mb-6 leading-[66px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Grandmother Didn't Buy Bread.
              </h1>
              
              {/* Subheadline - Playfair Display Italic, 24px, rgba(42,42,42,0.8) */}
              <p 
                className="text-xl md:text-[24px] mb-6 leading-[39px] italic text-[rgba(42,42,42,0.8)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                She made it on the counter. With three ingredients. And it fed her family for pennies.
              </p>
              
              {/* Body Text - Lato Regular, 18px, rgba(42,42,42,0.7) */}
              <p 
                className="text-lg mb-6 leading-[29.25px] text-[rgba(42,42,42,0.7)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Somewhere along the way, we forgot how to do this. Now we pay $12 for a loaf of sourdough that costs almost nothing to make. And we wonder why grocery bills keep climbing while our energy keeps dropping.
              </p>
              
              {/* Concluding Statement - Lato Bold, 18px, rgba(42,42,42,0.7) */}
              <p 
                className="text-lg mb-8 leading-[29.25px] font-bold text-[rgba(42,42,42,0.7)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Pantry of Plenty is a return to the kitchen skills that actually work.
              </p>
              
              {/* CTA Button - Dark green #1e3e2f, white text, rounded-full, shadow */}
              <Button
                onClick={handleCTA}
                className="bg-[#1e3e2f] hover:bg-[#2a5a47] text-white px-8 py-3 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] text-lg font-medium uppercase tracking-[0.45px]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Join Pantry of Plenty — $197
              </Button>
            </div>
          </div>

          {/* Right Side - Background Image */}
          <div className="relative h-[400px] md:h-[858px] w-full order-first md:order-last">
            <img
              src={heroImage}
              alt="Hands kneading dough in a rustic kitchen"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image doesn't load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.className = 'relative h-[400px] md:h-[858px] w-full order-first md:order-last bg-gray-200 flex items-center justify-center'
                  parent.innerHTML = '<div class="text-gray-400 text-center"><p>Hero Image</p><p class="text-sm">Hands kneading dough</p></div>'
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
