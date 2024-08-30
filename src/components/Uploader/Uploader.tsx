import {FC, ReactElement, useEffect, useState} from "react";
import {ContentsBox, IconButtonContainer, UploadButton, UploaderLayout} from "./UploaderStyle";
import CameraIcon from "../../assets/camera.svg";
import ClothesIcon from "../../assets/clothes.svg";
import {useIsReactNativeWebview} from "../../hooks/useIsReactNativeWebview";
import {sendMessageToReactNative} from "../../utils/reactNativeMessage";


interface UploaderProps {
  width: number;
  height: number;
  children: ReactElement;
}

interface ImageUploaderProps {
  hasButton: boolean;
  buttonText?: string;
  onImageChange: (imageBase64: string) => void;
}

const Uploader = ({ width, height, children }: UploaderProps) => {
  return (
    <UploaderLayout
      width={width}
      height={height}
    >
        {children}
    </UploaderLayout>
  );
}

const Image = ({ hasButton, buttonText, onImageChange }: ImageUploaderProps) => {
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const isNative = useIsReactNativeWebview();

  const messageHandler = (event: MessageEvent) => {
    const { type, data } = JSON.parse(event.data);
    if (type === 'IMAGE') {
      setImageBase64(data);
      onImageChange(data);
    }
  }

  useEffect(() => {
    window.addEventListener('message', messageHandler);
    document.addEventListener('message', messageHandler as EventListener);
  }, []);

  const handleBoxUpload = () => {
    if (hasButton && imageBase64 === null) return;

    handleImageUpload();
  }

  const handleImageUpload = () => {
    if (!isNative) return;

    sendMessageToReactNative({ type: 'OPEN_UPLOAD_ALERT' });
  }

  return (
    <ContentsBox onClick={handleBoxUpload}>
      {(imageBase64 === null) ?
          <IconButtonContainer>
            <img src={CameraIcon} alt={'camera'} />
            {(hasButton) ?
                <UploadButton
                  onClick={handleImageUpload}
                >
                  {buttonText}
                </UploadButton>
                : null
            }
          </IconButtonContainer>
        :
        <img src={imageBase64} alt={"uploaded"} />
      }
    </ContentsBox>
  );
}

export default Uploader;

Uploader.Image = Image;
