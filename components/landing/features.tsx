"use client"

import {
  Cpu,
  MessagesSquare,
  Globe2,
  ShieldCheck,
  Database,
  Plug,
} from "lucide-react"
import { MotionInView } from "@/components/landing/motion-in-view"

const features = [
  {
    icon: Cpu,
    title: "100% Rust",
    description:
      "Async tokio runtime, no GC, ~12 MB binary, sub-200ms cold start, ~15 MB idle memory. Survives constrained containers.",
  },
  {
    icon: MessagesSquare,
    title: "18 Channels",
    description:
      "Discord, Slack, Telegram, WhatsApp (Cloud + Web), Matrix E2EE, Mattermost, Signal, Email, IRC, DingTalk, Lark, iMessage, and more — concurrently, each with its own lifecycle.",
  },
  {
    icon: Globe2,
    title: "30+ LLM Providers",
    description:
      "OpenRouter, Anthropic, OpenAI, Gemini, Copilot, plus 25+ OpenAI-compatible and regional providers. Per-model routing, multi-provider fallback, API-key rotation on 429.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    description:
      "Deny-by-default allowlists, auto-detected sandbox (Landlock → Firejail → Bubblewrap → Docker), AEAD-encrypted secret store, append-only JSONL audit log.",
  },
  {
    icon: Database,
    title: "5 Memory Backends",
    description:
      "SQLite (default), Lucid (sqlite + markdown overlay), Markdown, PostgreSQL, none. Hybrid BM25 + cosine recall. Soul-snapshot for cold-boot survival.",
  },
  {
    icon: Plug,
    title: "Skills + MCP",
    description:
      "Install community skills from ClawHub, auto-sync open-skills every 7 days, supervise MCP servers as child processes with exponential-backoff restart.",
  },
]

export function Features() {
  return (
    <section className="relative bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MotionInView className="mb-16 max-w-3xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            What it does
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            The boring real-world constraints production agents hit — solved at the runtime layer.
          </h2>
        </MotionInView>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <MotionInView
              key={feature.title}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              className="bg-background p-8"
            >
              <feature.icon className="mb-4 size-6 text-primary" />
              <h3 className="mb-2 font-medium tracking-tight">
                {feature.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  )
}
