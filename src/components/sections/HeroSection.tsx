'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[716px] py-16"
    >
      {/* LEFT COLUMN — Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6"
      >
        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-primary-container" />
          <span className="font-mono text-sm text-primary-container uppercase tracking-widest">
            System Initialization Complete
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-display text-[72px] leading-[1.1] tracking-[-0.04em] font-extrabold text-on-surface">
          Hi, I&apos;m
          <br />
          <span className="text-primary-container text-glow">
            Reza Arda Radesta
          </span>
        </h1>

        {/* H2 */}
        <h2 className="font-display text-[32px] font-semibold text-tertiary">
          Indie Game Developer{' '}
          <span className="text-outline">|</span> Programmer{' '}
          <span className="text-outline">|</span> 3D Artist
        </h2>

        {/* Paragraph */}
        <p className="font-body text-lg text-on-surface-variant max-w-xl">
          Menciptakan pengalaman bermain game yang interaktif dan engaging.
          Menggabungkan arsitektur kode yang solid dengan estetika visual yang
          mendalam.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-display font-semibold text-base glow-primary hover:glow-primary-intense transition-shadow duration-300"
          >
            Lihat Karya Saya
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-outline text-on-surface bg-surface/50 backdrop-blur-md font-display font-semibold text-base hover:border-primary/50 transition-colors duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </motion.div>

      {/* RIGHT COLUMN — Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="group relative rounded-xl border border-white/10 shadow glow-primary overflow-hidden h-[500px]"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-10 pointer-events-none" />

        {/* Hero Image */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLaqdV_l6Gh6lSCHQwDMXe8T1SF0RppQSlFAe1OHAOqoxNa0UinObsRPOzRYoGo6NbbsylGD0oqta184tUk8zCkAbNw7AEkrxAL6JFVlws8hgUsg0Sx9P8WjuaC8n5qUGfA4pBiR8er40oE7BSK9HThNUKk3Dvyf4zFaYIGSFx3HGM-4WoIaTkDWE7UzXtTDS66pWWOXw3GhMct0TdPDPr2IJUoYY6MMRByjdDh8BDnfC6cFD8rYaTbYo_uQb2t1fmwSIKsGZQJoVz"
          alt="Reza Arda Radesta — Hero Visual"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </motion.div>
    </section>
  );
}
