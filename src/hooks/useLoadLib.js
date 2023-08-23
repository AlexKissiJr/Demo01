import { useLayoutEffect, useState } from "react";

const loadScript = ({ src, type = 'module', async = true }) => new Promise((resolve, reject) => {
  const script = document.createElement("script");
  script.src = src;
  script.type = type;
  script.async = async;
  script.onload = () => resolve(script);
  script.onerror = () => reject(new Error('Failed to load script. Check your internet connection.'));
  document.head.appendChild(script);
});

async function jqVerHandling(){
  if(typeof window.jQuery === 'undefined'
    || typeof window.$ != 'function'
    || window.jQuery.fn.jquery === undefined
    || window.jQuery.fn.jquery < '3.4.1') {
    let siteJq = null;
    let site$ = null;
    if (typeof window.jQuery != 'undefined'){
      siteJq = window.jQuery
      site$ = window.$
    }
    await loadScript({ 
      src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
      type: 'text/javascript',
      async: false
    });
    window.vidbaby$ = window.$;
    if(siteJq){
      window.$ = site$;
      window.jQuery = siteJq;
    }
  } else {
    window.vidbaby$ = window.$;
  }

  if(typeof window.$ === 'undefined') {
    window.$ = window.jQuery;
  }
  return;
}

function useLoadCodebaby({ id, env }) {
  const [getVB, setVB] = useState();
  
  useLayoutEffect(() => {
    const verify = async () => {
      let url = null;
      if(env === 'local' || env === 'localhost') {
        url = `http://localhost:8080/loader.js?env=${env}&id=${id}`;
      } else if(env === 'qa') {
        url = `https://qa-avatar.n-avatars.com/loader.js?env=${env}&id=${id}`;
      } else {
        url = `https://portal.codebaby.com/loader.js?id=${id}`;
      }
      
      await jqVerHandling();
      await loadScript({ src: url });
      setVB(() => window.vidbaby$)
    };
    
    if (window) {
      verify()
    } else {
      setTimeout(verify, 3000);
    }
  }, []);  

  return getVB;
};

export default useLoadCodebaby;