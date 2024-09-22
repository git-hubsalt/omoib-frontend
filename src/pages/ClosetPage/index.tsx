import React from 'react';
import Card from '../../components/Card/Card';
import { ClosetContainer } from './style';
import AddClothesButton from '../../components/Button/AddClothesButton';

export default function ClosetPage() {
  // 여러 카드에 대한 데이터를 배열로 저장
  const cardData = [
    { title: '체크셔츠', date: '2024.09.22', tags: ['가을', '상의'] },
    { title: '패딩 재킷', date: '2024.01.12', tags: ['겨울' ] },
    { title: '반팔 티셔츠', date: '2024.06.15', tags: ['여름', '상의'] },
    { title: '청바지', date: '2024.08.05', tags: ['여름', '하의'] },
  ];

  return (
    <div>
      <h1>ClosetPage</h1>
      <ClosetContainer>
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            date={item.date}
            tags={item.tags}
          />))}
        <AddClothesButton/>
      </ClosetContainer>

    </div>
  );
}