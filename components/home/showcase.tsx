"use client"

import { useRef, useState, type KeyboardEvent } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { GlobeIcon, TerminalIcon, ZapIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { withBase } from "@/lib/path"
import { MotionInView } from "@/components/home/motion-in-view"

const TABS = [
  {
    id: "tui",
    label: "TUI",
    icon: TerminalIcon,
    video: "/home/tui.mp4",
    poster: "/home/tui-screenshot.png",
    width: 2048,
    height: 1282,
    description:
      "Chat with your agents straight from the terminal. Launch the interactive TUI for a fast, keyboard-driven session — no browser required, fully self-hosted.",
  },
  {
    id: "webui",
    label: "Web UI",
    icon: GlobeIcon,
    video: "/home/gui.mp4",
    poster: "/home/webui-screenshot.png",
    width: 2736,
    height: 1710,
    description:
      "Manage and interact with your agents through an intuitive interface — sessions, channels, and configuration, all in the browser.",
  },
  {
    id: "skills",
    label: "Skills",
    icon: ZapIcon,
    video: "/home/skills.mp4",
    poster: "/home/skills-screenshot.png",
    width: 2048,
    height: 1282,
    description:
      "Extend your agents with reusable skills and powerful MCP integrations — each with its own lifecycle, loaded on demand.",
  },
] as const

type TabId = (typeof TABS)[number]["id"]

export function HomeShowcase() {
  const [active, setActive] = useState<TabId>("tui")
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const shouldReduceMotion = useReducedMotion()
  const activeTab = TABS.find((tab) => tab.id === active) ?? TABS[0]

  const activateTab = (index: number) => {
    const tab = TABS[index]
    if (!tab) return
    setActive(tab.id)
    tabRefs.current[index]?.focus()
  }

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex: number | null = null

    if (event.key === "ArrowRight") nextIndex = (index + 1) % TABS.length
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + TABS.length) % TABS.length
    }
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = TABS.length - 1

    if (nextIndex === null) return
    event.preventDefault()
    activateTab(nextIndex)
  }

  return (
    <section id="tui" className="relative z-10 mx-auto mt-16 max-w-[1080px] scroll-mt-24 px-4 sm:mt-24 sm:px-6 lg:px-0">
      <MotionInView>
        <div
          id="showcase-panel"
          role="tabpanel"
          aria-labelledby={`showcase-tab-${activeTab.id}`}
          tabIndex={0}
          className="relative isolate w-full overflow-hidden rounded-[16px] border border-white/10 shadow-2xl shadow-black/50 transition-[aspect-ratio] duration-300"
          style={{ aspectRatio: `${activeTab.width} / ${activeTab.height}` }}
        >
          <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
            <motion.video
              key={activeTab.id}
              src={withBase(activeTab.video)}
              poster={withBase(activeTab.poster)}
              autoPlay={!shouldReduceMotion}
              controls
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`RantAIClaw ${activeTab.label} demo`}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
              className="absolute inset-0 size-full rounded-xl object-cover object-top"
            />
          </AnimatePresence>
        </div>
      </MotionInView>

      <MotionInView className="mt-2 flex flex-col gap-2 sm:px-14">
        <div
          className="flex flex-col gap-2 sm:flex-row"
          role="tablist"
          aria-label="Interface showcase"
        >
          {TABS.map((tab, index) => {
            const isActive = tab.id === active
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                id={`showcase-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="showcase-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={cn(
                  "font-grotesk relative flex flex-1 items-center justify-center gap-2 rounded-[4px] px-4 py-2 text-lg font-medium transition-colors duration-200 sm:text-xl",
                  isActive
                    ? "text-[#18181b]"
                    : "bg-[#18181b] text-[#f4f4f5] hover:bg-[#232326]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="home-showcase-tab"
                    className="absolute inset-0 rounded-[4px] bg-[#f4f4f5]"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", bounce: 0.15, duration: 0.5 }
                    }
                  />
                )}
                <Icon className="relative size-5" />
                <span className="relative">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="relative min-h-[5.5rem] sm:min-h-[4rem]">
          <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
            <motion.p
              key={activeTab.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
              className="font-grotesk text-center text-base text-[#f3f1f1] sm:text-xl"
            >
              {activeTab.description}
            </motion.p>
          </AnimatePresence>
        </div>
      </MotionInView>
    </section>
  )
}
