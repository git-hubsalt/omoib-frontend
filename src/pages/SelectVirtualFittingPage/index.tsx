import React, { useState } from 'react';
import { PageContainer, HeaderWrapper, ButtonGroup, InstructionText, CardContainer, FooterButtonContainer } from './style';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SelectButton from '../../components/Button/SelectButton';
import ClickButton from '../../components/Button/ClickButton';

interface CardData {
  id: number;
  name: string;
  createDate: string;
  tagList: string[];
  imageUrl: string;
}

export default function SelectVirtualFittingPage() {
  const cardData: CardData[] = [
    {
      id: 1,
      name: "하의",
      createDate: "2024.11.11",
      tagList: ["봄", "가을"],
      imageUrl: "https://image.msscdn.net/thumbnails/images/goods_img/20230712/3404705/3404705_17134029927665_big.jpg?w=1200",
    },
    {
      id: 2,
      name: "상의",
      createDate: "2024.11.11",
      tagList: ["여름", "가을"],
      imageUrl: "https://image.msscdn.net/thumbnails/images/goods_img/20230921/3585220/3585220_17295567374199_big.jpg?w=1200",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    // 현재 선택된 카드와 클릭된 카드가 같으면 선택 해제, 다르면 선택
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <PageContainer>
      <Header text="가상 피팅" />
      <HeaderWrapper>
        <p>가상 피팅 방식을 골라주세요.</p>
        <ButtonGroup>
          <SelectButton />
        </ButtonGroup>
        <InstructionText>
          가상 피팅을 원하는 코디 한 가지를 선택해 주세요. (0/1)
        </InstructionText>
      </HeaderWrapper>
      <CardContainer>
        {cardData.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name} // name을 title로 매핑
            date={item.createDate} // createDate를 date로 매핑
            tags={item.tagList} // tagList를 tags로 매핑
            imageSrc={item.imageUrl} // imageUrl을 imageSrc로 매핑
            isSelected={selectedIndex === index} // 선택된 카드인지 여부
            onClick={() => handleCardClick(index)} // 카드 클릭 시 처리
          />
        ))}
      </CardContainer>
      <FooterButtonContainer>
        <ClickButton variant="footerButton">다 정했어요</ClickButton>
      </FooterButtonContainer>
    </PageContainer>
  );
}