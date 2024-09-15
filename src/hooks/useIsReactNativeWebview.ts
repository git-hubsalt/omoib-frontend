import {useEffect, useState} from "react";


export const useIsReactNativeWebview = () => {
  const [isReactNativeWebview, setIsReactNativeWebview] = useState<boolean>(false);

  useEffect(() => {
    if (window.ReactNativeWebView) {
      setIsReactNativeWebview(true);
    }
  },[]);

  return isReactNativeWebview;
}
