import {ReactNode, useEffect, useState} from "react";
import {ContentsBox, IconButtonContainer, UploadButton, UploaderLayout} from "./UploaderStyle";
import CameraIcon from "../../assets/camera.svg";
import ClothesIcon from "../../assets/clothes.svg";
import {useIsReactNativeWebview} from "../../hooks/useIsReactNativeWebview";
import {sendMessageToReactNative} from "../../utils/reactNativeMessage";


interface UploaderProps {
  width: number;
  height: number;
  children: ReactNode;
}

interface ImageUploaderProps {
  hasButton: boolean;
  buttonText?: string;
  onImageChange: (imageBase64: string) => void;
}

interface ClothesUploaderProps {
  buttonText: string;
  onClothesChange: (clothes: string) => void;
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

const Clothes = ({ buttonText, onClothesChange }: ClothesUploaderProps) => {
  const [clothes, setClothes] = useState<string | null>(null);

  const handleBoxUpload = () => {
    if (clothes === null) return;

    handleClothesUpload();
  }

  const handleClothesUpload = () => {

  }

  return (
    <ContentsBox onClick={handleBoxUpload}>
      {(clothes === null) ?
        <IconButtonContainer>
          <img src={ClothesIcon} alt={'clothes'} />
            <UploadButton onClick={() => {}}>
              {buttonText}
            </UploadButton>
        </IconButtonContainer>
        :
        <img src={'temp_clothes'} alt={"uploaded"} />
      }
    </ContentsBox>
  );
}

const Image = ({ hasButton, buttonText, onImageChange }: ImageUploaderProps) => {
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const isNative = useIsReactNativeWebview();

  const messageHandler = (event: MessageEvent) => {
    if (!isNative) return;

    const { type, data } = JSON.parse(event.data);
    if (type === 'IMAGE') {
      setImageBase64(data);
      onImageChange(data);
    }
  }

  useEffect(() => {
    window.addEventListener('message', messageHandler);
    document.addEventListener('message', messageHandler as EventListener);

    return () => {
      window.removeEventListener('message', messageHandler);
      document.removeEventListener('message', messageHandler as EventListener);
    }
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
                <UploadButton onClick={handleImageUpload}>
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

Uploader.Clothes = Clothes;
Uploader.Image = Image;
