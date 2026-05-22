export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Itch.io", href: "#" },
    { label: "Discord", href: "#" },
  ];

  return (
    <footer className="bg-surface-container-low lg:ml-72 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.1em] text-on-surface">
            © 2026 REZA ARDA RADESTA | SYSTEMS ENGINEER
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-mono)] text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <nav className="flex items-center gap-6 font-[family-name:var(--font-mono)] text-sm">
            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`opacity-80 hover:opacity-100 transition-colors ${
                  i === 0
                    ? "text-primary underline hover:text-primary-container"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
