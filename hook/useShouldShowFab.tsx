import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import useDocumentScrollPercentage from './useDocumentScrollPercentage';

export default function useShouldShowFab() {
  /* States */
  const percentage = useDocumentScrollPercentage();
  const [fullHeight, setFullHeight] = useState<number | undefined>(undefined);
  const [viewPortHeight, setViewPortHeight] = useState<number | undefined>(
    undefined
  );

  const [shouldShowFab, setShouldShowFab] = useState<boolean>(false);

  /* Functions */
  const setHeights = (): void => {
    setFullHeight(document.documentElement.scrollHeight);
    setViewPortHeight(document.documentElement.clientHeight);
  };
  const debouncedSetHeights = debounce(setHeights, 100);

  /* Hooks */
  useEffect(() => {
    setHeights();
    window.addEventListener('resize', debouncedSetHeights);
    return () => {
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
