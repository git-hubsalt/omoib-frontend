import {useEffect, useState} from "react";
import {
  BodyImageUploaderLayout,
  ContentsBox,
  IconButtonContainer,
  UploadButton,
} from './BodyImageUploaderStyle';
import CameraIcon from "../../assets/camera.svg";
import {useIsReactNativeWebview} from "../../hooks/useIsReactNativeWebview";
import {sendMessageToReactNative} from "../../utils/reactNativeMessage";


interface BodyImageUploaderProps {
  width: number;
  height: number;
  buttonText: string;
  onImageChange: (imageBase64: string) => void;
}

const BodyImageUploader = ({ width, height, buttonText, onImageChange }: BodyImageUploaderProps) => {
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
    handleImageUpload();
  }

  const handleImageUpload = () => {
    if (!isNative) return;

    sendMessageToReactNative({ type: 'UPLOAD_BODY_IMAGE' });
  }

  return (
    <BodyImageUploaderLayout
      width={width}
      height={height}
    >
      <ContentsBox onClick={handleBoxUpload}>
        {(imageBase64 === null) ?
          <IconButtonContainer>
            <img src={CameraIcon} alt={'camera'} />
            <UploadButton onClick={handleImageUpload}>
              {buttonText}
            </UploadButton>
          </IconButtonContainer>
          :
          <img src={imageBase64} alt={"uploaded"} />
        }
      </ContentsBox>
    </BodyImageUploaderLayout>
  );
}

export default BodyImageUploader;
