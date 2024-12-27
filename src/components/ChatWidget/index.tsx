import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useTheme } from '../../context/ThemeContext'; 

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: '¡Hola! ¿En qué puedo ayudarte hoy?', isAI: true }]);
  const { language, theme } = useTheme();

  const handleSendMessage = (message: string) => {
    setMessages(prev => [...prev, { text: message, isAI: false }]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = language === 'es' 
        ? 'Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto.'
        : 'Thank you for your message. An advisor will contact you soon.';
      setMessages(prev => [...prev, { text: aiResponse, isAI: true }]);
    }, 1000);
    // Here you would typically integrate with your AI service
  };

  return (
    <div className="fixed bottom-8 right-24 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-purple-900 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <div
        className={`absolute bottom-0 right-0 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChatHeader onClose={() => setIsOpen(false)} />
        
        <div className="h-96 p-4 overflow-y-auto">
          <div className="space-y-4 flex flex-col">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg.text} isAI={msg.isAI} />
            ))}
          </div>
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWidget;