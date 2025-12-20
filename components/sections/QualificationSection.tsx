import React from 'react'
import { Container } from '@/components/ui/Container'

export const QualificationSection: React.FC = () => {
  const forYouIf = [
    'Relying on expensive, packaged food is a dead end',
    'Health shouldn\'t require endless purchasing',
    'Basic food skills equal freedom',
    'The kitchen is meant to anchor a household — not stress it',
  ]

  const notForYouIf = [
    'You\'re looking for quick fixes or overnight transformations',
    'You want someone to do the work for you',
    'You\'re not willing to spend time in your kitchen',
    'You\'re happy with the current food system and how it\'s serving your family',
  ]

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              This Is For You If You Can't Unsee the Cracks Anymore
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
              Pantry of Plenty is for women who already sense that:
            </p>

            <ul className="space-y-4 mb-8">
              {forYouIf.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-xl mr-4">→</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg md:text-xl text-gray-700 mb-4">
              You don't need to live on a farm. You don't need hours of free time. You don't need to be a "good cook."
            </p>
            <p className="text-lg md:text-xl font-semibold text-center">
              You just need to be ready to learn the skills that generations before us knew — and that we deserve to reclaim.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              This Might Not Be For You If...
            </h2>

            <ul className="space-y-4 mb-8">
              {notForYouIf.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-xl mr-4">→</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                This is real work. Simple, but real. If you're not ready to show up, this isn't your moment.
              </p>
              <p className="text-lg md:text-xl font-semibold">
                But if you are? The kitchen you've been craving is waiting.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

