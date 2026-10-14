import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) return <Navigate to="/" />;

  return (
    <>
      <SEO 
        title={`${service.title} | Electrónica LD`}
        description={service.fullDesc}
      />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="pt-32 pb-20 px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
        <p className="text-xl text-slate-400 mb-10">{service.fullDesc}</p>
        <a href="#contact" className="btn-glow">Solicitar Información</a>
      </motion.div>
    </>
  );
};

export default ServiceDetail;