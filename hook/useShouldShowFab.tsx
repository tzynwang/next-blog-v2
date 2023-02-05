import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export default function useShouldShowFab() {
  /* States */
  const [fullHeight, setFullHeight] = useState<number | undefined>(undefined);
  const [viewPortHeight, setViewPortHeight] = useState<number | undefined>(
    undefined
  );
  const [percentage, setPercentage] = useState<number>(0);
  const [shouldShowFab, setShouldShowFab] = useState<boolean>(false);

  /* Functions */
  const setHeights = (): void => {
    setFullHeight(document.documentElement.scrollHeight);
    setViewPortHeight(document.documentElement.clientHeight);
  };
  const debouncedSetHeights = debounce(setHeights, 100);
  const calculatePercentage = (): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setPercentage(Math.round(percent));
  };
  const debouncedCalcPercentage = debounce(calculatePercentage, 100);

  /* Hooks */
  useEffect(() => {
    setHeights();
    document.addEventListener('scroll', debouncedCalcPercentage);
    window.addEventListener('resize', debouncedSetHeights);
    return () => {
      document.removeEventListener('scroll', debouncedCalcPercentage);
      window.removeEventListener('resize', debouncedSetHeights);
    };
  }, []);
  useEffect(() => {
    if (!fullHeight || !viewPortHeight) return;
    if (fullHeight / viewPortHeight >= 1 && percentage > 30) {
      setShouldShowFab(true);
    } else {
      setShouldShowFab(false);
    }
  }, [fullHeight, viewPortHeight, percentage]);

  /* Main */
  return shouldShowFab;
}
