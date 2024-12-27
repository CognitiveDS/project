import React from 'react';

interface ChatMessageProps {
  message: string;
  isAI?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAI = true }) => {
  return (
    <div className={`bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-[80%] text-gray-800 dark:text-white ${
      !isAI && 'ml-auto bg-purple-100 dark:bg-purple-900'
    }`}>
      {message}
    </div>
  );
};

export default ChatMessage;