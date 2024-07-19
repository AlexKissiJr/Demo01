import React, { useCallback, useEffect, useState } from 'react';
import { useCodebabyEvents, useIsInitialized } from '@codebaby-avatars/codebaby-react';

import styles from './styles.module.css';

function HelloButton() {
  const [isAnswering, setIsAnswering] = useState(false);
  // you can use our hook to get event handler
  // with listener (on, off) and emitter method (trigger)
  // and use it to trigger the events
  // usign 'on' and 'off' methods could not work as expected
  // until the codebaby is fully initialized
  const { trigger, on, off } = useCodebabyEvents();
  // you could use this hook to check if the codebaby is initialized
  const isInitialized = useIsInitialized();

  useEffect(() => {
    if(!isInitialized) return;
    const onResponse = () => {
      setIsAnswering(true);
      setTimeout(() => setIsAnswering(false), 7000)
    };
    on('response', onResponse);
    return () => {
      off('response', onResponse)
    }
  }, [isInitialized, on, off]);
  
  const handleAboutCodebaby = useCallback(() => {
    trigger('ask', 'About your company');
  }, [trigger]);
  return (
    <button className={styles.btn} disabled={isAnswering} onClick={handleAboutCodebaby}>
      Say hello
    </button>
  );
}

export default HelloButton;