import { Hero } from "@/components/landing/hero"
import { Tui } from "@/components/landing/tui"
import { Features } from "@/components/landing/features"
import { Stats } from "@/components/landing/stats"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Install } from "@/components/landing/install"
import { CTA } from "@/components/landing/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tui />
      <Features />
      <Stats />
      <HowItWorks />
      <Install />
      <CTA />
    </>
  )
}
