import { isFunction, once } from 'lodash';
import { useCallback, useSyncExternalStore } from 'react';

export function useMediaQuery(query: string, initialValue = false): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener('change', callback);

      return (): void => {
        matchMedia.removeEventListener('change', callback);
      };
    },
    [query]
  );

  const getSnapshot = (): boolean => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = (): boolean => {
    return initialValue;
  };

  if (!isFunction(useSyncExternalStore)) {
    once(() => console.warn('useMediaQuery: useSyncExternalStore is not supported!'));

    return getSnapshot();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
