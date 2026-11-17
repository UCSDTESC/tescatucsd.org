import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Starts every page at the top. Without this, a new page opens at the previous page's scroll position. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
