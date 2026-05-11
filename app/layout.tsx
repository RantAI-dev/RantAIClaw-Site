import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import './global.css'

export const metadata: Metadata = {
  title: {
    default: 'RantAIClaw',
    template: '%s | RantAIClaw',
  },
  description:
    'Production multi-agent runtime in 100% Rust. Cold start under 200ms, multi-channel, multi-provider, ClawHub-compatible.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>{children}</body>
    </html>
  )
}
