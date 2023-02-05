import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export default function useDocumentScrollPercentage() {
  /* States */
  const [percentage, setPercentage] = useState<number>(0);

  /* Functions */
  const calculatePercentage = (): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setPercentage(Math.round(percent));
  };
  const debouncedCalcPercentage = debounce(calculatePercentage, 100);

  /* Hooks */
  useEffect(() => {
    document.addEventListener('scroll', debouncedCalcPercentage);
    return () => {
      document.removeEventListener('scroll', debouncedCalcPercentage);
    };
  }, []);

  /* Main */
  return percentage;
}
