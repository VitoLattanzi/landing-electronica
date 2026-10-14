import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import SafeLink from './SafeLink';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-slate-500">
      <div className="flex justify-center gap-6 mb-6">
        <SafeLink href="mailto:vitofrancolattanzi@gmail.com" className="hover:text-cyan-400 transition-colors">
          <Mail />
        </SafeLink>
        <SafeLink href="https://www.linkedin.com/in/vito-lattanzi/" className="hover:text-cyan-400 transition-colors">
          <Linkedin />
        </SafeLink>
      </div>
      <p>&copy; 2026 Electrónica LD. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;