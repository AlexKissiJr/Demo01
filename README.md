## Install codebaby-react
```bash
npm install '@codebaby-avatars/codebaby-react'
```

## Add the component to your app
```javascript
import codebaby from '@codebaby-avatars/codebaby-react';

const App = () => {
	return <div>Hello, World!<codebaby.AvatarComponent id="react-avatar" /></div>;
};
```
Replace "react-avatar" with your avatarId from https://portal.codebaby.com.


## Trigger an Event

Send a message to the avatar.
```javascript
codebaby.events.trigger('ask', 'Why is the sky blue?');
```

## Codebaby Events

This document lists all the events supported by the Codebaby library. The events are divided into two categories: triggered events that your application can trigger, and listened events that your application can listen for to respond to specific actions or state changes.

### Triggered Events
These events can be triggered by your application using the following JavaScript syntax:
```javascript
codebaby.events.trigger('<event_name>', '<event_data>');
```
Replace <event_name> with the event name from the list below, and optional <event_data> with any relevant data for that event.
List of Triggered Events

- ask: Trigger a question or query.
- microphoneStop: Stop the microphone from recording.
- play: Start media playback.
- pause: Pause media playback.
- mute: Mute media playback.
- unmute: Unmute media playback.
- record-start: Start video recording.
- record-stop: Stop video recording.
- video-cancel: Cancel video recording or conversion.
- camChange: Change the camera input source.

### Listened Events
Your application can listen for these events and respond to specific actions or state changes. To listen for an event, use the following JavaScript syntax:
```javascript
codebaby.events.on('<event_name>', () => {
	//code run on event
});
```
List of Listened Events

- initialized: Triggered when the library has completed its initialization process.
- playResponseData: Triggered when response data is ready to be played.
- response: Triggered when the library receives a response from the server.
- playResponse: Triggered when a response starts playing.
- microphoneStarted: Triggered when the microphone starts recording.
- microphoneAudio: Triggered when new microphone audio data is available.
- microphoneData: Triggered when the microphone data is processed and ready.
- microphoneStopped: Triggered when the microphone has stopped recording.
- playerBuilt: Triggered when the media player has been built and initialized.
- unPark: Triggered when the parked state is removed.
- segmentEnded: Triggered when a media segment has ended.
- clientData: Triggered when the library receives new client data.
- extractedEntity: Triggered when an entity is extracted from the user's input.
- player:state: Triggered when the player's state changes.
- preRender: Triggered before rendering a new UI element.
- interimPlayResponse: Triggered when an interim response starts playing.
- interimResponse: Triggered when the library receives an interim response from the server.
- interimSegmentEnded: Triggered when an interim media segment has ended.
- playerLoadingAssets: Triggered when the media player is loading new assets.
- video-progress: Triggered when the video conversion process makes progress.
- video-converted: Triggered when the video conversion process is completed.
- video-ready: Triggered when the video is ready for playback.
- glbLoaded: Triggered when a 3D model (GLB file) is loaded.

## Usage Example

Here's an example of triggering the ask event with a message:

```javascript
codebaby.events.trigger('ask', 'What is a great poem?');
```
Remember to replace the event name and data with the appropriate values for your use case.