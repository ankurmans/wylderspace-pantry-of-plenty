'use client'

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/Button'
import { getNextCohortDate } from '@/lib/utils'

// Icon URL from Figma
const logoIconUrl = "/assets/ancient-icon.svg"

export const Footer: React.FC = () => {
  const [iconError, setIconError] = useState(false)

  const handleEnrollment = () => {
    // Track Meta Pixel InitiateCheckout event
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Pantry of Plenty',
        content_category: 'Course',
        value: 197.00,
        currency: 'USD',
      })
    }
    
    // Delay redirect to ensure event fires
    setTimeout(() => {
      window.location.href = 'https://wylder-space.thinkific.com/order?ct=7654480e-98df-488c-a8e1-37449e70cfc8'
    }, 300)
  }

  // Calculate the Monday 2 weeks from today
  const nextCohortDate = useMemo(() => getNextCohortDate(), [])

  return (
    <footer className="bg-[#1e3e2f] text-white">
      {/* Top Section - CTA */}
      <div className="border-b border-[rgba(255,255,255,0.1)] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2
            className="text-4xl md:text-[48px] font-medium mb-8 leading-[48px] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            This Is the Shift You've Been Circling
          </h2>
          
          {/* Body Text */}
          <p
            className="text-lg mb-6 leading-[29.25px] text-[rgba(255,255,255,0.8)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            You don't need another Pinterest board of recipes you'll never make. You need a kitchen that works. Skills that last. And the confidence that comes from knowing you can feed your family — really feed them — no matter what.
          </p>
          
          {/* Italic Quote */}
          <p
            className="text-xl italic mb-8 leading-[28px] text-[#d76f30]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your great-grandmother knew the way. Now you will too.
          </p>
          
          {/* CTA Button */}
          <Button
            onClick={handleEnrollment}
            className="bg-[#d76f30] hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium mb-2 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] uppercase tracking-[0.45px]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Join Pantry of Plenty
          </Button>
          
          {/* Next Cohort Date */}
          <p
            className="text-sm mb-4 text-[rgba(255,255,255,0.7)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Next cohort begins {nextCohortDate}
          </p>
          
          {/* Pricing */}
          <p
            className="text-sm opacity-60 uppercase tracking-[1.4px]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            $197 — One-Time Investment
          </p>
        </div>
      </div>

      {/* Bottom Section - Links and Info */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Brand and P.S. */}
            <div className="md:col-span-1">
              {/* Logo and Brand Name */}
              <div className="flex items-center gap-2 mb-6">
                {iconError ? (
                  <span className="text-white text-xl">🌾</span>
                ) : (
                  <img
                    src={logoIconUrl}
                    alt="Pantry of Plenty logo"
                    className="w-6 h-6"
                    onError={() => setIconError(true)}
                  />
                )}
                <div className="flex flex-col">
                  <p
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Pantry of Plenty
                  </p>
                  <p
                    className="text-sm md:text-sm text-[rgba(255,255,255,0.5)] leading-tight"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    By Wylder Space
                  </p>
                </div>
              </div>
              
              {/* P.S. Section */}
              <div>
                <p
                  className="text-lg italic mb-4 text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  P.S.
                </p>
                <p
                  className="text-base mb-4 leading-[24px] text-[rgba(255,255,255,0.7)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  If you've read this far, you already know this is for you. The only question is whether you'll keep circling, or whether you'll finally step into the kitchen you've been craving.
                </p>
                <p
                  className="text-base mb-4 leading-[24px] text-[rgba(255,255,255,0.7)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  The next cohort begins {nextCohortDate}. Your signed cookbook ships as soon as you enroll.
                </p>
                <div className="text-base leading-[24px] text-[rgba(255,255,255,0.7)]">
                  <p
                    className="mb-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    I'll see you inside.
                  </p>
                  <p
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    — Molly Bravo
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column - Course Links */}
            <div>
              <h4
                className="text-base font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Program
              </h4>
              <ul className="space-y-2">
                {['Curriculum', 'Pricing', 'Login'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-base leading-[24px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Legal Links */}
            <div>
              <h4
                className="text-base font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Legal
              </h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Contact Support'].map((link) => (
                  <li key={link}>
                    <a
                      href={link === 'Contact Support' ? 'mailto:molly@wylderspace.com' : '#'}
                      className="text-base leading-[24px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <p
                className="text-xs mt-4 text-[rgba(255,255,255,0.5)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                © 2025 Wyler Space, Inc
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[rgba(255,255,255,0.1)] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-sm text-center text-[rgba(255,255,255,0.4)]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            © 2025 Wyler Space, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

