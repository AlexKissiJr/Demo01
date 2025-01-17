import { useEffect, useState } from 'react';

function useIsInitialized() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    const verify = () => {
      if(window) {
        if(window.vidbaby$ && window.vidbaby && window.vidbaby.initialized) {
          return setIsInitialized(true);
        }
      }
      timeoutId = setTimeout(verify, 1000);
    };
    verify();
    return () => {
      if(timeoutId)
        clearTimeout(timeoutId);
    };
  }, []);

  return isInitialized;
}

export {useIsInitialized};