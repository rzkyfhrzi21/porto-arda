'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'portfolio', label: 'Portfolio', icon: 'folder_special' },
  { id: 'services', label: 'Store', icon: 'shopping_cart' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
] as const;

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  /* ── Scroll-spy via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="
        hidden lg:flex lg:flex-col
        fixed inset-y-0 left-0 z-40
        w-72
        bg-surface-container-lowest/80 backdrop-blur-2xl
        border-r border-white/10
        shadow-2xl
        justify-between
        py-10 px-6
      "
    >
      {/* ── Top: Profile + Navigation ── */}
      <div className="flex flex-col gap-8">
        {/* Profile */}
        <div className="flex flex-col items-center gap-3">
          {/* Avatar */}
          <div
            className="
              flex items-center justify-center
              w-20 h-20 rounded-full
              border-2 border-primary-container
              bg-surface-container
              text-primary-container font-display text-headline-md
              glow-primary animate-pulse-glow
              select-none
            "
          >
            RA
          </div>

          <div className="text-center">
            <h2 className="font-display text-primary-container text-lg tracking-wide">
              REZA ARDA
            </h2>
            <p className="font-mono text-on-surface-variant text-code-sm mt-0.5">
              Engine Architect
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ id, label, icon }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`
                  flex items-center gap-3
                  font-mono text-[14px]
                  px-4 py-3
                  transition-colors duration-200
                  ${
                    isActive
                      ? 'bg-secondary-container text-on-secondary-container rounded-xl'
                      : 'text-on-surface-variant hover:bg-surface-variant rounded-xl'
                  }
                `}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {icon}
                </span>
                {label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* ── Bottom: Download CV ── */}
      <a
        href="/cv.pdf"
        download
        className="
          flex items-center justify-center gap-2
          border border-primary text-primary
          font-mono text-[14px] uppercase tracking-wider
          px-4 py-3 rounded-xl
          transition-colors duration-200
          hover:bg-primary hover:text-on-primary
        "
      >
        <span className="material-symbols-outlined text-[20px]">
          download
        </span>
        Download CV
      </a>
    </aside>
  );
}
