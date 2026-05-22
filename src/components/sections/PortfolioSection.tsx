'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import dynamic from 'next/dynamic';

const LoadingPlaceholder = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`bg-surface-container animate-pulse flex items-center justify-center ${
      compact ? 'h-full min-h-[260px]' : 'h-[500px] rounded-lg'
    }`}
  >
    <span className="font-mono text-sm text-on-surface-variant">
      Loading 3D Viewer...
    </span>
  </div>
);

const Model3DViewer = dynamic(() => import('@/components/Model3DViewer'), {
  ssr: false,
  loading: () => <LoadingPlaceholder compact />,
});

interface ProjectCard {
  media:
    | { type: 'model' }
    | {
        type: 'image';
        src: string;
        alt: string;
      };
  tags: { label: string; color: 'primary' | 'secondary' }[];
  title: string;
  description: string;
  cta: string;
  link: string;
}

const projects: ProjectCard[] = [
  {
    media: { type: 'model' },
    tags: [
      { label: '3D Model', color: 'primary' },
      { label: 'Textured FBX', color: 'secondary' },
    ],
    title: 'Concrete Building',
    description:
      'Environment asset bangunan beton dengan texture map custom, siap dipakai sebagai portfolio 3D real-time.',
    cta: 'Lihat Model 3D',
    link: '#model-showcase',
  },
  {
    media: {
      type: 'image',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY6nfA_tt2yChf1vADXTVU5lBjizl8CXnWd9-7qLHtbLcbYPd92IYvuefHBXpbsmwYK-Z2PsVPRBdJhZ8bb5R4HsL2-BbCbQLrWVQHgHUUojFzwcktznNayuQJV7bnbZoyM6id_a0maJZg1MMKwnD7VEMPwk0YXnE2vYWYbxt89n7_nP3zZDFg2dxUASESyJI7xPhJOvKMYTf5xP9fHdCp-6pMKTHAEpOs8rUm8LfQW-GjkL68BKXmk2fK32re7DJz0kJviACfs0az',
      alt: 'Roblox map portfolio preview',
    },
    tags: [
      { label: 'Roblox Studio', color: 'primary' },
      { label: 'Map Design', color: 'secondary' },
    ],
    title: 'Roblox Experience Map',
    description:
      'Map Roblox playable yang menampilkan desain arena, komposisi level, dan pengalaman eksplorasi interaktif.',
    cta: 'Mainkan di Roblox',
    link: 'https://www.roblox.com/share?code=2a6913a83d67e444bfc521536e2c3960&type=ExperienceDetails&stamp=1779417164699',
  },
  {
    media: {
      type: 'image',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2a7V3Nmav3or7nXE9Kvvv4GMt666wpvPLXSPxWuh1a-AD3993W4-T8zNn0VWBxv2-Kx2O_dXmICdqfCN-RhU5LgC57uGuGndCPvCkbw2u3mi4yFosP_FF7DPF-iI1mvsUkltLRTzq6bMi1AdMrLryHVSqqY2naI6lLTH0ARd58_iuorNgF3m8OoRyVyShTbPuOoSAORzmLz4vec3ZQb6mpZ-v-Z4LcYXV1Vyi1EduSowyfauEY5ospbKrUZ97X4O3RWKEPWdD_pEx',
      alt: 'Neon Shift gameplay preview',
    },
    tags: [
      { label: 'Lead Dev', color: 'primary' },
      { label: '3D Artist', color: 'secondary' },
    ],
    title: 'Neon Shift',
    description:
      'A high-speed cyberpunk platformer utilizing custom gravity mechanics and real-time volumetric lighting.',
    cta: 'Mainkan di Itch.io',
    link: '#',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProjectMedia({ project }: { project: ProjectCard }) {
  if (project.media.type === 'model') {
    return (
      <div className="absolute inset-0 bg-[#071424]">
        <Model3DViewer compact />
      </div>
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.media.src}
        alt={project.media.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-[var(--spacing-section)]">
      <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-sm uppercase tracking-widest text-primary-container">
            Playable Builds &amp; 3D Assets
          </span>
          <h3 className="mt-3 font-display text-[40px] font-bold leading-tight text-on-surface md:text-[48px]">
            Featured Deployments
          </h3>
        </div>
        <a
          href="#model-showcase"
          className="font-mono text-sm text-primary hover:text-primary-fixed-dim transition-colors"
        >
          Interactive Model →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-lg border border-white/10 bg-surface-container-low"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
          >
            <ProjectMedia project={project} />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent pointer-events-none" />

            <div className="relative z-10 flex min-h-[190px] flex-col gap-3 border-t border-white/10 bg-surface/70 p-5 backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0 md:translate-y-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-sm border px-2 py-1 font-mono text-xs ${
                      tag.color === 'primary'
                        ? 'border-primary text-primary'
                        : 'border-secondary text-secondary'
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <h4 className="font-display text-xl font-bold text-on-surface">
                {project.title}
              </h4>

              <p className="line-clamp-3 font-body text-sm leading-relaxed text-on-surface-variant">
                {project.description}
              </p>

              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="mt-auto inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary-fixed-dim transition-colors"
              >
                {project.cta}
                <span className="material-symbols-outlined text-base">
                  {project.link.startsWith('http') ? 'open_in_new' : 'arrow_forward'}
                </span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        id="model-showcase"
        className="glass-strong mt-12 rounded-lg p-6 md:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">
                view_in_ar
              </span>
              <h4 className="font-display text-2xl font-bold text-on-surface">
                Concrete Building 3D Showcase
              </h4>
            </div>
            <p className="mt-2 font-mono text-xs text-on-surface-variant">
              Drag to rotate • Scroll to zoom • Right-click to pan
            </p>
          </div>
          <span className="w-fit rounded-sm border border-secondary px-3 py-2 font-mono text-xs text-secondary">
            FBX + texture.png
          </span>
        </div>
        <div className="h-[500px] w-full overflow-hidden rounded-lg border border-white/10">
          <Model3DViewer />
        </div>
      </motion.div>
    </section>
  );
}
