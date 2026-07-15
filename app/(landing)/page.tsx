import { withBase } from "@/lib/path"
import { HomeHero } from "@/components/home/hero"
import { HomeShowcase } from "@/components/home/showcase"
import { HomeFeatures } from "@/components/home/features"
import { HomeInstall } from "@/components/home/install"
import { HomeCta } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      {/* Hero + showcase share the studio-gradient backdrop that fades to dark */}
      <div className="relative overflow-x-clip">
        <div className="absolute inset-x-0 top-0 h-[640px] sm:h-[820px] lg:h-[1080px]">
          <img
            src={withBase("/home/hero-gradient.jpg")}
            alt=""
            className="size-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-b from-transparent to-[#0c0a09]" />
        </div>
        <HomeHero />
        <HomeShowcase />
      </div>

      <HomeFeatures />
      <HomeInstall />

      <div className="bg-[linear-gradient(180deg,#0c0a09_0%,#050a30_25%,#5cb6f9_75%,#ffffff_100%)]">
        <HomeCta />
      </div>
    </>
  )
}
