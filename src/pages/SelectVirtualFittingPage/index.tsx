import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SelectButton from '../../components/Button/SelectButton';
import ClickButton from '../../components/Button/ClickButton';

export default function SelectVirtualFittingPage() {
  const cardData = [
    {
      title: '체크셔츠',
      date: '2024.09.22',
      tags: ['가을', '상의'],
      imageSrc: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1430195_lifestyle?$rl_4x5_pdp$',
    },
    {
      title: '패딩 재킷',
      date: '2024.01.12',
      tags: ['겨울'],
      imageSrc: 'https://image.msscdn.net/thumbnails/images/goods_img/20240108/3780896/3780896_17065042559824_big.jpg?w=1200',
    },
    {
      title: '반팔 티셔츠',
      date: '2024.06.15',
      tags: ['여름', '상의'],
      imageSrc: 'https://image.msscdn.net/thumbnails/images/goods_img/20240430/4096643/4096643_17188607420995_big.jpg?w=1200',
    },
    {
      title: '청바지',
      date: '2024.08.05',
      tags: ['여름', '하의'],
      imageSrc: 'https://image.msscdn.net/thumbnails/images/goods_img/20240508/4114622/4114622_17168553676980_big.jpg?w=1200',
    },
  ];

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
            key={index}
            title={item.title}
            date={item.date}
            tags={item.tags}
            imageSrc={item.imageSrc}
          />
        ))}
      </CardContainer>
      <FooterButtonContainer>
        <ClickButton variant="footerButton">다 정했어요</ClickButton>
      </FooterButtonContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderWrapper = styled.div`
    max-width: 393px;
    width: 100%;

    & > * {
        padding: 0 10px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const InstructionText = styled.p`
    margin-top: 12px;
    font-size: 0.875rem;
    color: #555;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    align-items: center;
    
    
    & > * {
        padding: 0 10px;
        width: 100%;
        max-width: 393px;
    }
`;

const FooterButtonContainer = styled.div`
    position: fixed;
    bottom: 0;
    max-width: 393px;
    width: 100%;
    padding: 10px;
`;