import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const InvestmentSection: React.FC = () => {
  const valueItems = [
    { item: '8-Module Pantry of Plenty Curriculum', value: '$297' },
    { item: 'Weekly Livestream Cooking Classes (8 weeks)', value: '$240' },
    { item: 'Weekly Q&A Sessions (8 weeks)', value: '$160' },
    { item: 'Weekly Cooking Demos (8 weeks)', value: '$80' },
    { item: 'The Essential Canning Cookbook (Signed)', value: '$25' },
    { item: '3 Months in the Sovereign Kitchen Society', value: '$97' },
  ]

  const totalValue = 899
  const yourPrice = 197

  const handleCTA = () => {
    // TODO: Implement enrollment logic
    console.log('Join Pantry of Plenty clicked')
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Your Investment
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
            Let's put this in perspective:
          </p>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                    What You're Getting
                  </th>
                  <th className="px-6 py-4 text-right text-lg font-semibold text-gray-900">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {valueItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-lg text-gray-700">
                      {item.item}
                    </td>
                    <td className="px-6 py-4 text-right text-lg font-semibold text-gray-900">
                      {item.value}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-900 text-white">
                  <td className="px-6 py-4 text-lg font-bold">
                    Total Value
                  </td>
                  <td className="px-6 py-4 text-right text-lg font-bold">
                    ${totalValue}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mb-8">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6 inline-block">
              <p className="text-4xl md:text-5xl font-bold mb-2 text-green-700">
                Your Price: ${yourPrice}
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Save ${totalValue - yourPrice} today
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              That's less than two months of buying overpriced bread, ferments, and "gut health" products from the store.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Less than what most families spend on supplements that don't work as well as real food.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4 text-left max-w-2xl mx-auto">
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                ✓ One-time investment — not a subscription that drains your account every month
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleCTA}
              size="lg"
              className="text-lg px-8 py-4"
            >
              JOIN PANTRY OF PLENTY — $197
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

