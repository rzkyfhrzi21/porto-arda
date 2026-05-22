'use client';

import { motion } from 'framer-motion';

const contactLinks = [
  { label: 'Email', href: 'mailto:reza@example.com', icon: 'mail' },
  { label: 'GitHub', href: '#', icon: 'code' },
  { label: 'Roblox', href: 'https://www.roblox.com/share?code=2a6913a83d67e444bfc521536e2c3960&type=ExperienceDetails&stamp=1779417164699', icon: 'sports_esports' },
];

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="glass-strong rounded-lg p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <span className="font-mono text-sm uppercase tracking-widest text-primary-container">
            Contact
          </span>
          <h3 className="mt-3 font-display text-[40px] font-bold leading-tight text-on-surface md:text-[48px]">
            Build Something Playable
          </h3>
          <p className="mt-4 max-w-2xl font-body text-on-surface-variant">
            Terbuka untuk kolaborasi game, 3D environment asset, map Roblox, dan prototype gameplay.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-surface-container-low px-4 py-3 font-mono text-sm text-on-surface-variant transition-colors hover:border-primary/50 hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]">
                  {link.icon}
                </span>
                {link.label}
              </span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
