"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { detectClientPlatform, type DesktopPlatform } from "@/lib/platform"
import { MotionInView } from "@/components/home/motion-in-view"

type OS = DesktopPlatform

const SNIPPETS: Record<OS, { comment: string; prompt: string; command: string }> = {
  linux: {
    comment:
      "# Auto-detects your platform, downloads the matching prebuilt binary from the latest release",
    prompt: "$",
    command:
      " curl -fsSL https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/bootstrap.sh | bash",
  },
  macos: {
    comment:
      "# Auto-detects your platform, downloads the matching prebuilt binary from the latest release",
    prompt: "$",
    command:
      " curl -fsSL https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/bootstrap.sh | bash",
  },
  windows: {
    comment:
      "# Native one-liner. Verifies SHA-256, installs, amends User PATH, runs the setup wizard",
    prompt: ">",
    command:
      " iwr https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/install.ps1 -UseBasicParsing | iex",
  },
}

const OS_KEYS = Object.keys(SNIPPETS) as OS[]

export function HomeInstall() {
  const [os, setOs] = useState<OS>("linux")
  const [isMobile, setIsMobile] = useState(false)
  const [copied, setCopied] = useState(false)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const detected = detectClientPlatform()
    setIsMobile(detected === "mobile")
    if (detected === "linux" || detected === "macos" || detected === "windows") {
      setOs(detected)
    }
  }, [])

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPETS[os].command.trim())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — no feedback.
    }
  }

  const snippet = SNIPPETS[os]

  const activateTab = (index: number) => {
    const key = OS_KEYS[index]
    if (!key) return
    setOs(key)
    tabRefs.current[index]?.focus()
  }

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex: number | null = null

    if (event.key === "ArrowRight") nextIndex = (index + 1) % OS_KEYS.length
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + OS_KEYS.length) % OS_KEYS.length
    }
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = OS_KEYS.length - 1

    if (nextIndex === null) return
    event.preventDefault()
    activateTab(nextIndex)
  }

  return (
    <section
      id="install"
      className="relative z-10 mx-auto flex max-w-[1080px] scroll-mt-24 flex-col items-center gap-12 px-4 py-32 sm:px-6 sm:py-44 lg:flex-row lg:gap-16 lg:px-0 lg:py-64"
    >
      <MotionInView className="flex shrink-0 flex-col items-start gap-8">
        <h2 className="font-grotesk text-3xl text-white sm:text-[2.5rem] sm:leading-tight">
          One command.
          <br />
          No compiler.
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/docs/getting-started/install"
            className="font-grotesk inline-flex h-10 items-center justify-center rounded-[4px] bg-[#ca3500] px-6 text-base font-medium text-white transition-colors hover:bg-[#a82b00]"
          >
            Installation guide
          </Link>
          <a
            href="https://github.com/RantAI-dev/RantAIClaw/releases/latest"
            target="_blank"
            rel="noreferrer"
            className="font-grotesk inline-flex h-10 items-center justify-center rounded-[4px] border border-[#e8e4e3]/40 px-6 text-base font-medium text-white transition-colors hover:bg-white/5"
          >
            Download manually
          </a>
        </div>
      </MotionInView>

      <MotionInView className="flex w-full min-w-0 flex-col items-center gap-2">
        <div className="w-full overflow-hidden rounded-[20px]">
          <div className="flex flex-col gap-3 bg-[#090b0c] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="flex w-full items-start sm:w-auto"
              role="tablist"
              aria-label="Install platform"
            >
              {OS_KEYS.map((key, i, arr) => (
                <button
                  key={key}
                  ref={(node) => {
                    tabRefs.current[i] = node
                  }}
                  id={`install-tab-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={os === key}
                  aria-controls="install-panel"
                  tabIndex={os === key ? 0 : -1}
                  onClick={() => setOs(key)}
                  onKeyDown={(event) => handleTabKeyDown(event, i)}
                  className={cn(
                    "font-jbmono flex-1 px-2 py-1 text-base font-light transition-colors sm:flex-none sm:px-4 sm:text-xl",
                    i === 0 && "rounded-l-[4px]",
                    i === arr.length - 1 && "rounded-r-[4px]",
                    os === key
                      ? "bg-[#ca3500] text-[#fff7ed]"
                      : "bg-[#161b1d] text-[#f3f1f1] hover:bg-[#22282b]"
                  )}
                >
                  {key}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={copyCommand}
              className="font-jbmono flex w-full items-center justify-center gap-2 rounded-[4px] px-2 py-1 text-base font-light text-[#f3f1f1] transition-colors hover:bg-white/10 sm:w-auto sm:px-4 sm:text-xl"
            >
              {copied ? "copied!" : "copy"}
              {copied ? (
                <CheckIcon className="size-5 text-[#2dd4bf]" />
              ) : (
                <CopyIcon className="size-5" />
              )}
            </button>
          </div>
          <div
            id="install-panel"
            role="tabpanel"
            aria-labelledby={`install-tab-${os}`}
            tabIndex={0}
            className="overflow-x-auto bg-[#18181b] p-6 sm:p-8"
          >
            <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
              <motion.div
                key={os}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                className="font-jbmono flex flex-col gap-4 text-sm font-light sm:text-base"
              >
                <p className="whitespace-nowrap text-[#67787c]">{snippet.comment}</p>
                <p className="whitespace-nowrap text-[#f1f3f3]">
                  <span className="text-[#ca3500]">{snippet.prompt}</span>
                  {snippet.command}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {isMobile ? (
          <p className="font-grotesk text-center text-base text-[#67787c] sm:text-xl">
            Installation requires a desktop. Choose a platform above to copy a
            command for your computer.
          </p>
        ) : (
          <p className="font-grotesk text-center text-base text-[#67787c] sm:text-xl">
            Prefer a Linux toolchain on Windows? Install{" "}
            <a
              href="https://learn.microsoft.com/en-us/windows/wsl/install"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              WSL2
            </a>{" "}
            and run the Linux one-liner inside the Ubuntu shell.
          </p>
        )}
      </MotionInView>
    </section>
  )
}
