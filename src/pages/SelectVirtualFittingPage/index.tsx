import SelectButton from '../../components/Button/SelectButton';
import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import styled from 'styled-components';


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
    <div>
      <Header text="가상 피팅" />
      <HeaderWrapper>
      <div>
        <p>가상 피팅 방식을 골라주세요.</p>
      </div>
      <SelectButton />
      <div>
        <p>가상 피팅을 원하는 코디 한 가지를 선택해 주세요. (0/1)</p>
      </div>
      </HeaderWrapper>
      <CardContainer>
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            date={item.date}
            tags={item.tags}
            imageSrc={item.imageSrc}
          />))}
      </CardContainer>

    </div>
  );
}

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
`;

const HeaderWrapper = styled.div`
    padding: 0 20px;
`;