import { LandingThemeProvider } from "@/components/landing/theme-provider"
import { LandingNavbar } from "@/components/landing/navbar"
import { LandingFooter } from "@/components/landing/footer"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LandingThemeProvider>
      <div className="landing-root min-h-dvh">
        <LandingNavbar />
        <main>{children}</main>
        <LandingFooter />
      </div>
    </LandingThemeProvider>
  )
}
