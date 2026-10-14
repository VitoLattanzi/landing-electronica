import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-80 bg-gradient-to-br from-brand-cyan/20 to-brand-dark rounded-2xl border border-white/5 flex items-center justify-center text-brand-cyan/20"
        >
          <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-6">Quiénes Somos</h2>
          <p className="text-lg text-white/70 mb-4">
            Electrónica LD nació como un referente en mantenimiento y servicio técnico especializado, consolidando años de experiencia en el mundo físico de los componentes.
          </p>
          <p className="text-lg text-white/70">
            Hoy, esa herencia se fusiona con el desarrollo de software y la automatización, permitiéndonos ofrecer soluciones integrales que conectan el hardware con la lógica digital más avanzada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;