/**
 * Base path for the deployed site. Empty for root deploys (custom domain or
 * org-pages); set to "/RantAIClaw-Site" (or similar) for GitHub project pages.
 *
 * Read from NEXT_PUBLIC_BASE_PATH at build time so the same code works for
 * local dev (no prefix) and GitHub Pages (prefixed).
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

/**
 * Prefix a public asset path with the configured basePath.
 * Use this for any plain <img>, anchor href, or fetch() URL that points at a
 * file in /public — next/image and next/link prefix automatically.
 */
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path
  return `${basePath}${path}`
}
