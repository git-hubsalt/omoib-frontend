import React, { useState } from 'react';
import Header from '../../components/Header';
import BodyImageUploader from "../../components/Uploader/BodyImageUploader";
import Tab from "../../components/Tab";
import FooterButton from "../../components/Button/ClickButton";
import { VirtualFittingLayout } from "./style";
import SelectButton from '../../components/Button/SelectButton';

const VirtualFitting: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageChange = (imageBase64: string) => {
    setUploadedImage(imageBase64); // 업로드된 이미지를 상태에 저장
    console.log("Uploaded image in base64:", imageBase64); // 콘솔에 업로드된 이미지 출력
  };

  return (
    <VirtualFittingLayout>
      <Header text="가상피팅" /> {/* 헤더에 텍스트 전달 */}

      {/* Tab 컴포넌트에서 tabs prop을 배열로 전달 */}
      {/*<Tab tabs={['추천코디', '직접선택']} />*/}
      {/* BodyImageUploader 컴포넌트에 필요한 props 전달 */}
      {/*<BodyImageUploader*/}
      {/*  width={327} // 원하는 너비 설정*/}
      {/*  height={482} // 원하는 높이 설정*/}
      {/*  buttonText="이미지 업로드" // 버튼에 표시할 텍스트*/}
      {/*  onImageChange={handleImageChange} // 이미지 변경 핸들러*/}
      {/*/>*/}

      <FooterButton variant="footerButton">
        완료
      </FooterButton>
    </VirtualFittingLayout>
  );
};

export default VirtualFitting;
