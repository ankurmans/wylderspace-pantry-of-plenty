import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const FinalCTASection: React.FC = () => {
  const handleCTA = () => {
    // TODO: Implement enrollment logic
    console.log('Join Pantry of Plenty clicked')
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              This Is the Shift You've Been Circling
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              You don't need another Pinterest board of recipes you'll never make.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              You don't need another wellness trend that costs more than it gives.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              You need a kitchen that works. Skills that last. And the confidence that comes from knowing you can feed your family — really feed them — no matter what.
            </p>
            <p className="text-2xl md:text-3xl font-bold mb-8">
              <strong>Pantry of Plenty</strong> is the path back to that kitchen.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-12">
              Your great-grandmother knew the way. Now you will too.
            </p>

            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                $197 — One-Time Investment
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Course + Cookbook + Community
              </p>
              <Button
                onClick={handleCTA}
                size="lg"
                className="text-lg px-8 py-4"
              >
                JOIN PANTRY OF PLENTY
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-semibold mb-4">
              P.S.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              If you've read this far, you already know this is for you. The only question is whether you'll keep circling, or whether you'll finally step into the kitchen you've been craving.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              The next cohort begins [DATE]. Your signed cookbook ships as soon as you enroll.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              I'll see you inside.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              — Molly
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

