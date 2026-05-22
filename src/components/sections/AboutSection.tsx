'use client';

import { motion } from 'framer-motion';

const techStack = [
  { label: 'Unity', icon: 'view_in_ar' },
  { label: 'Unreal Engine', icon: 'view_in_ar' },
  { label: 'C#', icon: 'code_blocks' },
  { label: 'Blender', icon: 'polyline' },
  { label: 'Roblox Studio', icon: 'sports_esports' },
  { label: 'Godot', icon: 'view_in_ar' },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="py-24"
    >
      {/* Glassmorphic Card */}
      <div className="bg-surface/40 backdrop-blur-xl p-12 rounded-xl border border-white/5 relative overflow-hidden">
        {/* Decorative Glow Orb */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* LEFT — About Text */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-[48px] font-bold text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                memory
              </span>
              About Architect
            </h3>

            <p className="font-body text-lg text-on-surface-variant">
              Saat ini saya merupakan mahasiswa aktif di IIB Darmajaya yang
              memiliki passion mendalam di bidang pengembangan game. Fokus utama
              saya adalah merekayasa sistem gameplay yang kompleks dan merancang
              aset 3D yang optimal untuk real-time rendering.
            </p>

            {/* Download CV */}
            <a
              href="#"
              className="group/cv flex items-center gap-2 text-primary font-mono text-sm hover:text-primary-container transition-colors duration-300 w-fit"
            >
              <span className="material-symbols-outlined text-base group-hover/cv:-translate-y-1 transition-transform duration-300">
                download
              </span>
              Download CV
            </a>
          </div>

          {/* RIGHT — Tech Stack */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-sm text-tertiary uppercase tracking-widest border-b border-white/10 pb-2">
              Core Tech Stack
            </span>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="px-4 py-2 border border-secondary-container rounded-sm font-mono text-sm text-secondary bg-surface-container-low/50 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">
                    {tech.icon}
                  </span>
                  {tech.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
