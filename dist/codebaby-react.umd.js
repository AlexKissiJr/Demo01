(function(s,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(s=typeof globalThis<"u"?globalThis:s||self,n(s.CodebabyReact={},s.React))})(this,function(s,n){"use strict";const u={tansformEventName(e){return this.types[e]?this.types[e]:e},types:{ask:"na-ask.vidbaby",initialized:"na-initialized.vidbaby",playResponseData:"na-playResponseData.vidbaby",response:"na-response.vidbaby",playResponse:"na-playResponse.vidbaby",microphoneStarted:"na-microphoneStarted.vidbaby",microphoneAudio:"na-microphoneAudio.vidbaby",microphoneData:"na-microphoneData.vidbaby",microphoneStop:"na-microphoneStop.vidbaby",microphoneStopped:"na-microphoneStopped.vidbaby",playerBuilt:"na-playerBuilt.vidbaby",unPark:"na-unPark.vidbaby",segmentEnded:"na-segmentEnded.vidbaby",clientData:"na-clientData.vidbaby",extractedEntity:"na-extractedEntity.vidbaby",play:"na-play.vidbaby",pause:"na-pause.vidbaby",mute:"na-mute.vidbaby",unmute:"na-unmute.vidbaby","player:state":"na-player:state.vidbaby",preRender:"na-preRender.vidbaby",interimPlayResponse:"na-interimPlayResponse.vidbaby",interimResponse:"na-interimResponse.vidbaby",interimSegmentEnded:"na-interimSegmentEnded.vidbaby",playerLoadingAssets:"na-playerLoadingAssets.vidbaby","record-start":"na-record-start.vidbaby","record-stop":"na-record-stop.vidbaby","video-progress":"na-video-progress.vidbaby","video-converted":"na-video-converted.vidbaby","video-ready":"na-video-ready.vidbaby","video-cancel":"na-video-cancel.vidbaby",camChange:"na-camChange.vidbaby",glbLoaded:"na-glbLoaded.vidbaby"}};function p(e){const t=e.replace(/([A-Z])/g,i=>`-${i[0].toLowerCase()}`);return Object.keys(u.types).includes(t)?t:e}const f=({src:e,type:t="module",async:i=!0})=>new Promise((c,d)=>{const o=document.createElement("script");o.src=e,o.type=t,o.async=i,o.onload=()=>c(o),o.onerror=()=>d(new Error("Failed to load script. Check your internet connection.")),document.head.appendChild(o)});async function C(){if(typeof window.jQuery>"u"||typeof window.$!="function"||window.jQuery.fn.jquery===void 0||window.jQuery.fn.jquery<"3.4.1"){let e=null,t=null;typeof window.jQuery<"u"&&(e=window.jQuery,t=window.$),await f({src:"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",type:"text/javascript",async:!1}),window.vidbaby$=window.$,e&&(window.$=t,window.jQuery=e)}else window.vidbaby$=window.$;typeof window.$>"u"&&(window.$=window.jQuery)}function j({id:e,env:t}){const[i,c]=n.useState();return n.useLayoutEffect(()=>{const d=async()=>{const o=t==="local"||t==="localhost"?`http://localhost:8080/loader.js?env=${t}&id=${e}`:`https://portal.codebaby.com/loader.js?env=${t||"prod"}&id=${e}`;await C(),await f({src:o}),c(()=>window.vidbaby$)};window?d():setTimeout(d,3e3)},[]),i}const m=n.createContext({on(e,t){},off(e,t){},trigger(e,t){}}),E=n.forwardRef(function({children:t,id:i,env:c,...d},o){const r=j({id:i,env:c}),w=n.useCallback((b,y)=>{r&&r(document).on(u.tansformEventName(b),y)},[r]),g=n.useCallback((b,y)=>{r&&r(document).off(u.tansformEventName(b),y)},[r]),h=n.useCallback((b,y)=>{r&&r(document).trigger(u.tansformEventName(b),y)},[r]),l=n.useMemo(()=>({on:w,off:g,trigger:h}),[w,g,h]);return n.useImperativeHandle(o,function(){return l},[l]),n.useEffect(()=>{if(!r||!d||Object.keys(d).length===0)return;const b=d,y=Object.keys(d).filter(a=>a.startsWith("on")).map(a=>a.replace("on","")).map(a=>a.charAt(0).toLowerCase()+a.slice(1));if(!(y.length<=0)){for(const a of y){const v=`on${a.charAt(0).toUpperCase()+a.slice(1)}`;l.on(p(a),b[v])}return()=>{for(const a of y){const v=`on${a.charAt(0).toUpperCase()+a.slice(1)}`;l.off(p(a),b[v])}}}},[d,r]),n.createElement(m.Provider,{value:l},n.createElement(n.Fragment,null,t,n.createElement("div",{id:"avatarContainer",className:"codebaby-react-avatar-container"})))});function $(){const{on:e,off:t,trigger:i}=n.useContext(m);return{on:e,off:t,trigger:i}}function k(){const[e,t]=n.useState(!1);return n.useEffect(()=>{let i=null;const c=()=>{if(window&&window.vidbaby$&&window.vidbaby&&window.vidbaby.initialized)return t(!0);i=setTimeout(c,1e3)};return c(),()=>{i&&clearTimeout(i)}},[]),e}s.AvatarProvider=E,s.useCodebabyEvents=$,s.useIsInitialized=k,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=codebaby-react.umd.js.map
