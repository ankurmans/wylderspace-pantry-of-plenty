import React from 'react'
import { Container } from '@/components/ui/Container'
import { Accordion } from '@/components/ui/Accordion'

export const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: 'How much time does this take each week?',
      answer: 'Plan for 2–3 hours per week — including watching the livestream, doing the Q&A, and practicing the techniques. This is designed to fit into a real life, not consume it.',
    },
    {
      question: 'What if I can\'t attend the live sessions?',
      answer: 'All livestreams are recorded and available in your member portal within 24 hours. You can watch on your own schedule and still ask questions in the community.',
    },
    {
      question: 'I\'m a complete beginner. Is this for me?',
      answer: 'Yes. This curriculum starts at the very beginning — foundational skills, foundational foods. No prior experience required. Just willingness to learn.',
    },
    {
      question: 'Is this suitable for vegetarians or plant-based eaters?',
      answer: 'Absolutely. The core skills — sourdough, fermentation, preserving, soaking grains, building a stocked pantry — are universal. You\'ll learn to adapt techniques to your way of eating.',
    },
    {
      question: 'What equipment do I need?',
      answer: 'Basic kitchen tools you likely already own — pots, pans, jars, a good knife. I\'ll share my recommendations in Module 1, but you don\'t need anything fancy to start.',
    },
    {
      question: 'Is this a subscription?',
      answer: 'No. $197 is a one-time payment. You get lifetime access to the course modules, plus 3 months in the Sovereign Kitchen Society.',
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'If you go through the material, show up to the sessions, and genuinely feel this didn\'t deliver value, reach out within 30 days. We\'ll make it right.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Questions You Might Have
          </h2>
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  )
}

