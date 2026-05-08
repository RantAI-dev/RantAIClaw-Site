'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ScreenshotProps {
  src: string
  alt: string
}

export function Screenshot({ src, alt }: ScreenshotProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const darkSrc = src.replace(/\.(png|jpg|jpeg|webp)$/, '-dark.$1')
  const imgSrc = mounted && resolvedTheme === 'dark' ? darkSrc : src

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={(e) => {
        if (imgSrc === darkSrc) {
          (e.target as HTMLImageElement).src = src
        }
      }}
      style={{
        width: '100%',
        borderRadius: '0.5rem',
        border: '1px solid var(--nextra-border-color, #292929)',
      }}
    />
  )
}
