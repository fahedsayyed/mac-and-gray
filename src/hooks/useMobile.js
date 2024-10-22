import {useEffect, useState} from "react";

export default function useMobile(element=window) {
  const [width, setWidth] = useState(element.innerWidth);

  useEffect(()=>{
    element.addEventListener('resize', handleWindowSizeChange);
    return () => {
        element.removeEventListener('resize', handleWindowSizeChange);
    }
  },[element]);

  function handleWindowSizeChange() {
    setWidth(element.innerWidth);
  }

  const isMobile = width <= 600;
  return isMobile;

}