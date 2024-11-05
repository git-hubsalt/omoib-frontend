import { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
  BodyImageUploaderLayout,
  ContentsBox,
  IconButtonContainer,
  UploadButton,
} from './style';
import CameraIcon from "../../../assets/camera.svg";
import { BodyImage, InvisibleInput } from '../Uploader/style';
import { ALLOWED_IMAGE_FORMATS } from '../../../utils/constants';


interface BodyImageUploaderProps {
  width: number;
  height: number;
  buttonText: string;
  onImageChange: (image: File) => void;
}

const BodyImageUploader = ({ width, height, buttonText, onImageChange }: BodyImageUploaderProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageBase64, setImageBase64] = useState<string | ArrayBuffer | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!imageFile) {
      setImageBase64(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.onload = () => {
      if (reader.result !== undefined) {
        setImageBase64(reader.result);
      }
    };

    return () => {
      reader.onload = null;
    };
  }, [imageFile]);

  //네이티브 사용 X로 코드 제거
  // const isNative = useIsReactNativeWebview();

  // const messageHandler = (event: MessageEvent) => {
  //   if (!isNative) return;å
  //å
  //   const { type, data } = JSON.parse(event.data);
  //   if (type === 'IMAGE') {
  //     setImage(data);
  //     onImageChange(data);
  //   }
  // }
  //
  // useEffect(() => {
  //   window.addEventListener('message', messageHandler);
  //   document.addEventListener('message', messageHandler as EventListener);
  //
  //   return () => {
  //     window.removeEventListener('message', messageHandler);
  //     document.removeEventListener('message', messageHandler as EventListener);
  //   }
  // }, []);
  const handleBoxClick = () => {
    if (imageBase64) {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    if (!imageInputRef.current) return;
    imageInputRef.current.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setImageFile(null);
      return;
    }

    setImageFile(file);
    onImageChange(file);
  }

  return (
    <BodyImageUploaderLayout
      width={width}
      height={height}
    >
      <ContentsBox onClick={handleBoxClick}>
        {(imageBase64) ?
          <ContentsBox>
            <InvisibleInput
              ref={imageInputRef}
              type={'file'}
              accept={ALLOWED_IMAGE_FORMATS}
              onChange={handleImageChange}
            />
            <BodyImage src={imageBase64 as string} alt={'uploaded'} />
          </ContentsBox> :
          <IconButtonContainer>
          <img src={CameraIcon} alt={'camera'} />
            <UploadButton onClick={handleButtonClick}>
              <InvisibleInput
                ref={imageInputRef}
                type={'file'}
                accept={ALLOWED_IMAGE_FORMATS}
                onChange={handleImageChange}
              />
              {buttonText}
            </UploadButton>
          </IconButtonContainer>
        }
      </ContentsBox>
    </BodyImageUploaderLayout>
  );
}

export default BodyImageUploader;
