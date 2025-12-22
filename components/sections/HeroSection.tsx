'use client'

import React, { useMemo } from 'react'
import { Button } from '@/components/ui/Button'
import { getNextCohortDate } from '@/lib/utils'
import { Star, Shield, CheckCircle2 } from 'lucide-react'

// Configurable metrics for social proof and credibility
const SOCIAL_PROOF_METRICS = {
  STUDENT_COUNT: 2500,
  AVERAGE_RATING: 4.9,
  REVIEW_COUNT: 527,
  RECENT_ENROLLMENTS: 47,
  SATISFACTION_RATE: 98,
  SPOTS_REMAINING: 7,
}

const AUTHORITY_MENTIONS = ['Milk Street', 'Foody TV', 'HarperCollins', 'The Knot']

export const HeroSection: React.FC = () => {
  const handleCTA = () => {
    window.location.href = 'https://wylder-space.thinkific.com/order?ct=7654480e-98df-488c-a8e1-37449e70cfc8'
  }

  // Video URL - Set your Wistia or YouTube link here or via environment variable
  // Option 1: Set directly (replace the empty string with your video URL)
  // Option 2: Use environment variable NEXT_PUBLIC_HERO_VIDEO_URL
  // Examples:
  // YouTube: "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID"
  // Wistia: "https://your-account.wistia.com/medias/VIDEO_ID" or "https://fast.wistia.net/embed/iframe/VIDEO_ID"
  const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL || "https://www.youtube.com/watch?v=1nKmNwc5RwQ" // Add your video URL here

  // Helper function to extract video ID and determine platform
  const videoEmbed = useMemo(() => {
    if (!videoUrl) return null

    // Check for YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const youtubeMatch = videoUrl.match(youtubeRegex)
    if (youtubeMatch) {
      const videoId = youtubeMatch[1]
      // Autoplay, mute, loop, and hide controls for background video
      return {
        platform: 'youtube',
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&disablekb=1&fs=0`,
      }
    }

    // Check for Wistia
    const wistiaRegex = /(?:wistia\.com\/medias\/|wistia\.net\/embed\/iframe\/)([a-zA-Z0-9]+)/
    const wistiaMatch = videoUrl.match(wistiaRegex)
    if (wistiaMatch) {
      const videoId = wistiaMatch[1]
      return {
        platform: 'wistia',
        videoId: videoId,
        embedUrl: `https://fast.wistia.net/embed/iframe/${videoId}?autoplay=true&muted=true&loop=true&videoFoam=true&controlsVisibleOnLoad=false`,
      }
    }

    return null
  }, [videoUrl])

  return (
    <section className="relative w-full overflow-hidden pt-16 md:pt-0">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ minHeight: '100vh' }}>
        {videoEmbed ? (
          videoEmbed.platform === 'youtube' ? (
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[100vh] md:w-[calc(100%+120px)] md:h-[calc(100%+120px)]"
              style={{
                minWidth: '100vw',
                minHeight: '56.25vw',
              }}
            >
              <iframe
                src={videoEmbed.embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Hero Video Background"
                style={{ border: 'none' }}
              />
            </div>
          ) : (
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[100vh] md:w-[calc(100%+120px)] md:h-[calc(100%+120px)]"
              style={{
                minWidth: '100vw',
                minHeight: '56.25vw',
              }}
            >
              <iframe
                src={videoEmbed.embedUrl}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
                name={`wistia_embed_${videoEmbed.videoId}`}
                title="Hero Video Background"
                style={{ border: 'none' }}
              />
            </div>
          )
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-center px-4">
              <p className="text-lg mb-2">Video Placeholder</p>
              <p className="text-sm">
                Set NEXT_PUBLIC_HERO_VIDEO_URL environment variable
                <br />
                with a YouTube or Wistia URL
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.7) 100%)',
          minHeight: '100vh',
        }}
      />

      {/* Text Content Overlay */}
      <div className="relative z-10 w-full flex items-start md:items-center pt-0 md:pt-0 pb-12 md:pb-0 md:h-screen md:min-h-[800px]">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-12 pt-0 md:pt-0">
            <div className="max-w-[563px]">
            {/* Main Headline - Playfair Display Medium, 60px, white */}
              <h1 
              className="text-4xl md:text-[48px] font-black mb-3 md:mb-6 leading-tight md:leading-[48px] text-white drop-shadow-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
              Your Great Grandmother Didn't Buy Bread.
              </h1>
              
            {/* Subheadline - Playfair Display Italic, 24px, white with opacity */}
              <p 
              className="text-xl md:text-2xl mb-3 md:mb-6 leading-snug md:leading-[29.25px] italic text-white/90 drop-shadow-md"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                She made it on the counter. With three ingredients. And it fed her family for pennies.
              </p>
              
            {/* Body Text - Lato Regular, 18px, white with opacity */}
              <p 
              className="text-lg md:text-lg mb-3 md:mb-6 leading-relaxed md:leading-[29.25px] text-white/85 drop-shadow-md"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Somewhere along the way, we forgot how to do this. Now we pay $12 for a loaf of sourdough that costs almost nothing to make. And we wonder why grocery bills keep climbing while our energy keeps dropping.
              </p>
              
            {/* Concluding Statement - Lato Bold, 18px, white with opacity */}
              <p 
              className="text-lg md:text-lg mb-5 md:mb-5 leading-relaxed md:leading-[29.25px] font-bold text-white/90 drop-shadow-md"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Pantry of Plenty is a return to the kitchen skills that actually work.
              </p>

            {/* Social Proof - Star Rating & Review Count */}
            <div className="mb-4 md:mb-6 flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(SOCIAL_PROOF_METRICS.AVERAGE_RATING)
                          ? 'text-[#d76f30] fill-[#d76f30]'
                          : i < SOCIAL_PROOF_METRICS.AVERAGE_RATING
                          ? 'text-[#d76f30] fill-[#d76f30] opacity-50'
                          : 'text-white/40 fill-none'
                      }`}
                    />
                  ))}
                </div>
                <span
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {SOCIAL_PROOF_METRICS.AVERAGE_RATING}
                </span>
              </div>
              <p
                className="text-sm text-white/80"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {SOCIAL_PROOF_METRICS.REVIEW_COUNT}+ students
              </p>
            </div>
              
            {/* CTA Button - Brand orange #d76f30, white text, rounded-full, shadow */}
            <div className="flex flex-col items-start md:items-start">
              <Button
                onClick={handleCTA}
                className="bg-[#d76f30] hover:bg-[#c05d26] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.3),0px_4px_6px_-4px_rgba(0,0,0,0.2)] text-base md:text-lg font-medium uppercase tracking-[0.45px] mb-3 w-full md:w-auto"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Join Pantry of Plenty
              </Button>

              {/* Scarcity - Enhanced Cohort Date with Spots Remaining */}
              <div className="mb-4">
                <p
                  className="text-sm text-white/70 mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Next cohort begins {getNextCohortDate()}
                </p>
                <p
                  className="text-sm font-semibold text-[#d76f30]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Only {SOCIAL_PROOF_METRICS.SPOTS_REMAINING} spots remaining
                </p>
              </div>

              {/* Trust Badges Row */}
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-white/80" />
                  <p
                    className="text-xs text-white/80"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    30-Day Money-Back Guarantee
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-white/80" />
                  <p
                    className="text-xs text-white/80"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {SOCIAL_PROOF_METRICS.SATISFACTION_RATE}% Satisfaction Rate
                  </p>
                </div>
              </div>

              {/* "As Seen In" Preview */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <p
                  className="text-xs uppercase tracking-wider text-white/60 mb-2"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  As Seen In
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {AUTHORITY_MENTIONS.map((mention, index) => (
                    <span
                      key={index}
                      className="text-sm font-semibold text-white/80"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {mention}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
