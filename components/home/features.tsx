"use client"

import { motion, useReducedMotion } from "motion/react"

import { withBase } from "@/lib/path"
import { MotionInView } from "@/components/home/motion-in-view"
import { defaultViewport } from "@/lib/motion-variants"

const RUST_STATS = [
  { value: "~12 MB", label: "Binary" },
  { value: "~200ms", label: "Cold Start" },
  { value: "~15 MB", label: "Idle Memory" },
  { value: "No GC", label: "Predictable" },
]

const CHANNEL_ICONS = [
  { src: "/home/imessage.png", alt: "iMessage", size: 60 },
  { src: "/home/signal.png", alt: "Signal", size: 70 },
  { src: "/home/discord.png", alt: "Discord", size: 80 },
  { src: "/home/telegram.png", alt: "Telegram", size: 70 },
  { src: "/home/dingtalk.png", alt: "DingTalk", size: 60 },
]

const LLM_ROWS: string[][] = [
  [
    "/home/venice.svg",
    "/home/cloudflare.svg",
    "/home/deepseek.svg",
    "/home/gemini.svg",
    "/home/llm-set-2.svg",
    "/home/bedrock.svg",
  ],
  [
    "/home/copilot.svg",
    "/home/openai.svg",
    "/home/openrouter.svg",
    "/home/claude.svg",
    "/home/gemini.svg",
    "/home/deepseek.svg",
  ],
  [
    "/home/ollama.svg",
    "/home/llm-set-2.svg",
    "/home/perplexity.svg",
    "/home/bedrock.svg",
    "/home/copilot.svg",
    "/home/llm-set-3.svg",
  ],
]

const KNOWLEDGE_ICONS = [
  { src: "/home/knowledge-pdf.svg", left: 63, top: 19 },
  { src: "/home/knowledge-code.svg", left: 39, top: 50 },
  { src: "/home/knowledge-doc.svg", left: 63, top: 78 },
  { src: "/home/knowledge-image.svg", left: 39, top: 107 },
  { src: "/home/knowledge-globe.svg", left: 63, top: 139 },
]

/**
 * Bottom-anchored heading overlay used by the channels/LLM/knowledge tiles.
 * Descriptions stay hidden until the parent tile is hovered.
 */
