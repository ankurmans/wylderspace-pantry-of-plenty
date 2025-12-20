'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Star } from 'lucide-react'

export const CookbookSection: React.FC = () => {

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Cookbook Image */}
            <div className="relative h-[560px] order-2 md:order-1">
              {/* Rotated Orange Background Shape */}
              <div className="absolute -left-12 -top-4 w-[622px] h-[619px] flex items-center justify-center">
                <div className="rotate-[3deg]">
                  <div className="bg-[#d76f30] w-[592px] h-[589px] rounded-[14px]" />
                </div>
              </div>

              {/* Cookbook Image */}
              <div className="absolute left-0 top-0 w-[448px] h-[560px] bg-white rounded-[14px] shadow-xl">
                <div className="w-full h-full bg-gray-200 rounded-[14px]" />
                {/* Placeholder for cookbook image */}
              </div>

              {/* "Signed Copy Included!" Badge - Rotated */}
              <div className="absolute right-0 -top-8 w-[135px] h-[135px] flex items-center justify-center">
                <div className="rotate-[12deg]">
                  <div className="bg-[#d76f30] rounded-full px-3 py-2 shadow-lg flex items-center justify-center">
                    <p
                      className="text-sm font-bold text-white text-center leading-[20px]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Signed Copy Included!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 md:order-2">
              {/* Heading - Playfair Display Medium, 36px, #1e3e2f */}
              <h3
                className="text-3xl md:text-[36px] font-medium mb-6 leading-[40px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Essential Canning Cookbook
              </h3>

              {/* Description - Playfair Display Italic, 20px, rgba(42,42,42,0.8) */}
              <p
                className="text-xl italic mb-6 leading-[28px] text-[rgba(42,42,42,0.8)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                My HarperCollins-published cookbook, shipped directly to your door.
              </p>

              {/* Description - Lato Regular, 18px, rgba(42,42,42,0.7) */}
              <p
                className="text-lg mb-6 leading-[29.25px] text-[rgba(42,42,42,0.7)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                75+ recipes for water bath and pressure canning, organized by season. Step-by-step instructions, safety guidelines, and troubleshooting tips from nearly two decades of professional cooking.
              </p>

              {/* Testimonial Box */}
              <div className="bg-[#f8f5f1] border border-[#e6e2d6] rounded-[14px] shadow-sm p-6 mb-4">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#d76f30] fill-[#d76f30]" />
                  ))}
                </div>

                {/* Quote - Playfair Display Italic, 18px, #555 */}
                <blockquote
                  className="mb-4 italic leading-[28px] text-[#555] text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "Few canning cookbooks strike such a perfect balance of bold flavors, clear instructions and need-to-know safety precautions."
                </blockquote>

                {/* Attribution */}
                <div>
                  <p
                    className="font-bold text-[#1e3e2f] text-sm leading-[20px] mb-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    April Dodd
                  </p>
                  <p
                    className="text-xs leading-[16px] text-[rgba(30,62,47,0.6)] uppercase tracking-[0.3px]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Associate Director of Education, Christopher Kimball's Milk Street
                  </p>
                </div>
              </div>

              {/* Pricing Info - Lato Regular, 14px, rgba(42,42,42,0.5) */}
              <p
                className="text-sm leading-[20px] text-[rgba(42,42,42,0.5)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Retails for $24.99 — Included with your enrollment.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

