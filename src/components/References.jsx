import React from 'react';
import { motion } from 'framer-motion';

const references = [
  "Tech Solutions", "Office Connect", "Global Net", "Data Systems", 
  "Smart Flow", "Pixel Art", "Future Tech", "Cloud Sync"
];

const References = () => {
  return (
    <section className="py-12 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 px-6 text-center text-white/50">Nuestros clientes confían en nosotros</div>
      <motion.div 
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...references, ...references].map((ref, i) => (
          <div key={i} className="text-2xl font-bold text-white/20 uppercase tracking-widest">
            {ref}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default References;