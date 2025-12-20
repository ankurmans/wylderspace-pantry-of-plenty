import React from 'react'
import { Container } from '@/components/ui/Container'

export const WhatsIncludedSection: React.FC = () => {
  const modules = [
    {
      number: 1,
      title: 'Welcome to Your Pantry of Plenty',
      description: 'Setting up your kitchen for success — mindset, tools, and the rhythm of traditional cooking',
    },
    {
      number: 2,
      title: 'Foundations of a Nutrient-Dense Kitchen',
      description: 'Understanding why these methods matter — the science and wisdom behind traditional preparation',
    },
    {
      number: 3,
      title: 'Traditional Food Preparation',
      description: 'Soaking, sprouting, and fermenting — unlocking nutrition and digestibility',
    },
    {
      number: 4,
      title: 'Stocks & Nourishing Bases',
      description: 'Building depth of flavor from scratch — vegetable stocks, rich broths, and foundational liquids',
    },
    {
      number: 5,
      title: 'Sourdough Fundamentals',
      description: 'From starter to loaf — bread the way it was meant to be made',
    },
    {
      number: 6,
      title: 'Fermentation for Beginners',
      description: 'Sauerkraut, pickles, kimchi, and beyond — gut health without the supplement aisle',
    },
    {
      number: 7,
      title: 'Building Your Traditional Foods Pantry',
      description: 'Stocking, organizing, and maintaining a pantry that sustains your family year-round',
    },
    {
      number: 8,
      title: 'Hands-On Cooking Workshops',
      description: 'Putting it all together — real meals using everything you\'ve learned',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Everything You Need to Make This Shift Stick
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              The Pantry of Plenty Curriculum
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              <strong>8 modules of hands-on instruction</strong> covering the foundations of nutrient-dense, traditional cooking:
            </p>

            <div className="space-y-6">
              {modules.map((module) => (
                <div key={module.number} className="border-l-4 border-gray-900 pl-6 py-4">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">
                    Module {module.number}: {module.title}
                  </h4>
                  <p className="text-lg text-gray-700 italic">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Live Weekly Training with Chef Molly
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              This isn't a watch-and-forget video library. You'll learn <em>with</em> me, in real time:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-semibold mb-2">📅 Weekly Livestream Cooking Class</p>
                <p className="text-gray-700">
                  Cook alongside me as I walk you through techniques, answer questions on the spot, and troubleshoot in real time.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-semibold mb-2">📅 Weekly Q&A Session</p>
                <p className="text-gray-700">
                  Bring your questions — about recipes, ingredients, technique, or how to adapt this to your life. I'm here.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-semibold mb-2">📅 Weekly Cooking Demo (10–15 min)</p>
                <p className="text-gray-700">
                  Short, focused demonstrations on specific skills — perfect for fitting learning into a busy week.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              The Essential Canning Cookbook (Signed Copy)
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              My HarperCollins-published cookbook, shipped directly to your door.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              75+ recipes for water bath and pressure canning, organized by season. Step-by-step instructions, safety guidelines, and troubleshooting tips from nearly two decades of professional cooking.
            </p>
            <p className="text-lg font-semibold mb-4">
              This book retails for $24.99 — it's included with your enrollment.
            </p>
            <blockquote className="border-l-4 border-gray-900 pl-6 italic text-gray-700">
              "Few canning cookbooks strike such a perfect balance of bold flavors, clear instructions and need-to-know safety precautions."<br />
              <span className="font-semibold">— April Dodd, Associate Director of Education, Christopher Kimball's Milk Street</span>
            </blockquote>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              3 Months Inside the Sovereign Kitchen Society
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              You won't do this alone.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The Sovereign Kitchen Society is our private community (off social media) where women learning these skills support each other:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-xl mr-4">→</span>
                <span className="text-lg text-gray-700">Ask questions between sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-4">→</span>
                <span className="text-lg text-gray-700">Share wins, troubleshoot failures</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-4">→</span>
                <span className="text-lg text-gray-700">Get encouragement when the sourdough flops or the ferment goes sideways</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-4">→</span>
                <span className="text-lg text-gray-700">Connect with others who are building the same kind of kitchen you are</span>
              </li>
            </ul>
            <p className="text-lg font-semibold">
              This is where the transformation sticks — because you're surrounded by people doing it with you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

