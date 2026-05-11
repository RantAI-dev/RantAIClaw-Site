"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MotionInView } from "@/components/landing/motion-in-view"

export function Install() {
  return (
    <section
      id="install"
      className="relative scroll-mt-16 bg-muted/30 px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <MotionInView className="mb-12 max-w-3xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Install
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            One curl. No Rust toolchain. No compiler.
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm text-muted-foreground sm:text-base">
            The bootstrap script detects your platform (Linux x86_64/aarch64/armv7, macOS Intel/Apple Silicon), downloads the matching prebuilt binary from the latest release, verifies its SHA-256 checksum, and installs it to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">~/.cargo/bin</code> or{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">~/.local/bin</code>.
          </p>
        </MotionInView>

        <MotionInView>
          <div className="overflow-hidden border border-border/60 bg-card">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
              <span>bash</span>
              <span>linux · macos</span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-sm text-foreground">
              <code>{`curl -fsSL https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/bootstrap.sh | bash

rantaiclaw --version
rantaiclaw setup                 # guided wizard
rantaiclaw doctor                # validate install
rantaiclaw chat                  # start chatting!`}</code>
            </pre>
          </div>
        </MotionInView>

        <MotionInView className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-11 px-8 font-mono">
            <Link href="/docs/getting-started/install">FULL INSTALL GUIDE</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 px-8 font-mono"
          >
            <a
              href="https://github.com/RantAI-dev/RantAIClaw/releases/latest"
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD MANUALLY
            </a>
          </Button>
        </MotionInView>
      </div>
    </section>
  )
}
