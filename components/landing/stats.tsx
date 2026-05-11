"use client"

import CountUp from "@/components/landing/count-up"
import { MotionInView } from "@/components/landing/motion-in-view"

const stats = [
  { value: 200, suffix: "ms", label: "Cold start", prefix: "< " },
  { value: 15, suffix: " MB", label: "Idle memory", prefix: "~" },
  { value: 12, suffix: " MB", label: "Binary size", prefix: "~" },
  { value: 30, suffix: "+", label: "LLM providers", prefix: "" },
  { value: 18, suffix: "", label: "Channels", prefix: "" },
  { value: 5, suffix: "", label: "Memory backends", prefix: "" },
]

export function Stats() {
  return (
    <section className="relative bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <MotionInView className="mb-12 max-w-3xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            By the numbers
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Tuned for the workloads agents actually run on.
          </h2>
        </MotionInView>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background p-6 sm:p-8"
            >
              <div className="font-mono text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {stat.prefix}
                <CountUp to={stat.value} duration={1.5} />
                {stat.suffix}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
