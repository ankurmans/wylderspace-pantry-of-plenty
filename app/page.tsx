'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { WhatThisIsSection } from '@/components/sections/WhatThisIsSection'
import { FuturePacingSection } from '@/components/sections/FuturePacingSection'
import { CurriculumSection } from '@/components/sections/CurriculumSection'
import { LiveTrainingSection } from '@/components/sections/LiveTrainingSection'
import { CookbookSection } from '@/components/sections/CookbookSection'
import { CommunitySection } from '@/components/sections/CommunitySection'
import { CredibilitySection } from '@/components/sections/CredibilitySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { InvestmentSection } from '@/components/sections/InvestmentSection'
import { QualificationSection } from '@/components/sections/QualificationSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { StickyCTA } from '@/components/ui/StickyCTA'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Pantry of Plenty - Traditional Foods Pathway',
      description: 'An 8-week guided experience teaching foundational food skills including sourdough, fermentation, and pantry management.',
      provider: {
        '@type': 'Organization',
        name: 'Wylder Space',
        founder: {
          '@type': 'Person',
          name: 'Molly Bravo',
        },
      },
      offers: {
        '@type': 'Offer',
        price: '197',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '1',
      },
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleEnrollment = () => {
    const element = document.getElementById('investment')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhatThisIsSection />
        <FuturePacingSection />
        <CurriculumSection />
        <LiveTrainingSection />
        <CookbookSection />
        <CommunitySection />
        <div id="about">
          <CredibilitySection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="investment">
          <InvestmentSection />
        </div>
        <QualificationSection />
        <FAQSection />
        <StickyCTA
          text="Join Pantry of Plenty"
          buttonText="Enroll Now — $197"
          price="$197"
          onClick={handleEnrollment}
        />
      </main>
      <Footer />
    </>
  )
}
