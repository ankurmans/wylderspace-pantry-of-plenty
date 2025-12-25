'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export const CredibilitySection: React.FC = () => {
  // Image path from local assets folder (public/assets/)
  const mollyImage = "/assets/molly-bravo-pantry-of-plenty-wylderspace.jpeg"

  const mentions = [
    'Milk Street',
    'Foody TV',
    'HarperCollins',
    'The Knot',
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image with Border Frame */}
            <div className="relative h-[455px] order-1">
              {/* Orange Border Frame */}
              <div className="absolute left-4 top-4 w-full h-full border-2 border-[#d76f30] rounded-[16px]" />
              
              {/* Image Container */}
              <div className="absolute left-0 top-0 w-full h-full rounded-[16px] shadow-lg overflow-hidden">
                <img 
                  src={mollyImage}
                  alt="Chef Molly Bravo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.className = 'absolute left-0 top-0 w-full h-full rounded-[16px] shadow-lg bg-gray-200 flex items-center justify-center'
                      parent.innerHTML = '<div class="text-gray-400 text-center"><p>Molly Bravo</p><p class="text-sm">Image placeholder</p></div>'
                    }
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-2">
              {/* Heading - Playfair Display Medium, 36px, #1e3e2f */}
              <h2 
                className="text-3xl md:text-[36px] font-bold mb-6 leading-[40px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Guide on This Path
              </h2>
              
              {/* Subheading - Playfair Display Medium Italic, 20px, #d76f30 (orange) */}
              <h3 
                className="text-xl font-medium italic mb-6 leading-[28px] text-[#d76f30]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                I'm Molly Bravo — chef, cookbook author, and founder of{' '}
                <a 
                  href="https://wylderspace.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:no-underline transition-all"
                >
                  Wylder Space
                </a>.
              </h3>
              
              {/* Paragraphs */}
              <div className="space-y-4 mb-8">
                <p 
                  className="text-base leading-[24px] text-[rgba(42,42,42,0.8)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  I've spent 20 years in professional kitchens — from private chef work to catering weddings and corporate events for companies like Google. I've cooked plated dinners for 200+ guests, built a zero-waste kitchen, and run a farm-to-table catering company in the Santa Cruz Mountains.
                </p>
                <p 
                  className="text-base leading-[24px] text-[rgba(42,42,42,0.8)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  But the work I'm most proud of started in March 2020. When the world shut down, I did what my grandmothers would have done: I called local farms, stocked up on jars, and started preserving food for my family.
                </p>
                <p 
                  className="text-base font-bold leading-[24px] text-[rgba(42,42,42,0.8)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  I'm not miles ahead of you on this path. I'm just a step or two ahead — and I'm reaching back to help you walk it too.
                </p>
              </div>

              {/* "As Seen In" Section */}
              <div className="border-t border-[#e6e2d6] pt-6">
                <p 
                  className="text-sm font-bold mb-4 text-[#1e3e2f] uppercase tracking-[1.4px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  As Seen In
                </p>
                <div className="flex flex-wrap gap-6 items-center opacity-60">
                  {mentions.map((mention, index) => (
                    <span
                      key={index}
                      className="text-base md:text-xl font-bold text-[#1e3e2f] leading-[28px]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {mention}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
