import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';
import { ThemeProvider } from './context/ThemeContext';
import AccessibilityMenu from './components/AccessibilityMenu';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <AccessibilityMenu />
        <AccessibilityMenu />
        <main>
          <Hero />
          <Services />
          <Team />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
        <ScrollToTop />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default App;