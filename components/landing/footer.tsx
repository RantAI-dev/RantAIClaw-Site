"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowUp } from "lucide-react"

import { MotionInView } from "@/components/landing/motion-in-view"

const ColorBends = dynamic(
  () => import("@/components/landing/color-bends"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background" />,
  }
)

export function LandingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden bg-background px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="absolute inset-0 z-0 h-full w-full opacity-30">
        <ColorBends
          colors={["#055794", "#5EB6FA"]}
          rotation={40}
          speed={0.4}
          scale={1}
          frequency={1}
          warpStrength={1}
          noise={1}
          transparent
          autoRotate={0}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30vh] bg-linear-to-b from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MotionInView>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Docs
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/docs"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/getting-started"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/concepts/architecture"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/reference"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Resources
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw/releases"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Releases
                  </a>
                </li>
                <li>
                  <a
                    href="https://clawhub.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    ClawHub Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw/issues"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Issues
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Community
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw/discussions"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Discussions
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    Contributing
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw/blob/main/LICENSE"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Repos
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    RantAIClaw
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RantAI-dev/RantAIClaw-Site"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-foreground"
                  >
                    RantAIClaw-Site
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </MotionInView>

        <MotionInView>
          <div className="mt-16 flex flex-col items-end justify-between gap-8 border-t border-border/40 pt-12 md:flex-row md:gap-0">
            <div>
              <h2 className="mb-2 text-5xl leading-none tracking-tighter md:text-7xl lg:text-8xl">
                RantAIClaw
              </h2>
              <div
                className="font-mono text-xs text-muted-foreground"
                suppressHydrationWarning
              >
                &copy; {new Date().getFullYear()} RantAI. Apache 2.0 licensed.
              </div>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="group flex h-16 w-16 items-center justify-center border border-border transition-all duration-300 hover:border-foreground hover:bg-foreground/5 focus:outline-none active:scale-95 md:h-20 md:w-20"
            >
              <ArrowUp className="h-6 w-6 text-foreground/40 transition-colors duration-300 group-hover:text-foreground" />
            </button>
          </div>
        </MotionInView>
      </div>
    </footer>
  )
}
