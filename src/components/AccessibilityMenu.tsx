import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AccessibilityMenu = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();

  return (
    <div className="fixed top-24 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 space-y-2">
      <button
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-gray-800 dark:text-white" />
        ) : (
          <Sun className="h-5 w-5 text-gray-800 dark:text-white" />
        )}
      </button>
      
      <button
        onClick={toggleLanguage}
        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <Languages className="h-5 w-5 text-gray-800 dark:text-white" />
      </button>
    </div>
  );
};

export default AccessibilityMenu;