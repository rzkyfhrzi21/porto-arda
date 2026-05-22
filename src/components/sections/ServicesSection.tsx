'use client';

import { motion } from 'framer-motion';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  cta: string;
}

const gameAssets: ServiceCard[] = [
  {
    icon: 'view_in_ar',
    title: '3D Models Pack',
    description: 'Curated 3D models optimized for game development pipelines.',
    cta: 'Coming Soon',
  },
  {
    icon: 'code',
    title: 'Script Systems',
    description: 'Ready-to-use gameplay scripts for rapid game prototyping.',
    cta: 'Coming Soon',
  },
  {
    icon: 'dashboard',
    title: 'UI Kit Pack',
    description: 'Modern game UI components designed for immersive experiences.',
    cta: 'Coming Soon',
  },
];

const freelanceServices: ServiceCard[] = [
  {
    icon: 'rocket_launch',
    title: 'Game Prototyping',
    description: 'Rapid prototype development to validate your game concept.',
    cta: 'Contact for Quote',
  },
  {
    icon: 'bug_report',
    title: 'Bug Fixing',
    description: 'Debugging and performance optimization for your game projects.',
    cta: 'Contact for Quote',
  },
  {
    icon: 'brush',
    title: 'Custom 3D Modeling',
    description: 'Tailored 3D assets crafted for your specific project needs.',
    cta: 'Contact for Quote',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Card({ card }: { card: ServiceCard }) {
  return (
    <motion.div
      variants={cardVariants}
      className="glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300 flex flex-col gap-4"
    >
      {/* Icon */}
      <span className="material-symbols-outlined text-primary-container text-3xl">
        {card.icon}
      </span>

      {/* Title */}
      <h4 className="font-display text-xl font-bold text-on-surface">
        {card.title}
      </h4>

      {/* Description */}
      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
        {card.description}
      </p>

      {/* CTA */}
      <a
        href="#contact"
        className="mt-auto font-mono text-sm text-primary hover:text-primary-container transition-colors duration-300"
      >
        {card.cta} →
      </a>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="py-24 flex flex-col gap-16"
    >
      {/* Section Header */}
      <h3 className="font-display text-[48px] font-bold text-on-surface flex items-center gap-3">
        <span className="material-symbols-outlined text-primary-container text-4xl">
          storefront
        </span>
        Services &amp; Store
      </h3>

      {/* Sub-section: Game Assets */}
      <div className="flex flex-col gap-6">
        <h4 className="font-mono text-sm text-tertiary uppercase tracking-widest border-b border-white/10 pb-2">
          Game Assets
        </h4>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gameAssets.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </motion.div>
      </div>

      {/* Sub-section: Freelance Services */}
      <div className="flex flex-col gap-6">
        <h4 className="font-mono text-sm text-tertiary uppercase tracking-widest border-b border-white/10 pb-2">
          Freelance Services
        </h4>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {freelanceServices.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
