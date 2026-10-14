import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, id }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-glass h-full flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-white/60 mb-6">{description}</p>
      </div>
      <Link to={`/services/${id}`} className="text-cyan-400 font-bold hover:underline">
        Saber más →
      </Link>
    </motion.div>
  );
};

export default ServiceCard;