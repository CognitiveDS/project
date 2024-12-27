import { useCallback, useRef } from 'react';

export function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastRun = useRef<number>(0);

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (now - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = now;
    } else {
      timeoutRef.current = setTimeout(() => {
        callback(...args);
        lastRun.current = Date.now();
        timeoutRef.current = null;
      }, delay);
    }
  }, [callback, delay]) as T;
}