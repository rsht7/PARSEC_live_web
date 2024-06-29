// useDissolve.js
import { useEffect, useState } from 'react';

const useDissolve = (delay = 3000) => {
  const [dissolveState, setDissolveState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDissolveState(true), delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return dissolveState;
};

export default useDissolve;
