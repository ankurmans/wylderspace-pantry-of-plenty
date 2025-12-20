import React from 'react'
import { Container } from '@/components/ui/Container'

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            There Is Another Way. And It's Older Than Any of Us.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Before grocery stores. Before convenience foods. Before "wellness" became a $4 trillion industry...
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-12 text-center">
            Families fed themselves.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Not with complicated techniques or expensive equipment. With simple skills passed down through generations:
          </p>
          
          <ul className="space-y-4 mb-12">
            <li className="flex items-start">
              <span className="text-xl mr-4">•</span>
              <span className="text-lg text-gray-700">
                <strong>Bread</strong> risen slowly on the counter.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-4">•</span>
              <span className="text-lg text-gray-700">
                <strong>Grains</strong> soaked to unlock their nutrition.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-4">•</span>
              <span className="text-lg text-gray-700">
                <strong>Vegetables</strong> fermented in jars — alive with beneficial cultures.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-xl mr-4">•</span>
              <span className="text-lg text-gray-700">
                <strong>Pantries</strong> stocked not with packages, but with real food — preserved, prepared, and ready.
              </span>
            </li>
          </ul>

          <p className="text-lg md:text-xl text-gray-700 mb-8">
            This is the way your great-grandparents lived. And it's the way thousands of people are quietly returning to right now.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-center">
            <strong>Pantry of Plenty</strong> is your path back.
          </p>
        </div>
      </Container>
    </section>
  )
}

