// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurPhilosophyPage from './pages/OurPhilosophyPage';
import OurCompaniesPage from './pages/OurCompaniesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App(): React.ReactNode {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="philosophy" element={<OurPhilosophyPage />} />
        <Route path="companies" element={<OurCompaniesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;