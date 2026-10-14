import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="text-2xl font-bold text-white tracking-tighter">Electrónica <span className="text-brand-cyan">LD</span></div>
      <div className="flex gap-6 text-white/80">
        <a href="#about" className="hover:text-white transition">Quiénes Somos</a>
        <a href="#services" className="hover:text-white transition">Servicios</a>
        <a href="#contact" className="hover:text-white transition">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;