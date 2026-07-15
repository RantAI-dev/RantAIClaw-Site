export type DesktopPlatform = "linux" | "macos" | "windows"
export type ClientPlatform = DesktopPlatform | "mobile" | "unknown"

export function detectClientPlatform(): ClientPlatform {
  if (typeof window === "undefined") return "unknown"

  const uaData = (
    navigator as Navigator & {
      userAgentData?: { platform?: string }
    }
  ).userAgentData
  const platform = (uaData?.platform || navigator.platform || "").toLowerCase()
  const ua = navigator.userAgent.toLowerCase()
  const isIPadOS = platform.includes("mac") && navigator.maxTouchPoints > 1

  if (/android|iphone|ipad|ipod|mobile/.test(ua) || isIPadOS) return "mobile"
  if (platform.includes("win") || ua.includes("windows")) return "windows"
  if (platform.includes("mac") || ua.includes("mac os") || ua.includes("macintosh")) {
    return "macos"
  }
  if (platform.includes("linux") || ua.includes("linux") || ua.includes("x11")) {
    return "linux"
  }

  return "unknown"
}
