import React from 'react';
import { Headphones, AppWindow, BarChart3, Clock } from 'lucide-react';

const services = [
  {
    icon: <Headphones className="h-8 w-8" />,
    title: 'Soporte y Asesoramiento',
    description: 'Soporte técnico 24/7 y asesoramiento personalizado para optimizar el uso de Levy.'
  },
  {
    icon: <AppWindow className="h-8 w-8" />,
    title: 'Integración de Apps',
    description: 'Conexión con miles de aplicaciones como correo electrónico y herramientas de automatización.'
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Análisis de Datos',
    description: 'Análisis de conversaciones para obtener insights y posibles mejoras en los servicios.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Atención 24/7',
    description: 'Atención al cliente en redes sociales, páginas web, SMS y llamadas las 24 horas del día.'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-purple-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Conozca a Levy: Su Asistente de Atención al Cliente</h2>
          <p className="text-xl text-gray-300">Servicios inteligentes para su negocio</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-purple-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;