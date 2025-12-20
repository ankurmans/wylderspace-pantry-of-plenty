'use client'

import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'

export const LiveTrainingSection: React.FC = () => {
  // Icon URLs from Figma
  const iconUrls = {
    livestream: "http://localhost:3845/assets/0cad4fa5fd61e0eb7dd742f15958fb75e134f217.svg",
    qa: "http://localhost:3845/assets/ec1dde980436ac994e0cf6d921bb015282c28892.svg",
    demo: "http://localhost:3845/assets/4e83439d2a4e4d0aa08f4a05d944b52e7e9e3e3f.svg",
    playButton: "http://localhost:3845/assets/ea8ef9d74b49f315720f0ebc7b99d09cddd2e867.svg",
  }

  const features = [
    {
      icon: iconUrls.livestream,
      title: 'Weekly Livestream Cooking Class',
      description: 'Cook alongside me as I walk you through techniques, answer questions on the spot, and troubleshoot in real time.',
      fallback: '▶️',
    },
    {
      icon: iconUrls.qa,
      title: 'Weekly Q&A Session',
      description: 'Bring your questions — about recipes, ingredients, technique, or how to adapt this to your life.',
      fallback: '💬',
    },
    {
      icon: iconUrls.demo,
      title: 'Weekly Cooking Demo (10–15 min)',
      description: 'Short, focused demonstrations on specific skills — perfect for fitting learning into a busy week.',
      fallback: '📹',
    },
  ]

  const [iconErrors, setIconErrors] = useState<Record<string, boolean>>({})

  return (
    <section className="bg-[#f8f5f1] py-12 md:py-16">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Dark green card container with rounded corners */}
          <div className="bg-[#1e3e2f] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden h-[607.5px]">
            <div className="grid md:grid-cols-2 h-full">
              {/* Left Side - Content */}
              <div className="pl-8 md:pl-16 pr-0 py-0 flex flex-col justify-center gap-6">
                {/* "Live Weekly Training" Badge */}
                <div className="bg-[rgba(255,255,255,0.1)] h-8 rounded-full inline-flex items-center gap-2 px-4 py-0 w-fit">
                  <div className="bg-[#d76f30] opacity-[0.648] rounded-full w-2 h-2 shrink-0" />
                  <span
                    className="text-sm font-bold text-white uppercase tracking-[0.35px] leading-[20px]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Live Weekly Training
                  </span>
                </div>

                {/* Heading - Playfair Display Medium, 36px, white */}
                <h3
                  className="text-3xl md:text-[36px] font-medium leading-[45px] text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  With Chef Molly
                </h3>

                {/* Description - Lato Regular, 18px, rgba(255,255,255,0.9) */}
                <p
                  className="text-lg leading-[29.25px] text-[rgba(255,255,255,0.9)]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  This isn't a watch-and-forget video library. You'll learn with me, in real time.
                </p>

                {/* Feature List */}
                <div className="flex flex-col gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-[#d76f30] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        {iconErrors[`feature-${index}`] ? (
                          <span className="text-white text-sm">{feature.fallback}</span>
                        ) : (
                          <img
                            src={feature.icon}
                            alt=""
                            className="w-4 h-4"
                            onError={() => setIconErrors(prev => ({ ...prev, [`feature-${index}`]: true }))}
                          />
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4
                          className="text-lg font-bold leading-[28px] text-white"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {feature.title}
                        </h4>
                        <p
                          className="text-sm leading-[20px] text-[rgba(255,255,255,0.7)]"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image with Play Button */}
              <div className="relative bg-[#162e23] h-full flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-60">
                  <div className="w-full h-full bg-gray-800" />
                  {/* Placeholder for Chef Molly teaching image */}
                </div>

                {/* Play Button Overlay */}
                <div className="relative z-10">
                  {iconErrors['play-button'] ? (
                    <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                    </div>
                  ) : (
                    <img
                      src={iconUrls.playButton}
                      alt="Play video"
                      className="w-24 h-24"
                      onError={() => setIconErrors(prev => ({ ...prev, 'play-button': true }))}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

