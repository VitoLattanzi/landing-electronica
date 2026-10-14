import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  { title: "Desarrollo de Software", description: "Soluciones a medida para optimizar tus procesos empresariales." },
  { title: "Automatizaciones", description: "Implementación de flujos inteligentes para ahorrar tiempo y recursos." },
  { title: "Servicio Técnico", description: "Mantenimiento especializado de hardware con años de trayectoria." },
  { title: "Diseño Web", description: "Sitios modernos, rápidos y adaptados a las necesidades de tu marca." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;