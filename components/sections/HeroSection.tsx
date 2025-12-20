import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const HeroSection: React.FC = () => {
  const handleCTA = () => {
    // TODO: Implement enrollment logic
    console.log('Join Pantry of Plenty clicked')
  }

  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Grandmother Didn't Buy Bread.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            She made it on the counter. With three ingredients. And it fed her family for pennies.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Somewhere along the way, we forgot how to do this.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Now we pay $12 for a loaf of sourdough that costs almost nothing to make. $6 for a tiny jar of sauerkraut our great-grandmothers made by the crock. And we wonder why grocery bills keep climbing while our energy keeps dropping.
          </p>
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            <strong>Pantry of Plenty</strong> is a return to the kitchen skills that actually work — the ones your great-grandmother knew by heart, and that most of us were never taught.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            This isn't another course. It's a shift.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-12">
            Away from dependence. Toward a kitchen that feeds your family well, consistently, and affordably.
          </p>
          <Button
            onClick={handleCTA}
            size="lg"
            className="text-lg px-8 py-4"
          >
            JOIN PANTRY OF PLENTY — $197
          </Button>
        </div>
      </Container>
    </section>
  )
}

