"use client"

import { MotionInView } from "@/components/landing/motion-in-view"

const steps = [
  {
    n: "01",
    title: "Channel ingress",
    body: "Each channel runs in its own tokio task with its own reconnect strategy. Messages normalize into a common shape before the agent loop sees them.",
  },
  {
    n: "02",
    title: "Context assembly",
    body: "Tools → Hardware → Skills → Workspace → Project context → Time → Channel capabilities. Memory recall (hybrid BM25 + cosine) is prepended to the user message.",
  },
  {
    n: "03",
    title: "Provider call",
    body: "ReliableProvider wraps every call — exponential backoff, multi-provider fallback, per-model fallback chains, API-key rotation on 429.",
  },
  {
    n: "04",
    title: "Approval gate",
    body: "Every tool call passes through the approval gate. Autonomy levels (read_only / supervised / full) and per-tool allowlists decide whether to run, prompt, or deny.",
  },
  {
    n: "05",
    title: "Tool execution",
    body: "Sandboxed (Landlock / Firejail / Bubblewrap / Docker) with strict input validation. Sequential by default; parallel when configured.",
  },
  {
    n: "06",
    title: "Reply egress",
    body: "Result fed back to the provider until the LLM returns a text-only response. Channel formats per-platform (markdown, mentions, drafts) and delivers.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MotionInView className="mb-16 max-w-3xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            How a message flows
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            From channel ingress to reply — six steps, one binary.
          </h2>
        </MotionInView>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <MotionInView
              key={step.n}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
              className="border border-border/60 bg-card p-6"
            >
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {step.n}
              </div>
              <h3 className="mb-2 text-lg font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  )
}
