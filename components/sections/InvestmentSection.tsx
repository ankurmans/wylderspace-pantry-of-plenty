import React from 'react'
import { Button } from '@/components/ui/Button'

export const InvestmentSection: React.FC = () => {
  const handleEnrollment = () => {
    // TODO: Implement actual enrollment logic
    console.log('Enrollment button clicked!')
  }

  const includedItems = [
    { name: '8-Module Pantry of Plenty Curriculum', value: 297 },
    { name: 'Weekly Livestream Cooking Classes', value: 240 },
    { name: 'Weekly Q&A Sessions', value: 160 },
    { name: 'Weekly Cooking Demos', value: 80 },
    { name: 'The Essential Canning Cookbook (Signed)', value: 25 },
    { name: '3 Months in Questions Kitchen Society', value: 97 },
  ]

  const totalValue = includedItems.reduce((sum, item) => sum + item.value, 0)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-[#f8f5f1] border border-[#e6e2d6] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Top Banner */}
          <div className="bg-[#1e3e2f] py-4 text-center">
            <p
              className="text-white text-sm font-medium leading-[20px] uppercase tracking-[1.4px]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Lifetime Access • One-Time Payment
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {/* Left Side: Your Investment */}
            <div className="bg-white border-r border-[#e6e2d6] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h2
                className="text-3xl md:text-[30px] font-medium mb-4 leading-[36px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Investment
              </h2>
              <p
                className="text-base md:text-lg mb-6 leading-[24px] text-[rgba(42,42,42,0.7)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                That's less than two months of buying overpriced bread, ferments, and "gut health" products.
              </p>
              <div className="flex items-baseline justify-center mb-8">
                <span
                  className="text-4xl md:text-[48px] font-bold text-[#d76f30] mr-3 leading-[48px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  $197
                </span>
                <span
                  className="text-xl md:text-[20px] text-[rgba(42,42,42,0.4)] line-through leading-[28px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  $899
                </span>
              </div>
              <Button
                onClick={handleEnrollment}
                className="w-full max-w-[350px] bg-[#1e3e2f] hover:bg-[#162e23] text-white px-4 py-6 rounded-[10px] text-lg font-medium mb-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Join Pantry of Plenty
              </Button>
              <div className="text-xs leading-[16px] text-[rgba(42,42,42,0.5)] text-center">
                <p
                  className="mb-1"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Secure 128-bit SSL Encrypted Payment.
                </p>
                <p
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  30-Day Happiness Guarantee.
                </p>
              </div>
            </div>

            {/* Right Side: What You're Getting */}
            <div className="bg-[#f8f5f1] p-8 md:p-12 flex flex-col">
              <h3
                className="text-xl md:text-[20px] font-medium mb-6 leading-[28px] text-[#1e3e2f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What You're Getting:
              </h3>
              <div className="flex flex-col gap-4 mb-6">
                {includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-1 border-b border-[#e6e2d6]"
                  >
                    <span
                      className="text-sm font-medium text-[#2a2a2a] leading-[20px]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="text-sm font-bold text-[rgba(30,62,47,0.6)] leading-[20px]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      ${item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-2 border-t-2 border-[#e6e2d6]">
                <span
                  className="text-lg font-bold text-[#1e3e2f] leading-[28px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Total Value
                </span>
                <span
                  className="text-xl font-bold text-[#1e3e2f] leading-[28px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  ${totalValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
