interface Message {
  type: string;
  payload?: any;
}

export const sendMessageToReactNative = (message: Message) => {
  if (!window.ReactNativeWebView) {
    return;
  }

  window.ReactNativeWebView.postMessage(JSON.stringify(message));
};
