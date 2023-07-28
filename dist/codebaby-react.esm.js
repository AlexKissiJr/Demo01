import p, { useState as g, useLayoutEffect as j, createContext as $, forwardRef as E, useCallback as v, useMemo as C, useImperativeHandle as R, useEffect as k, Fragment as x, useContext as D } from "react";
const w = ({ src: e, type: a = "module", async: s = !0 }) => new Promise((c, i) => {
  const t = document.createElement("script");
  t.src = e, t.type = a, t.async = s, t.onload = () => c(t), t.onerror = () => i(new Error("Failed to load script. Check your internet connection.")), document.head.appendChild(t);
});
async function S() {
  if (typeof window.jQuery > "u" || typeof window.$ != "function" || window.jQuery.fn.jquery === void 0 || window.jQuery.fn.jquery < "3.4.1") {
    let e = null, a = null;
    typeof window.jQuery < "u" && (e = window.jQuery, a = window.$), await w({
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      type: "text/javascript",
      async: !1
    }), window.vidbaby$ = window.$, e && (window.$ = a, window.jQuery = e);
  } else
    window.vidbaby$ = window.$;
  typeof window.$ > "u" && (window.$ = window.jQuery);
}
function A({ id: e, env: a }) {
  const [s, c] = g();
  return j(() => {
    const i = async () => {
      const t = a === "local" || a === "localhost" ? `http://localhost:8080/loader.js?env=${a}&id=${e}` : `https://portal.codebaby.com/loader.js?env=${a || "prod"}&id=${e}`;
      await S(), await w({ src: t }), c(() => window.vidbaby$);
    };
    window ? i() : setTimeout(i, 3e3);
  }, []), s;
}
const N = $({
  on(e, a) {
  },
  off(e, a) {
  },
  trigger(e, a) {
  }
}), h = N, P = {
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
}, l = P, Q = E(function({ children: a, id: s, env: c, ...i }, t) {
  const o = A({ id: s, env: c }), u = v((r, d) => {
    o && o(document).on(l.tansformEventName(r), d);
  }, [o]), f = v((r, d) => {
    o && o(document).off(l.tansformEventName(r), d);
  }, [o]), m = v((r, d) => {
    o && o(document).trigger(l.tansformEventName(r), d);
  }, [o]), b = C(() => ({
    on: u,
    off: f,
    trigger: m
  }), [u, f, m]);
  return R(t, function() {
    return b;
  }, [b]), k(() => {
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
  }, [i, o]), /* @__PURE__ */ p.createElement(h.Provider, { value: b }, /* @__PURE__ */ p.createElement(x, null, a, /* @__PURE__ */ p.createElement("div", { id: "avatarContainer", className: "codebaby-react-avatar-container" })));
});
function q() {
  const { on: e, off: a, trigger: s } = D(h);
  return { on: e, off: a, trigger: s };
}
export {
  Q as AvatarProvider,
  q as useCodebabyEvents
};
//# sourceMappingURL=codebaby-react.esm.js.map
