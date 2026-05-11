"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

import { Button } from "@/components/ui/button"
import { MotionInView } from "@/components/landing/motion-in-view"

const ColorBends = dynamic(
  () => import("@/components/landing/color-bends"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background" />,
  }
)

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 opacity-40">
        <ColorBends
          colors={["#055794", "#5EB6FA"]}
          rotation={20}
          speed={0.3}
          scale={1.2}
          frequency={1}
          warpStrength={1.2}
          noise={0.5}
          transparent
          autoRotate={0}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <MotionInView>
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Read the docs.
            <br />
            Ship an agent.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            From the trait + factory architecture to the agent loop to the
            autonomy model — the docs explain how RantAIClaw is built, so you
            can extend it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="h-12 gap-2 px-8 font-mono">
              <Link href="/docs">
                READ THE DOCS
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-8 font-mono"
            >
              <a
                href="https://github.com/RantAI-dev/RantAIClaw"
                target="_blank"
                rel="noreferrer"
              >
                STAR ON GITHUB
              </a>
            </Button>
          </div>
        </MotionInView>
      </div>
    </section>
  )
}
