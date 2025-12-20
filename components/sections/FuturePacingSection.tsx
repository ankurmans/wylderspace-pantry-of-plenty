import React from 'react'
import { Container } from '@/components/ui/Container'

export const FuturePacingSection: React.FC = () => {
  const scenarios = [
    {
      title: 'A pantry that works like a small grocery store — inside your home.',
      description: 'No more emergency runs to the store. No more staring into the fridge wondering what to make. Your shelves are stocked with real, ready-to-use staples — ferments, soaked grains, preserved vegetables, homemade staples — so you can cook nourishing meals without stress or guesswork.',
    },
    {
      title: 'Food prepared ahead, so dinner doesn\'t rely on last-minute decisions.',
      description: 'There\'s sourdough rising on the counter. Beans soaking. Grains ready to cook. Fermented vegetables adding life to every meal. Tomorrow\'s food is already in motion before you even think about it.',
    },
    {
      title: 'Staples made once, used many times.',
      description: 'One sourdough starter becomes bread, pancakes, pizza dough, crackers, and flatbreads. One batch of preserved tomatoes stretches across dozens of meals. One afternoon of fermenting gives you weeks of probiotic-rich sides. This is where time and money stretch further.',
    },
    {
      title: 'And the quiet confidence of knowing you can feed your family — no matter what.',
      description: '',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Here's Life on the Other Side
          </h2>

          <div className="space-y-12">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                  {scenario.title}
                </h3>
                {scenario.description && (
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {scenario.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

