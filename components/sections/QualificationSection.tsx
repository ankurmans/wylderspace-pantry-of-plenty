'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Check, X } from 'lucide-react'

export const QualificationSection: React.FC = () => {
  const forYouItems = [
    'Relying on expensive, packaged food is a dead end',
    'Health shouldn\'t require endless purchasing',
    'Basic food skills equal freedom',
    'The kitchen is meant to anchor a household — not stress it',
  ]

  const notForYouItems = [
    'You\'re looking for quick fixes or overnight transformations',
    'You want someone to do the work for you',
    'You\'re not willing to spend time in your kitchen',
    'You\'re happy with the current food system and how it\'s serving your family',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* This Is For You If... */}
            <div className="bg-[rgba(30,62,47,0.05)] border border-[rgba(30,62,47,0.1)] rounded-[16px] p-8 flex flex-col gap-6">
              <h3
                className="text-2xl md:text-[24px] font-medium leading-[32px] text-[#1e3e2f] flex items-center gap-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="text-[#1e3e2f]">✓</span>
                This Is For You If...
              </h3>
              <p
                className="text-base font-bold leading-[24px] text-[#1e3e2f]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                You Can't Unsee the Cracks Anymore.
              </p>
              <ul className="flex flex-col gap-4">
                {forYouItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-[#1e3e2f]" />
                    </div>
                    <span
                      className="text-base leading-[24px] text-[rgba(42,42,42,0.8)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* This Might Not Be For You If... */}
            <div className="bg-white border border-[#e6e2d6] rounded-[16px] p-8 flex flex-col gap-6">
              <h3
                className="text-2xl md:text-[24px] font-medium leading-[32px] text-[#d76f30] flex items-center gap-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="text-[#d76f30]">✗</span>
                This Might Not Be For You If...
              </h3>
              <ul className="flex flex-col gap-4">
                {notForYouItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <X className="w-5 h-5 text-[#d76f30]" />
                    </div>
                    <span
                      className="text-base leading-[24px] text-[rgba(42,42,42,0.8)]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Concluding Statement */}
          <p
            className="text-xl md:text-[20px] italic text-center leading-[28px] text-[#1e3e2f]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            This is real work. Simple, but real. If you're not ready to show up, this isn't your moment. But if you are? The kitchen you've been craving is waiting.
          </p>
        </div>
      </Container>
    </section>
  )
}

