import React, { FC, useRef, useState } from 'react';
import Header from '../../components/Header/index';
import FooterButton from "../../components/Button/ClickButton";
import {
  ClothesBox,
  ContentsBox,
  KeywordBox,
  KeywordTextArea,
  OutfitRecommendationsLayout,
  TextAreaBox,
  TextBox,
} from './style';
import Uploader from '../../components/Uploader/Uploader';
import useClothesSelectorStore from '../../stores/clothesSelectorStore';
import { useMutation } from '@tanstack/react-query';
import { postOutfitRecommendation, PostOutfitRecommendationProps } from '../../apis/outfit-recommendation';
import { useNavigate } from 'react-router-dom';

const OutfitRecommendations: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const { clothesInfos, removeClothesInfo } = useClothesSelectorStore();
  const keywordRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const recommend = useMutation({
    mutationFn: ({ clothes, filterTagList }: PostOutfitRecommendationProps) =>
      postOutfitRecommendation({ clothes, filterTagList }),
    onSuccess: (res) => {
      const message = '추천이 끝나면 \n알림창에서 알려드려요!';
      navigate(`/fallback?message=${message}&isNotification=true`);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  const handleCancel = (index: number) => {
    if (index == currentIndex) {
      setCurrentIndex(-1);
    }

    removeClothesInfo(clothesInfos[index]);
  }

  const handleButtonClick = () => {
    const keywords = findKeywords();
    recommend.mutate({ clothes: clothesInfos, filterTagList: keywords });
  }

  const findKeywords: () => string[] = () => {
    if (!keywordRef.current) return [];

    const keywordText = keywordRef.current.value;

    if (keywordText.length <= 0) {
      console.log('키워드가 비어있어요!');
      return [];
    }

    return keywordText.split(',').map((sliced) => sliced.trim());
  }

  return (
    <OutfitRecommendationsLayout>
      <Header text="코디 추천" /> {/* 헤더에 텍스트 전달 */}
      <ContentsBox>
        <ClothesBox>
          <TextBox>이 아이템은 꼭 넣고 싶어요!</TextBox>
          <Uploader
            type={'clothes'}
            maxCount={10}
            currentCount={clothesInfos.length}
            onUpload={() => {}}
          >
            {(clothesInfos.length > 0) ?
              clothesInfos.map((clothes, index) =>
                <Uploader.Clothes
                  key={index}
                  index={index}
                  clothes={clothes}
                  onClick={() => {}}
                  onCancel={handleCancel}
                />
              ) :
              null
            }
          </Uploader>
        </ClothesBox>
        <KeywordBox>
          <TextBox>오늘의 키워드를 입력해주세요.</TextBox>
          <TextAreaBox>
            <KeywordTextArea
              placeholder={'입고 싶은 코디의 분위기, 오늘의 기분, 상황 등을\n' +
                '키워드 형식으로, 쉼표로 구분하여 작성해주세요.\n' +
                '(여러 개일 경우 반영되지 않을 수도 있어요.)\n\n' +
                'ex. 데이트, 단정, 기쁨'}
              ref={keywordRef}
            />
          </TextAreaBox>
        </KeywordBox>
        <FooterButton
          variant="footerButton"
          onClick={handleButtonClick}
        >
          완료
        </FooterButton>
      </ContentsBox>
    </OutfitRecommendationsLayout>
  );
};

export default OutfitRecommendations;
