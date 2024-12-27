import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Miguel Ángel',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    text: 'La implementación de IA ha transformado completamente nuestra operación. Los resultados superaron nuestras expectativas.'
  },
  {
    name: 'Isabel Torres',
    company: 'DataFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    text: 'El equipo de CognitiveAI demostró un profundo conocimiento y profesionalismo en cada etapa del proyecto.'
  },
  {
    name: 'Roberto Sánchez',
    company: 'InnovaTech',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    text: 'La solución de chatbot mejoró significativamente nuestra atención al cliente y redujo costos operativos.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonios</h2>
          <p className="text-xl text-gray-600">Lo que dicen nuestros clientes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;