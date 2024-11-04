import React from 'react';
import Card from '../../components/Card';
import { WishContainer } from './style';
import AddClothesButton from '../../components/Button/AddClothesButton';
import Header from '../../components/Header';

export default function WishPage() {
  // 여러 카드에 대한 데이터를 배열로 저장
  const cardData = [
    { title: '체크셔츠', date: '2024.09.22', tags: ['가을', '상의'], imageSrc: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1430195_lifestyle?$rl_4x5_pdp$' },
    { title: '패딩 재킷', date: '2024.01.12', tags: ['겨울' ], imageSrc:'https://image.msscdn.net/thumbnails/images/goods_img/20240108/3780896/3780896_17065042559824_big.jpg?w=1200' },
    { title: '반팔 티셔츠', date: '2024.06.15', tags: ['여름', '상의'] , imageSrc:'https://image.msscdn.net/thumbnails/images/goods_img/20240430/4096643/4096643_17188607420995_big.jpg?w=1200'},
    { title: '청바지', date: '2024.08.05', tags: ['여름', '하의'], imageSrc: 'https://image.msscdn.net/thumbnails/images/goods_img/20240508/4114622/4114622_17168553676980_big.jpg?w=1200' },
  ];

  return (
    <div>
      <Header text="위시리스트"/>
      <WishContainer>
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            date={item.date}
            tags={item.tags}
            imageSrc={item.imageSrc}
          />))}
        <AddClothesButton/>
      </WishContainer>

    </div>
  );
}