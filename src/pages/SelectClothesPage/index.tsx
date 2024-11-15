import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  HeaderWrapper,
  ButtonGroup,
  InstructionText,
  CardContainer,
  FooterButtonContainer,
  SpinnerWrapper,
} from './style';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SelectButton from '../../components/Button/SelectButton';
import ClickButton from '../../components/Button/ClickButton';
import useClothesSelectorStore from '../../stores/clothesSelectorStore';
import { useQuery } from '@tanstack/react-query';
import { getCloset } from '../../apis/closet';
import { ReactComponent as Spinner } from '../../assets/spin.svg';
import { getWish } from '../../apis/wish';

interface CardData {
  id: number;
  name: string;
  createDate: string;
  tagList: string[];
  imageUrl: string;
  seasonTypes: ('봄' | '가을' | '여름' | '겨울')[];
  clothesType: '하의' | '상의' | '신발' | '가방' | '모자' | '아우터' | '기타';
}

export default function SelectClothesPage() {
  const navigate = useNavigate();
  const { addClothesInfo } = useClothesSelectorStore();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mode, setMode] = useState<'옷장' | '위시리스트'>('옷장');

  const { isLoading: isClosetLoading, data: closetData } = useQuery({
    queryKey: ['closet'],
    queryFn: getCloset,
  });

  const { isLoading: isWishLoading, data: wishData } = useQuery({
    queryKey: ['wish'],
    queryFn: getWish,
  });

  const wardrobeData: CardData[] = closetData?.clothes || [];

  const wishlistData: CardData[] = wishData?.clothes || [];

  const isLoading = isClosetLoading || isWishLoading;

  const handleCardClick = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleModeChange = (newMode: '옷장' | '위시리스트') => {
    setMode(newMode);
    setSelectedIndex(null);
  };

  const handleFinishSelection = () => {
    const selectedClothes = mode === '옷장' ? wardrobeData : wishlistData;
    if (selectedIndex !== null) {
      const selectedItem = selectedClothes[selectedIndex];

      const clothesInfo = {
        id: selectedItem.id,
        name: selectedItem.name,
        createDate: selectedItem.createDate,
        tagList: selectedItem.tagList,
        imageUrl: selectedItem.imageUrl,
        seasonTypes: selectedItem.seasonTypes,
        clothesType: selectedItem.clothesType,
      };

      addClothesInfo(clothesInfo);
    }

    navigate('/recommendations/outfits');
  };

  const cardData = mode === '옷장' ? wardrobeData : wishlistData;

  return (
    <PageContainer>
      <Header text="아이템 선택" />
      <HeaderWrapper>
        <p>아이템을 어디서 가져오시겠어요?</p>
        <ButtonGroup>
          <SelectButton
            label="옷장"
            isSelected={mode === '옷장'}
            onClick={() => handleModeChange('옷장')}
          />
          <SelectButton
            label="위시리스트"
            isSelected={mode === '위시리스트'}
            onClick={() => handleModeChange('위시리스트')}
          />
        </ButtonGroup>
        <InstructionText>
          코디 추천을 원하는 아이템을 선택해 주세요.
        </InstructionText>
      </HeaderWrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <CardContainer>
          {cardData.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.name}
              date={item.createDate}
              tags={item.tagList}
              imageSrc={item.imageUrl}
              isSelected={selectedIndex === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </CardContainer>
      )}
      <FooterButtonContainer>
        <ClickButton variant="footerButton" onClick={handleFinishSelection}>다 정했어요</ClickButton>
      </FooterButtonContainer>
    </PageContainer>
  );
}