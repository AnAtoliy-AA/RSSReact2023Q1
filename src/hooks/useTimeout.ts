import { useRef, useEffect } from 'react';

const useTimeout = (callback: VoidFunction, delay: number | null): void => {
  const savedCallback = useRef<VoidFunction>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current?.();
    };

    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }

    return () => undefined;
  }, [delay]);
};

export default useTimeout;
