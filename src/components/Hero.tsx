import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-20 bg-gradient-to-b from-purple-950 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformando Datos en Soluciones Inteligentes
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              En CognitiveDS, impulsamos tu negocio con automatizaciones avanzadas utilizando N8N y desarrollo de páginas web a medida. Te brindamos asesoría personalizada de la mano de expertos que te ayudarán a optimizar tus procesos y llevar tu negocio al siguiente nivel.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#precios"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors"
              >
                <span>Agenda ahora</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UuZxPl4vCjA"
                title="Bienvenida a CognitiveDS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;