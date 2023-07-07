"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _types;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var events = {
  on: function on(event, cb) {
    vidbaby.$(document).on(this.tansformEventName(event), cb);
  },
  off: function off(event, cb) {
    vidbaby.$(document).off(this.tansformEventName(event), cb);
  },
  trigger: function trigger(event, data) {
    vidbaby.$(document).trigger(this.tansformEventName(event), data);
  },
  tansformEventName: function tansformEventName(name) {
    if (this.types[name]) {
      return this.types[name];
    } else {
      return name;
    }
  },
  types: (_types = {
    ask: 'na-ask.vidbaby',
    initialized: 'na-initialized.vidbaby',
    playResponseData: 'na-playResponseData.vidbaby',
    response: 'na-response.vidbaby',
    playResponse: 'na-playResponse.vidbaby',
    microphoneStarted: 'na-microphoneStarted.vidbaby',
    microphoneAudio: 'na-microphoneAudio.vidbaby',
    microphoneData: 'na-microphoneData.vidbaby',
    microphoneStop: 'na-microphoneStop.vidbaby',
    microphoneStopped: 'na-microphoneStopped.vidbaby',
    playerBuilt: 'na-playerBuilt.vidbaby',
    unPark: 'na-unPark.vidbaby',
    segmentEnded: 'na-segmentEnded.vidbaby'
  }, _defineProperty(_types, "playResponseData", 'na-playResponseData.vidbaby'), _defineProperty(_types, "microphoneData", 'na-microphoneData.vidbaby'), _defineProperty(_types, "clientData", 'na-clientData.vidbaby'), _defineProperty(_types, "extractedEntity", 'na-extractedEntity.vidbaby'), _defineProperty(_types, "play", 'na-play.vidbaby'), _defineProperty(_types, "pause", 'na-pause.vidbaby'), _defineProperty(_types, "mute", 'na-mute.vidbaby'), _defineProperty(_types, "unmute", 'na-unmute.vidbaby'), _defineProperty(_types, 'player:state', 'na-player:state.vidbaby'), _defineProperty(_types, "preRender", 'na-preRender.vidbaby'), _defineProperty(_types, "interimPlayResponse", 'na-interimPlayResponse.vidbaby'), _defineProperty(_types, "interimResponse", 'na-interimResponse.vidbaby'), _defineProperty(_types, "interimSegmentEnded", 'na-interimSegmentEnded.vidbaby'), _defineProperty(_types, "playerLoadingAssets", 'na-playerLoadingAssets.vidbaby'), _defineProperty(_types, 'record-start', 'na-record-start.vidbaby'), _defineProperty(_types, 'record-stop', 'na-record-stop.vidbaby'), _defineProperty(_types, 'video-progress', 'na-video-progress.vidbaby'), _defineProperty(_types, 'video-converted', 'na-video-converted.vidbaby'), _defineProperty(_types, 'video-ready', 'na-video-ready.vidbaby'), _defineProperty(_types, 'video-cancel', 'na-video-cancel.vidbaby'), _defineProperty(_types, "camChange", 'na-camChange.vidbaby'), _defineProperty(_types, "glbLoaded", 'na-glbLoaded.vidbaby'), _types)
};
var _default = events;
exports["default"] = _default;