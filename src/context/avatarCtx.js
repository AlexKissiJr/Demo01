import { createContext } from "react";

const avatarCtx = createContext({
  on(event, cb) {},
	off(event, cb) {},
	trigger(event, data){},
});

export default avatarCtx;