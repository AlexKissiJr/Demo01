import React, { useCallback } from 'react';
import { useCodebabyEvents } from '@codebaby-avatars/codebaby-react';

import styles from './styles.module.css';

function HelloButton() {
  // you can use our hook to get event handler
  // with listener (on, off) and emitter method (trigger)
  // and use it to trigger the events
  // usign 'on' and 'off' methods could not work as expected
  // until the codebaby is fully initialized
  const { trigger } = useCodebabyEvents();

  const handleAboutCodebaby = useCallback(() => {
    trigger('ask', 'About your company');
  }, [trigger]);
  return (
    <button className={styles.btn} onClick={handleAboutCodebaby}>
      Press Me
    </button>
  );
}

export default HelloButton;