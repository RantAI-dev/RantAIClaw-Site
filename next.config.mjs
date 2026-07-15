import nextra from "nextra"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const withNextra = nextra({
  contentDirBasePath: "/docs",
  // Show a copy button on every fenced code block (opt out per-block with `copy=false`).
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
  // Static export for GitHub Pages.
  // Run with NEXT_PUBLIC_BASE_PATH unset (or empty) for custom-domain deploys,
  // or NEXT_PUBLIC_BASE_PATH=/RantAIClaw-Site for project-page deploys.
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
})
