import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12"
        >
          <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 opacity-30 blur-2xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Let’s create something remarkable</h3>
            <p className="mt-2 max-w-2xl text-zinc-300">Tell me about your product, vibe, and goals. I’ll propose a concept and timeline within 24 hours.</p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="mailto:hello@genai.studio"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110"
              >
                Email: hello@genai.studio
              </a>
              <a
                href="https://cal.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Book a 15‑min call
              </a>
            </div>

            <div className="mt-6 text-xs text-zinc-400">© {new Date().getFullYear()} GEN AI Studio. All rights reserved.</div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
