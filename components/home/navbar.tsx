"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { withBase } from "@/lib/path"

const navItems = [
  { href: "#tui", label: "TUI" },
  { href: "#features", label: "Features" },
  { href: "/docs", label: "Docs" },
]

export function HomeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [onDark, setOnDark] = useState(false)

  useEffect(() => {
    // The hero gradient is light; everything below (~560px) is dark.
    const handleScroll = () => setOnDark(window.scrollY > 560)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        onDark
          ? "border-b border-white/10 bg-[#0c0a09]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="relative flex items-center justify-between px-4 pt-4 pb-3 sm:px-8 sm:pt-6 sm:pb-4">
        <Link href="/" aria-label="RantAIClaw home" className="flex items-center">
          <img
            src={withBase("/home/nav-logo.svg")}
            alt="RantAIClaw"
            width={40}
            height={40}
            className={cn(
              "size-9 transition-[filter] duration-300 sm:size-10",
              onDark && "brightness-0 invert"
            )}
          />
        </Link>

        <nav
          className={cn(
            "absolute left-1/2 hidden -translate-x-1/2 items-center transition-colors duration-300 md:flex",
            onDark ? "text-[#f3f1f1]" : "text-[#18181b]"
          )}
        >
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="font-grotesk px-4 py-2 text-xl transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-grotesk px-4 py-2 text-xl transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#install"
            className="font-grotesk hidden h-10 items-center justify-center rounded-[4px] bg-[#ca3500] px-6 text-base font-medium text-white transition-colors hover:bg-[#a82b00] sm:inline-flex"
          >
            Install Now
          </a>
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-[4px] transition-colors md:hidden",
              onDark ? "text-[#f3f1f1]" : "text-[#18181b]"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-[#0c0a09]/95 px-4 py-3 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-grotesk px-3 py-2 text-lg text-[#f3f1f1] transition-colors hover:bg-white/5"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-grotesk px-3 py-2 text-lg text-[#f3f1f1] transition-colors hover:bg-white/5"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="#install"
              onClick={() => setMobileOpen(false)}
              className="font-grotesk mt-2 inline-flex h-10 items-center justify-center rounded-[4px] bg-[#ca3500] px-6 text-base font-medium text-white transition-colors hover:bg-[#a82b00]"
            >
              Install Now
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
