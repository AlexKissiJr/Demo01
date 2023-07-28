import events from "./events";

function normalizeEventName(eventName) {
  const kebabCase = eventName.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
  return Object.keys(events.types).includes(kebabCase) ? kebabCase : eventName;
}

export default normalizeEventName;