import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const items = [
  {
    title: 'Neon Metropolis – AI Art Series',
    category: 'AI Art',
    color: 'from-fuchsia-600 to-violet-600'
  },
  {
    title: 'Kinetic Type – Product Teaser',
    category: 'Video',
    color: 'from-cyan-500 to-sky-600'
  },
  {
    title: 'Swipe-Stopper – Social Ad Pack',
    category: 'Ads',
    color: 'from-amber-400 to-orange-500'
  },
  {
    title: 'WebGL Playground – Interactive',
    category: 'Interactive',
    color: 'from-emerald-400 to-teal-500'
  }
];

const Showcase = () => {
  return (
    <section id="work" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Work</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">A snapshot of recent pieces across categories. Each tile showcases motion-first design with AI-driven polish.</p>
          </div>
          <a href="#contact" className="hidden text-sm text-zinc-300 hover:text-white md:inline-flex">Get a custom reel <ArrowRight className="ml-1 h-4 w-4" /></a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30`} />
              <div className="relative z-10 flex h-64 flex-col justify-between p-6 sm:h-72">
                <div>
                  <span className="mb-2 inline-flex rounded-full bg-black/40 px-2 py-1 text-xs text-zinc-200 backdrop-blur">{item.category}</span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <div className="flex items-center justify-between text-sm text-zinc-200">
                  <span className="opacity-80">Motion, Color, Rhythm</span>
                  <span className="inline-flex items-center gap-1 opacity-80">View details <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
              {/* mock video/motion shimmer */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_40px_at_20%_20%,rgba(255,255,255,0.25),transparent_70%),radial-gradient(120px_40px_at_80%_60%,rgba(255,255,255,0.15),transparent_70%)] opacity-30 transition-opacity group-hover:opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
