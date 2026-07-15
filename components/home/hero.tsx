"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { ArrowRight, CheckIcon, CopyIcon } from "lucide-react"

import { withBase } from "@/lib/path"
import { fadeInUp, defaultTransition as transition } from "@/lib/motion-variants"
import { detectClientPlatform, type ClientPlatform } from "@/lib/platform"

const CHANNELS = [
  { name: "Discord", icon: "/home/discord.png" },
  { name: "Telegram", icon: "/home/telegram.png" },
  { name: "Signal", icon: "/home/signal.png" },
  { name: "iMessage", icon: "/home/imessage.png" },
  { name: "DingTalk", icon: "/home/dingtalk.png" },
] as const

const INSTALL_COMMANDS = {
  unix: "curl -fsSL https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/bootstrap.sh | bash",
  windows:
    "iwr https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/install.ps1 -UseBasicParsing | iex",
} as const

const PLATFORM_LABELS: Partial<Record<ClientPlatform, string>> = {
  linux: "Linux",
  macos: "Mac",
  windows: "Windows",
}

export function HomeHero() {
  const [channelIndex, setChannelIndex] = useState(0)
  const [platform, setPlatform] = useState<ClientPlatform>("unknown")
  const [copied, setCopied] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setPlatform(detectClientPlatform())
    if (shouldReduceMotion) return

    const id = setInterval(() => {
      setChannelIndex((i) => (i + 1) % CHANNELS.length)
    }, 2200)
    return () => clearInterval(id)
  }, [shouldReduceMotion])

  const copyInstall = async () => {
    if (platform === "mobile") return

    const command =
      platform === "windows" ? INSTALL_COMMANDS.windows : INSTALL_COMMANDS.unix
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (permissions/insecure context) — no feedback.
    }
  }

  const channel = CHANNELS[channelIndex]

  return (
    <section className="relative z-10 flex flex-col items-center px-4 pt-36 text-center sm:pt-44 lg:pt-[17.5rem]">
      <motion.h1
        className="font-grotesk text-[#0c0a09]"
        {...(shouldReduceMotion ? {} : fadeInUp)}
        transition={
          shouldReduceMotion ? { duration: 0 } : { ...transition, delay: 0.1 }
        }
      >
        <span className="block text-2xl tracking-[-0.02em] sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
          Lightweight AI Agents
        </span>
        <span className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-4xl tracking-[-0.02em] sm:gap-x-5 sm:text-5xl lg:text-[4rem] lg:leading-tight">
          <span>Speaks to</span>
          <span className="relative inline-flex items-center">
            <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
              <motion.span
                key={channel.name}
                initial={
                  shouldReduceMotion
                    ? false
                    : { y: 20, opacity: 0, filter: "blur(6px)" }
                }
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { y: -20, opacity: 0, filter: "blur(6px)" }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.32,
                  ease: "easeOut",
                }}
                className="absolute left-0 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <img
                  src={withBase(channel.icon)}
                  alt=""
                  className="size-9 sm:size-12 lg:size-16"
                  loading="eager"
                />
                <span className="font-medium underline decoration-[#ca3500] decoration-dotted decoration-[6%] underline-offset-8 [text-underline-position:from-font]">
                  {channel.name}
                </span>
              </motion.span>
            </AnimatePresence>
            {/* invisible sizer so layout doesn't jump as channel names change */}
            <span className="invisible inline-flex items-center gap-2 whitespace-nowrap" aria-hidden>
              <span className="size-9 sm:size-12 lg:size-16" />
              <span className="font-medium">iMessage</span>
            </span>
          </span>
        </span>
      </motion.h1>

      <motion.p
        className="font-grotesk mt-6 max-w-[49.5rem] text-base text-[#18181b] sm:text-lg lg:mt-8 lg:text-xl"
        {...(shouldReduceMotion ? {} : fadeInUp)}
        transition={
          shouldReduceMotion ? { duration: 0 } : { ...transition, delay: 0.22 }
        }
      >
        Deploy AI agents that communicate across Email, Telegram, Discord,
        Slack, and custom channels from a single lightweight Rust runtime.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:mt-12"
        {...(shouldReduceMotion ? {} : fadeInUp)}
        transition={
          shouldReduceMotion ? { duration: 0 } : { ...transition, delay: 0.34 }
        }
      >
        <button
          type="button"
          onClick={copyInstall}
          disabled={platform === "mobile"}
          className="font-grotesk inline-flex h-10 items-center gap-2.5 rounded-[4px] bg-[#0c0a09] px-6 text-base font-medium text-white transition-colors hover:bg-[#292524] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#0c0a09]"
        >
          {copied
            ? "Copied to clipboard!"
            : platform === "mobile"
              ? "Install from a desktop"
              : platform === "unknown"
                ? "Copy install command"
                : `Copy and Install on ${PLATFORM_LABELS[platform]}`}
          {copied ? (
            <CheckIcon className="size-4 text-[#2dd4bf]" />
          ) : platform !== "mobile" ? (
            <CopyIcon className="size-4" />
          ) : null}
        </button>
        <Link
          href="/docs"
          className="font-grotesk inline-flex h-10 items-center gap-2.5 rounded-[4px] px-6 text-base font-medium text-[#0c0a09] transition-colors hover:bg-black/5"
        >
          Read documentations
          <ArrowRight className="size-5" />
        </Link>
      </motion.div>
    </section>
  )
}
