import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import SEO from './components/SEO';

function App() {
  return (
    <BrowserRouter>
      <SEO 
        title="Electrónica LD | Desarrollo de Software y Soporte Técnico" 
        description="Soluciones integrales de desarrollo de software, automatización y servicio técnico especializado." 
      />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services/:id" element={<ServiceDetail />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;