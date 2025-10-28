import React from 'react';
import { motion } from 'framer-motion';
import { Image, Video, Megaphone, Sparkles } from 'lucide-react';

const categories = [
  {
    key: 'ai-art',
    title: 'AI Art',
    icon: Image,
    gradient: 'from-fuchsia-500 to-violet-600',
    desc: 'Concept art, character design, and surreal visuals generated with bespoke AI pipelines.'
  },
  {
    key: 'video',
    title: 'Video',
    icon: Video,
    gradient: 'from-cyan-500 to-sky-600',
    desc: 'Cinematic edits, product explainers, and social-first motion with bold typography.'
  },
  {
    key: 'ads',
    title: 'Ads',
    icon: Megaphone,
    gradient: 'from-amber-400 to-orange-500',
    desc: 'High-conversion ad creatives tailored for TikTok, Instagram, and YouTube.'
  },
  {
    key: 'interactive',
    title: 'Interactive',
    icon: Sparkles,
    gradient: 'from-emerald-400 to-teal-500',
    desc: 'Web-based 3D, generative visuals, and playful experiences people love to explore.'
  }
];

const Categories = () => {
  return (
    <section id="categories" className="relative w-full bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Categories</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">From AI-driven visuals to commercial-ready campaigns, explore the work by focus area.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ key, title, icon: Icon, gradient, desc }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5"
            >
              <div className={`absolute right-[-30%] top-[-30%] h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-2xl transition group-hover:opacity-50`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-zinc-300">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
