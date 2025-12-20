'use client'

import React, { useEffect, useState } from 'react'

export interface StickyCTAProps {
  text?: string
  buttonText?: string
  price?: string
  onClick?: () => void
  showAfterScroll?: number
}

export const StickyCTA: React.FC<StickyCTAProps> = ({
  text = 'Join Pantry of Plenty',
  buttonText = 'Enroll Now',
  price = '$197',
  onClick,
  showAfterScroll = 400,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      setIsVisible(scrollY > showAfterScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfterScroll])

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
            {price && (
              <p
                className="text-sm sm:text-base text-[rgba(42,42,42,0.7)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {price} — One-Time Investment
              </p>
            )}
          </div>
          <button
            onClick={onClick}
            className="flex-shrink-0 w-full sm:w-auto bg-[#1e3e2f] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#162e23] transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

