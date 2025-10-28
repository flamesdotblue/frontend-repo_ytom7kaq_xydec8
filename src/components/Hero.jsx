import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black">
      {/* Top nav */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400" />
          <span className="font-semibold tracking-tight text-white">GEN AI Studio</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#categories" className="hover:text-white">Categories</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      {/* Headline */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 pt-24 md:pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-fuchsia-400" />
          Gen AI Content Creator • Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Interactive, intelligent visuals that move people.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-2xl text-base text-zinc-300 md:text-lg"
        >
          I craft AI art, motion graphics, and ad-ready video experiences. Explore work by category, then let’s build something unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110"
          >
            View Featured Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
