import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import '../styles/tokens.css'

// Get the base URL from environment variable or use a default
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pantryofplenty.wylderspace.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Pantry of Plenty | Traditional Foods Pathway by Chef Molly Bravo',
  description: 'Learn sourdough, fermentation, canning & traditional cooking from a HarperCollins cookbook author. 8-week live course + signed cookbook + community. $197 one-time.',
  keywords: ['traditional cooking', 'sourdough', 'fermentation', 'pantry skills', 'home cooking', 'canning', 'preserving food', 'traditional foods', 'kitchen skills'],
  authors: [{ name: 'Molly Bravo' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Pantry of Plenty | Traditional Foods Pathway by Chef Molly Bravo',
    description: 'Learn sourdough, fermentation, canning & traditional cooking from a HarperCollins cookbook author. 8-week live course + signed cookbook + community. $197 one-time.',
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
        
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4209633779267856');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=4209633779267856&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {children}
      </body>
    </html>
  )
}

