import { useContext } from "react";
import avatarCtx from "../context/avatarCtx";

function useCodebabyEvents() {
  const { on, off, trigger } = useContext(avatarCtx);

  return { on, off, trigger };
};

export {useCodebabyEvents};