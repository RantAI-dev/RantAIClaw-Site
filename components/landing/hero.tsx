"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ShinyText from "@/components/landing/shiny-text"
import {
  fadeInUp,
  fadeInLeft,
  defaultTransition as transition,
} from "@/lib/motion-variants"

const ColorBends = dynamic(
  () => import("@/components/landing/color-bends"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background" />,
  }
)

const CHANNELS = [
  "Discord",
  "Slack",
  "Telegram",
  "WhatsApp",
  "Matrix",
  "Email",
  "Signal",
  "Mattermost",
  "IRC",
  "DingTalk",
] as const

export function Hero() {
  const [channelIndex, setChannelIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setChannelIndex((i) => (i + 1) % CHANNELS.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-dvh px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
      <div className="absolute inset-0 z-0 h-[150%] w-full opacity-50">
        <ColorBends
          colors={["#055794", "#5EB6FA"]}
          rotation={25}
          speed={0.42}
          scale={1.1}
          frequency={1}
          warpStrength={1.1}
          noise={0.7}
          transparent
          autoRotate={0}
        />
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center">
        <motion.div {...fadeInLeft} transition={{ ...transition, delay: 0.8 }}>
          <Badge variant="outline" className="mb-4">
            <div className="size-2 rounded-full border border-accent-foreground" />
            <ShinyText
              text="PRODUCTION MULTI-AGENT RUNTIME · 100% RUST"
              speed={3}
              delay={0}
              color="#6b7280"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="font-mono text-xs tracking-wide"
            />
            <div className="size-2 rounded-full border border-accent-foreground" />
          </Badge>
        </motion.div>

        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1]">
          <motion.span
            className="block"
            {...fadeInUp}
            transition={{ ...transition, delay: 0.12 }}
          >
            One Rust binary.
          </motion.span>
          <motion.span
            className="flex flex-wrap items-baseline gap-x-3"
            {...fadeInUp}
            transition={{ ...transition, delay: 0.24 }}
          >
            <span>Speaks</span>
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={CHANNELS[channelIndex]}
                  initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -24, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="inline-block bg-linear-to-r from-[#5EB6FA] to-[#a8d4ff] bg-clip-text pb-[0.18em] text-transparent"
                >
                  {CHANNELS[channelIndex]}.
                </motion.span>
              </AnimatePresence>
              {/* invisible sizer so layout doesn't jump as words change width */}
              <span
                className="invisible inline-block whitespace-nowrap pb-[0.18em]"
                aria-hidden
              >
                {CHANNELS.reduce((a, b) => (b.length > a.length ? b : a))}.
              </span>
            </span>
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 max-w-3xl font-mono leading-relaxed text-muted-foreground sm:text-lg"
          {...fadeInUp}
          transition={{ ...transition, delay: 0.36 }}
        >
          A multi-agent runtime with a{" "}
          <span className="text-foreground">built-in TUI</span> that listens,
          thinks, and replies across{" "}
          <span className="text-foreground">{CHANNELS.length}+ channels</span>{" "}
          from a single ~12&nbsp;MB binary. Sub-200ms cold start. ~15&nbsp;MB
          idle. Per-profile isolation.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          {...fadeInUp}
          transition={{ ...transition, delay: 0.48 }}
        >
          <Button className="h-11 px-8 font-mono" size="lg" asChild>
            <Link href="/docs/getting-started">GET STARTED</Link>
          </Button>
          <Button
            className="h-11 px-8 font-mono"
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/docs">READ THE DOCS</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 max-w-3xl"
          {...fadeInUp}
          transition={{ ...transition, delay: 0.6 }}
        >
          <div className="overflow-hidden rounded-lg border border-border/60 bg-card/80 backdrop-blur">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
              <span>install</span>
              <span>~/.rantaiclaw/</span>
            </div>
            <pre className="overflow-x-auto px-4 py-3 font-mono text-sm text-foreground">
              <code>{`curl -fsSL https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/bootstrap.sh | bash`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
