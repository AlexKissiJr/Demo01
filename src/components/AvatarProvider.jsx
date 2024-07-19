import React, { 
  useCallback,
  Fragment,
  forwardRef,
  useMemo,
  useImperativeHandle,
  useEffect
} from "react";

import events from "../utils/events";
import normalizeEventName from "../utils/normalizeEventName";

import useLoadCodebaby from "../hooks/useLoadLib";
import avatarCtx from "../context/avatarCtx";

const AvatarProvider = forwardRef(function RefAvatarProvider({ children, id, env, ...onFunctions }, ref) {
  const vidbaby$ = useLoadCodebaby({ id, env });

  const onCodebaby = useCallback((event, cb) => {
    if(vidbaby$)
      vidbaby$(document).on(events.tansformEventName(event), cb);
    }, [vidbaby$]);
    const offCodebaby = useCallback((event, cb) => {
      if(vidbaby$)
      vidbaby$(document).off(events.tansformEventName(event), cb);
    }, [vidbaby$]);
    const triggerCodebaby = useCallback((event, data) => {
      if(vidbaby$)
        vidbaby$(document).trigger(events.tansformEventName(event), data);
  }, [vidbaby$]);

  const eventHandler = useMemo(() => ({
    on: onCodebaby,
    off: offCodebaby,
    trigger: triggerCodebaby,
  }), [onCodebaby, offCodebaby, triggerCodebaby]);

  useImperativeHandle(ref, function refEvents() {
    return eventHandler;
  }, [eventHandler]);

  useEffect(() => {
    if(!vidbaby$ || !onFunctions || Object.keys(onFunctions).length === 0)
      return;
    const fns = onFunctions;
    const eventsName = Object.keys(onFunctions)
      .filter(i => i.startsWith("on"))
      .map(i => i.replace("on", ""))
      .map(i => i.charAt(0).toLowerCase() + i.slice(1));

    if(eventsName.length <= 0)
      return;
    for(const eventName of eventsName) {
      const key = `on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`;
      if(eventName == 'initialized') {
        eventHandler.on(normalizeEventName(eventName), (...args) => {
          setTimeout(() => fns[key].apply(null, ...args), 1700);
        });
      } else {
        eventHandler.on(normalizeEventName(eventName), fns[key]);
      }
    };
    return () => {
      for(const eventName of eventsName) {
        const key = `on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`;
        eventHandler.off(normalizeEventName(eventName), fns[key]);
      };
    };
  }, [onFunctions, vidbaby$]);

  return (
    <avatarCtx.Provider value={eventHandler}>
      <Fragment>
        {children}
        <div id="avatarContainer" className="codebaby-react-avatar-container"></div>
      </Fragment>
    </avatarCtx.Provider>
  );
});


export {AvatarProvider};