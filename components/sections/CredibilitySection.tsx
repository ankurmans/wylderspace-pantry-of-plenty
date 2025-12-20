import React from 'react'
import { Container } from '@/components/ui/Container'

export const CredibilitySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Your Guide on This Path
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl md:text-2xl font-bold mb-6">
              <strong>I'm Molly Bravo</strong> — chef, cookbook author, and founder of Wylder Space.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I've spent <strong>nearly 20 years</strong> in professional kitchens — from private chef work to catering weddings and corporate events for companies like Google. I've cooked plated dinners for 120+ guests, built a zero-waste kitchen, and run a farm-to-table catering company in the Santa Cruz Mountains.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              But the work I'm most proud of started in March 2020.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              When the world shut down, I did what my grandmothers would have done: I called local farms, stocked up on jars, and started preserving food for my family. What began as necessity became a way of life.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              That journey led to <strong>The Essential Canning Cookbook</strong>, published by HarperCollins — now in the hands of thousands of home cooks learning to preserve their own food.
            </p>
            <p className="text-lg text-gray-700 mb-12 italic">
              I'm not miles ahead of you on this path. I'm just a step or two ahead — and I'm reaching back to help you walk it too.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">As seen in:</span>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-lg font-semibold text-gray-900">The Knot</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-lg font-semibold text-gray-900">Yelp</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-lg font-semibold text-gray-900">Santa Cruz Chamber</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-lg font-semibold text-gray-900">HarperCollins</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Endorsed by:</p>
                <p className="text-lg text-gray-900 font-semibold">
                  April Dodd, Associate Director of Education at Christopher Kimball's Milk Street
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

