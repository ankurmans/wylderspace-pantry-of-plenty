import React from 'react'
import { Container } from '@/components/ui/Container'

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            You Already Know Something Is Off
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
            You feel it every time you check out at the grocery store.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
            Every time you scan an ingredient list you can't pronounce.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
            Every time you throw away food that spoiled before you could use it.
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              The system is expensive — and you're paying for it twice.
            </p>
            <p className="text-lg text-gray-700">
              Once at the register. Again with your health.
            </p>
          </div>

          <p className="text-lg md:text-xl font-semibold mb-8">
            Think about it:
          </p>

          <ul className="space-y-6 mb-12">
            <li className="flex items-start">
              <span className="text-2xl mr-4">→</span>
              <span className="text-lg text-gray-700">
                <strong>$9–$12 for a sourdough loaf</strong> that requires flour, water, salt, and a bit of patience
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">→</span>
              <span className="text-lg text-gray-700">
                <strong>$6–$8 for a jar of sauerkraut</strong> that your great-grandmother made for nearly nothing — and that actually had live cultures in it
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">→</span>
              <span className="text-lg text-gray-700">
                <strong>$40/month on probiotics and "gut health" supplements</strong> when real fermented foods do the job better and cost a fraction
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">→</span>
              <span className="text-lg text-gray-700">
                <strong>$5 for a bag of granola</strong> loaded with seed oils — when soaking and toasting your own oats takes 20 minutes
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">→</span>
              <span className="text-lg text-gray-700">
                <strong>The hidden costs</strong> — fatigue, inflammation, digestive issues — that show up later because the food isn't actually feeding you
              </span>
            </li>
          </ul>

          <p className="text-lg md:text-xl text-gray-700 mb-4 text-center">
            Deep down, you know this isn't how it's supposed to work.
          </p>
          <p className="text-lg md:text-xl font-semibold text-center">
            You just haven't been shown another way.
          </p>
        </div>
      </Container>
    </section>
  )
}

