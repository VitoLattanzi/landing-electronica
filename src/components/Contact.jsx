import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // TODO: Reemplaza con tu ID de formulario real de Formspree
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="py-20 px-6 text-center card-glass max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">¡Mensaje enviado con éxito!</h3>
        <p className="text-white/70">Gracias por contactarte con Electrónica LD. Responderemos a la brevedad.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contacto</h2>
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-glass"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-white/80 mb-2">Nombre</label>
            <input 
              id="name"
              type="text" 
              name="name"
              required
              className="w-full p-4 rounded-lg bg-brand-dark/50 border border-white/10 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
            <input 
              id="email"
              type="email" 
              name="email"
              required
              className="w-full p-4 rounded-lg bg-brand-dark/50 border border-white/10 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all" 
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white/80 mb-2">Mensaje</label>
            <textarea 
              id="message"
              name="message"
              required
              className="w-full p-4 rounded-lg bg-brand-dark/50 border border-white/10 text-white h-32 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button 
            type="submit" 
            disabled={state.submitting}
            className="btn-glow w-full disabled:opacity-50"
          >
            {state.submitting ? 'Enviando...' : 'Enviar'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;