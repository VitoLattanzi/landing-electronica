import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

const References = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
        <p className="text-white/50">Experiencias reales con Electrónica LD</p>
      </div>
      <motion.div 
        className="flex gap-8 px-6"
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="min-w-[350px] card-glass">
            <p className="text-white/80 italic mb-6">"{t.quote}"</p>
            <div>
              <p className="font-bold text-cyan-400">{t.name}</p>
              <p className="text-sm text-white/40">{t.company}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default References;