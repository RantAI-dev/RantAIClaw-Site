import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MotionInView } from "@/components/home/motion-in-view"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.4.1-3 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.7.1 3 .8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  )
}

export function HomeCta() {
  return (
    <section className="relative z-10 mx-auto max-w-[1080px] px-4 py-40 sm:px-6 sm:py-56 lg:px-0 lg:py-64">
      <MotionInView>
        <div className="flex flex-col items-center gap-10 py-16 lg:flex-row lg:gap-4">
          <div className="flex flex-1 flex-col items-center gap-2 text-center">
            <h2 className="font-grotesk text-3xl text-white sm:text-[2.5rem] sm:leading-tight">
              Read the docs. Ship an agent.
            </h2>
            <p className="font-grotesk text-xl font-medium tracking-[-0.02em] sm:text-[2rem] sm:leading-tight">
              <span className="text-[#5cb6f9]">[</span>
              <span className="text-[#050a30]">where agents live and work</span>
              <span className="text-[#5cb6f9]">]</span>
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-4">
            <Link
              href="/docs"
              className="font-grotesk inline-flex h-10 items-center justify-center gap-2.5 rounded-[4px] bg-[#0c0a09] px-6 text-base font-medium text-white transition-colors hover:bg-[#292524]"
            >
              Read documentations
              <ArrowRight className="size-5" />
            </Link>
            <a
              href="https://github.com/RantAI-dev/RantAIClaw"
              target="_blank"
              rel="noreferrer"
              className="font-grotesk inline-flex h-10 items-center justify-center gap-2.5 rounded-[4px] px-6 text-base font-medium text-[#0c0a09] transition-colors hover:bg-black/10"
            >
              Star on Github
              <GithubIcon className="size-5" />
            </a>
          </div>
        </div>
      </MotionInView>
    </section>
  )
}
