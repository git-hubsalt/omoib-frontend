import React, { useState } from 'react';
import { PageContainer, HeaderWrapper, ButtonGroup, InstructionText, CardContainer, FooterButtonContainer } from './style';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SelectButton from '../../components/Button/SelectButton';
import ClickButton from '../../components/Button/ClickButton';
import { useQuery } from '@tanstack/react-query';
import { getCloset } from '../../apis/closet';

interface CardData {
  id: number;
  name: string;
  createDate: string;
  tagList: string[];
  imageUrl: string;
}

export default function SelectVirtualFittingPage() {
  const { isLoading, data } = useQuery({
    queryFn: getCloset,
    queryKey: ['closet'],
  });

  // data와 data.data.clothes가 정의되지 않은 경우 빈 배열로 초기화
  const wardrobeData: CardData[] = data?.data?.clothes ?? [];

  // 위시리스트 데이터 (임시로 넣은 예시 데이터)
  const wishlistData: CardData[] = [
    {
      id: 3,
      name: "자켓",
      createDate: "2024.11.11",
      tagList: ["겨울", "가을"],
      imageUrl: "https://image.msscdn.net/thumbnails/images/goods_img/20230803/3505201/3505201_18243790561663_big.jpg?w=1200",
    },
    {
      id: 4,
      name: "원피스",
      createDate: "2024.11.11",
      tagList: ["여름", "봄"],
      imageUrl: "https://image.msscdn.net/thumbnails/images/goods_img/20230921/3585220/3585220_17295567374199_big.jpg?w=1200",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mode, setMode] = useState<'옷장' | '위시리스트'>('옷장');

  const handleCardClick = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleModeChange = (newMode: '옷장' | '위시리스트') => {
    setMode(newMode);
    setSelectedIndex(null);
  };

  // 현재 모드에 맞는 데이터 선택
  const cardData = mode === '옷장' ? wardrobeData : wishlistData;

  return (
    <PageContainer>
      <Header text="아이템 선택" />
      <HeaderWrapper>
        <p>아이템을 어디서 가져오시겠어요?</p>
        <ButtonGroup>
          <SelectButton
            label="코디 추천"
            isSelected={mode === '옷장'}
            onClick={() => handleModeChange('옷장')}
          />
          <SelectButton
            label="직접 선택"
            isSelected={mode === '위시리스트'}
            onClick={() => handleModeChange('위시리스트')}
          />
        </ButtonGroup>
        <InstructionText>
          코디 추천을 원하는 아이템을 2가지 선택해 주세요. (0/2)
        </InstructionText>
      </HeaderWrapper>
      <CardContainer>
        {isLoading ? (
          <p>로딩 중...</p>  // 로딩 중일 때 표시할 내용
        ) : (
          cardData.map((item, index) => (
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
          ))
        )}
      </CardContainer>
      <FooterButtonContainer>
        <ClickButton variant="footerButton">다 정했어요</ClickButton>
      </FooterButtonContainer>
    </PageContainer>
  );
}