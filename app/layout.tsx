import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import '../styles/tokens.css'

// Get the base URL from environment variable or use a default
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pantryofplenty.wylderspace.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Pantry of Plenty | Traditional Foods Pathway by Chef Molly Bravo',
  description: 'Learn sourdough, fermentation, canning & traditional cooking from a HarperCollins cookbookauthor. 8-week live course + signed cookbook + community. $197 one-time.',
  keywords: ['traditional cooking', 'sourdough', 'fermentation', 'pantry skills', 'home cooking', 'canning', 'preserving food', 'traditional foods', 'kitchen skills'],
  authors: [{ name: 'Molly Bravo' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Pantry of Plenty | Traditional Foods Pathway by Chef Molly Bravo',
    description: 'Learn sourdough, fermentation, canning & traditional cooking from a HarperCollins author. 8-week live course + signed cookbook + community. $197 one-time.',
    type: 'website',
    siteName: 'Wylder Space',
    images: [
      {
        url: '/assets/Pantry of Plenty Cover.png',
        width: 1200,
        height: 630,
        alt: 'Pantry of Plenty - Traditional Foods Pathway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pantry of Plenty by Chef Molly Bravo',
    description: 'Learn the foundational food skills behind a truly nourishing home.',
    images: ['/assets/Pantry of Plenty Cover.png'],
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
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TSRV9WYTJV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TSRV9WYTJV');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}

