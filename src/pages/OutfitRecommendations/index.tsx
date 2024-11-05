import React, { useState } from 'react';
import { OutfitRecommendationsLayout, Text } from "./style";
import Header from '../../components/Header/Header';
import BodyImageUploader from "../../components/Uploader/BodyImageUploader";
import FooterButton from "../../components/Button/ClickButton";

const OutfitRecommendations: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageChange = (imageBase64: string) => {
    setUploadedImage(imageBase64); // 업로드된 이미지를 상태에 저장
    console.log("New image uploaded:", imageBase64); // 이미지 업로드 확인용 콘솔 출력
  };

  return (
    <OutfitRecommendationsLayout>
      <Header text="코디추천" /> {/* 헤더에 텍스트 전달 */}

      <Text>이 아이템은 꼭 넣고 싶어요!</Text>

      {/* BodyImageUploader 컴포넌트 사용 */}
      <BodyImageUploader
        width={327} // 원하는 너비
        height={482} // 원하는 높이
        buttonText="이미지 업로드" // 버튼에 표시할 텍스트
        onImageChange={handleImageChange} // 이미지 변경 핸들러
      />
      <Text>오늘의 키워드를 말해주세요.</Text>

      <FooterButton variant="footerButton">
        완료
      </FooterButton>
    </OutfitRecommendationsLayout>
  );
};

export default OutfitRecommendations;
