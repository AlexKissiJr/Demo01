"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react"),j={tansformEventName(e){return this.types[e]?this.types[e]:e},types:{ask:"na-ask.vidbaby",initialized:"na-initialized.vidbaby",playResponseData:"na-playResponseData.vidbaby",response:"na-response.vidbaby",playResponse:"na-playResponse.vidbaby",microphoneStarted:"na-microphoneStarted.vidbaby",microphoneAudio:"na-microphoneAudio.vidbaby",microphoneData:"na-microphoneData.vidbaby",microphoneStop:"na-microphoneStop.vidbaby",microphoneStopped:"na-microphoneStopped.vidbaby",playerBuilt:"na-playerBuilt.vidbaby",unPark:"na-unPark.vidbaby",segmentEnded:"na-segmentEnded.vidbaby",clientData:"na-clientData.vidbaby",extractedEntity:"na-extractedEntity.vidbaby",play:"na-play.vidbaby",pause:"na-pause.vidbaby",mute:"na-mute.vidbaby",unmute:"na-unmute.vidbaby","player:state":"na-player:state.vidbaby",preRender:"na-preRender.vidbaby",interimPlayResponse:"na-interimPlayResponse.vidbaby",interimResponse:"na-interimResponse.vidbaby",interimSegmentEnded:"na-interimSegmentEnded.vidbaby",playerLoadingAssets:"na-playerLoadingAssets.vidbaby","record-start":"na-record-start.vidbaby","record-stop":"na-record-stop.vidbaby","video-progress":"na-video-progress.vidbaby","video-converted":"na-video-converted.vidbaby","video-ready":"na-video-ready.vidbaby","video-cancel":"na-video-cancel.vidbaby",camChange:"na-camChange.vidbaby",glbLoaded:"na-glbLoaded.vidbaby"}},u=j;function p(e){const a=e.replace(/([A-Z])/g,o=>`-${o[0].toLowerCase()}`);return Object.keys(u.types).includes(a)?a:e}const w=({src:e,type:a="module",async:o=!0})=>new Promise((b,d)=>{const r=document.createElement("script");r.src=e,r.type=a,r.async=o,r.onload=()=>b(r),r.onerror=()=>d(new Error("Failed to load script. Check your internet connection.")),document.head.appendChild(r)});async function C(){if(typeof window.jQuery>"u"||typeof window.$!="function"||window.jQuery.fn.jquery===void 0||window.jQuery.fn.jquery<"3.4.1"){let e=null,a=null;typeof window.jQuery<"u"&&(e=window.jQuery,a=window.$),await w({src:"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",type:"text/javascript",async:!1}),window.vidbaby$=window.$,e&&(window.$=a,window.jQuery=e)}else window.vidbaby$=window.$;typeof window.$>"u"&&(window.$=window.jQuery)}function E({id:e,env:a}){const[o,b]=t.useState();return t.useLayoutEffect(()=>{const d=async()=>{const r={local:`http://localhost:8080/loader.js?id=${e}&env=local`,dev:`https://bridge3-dev.codebaby.com/loader.js?id=${e}&env=dev`,qa:`https://qa-avatar.n-avatars.com/loader.js?id=${e}&env=qa`,default:`https://portal.codebaby.com/loader.js?id=${e}`},i=(typeof a=="string"?a:"").toLowerCase().replace("localhost","local"),y=r[i]||r.default;await C(),await w({src:y}),b(()=>window.vidbaby$)};window?d():setTimeout(d,3e3)},[]),o}const $=t.createContext({on(e,a){},off(e,a){},trigger(e,a){}}),g=$,k=t.forwardRef(function({children:a,id:o,env:b,...d},r){const i=E({id:o,env:b}),y=t.useCallback((s,c)=>{i&&i(document).on(u.tansformEventName(s),c)},[i]),f=t.useCallback((s,c)=>{i&&i(document).off(u.tansformEventName(s),c)},[i]),m=t.useCallback((s,c)=>{i&&i(document).trigger(u.tansformEventName(s),c)},[i]),l=t.useMemo(()=>({on:y,off:f,trigger:m}),[y,f,m]);return t.useImperativeHandle(r,function(){return l},[l]),t.useEffect(()=>{if(!i||!d||Object.keys(d).length===0)return;const s=d,c=Object.keys(d).filter(n=>n.startsWith("on")).map(n=>n.replace("on","")).map(n=>n.charAt(0).toLowerCase()+n.slice(1));if(!(c.length<=0)){for(const n of c){const v=`on${n.charAt(0).toUpperCase()+n.slice(1)}`;n=="initialized"?l.on(p(n),(...h)=>{setTimeout(()=>s[v].apply(null,...h),1700)}):l.on(p(n),s[v])}return()=>{for(const n of c){const v=`on${n.charAt(0).toUpperCase()+n.slice(1)}`;l.off(p(n),s[v])}}}},[d,i]),t.createElement(g.Provider,{value:l},t.createElement(t.Fragment,null,a,t.createElement("div",{id:"avatarContainer",className:"codebaby-react-avatar-container"})))});function R(){const{on:e,off:a,trigger:o}=t.useContext(g);return{on:e,off:a,trigger:o}}function S(){const[e,a]=t.useState(!1);return t.useEffect(()=>{let o=null;const b=()=>{if(window&&window.vidbaby$&&window.vidbaby&&window.vidbaby.initialized)return a(!0);o=setTimeout(b,1e3)};return b(),()=>{o&&clearTimeout(o)}},[]),e}exports.AvatarProvider=k;exports.useCodebabyEvents=R;exports.useIsInitialized=S;
//# sourceMappingURL=codebaby-react.js.map
