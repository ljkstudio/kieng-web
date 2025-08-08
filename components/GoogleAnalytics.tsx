'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GoogleAnalytics(): null {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID) return
    const query = searchParams?.toString()
    const url = query ? `${pathname}?${query}` : pathname
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag?.('config', GA_ID, { page_path: url })
  }, [pathname, searchParams])

  return null
}


