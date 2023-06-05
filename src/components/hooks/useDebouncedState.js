import { useEffect, useRef, useState } from 'react';

/**
 * 
 * @param {any} defaultValue 
 * @param {number} wait 
 * @param {{leading: boolean}} options 
 * @returns 
 */
export function useDebouncedState(
  defaultValue,
  wait
) {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef(null);
  const leadingRef = useRef(true);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current);
  useEffect(() => clearTimeout, []);

  const debouncedSetValue = (newValue) => {
    clearTimeout();
    if (leadingRef.current) {
      setValue(newValue);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        leadingRef.current = true;
        setValue(newValue);
      }, wait);
    }
    leadingRef.current = false;
  };

  return [value, debouncedSetValue];
}