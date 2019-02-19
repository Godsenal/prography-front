import { useEffect } from "react";

export const useEventListener = (name, listener) => {
  useEffect(() => {
    window.addEventListener(name, listener);
    return () => window.removeEventListener(name, listener);
  }, []);
};
