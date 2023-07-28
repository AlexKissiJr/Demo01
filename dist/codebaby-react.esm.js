import p, { useState as g, useLayoutEffect as C, createContext as E, forwardRef as R, useCallback as v, useMemo as k, useImperativeHandle as x, useEffect as h, Fragment as A, useContext as S } from "react";
const L = {
  tansformEventName(e) {
    return this.types[e] ? this.types[e] : e;
  },
  types: {
    ask: "na-ask.vidbaby",
    initialized: "na-initialized.vidbaby",
    playResponseData: "na-playResponseData.vidbaby",
    response: "na-response.vidbaby",
    playResponse: "na-playResponse.vidbaby",
    microphoneStarted: "na-microphoneStarted.vidbaby",
    microphoneAudio: "na-microphoneAudio.vidbaby",
    microphoneData: "na-microphoneData.vidbaby",
    microphoneStop: "na-microphoneStop.vidbaby",
    microphoneStopped: "na-microphoneStopped.vidbaby",
    playerBuilt: "na-playerBuilt.vidbaby",
    unPark: "na-unPark.vidbaby",
    segmentEnded: "na-segmentEnded.vidbaby",
    clientData: "na-clientData.vidbaby",
    extractedEntity: "na-extractedEntity.vidbaby",
    play: "na-play.vidbaby",
    pause: "na-pause.vidbaby",
    mute: "na-mute.vidbaby",
    unmute: "na-unmute.vidbaby",
    "player:state": "na-player:state.vidbaby",
    preRender: "na-preRender.vidbaby",
    interimPlayResponse: "na-interimPlayResponse.vidbaby",
    interimResponse: "na-interimResponse.vidbaby",
    interimSegmentEnded: "na-interimSegmentEnded.vidbaby",
    playerLoadingAssets: "na-playerLoadingAssets.vidbaby",
    "record-start": "na-record-start.vidbaby",
    "record-stop": "na-record-stop.vidbaby",
    "video-progress": "na-video-progress.vidbaby",
    "video-converted": "na-video-converted.vidbaby",
    "video-ready": "na-video-ready.vidbaby",
    "video-cancel": "na-video-cancel.vidbaby",
    camChange: "na-camChange.vidbaby",
    glbLoaded: "na-glbLoaded.vidbaby"
  }
}, y = L;
function w(e) {
  const n = e.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`);
  return Object.keys(y.types).includes(n) ? n : e;
}
const $ = ({ src: e, type: n = "module", async: t = !0 }) => new Promise((c, r) => {
  const o = document.createElement("script");
  o.src = e, o.type = n, o.async = t, o.onload = () => c(o), o.onerror = () => r(new Error("Failed to load script. Check your internet connection.")), document.head.appendChild(o);
});
async function N() {
  if (typeof window.jQuery > "u" || typeof window.$ != "function" || window.jQuery.fn.jquery === void 0 || window.jQuery.fn.jquery < "3.4.1") {
    let e = null, n = null;
    typeof window.jQuery < "u" && (e = window.jQuery, n = window.$), await $({
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      type: "text/javascript",
      async: !1
    }), window.vidbaby$ = window.$, e && (window.$ = n, window.jQuery = e);
  } else
    window.vidbaby$ = window.$;
  typeof window.$ > "u" && (window.$ = window.jQuery);
}
function P({ id: e, env: n }) {
  const [t, c] = g();
  return C(() => {
    const r = async () => {
      const o = n === "local" || n === "localhost" ? `http://localhost:8080/loader.js?env=${n}&id=${e}` : `https://portal.codebaby.com/loader.js?env=${n || "prod"}&id=${e}`;
      await N(), await $({ src: o }), c(() => window.vidbaby$);
    };
    window ? r() : setTimeout(r, 3e3);
  }, []), t;
}
const z = E({
  on(e, n) {
  },
  off(e, n) {
  },
  trigger(e, n) {
  }
}), j = z, Q = R(function({ children: n, id: t, env: c, ...r }, o) {
  const i = P({ id: t, env: c }), u = v((d, s) => {
    i && i(document).on(y.tansformEventName(d), s);
  }, [i]), f = v((d, s) => {
    i && i(document).off(y.tansformEventName(d), s);
  }, [i]), m = v((d, s) => {
    i && i(document).trigger(y.tansformEventName(d), s);
  }, [i]), b = k(() => ({
    on: u,
    off: f,
    trigger: m
  }), [u, f, m]);
  return x(o, function() {
    return b;
  }, [b]), h(() => {
    if (!i || !r || Object.keys(r).length === 0)
      return;
    const d = r, s = Object.keys(r).filter((a) => a.startsWith("on")).map((a) => a.replace("on", "")).map((a) => a.charAt(0).toLowerCase() + a.slice(1));
    if (!(s.length <= 0)) {
      for (const a of s) {
        const l = `on${a.charAt(0).toUpperCase() + a.slice(1)}`;
        b.on(w(a), d[l]);
      }
      return () => {
        for (const a of s) {
          const l = `on${a.charAt(0).toUpperCase() + a.slice(1)}`;
          b.off(w(a), d[l]);
        }
      };
    }
  }, [r, i]), /* @__PURE__ */ p.createElement(j.Provider, { value: b }, /* @__PURE__ */ p.createElement(A, null, n, /* @__PURE__ */ p.createElement("div", { id: "avatarContainer", className: "codebaby-react-avatar-container" })));
});
function q() {
  const { on: e, off: n, trigger: t } = S(j);
  return { on: e, off: n, trigger: t };
}
function D() {
  const [e, n] = g(!1);
  return h(() => {
    let t = null;
    const c = () => {
      if (window && window.vidbaby$ && window.vidbaby && window.vidbaby.initialized)
        return n(!0);
      t = setTimeout(c, 1e3);
    };
    return c(), () => {
      t && clearTimeout(t);
    };
  }, []), e;
}
export {
  Q as AvatarProvider,
  q as useCodebabyEvents,
  D as useIsInitialized
};
//# sourceMappingURL=codebaby-react.esm.js.map
