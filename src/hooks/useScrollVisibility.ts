import { useState, useEffect } from 'react';
import { useThrottle } from './useThrottle';

export function useScrollVisibility(threshold: number = 300) {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = useThrottle(() => {
    setIsVisible(window.scrollY > threshold);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  return isVisible;
}