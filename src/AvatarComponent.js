// AvatarComponent.js
import React from 'react';
import events from './events';
window.vidbaby$ = {}

async function loadScript(url) {
  return await new Promise(resolve => {
    const script = document.createElement("script");
    script.src = url;
    script.type = 'module';
    script.async = true;
    script.onload = () => { resolve(script) };
    document.head.appendChild(script);
  });
}

async function jqVerHandling(){
  if(typeof window.jQuery === 'undefined' || typeof $ != 'function' || jQuery.fn.jquery === undefined || jQuery.fn.jquery < '3.4.1') {
    if (typeof window.jQuery != 'undefined'){
      var siteJq = jQuery
      var site$ = $
    }
    await new Promise(resolve => {
      var script = document.createElement('script');
      script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
      script.type = 'text/javascript';
      script.onload = resolve;
      document.getElementsByTagName('head')[0].appendChild(script);
    });
    window.vidbaby$ = $;
    if(siteJq){
      $ = site$;
      jQuery = siteJq;
    }
  }else{
    window.vidbaby$ = $;
  }

  if(typeof window.$ === 'undefined') {
    window.$ = window.jQuery;
  }

  return;
}

const AvatarComponent = (data) => {
  let url;
  if(data.id) {
    if(data.env) {
      if(data.env == 'dev') {
        url = 'https://bridge3-dev.codebaby.com/loader.js?env=dev&id='+data.id;
      } else if(data.env == 'qa') {
        url = 'https://bridge3-qa.codebaby.com/loader.js?env=qa&id='+data.id;
      } else if(data.env == 'local' || data.env == 'localhost') {
        url = 'http://localhost:8080/loader.js?env=local&id='+data.id;
      }
    }

    if(!url) {
      url = 'https://portal.codebaby.com/loader.js?id='+data.id;
    }

    (async () => {
      await jqVerHandling();
      await loadScript(url);
    })();
  } else {
    console.error('Include an id parameter to initialize the avatar component.')
  }
  //avatars are not currently loaded into a container but maybe should be for bottombar ui, fallback to the body
  //potential gotcha with avatarId not matching the settings in the portal
  //look for this class, use it if we can the
  return <div id="avatarContainer" className="codebaby-react-avatar-container"></div>;
};


export default AvatarComponent;