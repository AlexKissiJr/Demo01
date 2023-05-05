import React from "react";
import { events, AvatarComponent } from 'codebaby-react';

const App = () => {
  setTimeout(() => {
    events.trigger('ask', 'Hello');
  }, 3000);
  return <div>Hello, World!<AvatarComponent id="default" /></div>;
};

export default App;