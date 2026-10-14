import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contacto</h2>
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-glass"
        >
          <div className="mb-6">
            <label className="block text-white/80 mb-2">Nombre</label>
            <input type="text" className="w-full p-4 rounded-lg bg-brand-dark/50 border border-white/10 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" />
          </div>
          <div className="mb-6">
            <label className="block text-white/80 mb-2">Email</label>
            <input type="email" className="w-full p-4 rounded-lg bg-brand-dark/50 border border-white/10 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" />
          </div>
          <div className="mb-6">
            <label className="block text-white/80 mb-2">Mensaje</label>
            <textarea className="w-full p-4 rounded-lg bg-brand-dark/50 border border-white/10 text-white h-32 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"></textarea>
          </div>
          <button className="btn-glow w-full">Enviar</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;