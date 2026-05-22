import { withBase } from "./lib/path"

const config = {
  logo: (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
    >
      <img src={withBase("/logo.png")} alt="" width={28} height={28} />
      <strong>RantAIClaw</strong>
    </span>
  ),
  project: {
    link: "https://github.com/RantAI-dev/RantAIClaw",
  },
  docsRepositoryBase: "https://github.com/RantAI-dev/RantAIClaw-Site/tree/main",
  footer: {
    content: (
      <span>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://rantai.dev"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
        >
          RantAI
        </a>
        . All rights reserved.
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
}

export default config
