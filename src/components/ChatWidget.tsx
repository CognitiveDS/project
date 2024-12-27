import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ANIMATION_DURATION = 300;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-24 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <div
        className={`absolute bottom-0 right-0 w-96 bg-white rounded-lg shadow-xl transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
          <div className="bg-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat con IA</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-96 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                ¡Hola! ¿En qué puedo ayudarte hoy?
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-purple-600"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ChatWidget;