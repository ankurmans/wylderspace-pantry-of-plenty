'use client'

import React, { useEffect, useState, useRef } from 'react'
import { getNextCohortDate } from '@/lib/utils'

export interface StickyCTAProps {
  text?: string
  buttonText?: string
  onClick?: () => void
}

export const StickyCTA: React.FC<StickyCTAProps> = ({
  text = 'Join Pantry of Plenty',
  buttonText = 'Enroll Now',
  onClick,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const hasBeenShown = useRef(false)

  useEffect(() => {
    const whatThisIsSection = document.getElementById('what-this-is')
    if (!whatThisIsSection) return

    const updateVisibility = () => {
      // Once visible, keep it visible (don't check again)
      if (hasBeenShown.current) return

      const rect = whatThisIsSection.getBoundingClientRect()
      
      // Show CTA once the section enters viewport (top of section is visible or has been scrolled past)
      // Once shown, it stays visible until end of page
      const hasReachedSection = rect.top <= window.innerHeight

      if (hasReachedSection) {
        setIsVisible(true)
        hasBeenShown.current = true
      }
    }

    // Use IntersectionObserver to detect when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenShown.current) {
            // Once section is in view, show CTA and keep it visible
            setIsVisible(true)
            hasBeenShown.current = true
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px',
      }
    )

    observer.observe(whatThisIsSection)

    // Listen to scroll events to check if section has been reached
    window.addEventListener('scroll', updateVisibility, { passive: true })
    
    // Initial check
    updateVisibility()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[rgba(30,62,47,0.1)] shadow-lg transition-transform duration-300"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1 text-center sm:text-left min-w-0">
            <p
              className="font-semibold text-base sm:text-lg text-[#1e3e2f]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {text}
            </p>
            <p
              className="text-xs sm:text-sm text-[rgba(42,42,42,0.7)] mt-1"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Next cohort begins {getNextCohortDate()}
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={onClick}
              className="w-full sm:w-auto bg-[#1e3e2f] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#162e23] transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

