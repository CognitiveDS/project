import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Ana García',
    role: 'CEO & IA Strategist',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Carlos Ruiz',
    role: 'CTO & Lead Developer',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  },
  {
    name: 'Laura Martínez',
    role: 'Data Science Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600">Expertos en IA trabajando para tu éxito</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 inline-block">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-500">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.twitter} className="text-gray-600 hover:text-blue-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.social.email} className="text-gray-600 hover:text-blue-500">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;