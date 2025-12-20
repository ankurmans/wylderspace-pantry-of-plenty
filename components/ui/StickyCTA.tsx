'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './Button'

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
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
      }}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1 text-center sm:text-left min-w-0">
            <p className="font-semibold text-base sm:text-lg">{text}</p>
            {price && <p className="text-sm sm:text-base text-gray-600">{price} — One-Time Investment</p>}
          </div>
          <Button
            onClick={onClick}
            size="md"
            className="flex-shrink-0 w-full sm:w-auto"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

