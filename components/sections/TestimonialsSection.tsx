'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Star } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "The only 'healthy eating' course I actually finished — and use daily.",
      author: 'Kendall M.',
      role: 'Student',
      initials: 'KM',
      rating: 5, // 5 stars
    },
    {
      quote: "I never thought I'd be the kind of person who bakes their own bread. Now it's our favorite Sunday ritual.",
      author: 'Sarah J.',
      role: 'Student',
      initials: 'SJ',
      rating: 5, // 5 stars
    },
    {
      quote: "Finally, a course that isn't just about recipes, but about HOW to cook. I feel like I understand food for the first time.",
      author: 'Marcus C.',
      role: 'Student',
      initials: 'MC',
      rating: 4.5, // 4.5 stars
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f1]">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Heading - Playfair Display Medium, 36px, #1e3e2f, centered */}
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-[36px] font-medium mb-4 leading-[40px] text-[#1e3e2f]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Students Are Saying
            </h2>
            {/* Orange underline bar */}
            <div className="bg-[#d76f30] h-1 w-24 mx-auto rounded-full" />
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] shadow-sm p-6 flex flex-col items-center gap-6"
              >
                {/* Star Rating */}
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, starIndex) => {
                    const isFilled = starIndex < Math.floor(testimonial.rating)
                    const isHalf = starIndex === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0
                    return (
                      <Star
                        key={starIndex}
                        className={`w-4 h-4 ${
                          isFilled
                            ? 'text-[#d76f30] fill-[#d76f30]'
                            : isHalf
                            ? 'text-[#d76f30] fill-[#d76f30] opacity-50'
                            : 'text-[#d76f30] fill-none'
                        }`}
                      />
                    )
                  })}
                </div>
                
                {/* Quote - Playfair Display Italic, 18px, #2a2a2a, centered */}
                <p 
                  className="text-lg italic leading-[28px] text-[#2a2a2a] text-center flex-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar Circle */}
                  <div className="border border-[rgba(30,62,47,0.3)] rounded-full w-10 h-10 flex items-center justify-center bg-[#1e3e2f] flex-shrink-0">
                    <p 
                      className="text-base text-white leading-[24px]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {testimonial.initials}
                    </p>
                  </div>
                  
                  {/* Name and Role */}
                  <div>
                    <p 
                      className="font-bold text-[#1e3e2f] text-sm leading-[20px]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {testimonial.author}
                    </p>
                    <p 
                      className="text-xs leading-[16px] text-[rgba(30,62,47,0.6)] uppercase tracking-[0.3px]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
