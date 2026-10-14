import React from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Wrench } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white tracking-tight">
        Electrónica <span className="text-cyan-400">LD</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-cyan-400 transition-colors">Nosotros</a>
        <a href="#services" className="hover:text-cyan-400 transition-colors">Servicios</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contacto</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      className="text-5xl md:text-7xl font-bold text-white mb-6"
    >
      Fusión de <span className="text-cyan-400">Hardware y Código</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
    >
      Del mantenimiento técnico al desarrollo de software de vanguardia. Construimos soluciones digitales con precisión técnica.
    </motion.p>
    <motion.button 
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105"
    >
      Cotizar Proyecto
    </motion.button>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 px-6 bg-slate-950">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-16">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Desarrollo de Software", icon: <Code size={32} />, desc: "Soluciones a medida para optimizar procesos." },
          { title: "Automatizaciones", icon: <Settings size={32} />, desc: "Flujos inteligentes para ahorrar tiempo." },
          { title: "Servicio Técnico", icon: <Wrench size={32} />, desc: "Mantenimiento especializado de hardware." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700 p-8 rounded-2xl hover:border-cyan-400/50 transition-all group"
          >
            <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-xl mx-auto bg-slate-800/30 backdrop-blur-md border border-white/5 p-10 rounded-3xl">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Contacto</h2>
      <form className="space-y-6">
        <input type="text" placeholder="Tu Nombre" className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none" />
        <input type="email" placeholder="Tu Email" className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none" />
        <textarea placeholder="Cuéntanos tu proyecto" className="w-full bg-slate-950 border border-slate-700 p-4 rounded-xl text-white h-32 focus:ring-2 focus:ring-cyan-400 focus:outline-none"></textarea>
        <button className="w-full bg-cyan-400 text-slate-950 py-4 rounded-xl font-bold hover:bg-cyan-300 transition-colors">Enviar Mensaje</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 text-center text-slate-500">
    <p>&copy; 2026 Electrónica LD. Todos los derechos reservados.</p>
  </footer>
);

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-cyan-400 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}