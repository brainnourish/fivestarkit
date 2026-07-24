import Wordmark from "../Wordmark";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#included", label: "What's Included" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "mailto:hello@fivestarkit.com", label: "Contact" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Wordmark className="text-[17px]" />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-line pt-8">
          <p className="max-w-xl text-[13px] leading-relaxed text-faint">
            FiveStarKit is an independent business and is not affiliated with
            or endorsed by Google LLC. Google and related marks are trademarks
            of Google LLC.
          </p>
          <p className="mt-4 text-[13px] text-faint">
            © {year} FiveStarKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
