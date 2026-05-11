"use client"

import { Keyboard } from "lucide-react"
import { MotionInView } from "@/components/landing/motion-in-view"
import { withBase } from "@/lib/path"

export function Tui() {
  return (
    <section
      id="tui"
      className="relative scroll-mt-16 overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionInView className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <Keyboard className="size-3.5" />
            Headline feature
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            A TUI you&apos;ll actually live in.
          </h2>
          <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Built on{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">ratatui</code>.
            Full-screen, keyboard-driven, opinionated. Chat with your agent,
            watch tools execute mid-run, inspect memory, tail the audit log —
            from one process. Run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">
              rantaiclaw chat
            </code>{" "}
            and you&apos;re in.
          </p>
        </MotionInView>

        <MotionInView>
          {/* Placeholder. Drop a real screenshot at public/tui-screenshot.png
              and change the src below from .svg to .png. */}
          <div className="overflow-hidden rounded-xl border border-border/60 bg-[#0a0f1a] shadow-2xl shadow-primary/10">
            <img
              src={withBase("/tui-screenshot.svg")}
              alt="RantAIClaw TUI"
              width={1600}
              height={900}
              className="block h-auto w-full"
            />
          </div>
        </MotionInView>

        <MotionInView className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Capability
            kbd="tab"
            title="Tools mid-run"
            body="See every tool call, its inputs, its sandbox decision, and its result inline as the agent thinks."
          />
          <Capability
            kbd="m"
            title="Memory browser"
            body="Walk Core / Daily / Conversation entries. Search by query. Forget what shouldn't survive."
          />
          <Capability
            kbd="a"
            title="Live audit"
            body="Tail the JSONL audit log in real time. Approvals, denials, sandbox backend, exit codes."
          />
        </MotionInView>
      </div>
    </section>
  )
}

function Capability({
  kbd,
  title,
  body,
}: {
  kbd: string
  title: string
  body: string
}) {
  return (
    <div className="border border-border/60 bg-card/60 p-5">
      <div className="mb-3 flex items-center gap-2">
        <kbd className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs">
          {kbd}
        </kbd>
        <h3 className="font-medium tracking-tight">{title}</h3>
      </div>
      <p className="font-mono text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  )
}
