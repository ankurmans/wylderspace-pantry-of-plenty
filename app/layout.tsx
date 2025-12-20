import type { Metadata } from 'next'
import './globals.css'
import '../styles/tokens.css'

export const metadata: Metadata = {
  title: 'Pantry of Plenty - Traditional Foods Pathway | Learn Traditional Cooking Skills',
  description: 'Learn the foundational food skills behind a truly nourishing home. An 8-week guided experience teaching traditional cooking methods including sourdough, fermentation, and pantry management. Join Chef Molly Bravo for $197.',
  keywords: ['traditional cooking', 'sourdough', 'fermentation', 'pantry skills', 'home cooking', 'canning', 'preserving food', 'traditional foods', 'kitchen skills'],
  authors: [{ name: 'Molly Bravo' }],
  openGraph: {
    title: 'Pantry of Plenty - Traditional Foods Pathway',
    description: 'Learn the foundational food skills behind a truly nourishing home. An 8-week guided experience teaching traditional cooking methods.',
    type: 'website',
    siteName: 'Wylder Space',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pantry of Plenty - Traditional Foods Pathway',
    description: 'Learn the foundational food skills behind a truly nourishing home.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

