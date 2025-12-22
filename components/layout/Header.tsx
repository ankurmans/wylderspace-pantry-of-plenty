'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleEnrollment = () => {
    window.location.href = 'https://wylder-space.thinkific.com/order?ct=7654480e-98df-488c-a8e1-37449e70cfc8'
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-[rgba(255,255,255,0.95)] border-b border-[rgba(30,62,47,0.1)]">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/assets/ancient-icon.svg"
              alt="Pantry of Plenty Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <div className="flex flex-col">
              <p
                className="text-xl md:text-2xl font-bold text-[#1e3e2f] leading-[28px] md:leading-[32px] tracking-[-0.6px]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pantry of Plenty
              </p>
              <p
                className="text-xs md:text-sm text-[rgba(42,42,42,0.5)] leading-tight"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                By Wylder Space
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1e3e2f] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(30,62,47,0.1)] bg-white">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <a
                href="#curriculum"
                onClick={handleNavClick}
                className="text-base font-medium text-[#2a2a2a] hover:text-[#1e3e2f] transition-colors py-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Curriculum
              </a>
              <a
                href="#about"
                onClick={handleNavClick}
                className="text-base font-medium text-[#2a2a2a] hover:text-[#1e3e2f] transition-colors py-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                About Molly
              </a>
              <a
                href="#testimonials"
                onClick={handleNavClick}
                className="text-base font-medium text-[#2a2a2a] hover:text-[#1e3e2f] transition-colors py-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Stories
              </a>
              <button
                onClick={handleEnrollment}
                className="bg-[#1e3e2f] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#162e23] transition-colors w-full text-center"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Enroll Now
              </button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}

