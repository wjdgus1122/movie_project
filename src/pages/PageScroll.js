import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageScroll = () => {
  const a = useLocation();
  console.log(a);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [a]);
  return null;
};
