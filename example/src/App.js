import React from "react";
import codebaby from '@codebaby-avatars/codebaby-react';

const App = () => {
  setTimeout(() => {
    codebaby.events.trigger('ask', 'Hello');
  }, 3000);
  return <div>
    <codebaby.AvatarComponent id="gpttest" />
  </div>;
};

export default App;