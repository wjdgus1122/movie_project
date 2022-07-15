import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageScroll = () => {
  const a = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [a]);
  return null;
};
