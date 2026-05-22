'use client';

import { useState, useEffect } from 'react';

const CENTER_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Store' },
] as const;

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 right-0 left-0 lg:left-72
        z-50
        flex items-center justify-between
        h-16 px-6
        border-b border-white/10
        transition-all duration-300
        ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,210,255,0.08)]'
            : 'bg-surface/60 backdrop-blur-xl shadow-[0_1px_10px_rgba(0,210,255,0.04)]'
        }
      `}
    >
      {/* ── Left: Logo ── */}
      <a
        href="#hero"
        className="flex items-center gap-2 font-mono uppercase tracking-widest text-primary-container text-[14px]"
      >
        <span className="material-symbols-outlined text-[20px]">terminal</span>
        R. RADESTA
      </a>

      {/* ── Center: Nav links (hidden on mobile) ── */}
      <nav className="hidden md:flex items-center gap-6">
        {CENTER_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="
              font-display text-[20px]
              text-on-surface-variant
              hover:text-primary-container
              transition-colors duration-200
            "
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── Right: Hire Me CTA ── */}
      <a
        href="#contact"
        className="
          bg-primary-container text-on-primary-container
          font-mono uppercase text-[13px] tracking-wider
          px-4 py-2 rounded-sm
          transition-colors duration-200
          hover:brightness-110
        "
      >
        Hire Me
      </a>
    </header>
  );
}
