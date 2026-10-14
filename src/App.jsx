import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import SEO from './components/SEO';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services/:id" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SEO 
        title="Electrónica LD | Desarrollo de Software y Soporte Técnico" 
        description="Soluciones integrales de desarrollo de software, automatización y servicio técnico especializado." 
      />
      <AnimatedRoutes />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;