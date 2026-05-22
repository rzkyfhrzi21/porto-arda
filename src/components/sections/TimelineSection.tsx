'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2026',
    title: 'Interactive Portfolio',
    description: 'Membangun portfolio web dengan showcase model 3D dan project Roblox.',
  },
  {
    year: '2025',
    title: 'Roblox Studio Projects',
    description: 'Mendesain map dan gameplay prototype untuk pengalaman eksplorasi interaktif.',
  },
  {
    year: '2024',
    title: 'Game Development Focus',
    description: 'Memperkuat pipeline Unity, Blender, scripting, dan asset optimization.',
  },
];

export default function TimelineSection() {
  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="py-16"
    >
      <h3 className="mb-8 flex items-center gap-3 font-display text-[40px] font-bold text-on-surface md:text-[48px]">
        <span className="material-symbols-outlined text-primary-container text-4xl">
          timeline
        </span>
        Development Log
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {milestones.map((item) => (
          <article
            key={`${item.year}-${item.title}`}
            className="glass rounded-lg p-6"
          >
            <span className="font-mono text-sm text-primary-container">
              {item.year}
            </span>
            <h4 className="mt-3 font-display text-xl font-bold text-on-surface">
              {item.title}
            </h4>
            <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
