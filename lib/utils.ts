import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the next cohort start date
 * @returns Formatted date string (e.g., "January 5, 2026")
 */
export function getNextCohortDate(): string {
  // Fixed date for now - January 5, 2026
  return 'January 5, 2026'

  // TODO: Uncomment below to re-enable dynamic date calculation
  // Calculates the Monday that is 2 weeks from today
  /*
  const today = new Date()
  // Add 14 days (2 weeks)
  const twoWeeksFromNow = new Date(today)
  twoWeeksFromNow.setDate(today.getDate() + 14)
  
  // Find the Monday of the week containing that date
  const dayOfWeek = twoWeeksFromNow.getDay() // 0 = Sunday, 1 = Monday, etc.
  // Calculate days to Monday: if Sunday (0), add 1; if Monday (1), add 0; otherwise subtract to get to Monday
  const daysToMonday = dayOfWeek === 0 ? 1 : (dayOfWeek === 1 ? 0 : 1 - dayOfWeek)
  
  const monday = new Date(twoWeeksFromNow)
  monday.setDate(twoWeeksFromNow.getDate() + daysToMonday)
  
  // If the Monday is before the 14-day mark, use the next Monday
  if (monday < twoWeeksFromNow) {
    monday.setDate(monday.getDate() + 7)
  }
  
  // Format the date nicely (e.g., "January 15, 2025")
  return monday.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })
  */
}

