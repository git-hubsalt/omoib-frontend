import React, { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from 'react';
import {
  UploaderLayout,
  UploaderBox,
  CountText,
  CountTextBox,
  CancelIcon,
  UploaderContainer,
  InvisibleInput,
} from './style';
import CameraIcon from '../../../assets/camera.svg';
import ClothesIcon from '../../../assets/clothes.svg';
import XIcon from '../../../assets/x.svg';
import { useNavigate } from 'react-router-dom';
import { ClothesInfo } from '../../../types/type';
import { ALLOWED_IMAGE_FORMATS } from '../../../utils/constants';

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
  clothes: ClothesInfo;
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
};

const ImageUploaderItem: FC<ImageUploaderItemProps> = ({ index, image, onClick, onCancel }) => {
  return (
    <UploaderContainer>
      <UploaderBox onClick={onClick}>
        {(image !== null && image !== undefined) ?
          <img src={image} width={60} height={60} alt={'uploaded'} /> :
          null
        }
      </UploaderBox>
      <CancelIcon onClick={() => {
        onCancel(index);
      }}>
        <img src={XIcon} alt={'cancel'} />
      </CancelIcon>
    </UploaderContainer>
  );
};

const ClothesUploaderItem: FC<ClothesUploaderItemProps> = ({ index, clothes, onClick, onCancel }) => {
  return (
    <ImageUploaderItem
      index={index}
      image={clothes.imageUrl}
      onClick={onClick}
      onCancel={() => onCancel(index)}
    />
  );
};

const Adder: FC<TypeAdderProps> = ({ type, currentCount, maxCount, onUpload }) => {
  return (type === 'clothes') ?
    <ClothesAdder maxCount={maxCount} currentCount={currentCount} onUpload={onUpload} /> :
    <ImageAdder maxCount={maxCount} currentCount={currentCount} onUpload={onUpload} />;
};

const ClothesAdder: FC<AdderProps> = ({ maxCount, currentCount, onUpload }) => {
  const navigate = useNavigate();

  const handleAdderClick = () => {
    navigate('/closet/select')
  };

  return (
    <AdderItem
      type={'clothes'}
      maxCount={maxCount}
      currentCount={currentCount}
      onClick={handleAdderClick}
    />
  );
};

const ImageAdder: FC<AdderProps> = ({ maxCount, currentCount, onUpload }) => {
  const [imageBase64, setImageBase64] = useState<string | ArrayBuffer | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    if (currentCount < maxCount) {
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
      setImageBase64(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.result !== undefined) {
        setImageBase64(reader.result);
        onUpload(reader.result as string);
      }
    };
  }

  return (
    <>
      <InvisibleInput
        ref={imageInputRef}
        type={'file'}
        accept={ALLOWED_IMAGE_FORMATS}
        onChange={handleImageChange}
      />
      <AdderItem
        type={'image'}
        maxCount={maxCount}
        currentCount={currentCount}
        onClick={handleBoxClick}
      />
    </>
  );
};

const AdderItem: FC<AdderItemProps> = ({ type, maxCount, currentCount, onClick }) => {
  const displayIcon = (displayType: string) => {
    return (displayType === 'clothes') ?
      <img src={ClothesIcon} width={29.6} height={22.7} alt={'clothes'} /> :
      <img src={CameraIcon} width={30.5} height={25} alt={'camera'} />;
  };

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
};

export default Uploader;

Uploader.Clothes = ClothesUploaderItem;
Uploader.Image = ImageUploaderItem;
