import React from 'react';
import { Brain, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Cognitive Data Solutions</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">Levy</a>
            <a href="#equipo" className="hover:text-blue-400 transition-colors">Equipo</a>
            <a href="#testimonios" className="hover:text-blue-400 transition-colors">Testimonios</a>
            <a href="#precios" className="hover:text-blue-400 transition-colors">Planes</a>
          </div>

          <a 
            href="#precios"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-colors"
          >
            Contactar
          </a>

          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;