function TileHeading({
  children,
  description,
}: {
  children: React.ReactNode
  description?: string
}) {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center p-2.5 backdrop-blur-[2.5px]${
        description
          ? " transition-colors duration-300 group-hover:bg-[#18181b]/85"
          : ""
      }`}
    >
      <p className="font-grotesk text-xl font-medium text-white">{children}</p>
      {description && (
        <div className="grid w-full grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
          <p className="font-grotesk min-h-0 overflow-hidden px-4 pt-0 text-center text-sm text-[#a1adaf] opacity-0 transition-opacity duration-300 group-hover:pt-1 group-hover:opacity-100">
            {description}
          </p>
        </div>
      )}
    </div>
  )
}

export function HomeFeatures() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="features"
      className="relative z-10 mx-auto max-w-[1080px] scroll-mt-24 px-4 py-32 sm:px-6 sm:py-44 lg:px-0 lg:py-64"
    >
      <MotionInView className="mb-6 flex flex-col items-center text-center">
        <h2 className="font-grotesk text-3xl text-white sm:text-[2.5rem] sm:leading-tight">
          Everything Your Agents Need.
        </h2>
        <p className="font-grotesk text-lg text-[#67787c] sm:text-xl">
          From channels and memory to security and model routing.
        </p>
      </MotionInView>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:h-[560px] lg:grid-cols-12 lg:grid-rows-6">
        {/* Lightweight by Design */}
        <MotionInView
          className="group relative min-h-[22rem] overflow-hidden rounded-lg bg-[#18181b] ring-1 ring-white/0 transition-shadow duration-300 hover:ring-white/10 sm:col-span-2 lg:col-span-6 lg:row-span-4 lg:min-h-0"
          transition={{ duration: 0.55, delay: 0 }}
        >
          {/* rust gear outline */}
          <img
            src={withBase("/home/rust-outline.png")}
            alt=""
            className="pointer-events-none absolute -bottom-[102px] -left-[57px] h-[316px] w-[315px] max-w-none transition-transform duration-700 ease-out group-hover:rotate-[10deg]"
            loading="lazy"
          />
          {/* orange glow */}
          <img
            src={withBase("/home/ellipse-glow.svg")}
            alt=""
            className="pointer-events-none absolute -top-[21px] left-[223px] size-[736px] max-w-none transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          {/* rust texture */}
          <img
            src={withBase("/home/rust-bg.png")}
            alt=""
            className="pointer-events-none absolute left-[249px] top-0 h-full w-[691px] max-w-none object-cover opacity-30 mix-blend-color-dodge transition-opacity duration-700 group-hover:opacity-45"
            loading="lazy"
          />
          <p className="font-grotesk absolute left-6 top-6 text-[2.5rem] font-medium text-white">
            Lightweight by Design
          </p>
          <p className="font-grotesk absolute left-6 top-[82px] max-w-[320px] text-base text-[#67787c]">
            A compact Rust-powered runtime built for fast startup, low memory
            use, and predictable production behavior.
          </p>
          <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-b from-[rgba(24,24,27,0)] to-[#18181b] p-2">
            {RUST_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-1 flex-col items-center rounded-md px-1 py-2 transition-colors duration-300 hover:bg-white/5 sm:px-3"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : 0.15 + i * 0.08,
                }}
              >
                <p className="font-grotesk text-base font-medium text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="font-grotesk text-sm text-[#67787c] sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </MotionInView>

        {/* Extend with Clawhub */}
        <MotionInView
          className="group relative min-h-[22rem] overflow-hidden rounded-lg bg-gradient-to-b from-[#18181b] from-[33%] to-[#ffb86a] ring-1 ring-white/0 transition-shadow duration-300 hover:ring-white/10 lg:col-span-3 lg:row-span-4 lg:min-h-0"
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="relative z-10 flex flex-col gap-1 p-4">
            <p className="font-grotesk text-xl font-medium text-white">
              Extend with Clawhub
            </p>
            <p className="font-grotesk text-base text-[#67787c]">
              Add reusable skills, MCP integrations, and ready-to-use modules
              from Clawhub.
            </p>
          </div>
          <img
            src={withBase("/home/clawhub-screenshot.png")}
            alt="ClawHub skills marketplace"
            className="absolute -left-[10px] top-[110px] w-[736px] max-w-none transition-transform duration-500 ease-out group-hover:-translate-y-2.5"
            loading="lazy"
          />
        </MotionInView>

        {/* Web UI */}
        <MotionInView
          className="group relative min-h-[22rem] overflow-hidden rounded-lg bg-gradient-to-b from-[#18181b] from-[33%] to-[#5cb6f9] ring-1 ring-white/0 transition-shadow duration-300 hover:ring-white/10 lg:col-span-3 lg:row-span-4 lg:min-h-0"
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          <div className="relative z-10 flex flex-col gap-1 p-4">
            <p className="font-grotesk text-xl font-medium text-white">Web UI</p>
            <p className="font-grotesk text-base text-[#67787c]">
              Manage and interact with your agents through an intuitive
              interface.
            </p>
          </div>
          <img
            src={withBase("/home/webui-screenshot.png")}
            alt="RantAIClaw web dashboard"
            className="absolute -left-[10px] top-[110px] w-[692px] max-w-none transition-transform duration-500 ease-out group-hover:-translate-y-2.5"
            loading="lazy"
          />
        </MotionInView>

        {/* 18 Channels */}
        <MotionInView
          className="group relative min-h-[11.5rem] overflow-hidden rounded-lg bg-[#18181b] ring-1 ring-white/0 transition-shadow duration-300 hover:ring-white/10 lg:col-span-4 lg:row-span-2 lg:min-h-0"
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <div className="absolute left-1/2 top-[51px] flex -translate-x-1/2 items-start justify-center">
            {CHANNEL_ICONS.map((icon, i) => (
              <motion.img
                key={icon.alt}
                src={withBase(icon.src)}
                alt={icon.alt}
                title={icon.alt}
                style={{ width: icon.size, height: icon.size }}
                className="shrink-0 cursor-pointer"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 16, scale: 0.8 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.18, y: -6 }
                }
                viewport={defaultViewport}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.2 + i * 0.07,
                }}
                loading="lazy"
              />
            ))}
          </div>
          <TileHeading description="iMessage, Signal, Discord, Telegram, DingTalk, and more — reach your agents wherever the conversation happens.">
            18 Channels
          </TileHeading>
        </MotionInView>

        {/* 30+ LLM Providers */}
        <MotionInView
          className="home-marquee group relative min-h-[11.5rem] overflow-hidden rounded-lg bg-[#18181b] ring-1 ring-white/0 transition-shadow duration-300 hover:ring-white/10 lg:col-span-4 lg:row-span-2 lg:min-h-0"
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          <div className="absolute inset-0 flex flex-col items-stretch justify-center gap-4 py-3">
            {LLM_ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div
                  className={
                    rowIndex === 1
                      ? "home-marquee-row-reverse flex w-max gap-[50px] pr-[50px]"
                      : "home-marquee-row flex w-max gap-[50px] pr-[50px]"
                  }
                  style={{
                    ["--marquee-duration" as string]: `${34 + rowIndex * 8}s`,
                  }}
                >
                  {[...row, ...row].map((src, i) => (
                    <img
                      key={`${src}-${i}`}
                      src={withBase(src)}
                      alt=""
                      className="size-[42px] shrink-0"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* radial dark falloff so icons fade toward the edges */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_center,rgba(24,24,27,0)_0%,rgba(24,24,27,0.94)_100%)]" />
          <TileHeading description="Route every agent to Claude, GPT, Gemini, DeepSeek, Ollama, and more — swap models without changing your setup.">
            30+ LLM Providers
          </TileHeading>
        </MotionInView>

        {/* Bring Your Knowledge */}
        <MotionInView
          className="group relative min-h-[11.5rem] overflow-hidden rounded-lg bg-[#18181b] ring-1 ring-white/0 transition-shadow duration-300 hover:ring-white/10 lg:col-span-4 lg:row-span-2 lg:min-h-0"
          transition={{ duration: 0.55, delay: 0.4 }}
        >
          {/* dashed logo pattern backdrop */}
          <img
            src={withBase("/home/knowledge-bg.svg")}
            alt=""
            className="pointer-events-none absolute -top-[15px] left-[184px] h-[212px] w-[224px] max-w-none"
            loading="lazy"
          />
          {/* dashed lines converging into the logo */}
          <img
            src={withBase("/home/knowledge-lines.svg")}
            alt=""
            className="pointer-events-none absolute left-[65px] top-[31px] h-[122px] w-[203px] max-w-none transition-[filter] duration-500 group-hover:brightness-150"
            loading="lazy"
          />
          {/* knowledge source icons */}
          {KNOWLEDGE_ICONS.map((icon, i) => (
            <motion.img
              key={icon.src}
              src={withBase(icon.src)}
              alt=""
              className="absolute size-6 transition-[filter] duration-500 group-hover:brightness-150"
              style={{ left: icon.left, top: icon.top }}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={defaultViewport}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : 0.2 + i * 0.09,
              }}
              loading="lazy"
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(243deg,rgba(24,24,27,0)_0%,rgba(24,24,27,0.94)_100%)]" />
          {/* glowing RantAIClaw logo the sources feed into */}
          <img
            src={withBase("/home/knowledge-logo.svg")}
            alt=""
            className="absolute left-[255px] top-[49px] h-[84px] w-[86px] max-w-none transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
          />
          <TileHeading description="RantAIClaw supports RAG (Retrieval-Augmented Generation) out of the box — turn PDFs, code, docs, images, and web pages into knowledge your agents retrieve when answering.">
            Bring Your Knowledge
          </TileHeading>
        </MotionInView>
      </div>
    </section>
  )
}
