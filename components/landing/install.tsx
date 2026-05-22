"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MotionInView } from "@/components/landing/motion-in-view"

type OS = "linux" | "macos" | "windows"

const OS_LABEL: Record<OS, string> = {
  linux: "Linux",
  macos: "macOS",
  windows: "Windows",
}

const OS_META: Record<OS, string> = {
  linux: "bash · linux",
  macos: "bash · macos",
  windows: "powershell · windows",
}

const SNIPPETS: Record<OS, string> = {
  linux: `# Installs the binary AND runs the full guided setup wizard
# (provider, approvals, channels, persona, skills, MCP).
# Add --skip-setup to install only.
curl -fsSL https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/bootstrap.sh | bash

rantaiclaw --version
rantaiclaw chat                  # start chatting!`,
  macos: `# Installs the binary AND runs the full guided setup wizard
# (provider, approvals, channels, persona, skills, MCP).
# Add --skip-setup to install only.
curl -fsSL https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/bootstrap.sh | bash

rantaiclaw --version
rantaiclaw chat                  # start chatting!`,
  windows: `# Native Windows one-liner. Detects arch, downloads,
# verifies SHA-256, installs to %LOCALAPPDATA%\\Programs\\rantaiclaw,
# amends User PATH, and runs the full setup wizard.
# Add -SkipSetup to install only.
iwr https://raw.githubusercontent.com/RantAI-dev/RantAIClaw/main/scripts/install.ps1 -UseBasicParsing | iex

# Open a NEW PowerShell window, then:
rantaiclaw.exe --version
rantaiclaw.exe chat              # start chatting!`,
}

function detectOS(): OS | null {
  if (typeof window === "undefined") return null
  const uaData = (
    navigator as Navigator & {
      userAgentData?: { platform?: string }
    }
  ).userAgentData
  const platform = (uaData?.platform || navigator.platform || "").toLowerCase()
  const ua = navigator.userAgent.toLowerCase()
  if (platform.includes("win") || ua.includes("windows")) return "windows"
  if (platform.includes("mac") || ua.includes("mac os") || ua.includes("macintosh")) return "macos"
  if (platform.includes("linux") || ua.includes("linux") || ua.includes("x11")) return "linux"
  return null
}

export function Install() {
  // Default to linux for SSR — replaced on mount via useEffect.
  const [os, setOs] = useState<OS>("linux")
  const [autoDetected, setAutoDetected] = useState(false)

  useEffect(() => {
    const detected = detectOS()
    if (detected) {
      setOs(detected)
      setAutoDetected(true)
    }
  }, [])

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
            One command. No Rust toolchain. No compiler.
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-sm text-muted-foreground sm:text-base">
            Auto-detects your platform (Linux x86_64/aarch64/armv7, macOS Intel/Apple Silicon, Windows x86_64), downloads the matching prebuilt binary from the latest release, verifies its SHA-256 checksum, and installs it to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">~/.cargo/bin</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">~/.local/bin</code>, or your Windows{" "}
            <code className="rounded bg-muted px-1.5 py-0.5">PATH</code>.
          </p>
        </MotionInView>

        <MotionInView>
          <div className="overflow-hidden border border-border/60 bg-card">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-1" role="tablist" aria-label="Install platform">
                {(Object.keys(OS_LABEL) as OS[]).map((key) => {
                  const active = os === key
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => {
                        setOs(key)
                        setAutoDetected(false)
                      }}
                      className={
                        "px-2.5 py-1 text-[0.7rem] uppercase tracking-wider transition-colors " +
                        (active
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground")
                      }
                    >
                      {OS_LABEL[key]}
                    </button>
                  )
                })}
              </div>
              <span className="hidden sm:inline">
                {OS_META[os]}
                {autoDetected ? " · auto-detected" : ""}
              </span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-sm text-foreground">
              <code>{SNIPPETS[os]}</code>
            </pre>
            {os === "windows" ? (
              <div className="border-t border-border/60 px-4 py-3 font-mono text-xs text-muted-foreground">
                Prefer a Linux toolchain on Windows? Install{" "}
                <a
                  href="https://learn.microsoft.com/en-us/windows/wsl/install"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  WSL2
                </a>{" "}
                and run the Linux one-liner inside the Ubuntu shell.
              </div>
            ) : null}
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
