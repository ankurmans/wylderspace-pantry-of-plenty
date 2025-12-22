'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { PlayCircle, MessageCircle, Video } from 'lucide-react'

export const LiveTrainingSection: React.FC = () => {
  const features = [
    {
      title: 'Weekly Livestream Cooking Class',
      desc: 'Cook alongside me as I walk you through techniques, answer questions on the spot, and troubleshoot in real time.',
      icon: PlayCircle,
    },
    {
      title: 'Weekly Q&A Session',
      desc: 'Bring your questions — about recipes, ingredients, technique, or how to adapt this to your life.',
      icon: MessageCircle,
    },
    {
      title: 'Weekly Cooking Demo (10–15 min)',
      desc: 'Short, focused demonstrations on specific skills — perfect for fitting learning into a busy week.',
      icon: Video,
    },
  ]

  return (
    <section className="bg-[#f8f5f1] py-12 md:py-16">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Dark green card container with rounded corners */}
          <div className="bg-[#1e3e2f] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden min-h-[400px] md:h-[607.5px]">
            <div className="grid md:grid-cols-2 h-full">
              {/* Left Side - Content */}
              <div className="pl-4 md:pl-16 pr-4 md:pr-0 py-6 md:py-4 flex flex-col justify-center gap-4 md:gap-6 order-2 md:order-1">
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
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-[#d76f30] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          <IconComponent className="w-4 h-4 text-white" />
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
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Side - YouTube Video */}
              <div className="relative bg-[#162e23] h-[300px] md:h-full overflow-hidden order-1 md:order-2">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/Gv7Es2SvDqk?rel=0&modestbranding=1&controls=1&fs=1&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&disablekb=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Chef Molly Live Training"
                  style={{ border: 'none' }}
                />
                {/* Overlay to hide YouTube UI elements */}
                <div 
                  className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(22,46,35,1) 0%, rgba(22,46,35,0.8) 50%, transparent 100%)',
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(22,46,35,1) 0%, rgba(22,46,35,0.9) 60%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

