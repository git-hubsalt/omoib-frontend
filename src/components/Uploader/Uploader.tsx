import {FC} from "react";
import CameraIcon from '../../assets/camera.svg';
import ClothesIcon from '../../assets/clothes.svg';
import {
  IconButtonContainer,
  UploaderContainer,
  UploadButton
} from "./UploaderStyle";
import {useIsReactNativeWebview} from "../../hooks/useIsReactNativeWebview";
import {sendMessageToReactNative} from "../../utils/reactNativeMessage";

interface UploaderProps {
  width: number;
  height: number;
  hasButton: boolean;
  buttonText?: string;
  type: 'image' | 'clothes';
}

const Uploader: FC<UploaderProps> = ({ width, height, hasButton, buttonText, type }) => {
  const isNative = useIsReactNativeWebview();
  const isImageType = (type === 'image');

  const handleUploadButtonClick = () => {
    return (isImageType) ? handleImageUpload() : handleClothesUpload();
  }

  const handleContainerClick = (hasButton: boolean) => {
    return (hasButton) ? (() => {}) : handleUploadButtonClick;
  }

  const handleImageUpload = () => {
    if (!isNative) {
      return;
    }

    sendMessageToReactNative({ type: 'OPEN_UPLOAD_ALERT' });
  }

  const handleClothesUpload = () => {
    //TODO: 옷 등록하기 구현
  }

  return (
    <UploaderContainer
      width={width}
      height={height}
      onClick={handleContainerClick(hasButton)}
    >
      <IconButtonContainer>
        {
          (isImageType) ?
            <img src={CameraIcon} alt={'camera'} /> :
            <img src={ClothesIcon} alt={'clothes'} />
        }
        {
          (hasButton) ?
          <UploadButton onClick={handleUploadButtonClick}>
            {buttonText}
          </UploadButton>
          : null
        }
      </IconButtonContainer>
    </UploaderContainer>
  );
}

export default Uploader;
