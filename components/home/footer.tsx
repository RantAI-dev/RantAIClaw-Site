import Link from "next/link"

const explore = [
  { label: "Documentations", href: "/docs", external: false },
  { label: "RantAI Agents", href: "https://github.com/RantAI-dev/RantAIClaw", external: true },
  { label: "RantAI", href: "https://rantai.dev", external: true },
]

const connect = [
  { label: "X", href: "https://x.com/rantaidev?s=11&t=y2CocxXo1lB0m2FdAm9Mzg", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/rantai-dev/", external: true },
  { label: "Instagram", href: "https://www.instagram.com/rantaidev?igsh=MTByZWh4YXVwM2R4Ng==", external: true },
  { label: "Email", href: "mailto:admin@rantai.dev", external: true },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: typeof explore
}) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="font-grotesk text-base font-semibold text-[#0c0a09]">{title}</p>
      {links.map((link) =>
        link.external ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-grotesk text-base text-[#7c6d67] transition-colors hover:text-[#0c0a09]"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className="font-grotesk text-base text-[#7c6d67] transition-colors hover:text-[#0c0a09]"
          >
            {link.label}
          </Link>
        )
      )}
    </div>
  )
}

export function HomeFooter() {
  return (
    <footer className="bg-white px-4 sm:px-8">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-8 border-t-2 border-dashed border-[#e8e4e3] py-8 sm:flex-row sm:items-center sm:gap-16">
        <div className="flex flex-1 gap-12 sm:gap-16">
          <FooterColumn title="EXPLORE" links={explore} />
          <FooterColumn title="CONNECT" links={connect} />
        </div>
        <p className="font-grotesk flex-1 text-base text-[#1d1816] sm:text-right" suppressHydrationWarning>
          Designed and built by{" "}
          <a
            href="https://rantai.dev"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            RantAI
          </a>{" "}
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
