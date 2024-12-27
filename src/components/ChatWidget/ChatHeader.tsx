import React from 'react';
import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <div className="bg-purple-600 dark:bg-purple-800 text-white p-4 rounded-t-lg flex justify-between items-center">
      <h3 className="font-bold">Chat con IA</h3>
      <button
        onClick={onClose}
        className="hover:text-gray-300 transition-colors"
        aria-label="Cerrar chat"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ChatHeader;