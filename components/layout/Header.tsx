'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'

export const Header: React.FC = () => {
  const handleEnrollment = () => {
    const element = document.getElementById('investment')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.95)] border-b border-[rgba(30,62,47,0.1)]">
      <Container>
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div>
            <p
              className="text-2xl font-bold text-[#1e3e2f] leading-[32px] tracking-[-0.6px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pantry of Plenty
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#curriculum"
              className="text-base font-medium text-[#2a2a2a] hover:text-[#1e3e2f] transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Curriculum
            </a>
            <a
              href="#about"
              className="text-base font-medium text-[#2a2a2a] hover:text-[#1e3e2f] transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              About Molly
            </a>
            <a
              href="#testimonials"
              className="text-base font-medium text-[#2a2a2a] hover:text-[#1e3e2f] transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Stories
            </a>
            <button
              onClick={handleEnrollment}
              className="bg-[#1e3e2f] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#162e23] transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Enroll Now
            </button>
          </nav>
        </div>
      </Container>
    </header>
  )
}

