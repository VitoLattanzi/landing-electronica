import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.2] pb-2"
    >
      Fusión de <span className="text-cyan-400">Hardware y Código</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
    >
      Del mantenimiento técnico al desarrollo de software de vanguardia. Construimos soluciones digitales con precisión técnica.
    </motion.p>
    <motion.a 
      href="#contact"
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 cursor-pointer"
    >
      Cotizar Proyecto
    </motion.a>
  </section>
);

export default Hero;