import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id}>
              <ServiceCard title={service.title} description={service.shortDesc} id={service.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;