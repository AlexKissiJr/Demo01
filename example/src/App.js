import React, { useRef, useEffect, useCallback, useState } from 'react';
import { AvatarProvider } from '@codebaby-avatars/codebaby-react';

import HelloButton from './components/HelloButton';

function App() {
  const aProviderRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  // You could set and unset codebaby events
  // usign 'on' and 'off' methods by ref
  // but it could not work as expected
  // until the codebaby is fully initialized
  // you could use by <AvatarProvider on'EventName'={...} />
  useEffect(() => {
    if(!isInitialized) return;
    const onResponse = (e, responseData) => {
      console.log('ResponseMessage', responseData);
    };
    const aProvider = aProviderRef.current;
    if(aProvider) {
      aProvider.on('response', onResponse);
      return () => {
        aProvider.off('response', onResponse);
      }
    }
  }, [aProviderRef, isInitialized]);

  // you can use ref to trigger the events too
  const handleHello = useCallback(() => {
    if(aProviderRef.current) {
      console.log('Triggering playResponse')
      aProviderRef.current.trigger('playResponse', { answer: 'Hey! Wanna develop an app?' });
    }
  }, []);

  return (
    <AvatarProvider
      // on ref will provide you an events handler instance
      // with listener (on, off) and emitter method
      ref={aProviderRef}
      // You could listen all codebaby events here
      // using lowerCamelCase like 'initialized' should be 'onInitialized'
      onInitialized={() => {
        console.log('onInitialized')
        setIsInitialized(true);
        handleHello();
      }}
      id="react-avatar">
      <div className="container">
        <HelloButton/>
        <h1>Codebaby React Example</h1>
      </div>
    </AvatarProvider>
  );
}

export default App;
