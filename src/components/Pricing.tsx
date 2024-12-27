import React from 'react';
import { Check, MessageSquare, Bot, Cog } from 'lucide-react';

const plans = [
  {
    name: 'Asesorías',
    price: '49 USD',
    period: '/hora',
    icon: <MessageSquare className="h-12 w-12" />,
    description: 'Consultoría personalizada para tus necesidades específicas.',
    features: [
      'Análisis de necesidades',
      'Recomendaciones estratégicas',
      'Soporte por correo electrónico',
      'Sesiones de 45 minutos',
      'Informe detallado post-asesoría'
    ],
    highlighted: false,
    buttonText: 'Agendar Asesoría',
    buttonLink: 'https://cal.com/danielcarreong/asesoria'
  },
  {
    name: 'Levy',
    price: '499 USD',
    period: '',
    icon: <Bot className="h-12 w-12" />,
    description: 'Implementación de Levy, nuestro asistente AI avanzado.',
    features: [
      'Configuración personalizada',
      'Integración con tus sistemas',
      'Soporte técnico 24/7',
      'Actualizaciones mensuales',
      'Dashboard de análisis'
    ],
    highlighted: true,
    buttonText: 'Implementar Levy',
    buttonLink: 'https://cal.com/cognitiveds.ai/consultoria'
  },
  {
    name: 'Soluciones Personalizadas',
    price: 'Precios personalizados',
    period: '',
    icon: <Cog className="h-12 w-12" />,
    description: 'Desarrollo de soluciones AI adaptadas a tu empresa.',
    features: [
      'Análisis completo de tu negocio',
      'Desarrollo de soluciones a medida',
      'Soporte y mantenimiento continuo',
      'Equipo dedicado',
      'Revisiones trimestrales'
    ],
    highlighted: false,
    buttonText: 'Solicitar Propuesta',
    buttonLink: 'https://cal.com/cognitiveds.ai/consultoria-enterprise'
  }
];

const Pricing = () => {
  return (
    <section id="precios" className="py-20 bg-purple-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Planes</h2>
          <p className="text-xl text-gray-300">
            Ofrecemos soluciones flexibles que se adaptan a tus necesidades. Elige el plan que
            mejor se ajuste a tu empresa y comienza a transformar tu negocio con IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 ${
                plan.highlighted 
                  ? 'bg-purple-800/50 transform scale-105' 
                  : 'bg-purple-900/30'
              }`}
            >
              <div className="text-yellow-400 mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg">{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-yellow-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer" 
                className={`block w-full py-3 rounded-full font-medium text-center transition-colors ${
                  plan.highlighted
                    ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                    : 'bg-purple-700 text-white hover:bg-purple-600'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;