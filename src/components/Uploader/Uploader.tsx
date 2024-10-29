import { FC, ReactNode, useEffect } from 'react';
import { UploaderLayout, UploaderBox, CountText, CountTextBox, CancelIcon, UploaderContainer } from './UploaderStyle';
import CameraIcon from '../../assets/camera.svg';
import ClothesIcon from '../../assets/clothes.svg';
import XIcon from '../../assets/x.svg';
import { useIsReactNativeWebview } from '../../hooks/useIsReactNativeWebview';
import { sendMessageToReactNative } from '../../utils/reactNativeMessage';

interface UploaderProps {
  type: string;
  maxCount: number;
  currentCount: number;
  onUpload: (data: string) => void;
  children: ReactNode;
}

interface AdderProps {
  maxCount: number;
  currentCount: number;
  onUpload: (data: string) => void;
}

interface TypeAdderProps extends AdderProps {
  type: string;
}

interface AdderItemProps {
  type: string;
  maxCount: number;
  currentCount: number;
  onClick: () => void;
}

interface ImageUploaderItemProps {
  index: number;
  image: string;
  onClick: () => void;
  onCancel: (index: number) => void;
}

interface ClothesUploaderItemProps {
  index: number;
  clothes: string;
  onClick: () => void;
  onCancel: (index: number) => void;
}

const Uploader = ({ type, maxCount, currentCount, onUpload, children }: UploaderProps) => {
  return (
    <UploaderLayout>
      <Adder
        type={type}
        maxCount={maxCount}
        currentCount={currentCount}
        onUpload={onUpload}
      />
      {children}
    </UploaderLayout>
  );
}

const ImageUploaderItem: FC<ImageUploaderItemProps> = ({ index, image, onClick, onCancel }) => {
  return (
    <UploaderContainer>
      <UploaderBox onClick={onClick}>
        {(image !== null && image !== undefined) ?
          null :
          <img src={image} width={60} height={60} alt={'uploaded'} />
        }
      </UploaderBox>
      <CancelIcon onClick={() => { onCancel(index) }}>
        <img src={XIcon} alt={'cancel'} />
      </CancelIcon>
    </UploaderContainer>
  );
}

const ClothesUploaderItem: FC<ClothesUploaderItemProps> = ({ index, clothes, onClick, onCancel }) => {
  return (
    <ImageUploaderItem
      index={index}
      image={clothes}
      onClick={onClick}
      onCancel={() => onCancel(index)}
    />
  );
}

const Adder: FC<TypeAdderProps> = ({ type, currentCount, maxCount, onUpload }) => {
  return (type === 'clothes') ?
    <ClothesAdder maxCount={maxCount} currentCount={currentCount} onUpload={onUpload} /> :
    <ImageAdder maxCount={maxCount} currentCount={currentCount} onUpload={onUpload} />;
}

const ClothesAdder: FC<AdderProps> = ({ maxCount, currentCount, onUpload }) => {
  return (
    <div>

    </div>
  );
}

const ImageAdder: FC<AdderProps> = ({ maxCount, currentCount, onUpload }) => {
  const isNative = useIsReactNativeWebview();

  const messageHandler = (event: MessageEvent) => {
    if (!isNative) return;

    const { type, data } = JSON.parse(event.data);
    if (type === 'IMAGE') {
      onUpload(data);
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

  const handleImageUpload = () => {
    if (!isNative) return;

    sendMessageToReactNative({ type: 'UPLOAD_CLOTHES_IMAGE' });
  }

  return (
    <AdderItem
      type={'image'}
      maxCount={maxCount}
      currentCount={currentCount}
      onClick={handleImageUpload}
    />
  );
}

const AdderItem: FC<AdderItemProps> = ({ type, maxCount, currentCount, onClick }) => {
  const displayIcon = (displayType: string) => {
    return (displayType === 'clothes') ?
      <img src={ClothesIcon} width={29.6} height={22.7} alt={'clothes'} /> :
      <img src={CameraIcon} width={30.5} height={25} alt={'camera'} />;
  }

  return (
    <UploaderContainer>
      <UploaderBox onClick={onClick}>
        {displayIcon(type)}
        <CountTextBox>
          <CountText $color={(currentCount < maxCount) ? 'var(--main)' : '#FA8989'}>{currentCount}</CountText>
          <CountText $color={'#989898'}>/{maxCount}</CountText>
        </CountTextBox>
      </UploaderBox>
    </UploaderContainer>
  );
}

export default Uploader;

Uploader.Clothes = ClothesUploaderItem;
Uploader.Image = ImageUploaderItem;
