import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>RantAIClaw</strong>,
  project: {
    link: 'https://github.com/RantAI-dev/RantAIClaw',
  },
  docsRepositoryBase: 'https://github.com/RantAI-dev/RantAIClaw-Docs/tree/main',
  footer: {
    content: `© ${new Date().getFullYear()} RantAI. All rights reserved.`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
}

export default config
