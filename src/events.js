//import React, { useState, useEffect } from 'react';

const events = {
	on(event, cb) {
		vidbaby.$(document).on(this.tansformEventName(event), cb);
	},
	off(event, cb) {
		vidbaby.$(document).off(this.tansformEventName(event), cb);
	},
	trigger(event, data) {
		vidbaby.$(document).trigger(this.tansformEventName(event), data);
	},
	tansformEventName(name) {
		if(this.types[name]) {
			return this.types[name];
		} else {
			return name;
		}
	},
	types: {
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
		segmentEnded: 'na-segmentEnded.vidbaby',
		playResponseData: 'na-playResponseData.vidbaby',
		microphoneData: 'na-microphoneData.vidbaby',
		clientData: 'na-clientData.vidbaby',
		extractedEntity: 'na-extractedEntity.vidbaby',
		play: 'na-play.vidbaby',
		pause: 'na-pause.vidbaby',
		mute: 'na-mute.vidbaby',
		unmute: 'na-unmute.vidbaby',
		'player:state': 'na-player:state.vidbaby',
		preRender: 'na-preRender.vidbaby',
		interimPlayResponse: 'na-interimPlayResponse.vidbaby',
		interimResponse: 'na-interimResponse.vidbaby',
		interimSegmentEnded: 'na-interimSegmentEnded.vidbaby',
		playerLoadingAssets: 'na-playerLoadingAssets.vidbaby',
		'record-start': 'na-record-start.vidbaby',
		'record-stop': 'na-record-stop.vidbaby',
		'video-progress': 'na-video-progress.vidbaby',
		'video-converted': 'na-video-converted.vidbaby',
		'video-ready': 'na-video-ready.vidbaby',
		'video-cancel': 'na-video-cancel.vidbaby',
		camChange: 'na-camChange.vidbaby',
		glbLoaded: 'na-glbLoaded.vidbaby'
	}
}

export default events;