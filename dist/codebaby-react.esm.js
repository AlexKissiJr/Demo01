import p, { useState as w, useLayoutEffect as $, createContext as E, forwardRef as C, useCallback as l, useMemo as R, useImperativeHandle as k, useEffect as h, Fragment as x, useContext as D } from "react";
const g = ({ src: e, type: a = "module", async: s = !0 }) => new Promise((c, i) => {
  const t = document.createElement("script");
  t.src = e, t.type = a, t.async = s, t.onload = () => c(t), t.onerror = () => i(new Error("Failed to load script. Check your internet connection.")), document.head.appendChild(t);
});
async function S() {
  if (typeof window.jQuery > "u" || typeof window.$ != "function" || window.jQuery.fn.jquery === void 0 || window.jQuery.fn.jquery < "3.4.1") {
    let e = null, a = null;
    typeof window.jQuery < "u" && (e = window.jQuery, a = window.$), await g({
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      type: "text/javascript",
      async: !1
    }), window.vidbaby$ = window.$, e && (window.$ = a, window.jQuery = e);
  } else
    window.vidbaby$ = window.$;
  typeof window.$ > "u" && (window.$ = window.jQuery);
}
function A({ id: e, env: a }) {
  const [s, c] = w();
  return $(() => {
    const i = async () => {
      const t = a === "local" || a === "localhost" ? `http://localhost:8080/loader.js?env=${a}&id=${e}` : `https://portal.codebaby.com/loader.js?env=${a || "prod"}&id=${e}`;
      await S(), await g({ src: t }), c(() => window.vidbaby$);
    };
    window ? i() : setTimeout(i, 3e3);
  }, []), s;
}
const N = E({
  on(e, a) {
  },
  off(e, a) {
  },
  trigger(e, a) {
  }
}), j = N, P = {
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
    playResponseData: "na-playResponseData.vidbaby",
    microphoneData: "na-microphoneData.vidbaby",
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
}, v = P, Q = C(function({ children: a, id: s, env: c, ...i }, t) {
  const o = A({ id: s, env: c }), u = l((r, d) => {
    o && o(document).on(v.tansformEventName(r), d);
  }, [o]), f = l((r, d) => {
    o && o(document).off(v.tansformEventName(r), d);
  }, [o]), m = l((r, d) => {
    o && o(document).trigger(v.tansformEventName(r), d);
  }, [o]), b = R(() => ({
    on: u,
    off: f,
    trigger: m
  }), [u, f, m]);
  return k(t, function() {
    return b;
  }, [b]), h(() => {
    if (!o || !i || Object.keys(i).length === 0)
      return;
    const r = i, d = Object.keys(i).filter((n) => n.startsWith("on")).map((n) => n.replace("on", "")).map((n) => n.charAt(0).toLowerCase() + n.slice(1));
    if (!(d.length <= 0)) {
      for (const n of d) {
        const y = `on${n.charAt(0).toUpperCase() + n.slice(1)}`;
        b.on(n, r[y]);
      }
      return () => {
        for (const n of d) {
          const y = `on${n.charAt(0).toUpperCase() + n.slice(1)}`;
          b.off(n, r[y]);
        }
      };
    }
  }, [i, o]), /* @__PURE__ */ p.createElement(j.Provider, { value: b }, /* @__PURE__ */ p.createElement(x, null, a, /* @__PURE__ */ p.createElement("div", { id: "avatarContainer", className: "codebaby-react-avatar-container" })));
});
function q() {
  const { on: e, off: a, trigger: s } = D(j);
  return { on: e, off: a, trigger: s };
}
function I() {
  const [e, a] = w(!1);
  return h(() => () => {
  }, []), e;
}
export {
  Q as AvatarProvider,
  q as useCodebabyEvents,
  I as useIsInitialized
};
//# sourceMappingURL=codebaby-react.esm.js.map
