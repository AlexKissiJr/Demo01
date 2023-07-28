(function(d,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],e):(d=typeof globalThis<"u"?globalThis:d||self,e(d.CodebabyReact={},d.React))})(this,function(d,e){"use strict";const v=({src:n,type:a="module",async:y=!0})=>new Promise((c,r)=>{const o=document.createElement("script");o.src=n,o.type=a,o.async=y,o.onload=()=>c(o),o.onerror=()=>r(new Error("Failed to load script. Check your internet connection.")),document.head.appendChild(o)});async function g(){if(typeof window.jQuery>"u"||typeof window.$!="function"||window.jQuery.fn.jquery===void 0||window.jQuery.fn.jquery<"3.4.1"){let n=null,a=null;typeof window.jQuery<"u"&&(n=window.jQuery,a=window.$),await v({src:"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",type:"text/javascript",async:!1}),window.vidbaby$=window.$,n&&(window.$=a,window.jQuery=n)}else window.vidbaby$=window.$;typeof window.$>"u"&&(window.$=window.jQuery)}function C({id:n,env:a}){const[y,c]=e.useState();return e.useLayoutEffect(()=>{const r=async()=>{const o=a==="local"||a==="localhost"?`http://localhost:8080/loader.js?env=${a}&id=${n}`:`https://portal.codebaby.com/loader.js?env=${a||"prod"}&id=${n}`;await g(),await v({src:o}),c(()=>window.vidbaby$)};window?r():setTimeout(r,3e3)},[]),y}const f=e.createContext({on(n,a){},off(n,a){},trigger(n,a){}}),p={tansformEventName(n){return this.types[n]?this.types[n]:n},types:{ask:"na-ask.vidbaby",initialized:"na-initialized.vidbaby",playResponseData:"na-playResponseData.vidbaby",response:"na-response.vidbaby",playResponse:"na-playResponse.vidbaby",microphoneStarted:"na-microphoneStarted.vidbaby",microphoneAudio:"na-microphoneAudio.vidbaby",microphoneData:"na-microphoneData.vidbaby",microphoneStop:"na-microphoneStop.vidbaby",microphoneStopped:"na-microphoneStopped.vidbaby",playerBuilt:"na-playerBuilt.vidbaby",unPark:"na-unPark.vidbaby",segmentEnded:"na-segmentEnded.vidbaby",playResponseData:"na-playResponseData.vidbaby",microphoneData:"na-microphoneData.vidbaby",clientData:"na-clientData.vidbaby",extractedEntity:"na-extractedEntity.vidbaby",play:"na-play.vidbaby",pause:"na-pause.vidbaby",mute:"na-mute.vidbaby",unmute:"na-unmute.vidbaby","player:state":"na-player:state.vidbaby",preRender:"na-preRender.vidbaby",interimPlayResponse:"na-interimPlayResponse.vidbaby",interimResponse:"na-interimResponse.vidbaby",interimSegmentEnded:"na-interimSegmentEnded.vidbaby",playerLoadingAssets:"na-playerLoadingAssets.vidbaby","record-start":"na-record-start.vidbaby","record-stop":"na-record-stop.vidbaby","video-progress":"na-video-progress.vidbaby","video-converted":"na-video-converted.vidbaby","video-ready":"na-video-ready.vidbaby","video-cancel":"na-video-cancel.vidbaby",camChange:"na-camChange.vidbaby",glbLoaded:"na-glbLoaded.vidbaby"}},j=e.forwardRef(function({children:a,id:y,env:c,...r},o){const i=C({id:y,env:c}),m=e.useCallback((s,b)=>{i&&i(document).on(p.tansformEventName(s),b)},[i]),w=e.useCallback((s,b)=>{i&&i(document).off(p.tansformEventName(s),b)},[i]),h=e.useCallback((s,b)=>{i&&i(document).trigger(p.tansformEventName(s),b)},[i]),l=e.useMemo(()=>({on:m,off:w,trigger:h}),[m,w,h]);return e.useImperativeHandle(o,function(){return l},[l]),e.useEffect(()=>{if(!i||!r||Object.keys(r).length===0)return;const s=r,b=Object.keys(r).filter(t=>t.startsWith("on")).map(t=>t.replace("on","")).map(t=>t.charAt(0).toLowerCase()+t.slice(1));if(!(b.length<=0)){for(const t of b){const u=`on${t.charAt(0).toUpperCase()+t.slice(1)}`;l.on(t,s[u])}return()=>{for(const t of b){const u=`on${t.charAt(0).toUpperCase()+t.slice(1)}`;l.off(t,s[u])}}}},[r,i]),e.createElement(f.Provider,{value:l},e.createElement(e.Fragment,null,a,e.createElement("div",{id:"avatarContainer",className:"codebaby-react-avatar-container"})))});function E(){const{on:n,off:a,trigger:y}=e.useContext(f);return{on:n,off:a,trigger:y}}function $(){const[n,a]=e.useState(!1);return e.useEffect(()=>()=>{},[]),n}d.AvatarProvider=j,d.useCodebabyEvents=E,d.useIsInitialized=$,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=codebaby-react.umd.js.map
