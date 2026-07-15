import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"

import { HomeNavbar } from "@/components/home/navbar"
import { HomeFooter } from "@/components/home/footer"

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-grotesk",
})

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jbmono",
})

export const metadata: Metadata = {
  title: {
    absolute: "RantAIClaw — A Rust Runtime for AI Agents",
  },
  description:
    "Deploy AI agents that communicate across Email, Telegram, Discord, Slack, and custom channels from a single lightweight Rust runtime.",
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`home-root min-h-dvh ${grotesk.variable} ${jbMono.variable}`}
    >
      <HomeNavbar />
      <main>{children}</main>
      <HomeFooter />
    </div>
  )
}
