import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Return a cleanup function that will be called every time
    // this prevents debouncedValue from changing if value is changed within the delay period
    return () => {
      clearTimeout(handler);
    };
    // Only re-call effect if value changes
  }, [value]);
  return debouncedValue;
};
export default useDebounce;
