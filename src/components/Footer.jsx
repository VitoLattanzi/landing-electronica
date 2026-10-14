import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 text-white/60 text-center border-t border-white/10">
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="hover:text-blue-400">Email</a>
        <a href="#" className="hover:text-blue-400">GitHub</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
      </div>
      <p>&copy; 2026 Electrónica LD. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;