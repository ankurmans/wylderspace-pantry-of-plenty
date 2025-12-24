// Type definitions for Meta Pixel (Facebook Pixel)
declare global {
  interface Window {
    fbq?: (
      action: 'init' | 'track',
      eventName: string,
      params?: {
        content_name?: string
        content_category?: string
        value?: number
        currency?: string
        [key: string]: any
      }
    ) => void
    _fbq?: any
  }
}

export {}

