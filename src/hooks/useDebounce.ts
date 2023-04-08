import { DEFAULT_VALUES } from '@constants/common/common';
import { useState, useEffect } from 'react';

export default function useDebounce<T>(value: T, delay: number = DEFAULT_VALUES.IDLE_DEBOUNCE) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}
