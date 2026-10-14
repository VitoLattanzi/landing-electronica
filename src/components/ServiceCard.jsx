import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-glass h-full"
    >
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;