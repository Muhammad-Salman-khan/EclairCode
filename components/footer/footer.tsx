import Link from "next/link";

const footerLinks = [
  { label: "Help Center", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Bug Bounty", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Feedback", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--devcode-on-surface)] text-[var(--devcode-surface)] py-16 border-2 border-[var(--devcode-on-surface)] border-x-0 border-b-0">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <span className="font-space-grotesk text-4xl font-bold tracking-tighter">DevCode</span>
          <p className="font-space-grotesk text-sm opacity-60">
            &copy; 2026 DevCode Platform. Built for engineers.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-space-grotesk text-sm font-bold uppercase tracking-widest">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[var(--devcode-primary-container)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}