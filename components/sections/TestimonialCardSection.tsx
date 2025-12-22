'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Quote } from 'lucide-react'

interface Testimonial {
  headline: string
  paragraphs: string[]
  author: string
  role: string
  initials: string
}

// Export testimonials data so it can be shared
export const testimonialsData: Testimonial[] = [
  {
    headline: "I've Started and Quit So Many 'Healthy Living' Courses. This One Actually Stuck.",
    paragraphs: [
      "Before Pantry of Plenty, I had three unread cookbooks on my shelf and a Pinterest board with 200+ pins I'd never made. I kept thinking I'd 'get to it' but never did.",
      "What made this different? Molly doesn't overwhelm you. Week one was just sourdough starter. That's it. By week three, I had fresh bread on my counter, sauerkraut fermenting, and I'd already saved $47 on groceries that month just from stopping my weekly bakery runs.",
      "The biggest shift? I'm not stressed about dinner anymore. My pantry actually works now. And my kids are eating vegetables they used to refuse—turns out fermented carrots taste way better than raw ones.",
      "This isn't another course I started and abandoned. This is the kitchen I've been trying to build for years.",
    ],
    author: 'Sarah K.',
    role: 'MOTHER OF 3, LOS GATOS, CA',
    initials: 'SK',
  },
  {
    headline: "I Burned Boxed Mac & Cheese Last Year. Now I'm Making My Own Bread.",
    paragraphs: [
      "I'll be honest—I was terrified to join. I'm the person who once set off the smoke alarm making toast. My husband did most of our cooking because I just... didn't trust myself in the kitchen.",
      "But Molly teaches like she's standing right next to you. She doesn't assume you know anything. When my first sourdough loaf came out flat, I posted in the community expecting to feel stupid. Instead, Molly herself responded with exactly what went wrong and how to fix it.",
      "Three months later? I'm the one making Sunday dinner. From scratch. My mother-in-law asked for my fermented pickle recipe last week—I almost cried.",
      "The best part isn't just the food. It's that I finally feel capable. Like I can actually do this. If you think you're 'not a cook,' I promise—you are. You just haven't had Molly teaching you yet.",
    ],
    author: 'Jennifer M.',
    role: 'FIRST-TIME HOMEMAKER, WALNUT CREEK, CA',
    initials: 'JM',
  },
  {
    headline: "I Made Back My $197 Investment in Six Weeks. And I'm Still Using Everything I Learned.",
    paragraphs: [
      "I almost didn't sign up because $197 felt like a lot. But then I added up what I was spending:\n\n→ $12/week on bakery sourdough = $48/month\n→ $8/week on kombucha and fermented foods = $32/month\n→ $40/month on probiotic supplements\n→ Random 'emergency' grocery runs = another $60+/month\n\nI was spending $180/month on things I'm now making myself for maybe $30.\n",
      "But here's what really sold me: I'm still using this six months later. Most courses I buy sit unwatched. This one changed how my kitchen operates. I have a sourdough starter that's been alive for half a year. I have jars of ferments in my fridge at all times. My grocery bills are consistently lower.",
      "And the cookbook? I've used it so much the spine is cracked and there are splatters on half the pages. That's how you know it's worth it.",
      "This isn't an expense. It's an investment that pays you back every single week.",
    ],
    author: 'Rebecca T.',
    role: 'BUDGET-CONSCIOUS MOM, SEBASTOPOL, CA',
    initials: 'RT',
  },
]

interface TestimonialCardSectionProps {
  testimonialIndex?: number // Optional prop, defaults to 0
}

export const TestimonialCardSection: React.FC<TestimonialCardSectionProps> = ({ 
  testimonialIndex = 0 
}) => {
  const testimonial = testimonialsData[testimonialIndex]

  if (!testimonial) {
    return null // Return nothing if index is out of bounds
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* White Card */}
            <div className="bg-white border border-[#e6e2d6] rounded-[16px] shadow-lg p-8 md:p-12 relative">
              {/* Orange Quotation Mark Icon - Centered at top, slightly overlapping card */}
              <div className="absolute -top-6 md:-top-8 z-10">
                <div className="bg-[#d76f30] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 md:w-6 md:h-6 text-white" fill="white" />
                </div>
              </div>
              
              {/* Headline Quote - Playfair Display Bold, 24px, #1e3e2f */}
              <h3
                className="text-lg md:text-2xl font-bold mb-6 leading-[28px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {testimonial.headline}
              </h3>

              {/* Body Text - Lato Regular, 18px, rgba(42,42,42,0.8) */}
              <div className="space-y-4 mb-8">
                {testimonial.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base md:text-lg leading-[28px] text-[rgba(42,42,42,0.8)] whitespace-pre-line"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Divider Line */}
              <div className="border-t border-[rgba(30,62,47,0.2)] mb-8" />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Circle */}
                <div className="bg-[rgba(30,62,47,0.1)] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 border border-[rgba(30,62,47,0.2)]">
                  <p
                    className="text-lg font-bold text-[#1e3e2f] leading-[24px]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {testimonial.initials}
                  </p>
                </div>

                {/* Name and Role */}
                <div>
                  <p
                    className="font-bold text-[#1e3e2f] text-base leading-[24px] mb-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="text-sm leading-[20px] text-[#d76f30] uppercase tracking-[0.5px]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

