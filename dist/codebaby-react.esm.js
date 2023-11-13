import p, { useState as g, useLayoutEffect as C, createContext as E, forwardRef as R, useCallback as u, useMemo as k, useImperativeHandle as x, useEffect as h, Fragment as A, useContext as S } from "react";
const q = {
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
}, l = q;
function w(e) {
  const a = e.replace(/([A-Z])/g, (t) => `-${t[0].toLowerCase()}`);
  return Object.keys(l.types).includes(a) ? a : e;
}
const j = ({ src: e, type: a = "module", async: t = !0 }) => new Promise((c, r) => {
  const i = document.createElement("script");
  i.src = e, i.type = a, i.async = t, i.onload = () => c(i), i.onerror = () => r(new Error("Failed to load script. Check your internet connection.")), document.head.appendChild(i);
});
async function L() {
  if (typeof window.jQuery > "u" || typeof window.$ != "function" || window.jQuery.fn.jquery === void 0 || window.jQuery.fn.jquery < "3.4.1") {
    let e = null, a = null;
    typeof window.jQuery < "u" && (e = window.jQuery, a = window.$), await j({
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      type: "text/javascript",
      async: !1
    }), window.vidbaby$ = window.$, e && (window.$ = a, window.jQuery = e);
  } else
    window.vidbaby$ = window.$;
  typeof window.$ > "u" && (window.$ = window.jQuery);
}
function z({ id: e, env: a }) {
  const [t, c] = g();
  return C(() => {
    const r = async () => {
      const i = {
        local: `http://localhost:8080/loader.js?id=${e}&env=local`,
        dev: `https://bridge3-dev.codebaby.com/loader.js?id=${e}&env=dev`,
        qa: `https://qa-avatar.n-avatars.com/loader.js?id=${e}&env=qa`,
        default: `https://portal.codebaby.com/loader.js?id=${e}`
      }, o = a.toLowerCase().replace("localhost", "local"), y = i[o] || i.default;
      await L(), await j({ src: y }), c(() => window.vidbaby$);
    };
    window ? r() : setTimeout(r, 3e3);
  }, []), t;
}
const N = E({
  on(e, a) {
  },
  off(e, a) {
  },
  trigger(e, a) {
  }
}), $ = N, I = R(function({ children: a, id: t, env: c, ...r }, i) {
  const o = z({ id: t, env: c }), y = u((d, s) => {
    o && o(document).on(l.tansformEventName(d), s);
  }, [o]), f = u((d, s) => {
    o && o(document).off(l.tansformEventName(d), s);
  }, [o]), m = u((d, s) => {
    o && o(document).trigger(l.tansformEventName(d), s);
  }, [o]), b = k(() => ({
    on: y,
    off: f,
    trigger: m
  }), [y, f, m]);
  return x(i, function() {
    return b;
  }, [b]), h(() => {
    if (!o || !r || Object.keys(r).length === 0)
      return;
    const d = r, s = Object.keys(r).filter((n) => n.startsWith("on")).map((n) => n.replace("on", "")).map((n) => n.charAt(0).toLowerCase() + n.slice(1));
    if (!(s.length <= 0)) {
      for (const n of s) {
        const v = `on${n.charAt(0).toUpperCase() + n.slice(1)}`;
        b.on(w(n), d[v]);
      }
      return () => {
        for (const n of s) {
          const v = `on${n.charAt(0).toUpperCase() + n.slice(1)}`;
          b.off(w(n), d[v]);
        }
      };
    }
  }, [r, o]), /* @__PURE__ */ p.createElement($.Provider, { value: b }, /* @__PURE__ */ p.createElement(A, null, a, /* @__PURE__ */ p.createElement("div", { id: "avatarContainer", className: "codebaby-react-avatar-container" })));
});
function Q() {
  const { on: e, off: a, trigger: t } = S($);
  return { on: e, off: a, trigger: t };
}
function D() {
  const [e, a] = g(!1);
  return h(() => {
    let t = null;
    const c = () => {
      if (window && window.vidbaby$ && window.vidbaby && window.vidbaby.initialized)
        return a(!0);
      t = setTimeout(c, 1e3);
    };
    return c(), () => {
      t && clearTimeout(t);
    };
  }, []), e;
}
export {
  I as AvatarProvider,
  Q as useCodebabyEvents,
  D as useIsInitialized
};
//# sourceMappingURL=codebaby-react.esm.js.map
