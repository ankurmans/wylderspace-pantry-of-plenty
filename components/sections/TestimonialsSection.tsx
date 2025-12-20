import React from 'react'
import { Container } from '@/components/ui/Container'

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "The only 'healthy eating' course I actually finished — and use daily.",
      author: 'Kendall M.',
    },
    // Placeholder for additional testimonials
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Students Are Saying
          </h2>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="bg-gray-50 border-l-4 border-gray-900 p-8 rounded-lg"
              >
                <p className="text-xl md:text-2xl italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-lg font-semibold">
                  — {testimonial.author}
                </p>
              </blockquote>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center italic">
            Note: Gathering more student testimonials will significantly strengthen this section. Even short quotes about specific wins (first successful ferment, money saved, confidence gained) work well here.
          </p>
        </div>
      </Container>
    </section>
  )
}

