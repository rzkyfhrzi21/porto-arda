'use client';

import { useState, useCallback, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'portfolio', label: 'Portfolio', icon: 'folder_special' },
  { id: 'services', label: 'Store', icon: 'shopping_cart' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const close = useCallback(() => setOpen(false), []);

  /* ── Lock body scroll when drawer is open ── */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* ── Scroll-spy (mirrors Sidebar logic) ── */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
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
    <>
      {/* ── Hamburger button ── */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="
          fixed top-4 left-4 z-[70]
          lg:hidden
          flex flex-col justify-center items-center
          w-10 h-10 rounded-lg
          bg-surface-container/80 backdrop-blur-md
          border border-white/10
          gap-[5px]
          transition-all duration-300
        "
      >
        {/* Animated hamburger → X */}
        <span
          className={`
            block w-5 h-[2px] bg-primary-container rounded-full
            transition-transform duration-300 origin-center
            ${open ? 'translate-y-[7px] rotate-45' : ''}
          `}
        />
        <span
          className={`
            block w-5 h-[2px] bg-primary-container rounded-full
            transition-opacity duration-200
            ${open ? 'opacity-0' : 'opacity-100'}
          `}
        />
        <span
          className={`
            block w-5 h-[2px] bg-primary-container rounded-full
            transition-transform duration-300 origin-center
            ${open ? '-translate-y-[7px] -rotate-45' : ''}
          `}
        />
      </button>

      {/* ── Overlay ── */}
      <div
        onClick={close}
        className={`
          fixed inset-0 z-[60]
          lg:hidden
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden="true"
      />

      {/* ── Drawer ── */}
      <div
        className={`
          fixed inset-y-0 left-0 z-[65]
          lg:hidden
          w-72 flex flex-col justify-between
          bg-surface-container-lowest/95 backdrop-blur-2xl
          border-r border-white/10
          shadow-2xl
          py-10 px-6
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* ── Top: Profile + Navigation ── */}
        <div className="flex flex-col gap-8">
          {/* Profile */}
          <div className="flex flex-col items-center gap-3">
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
                  onClick={close}
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
          onClick={close}
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
      </div>
    </>
  );
}
