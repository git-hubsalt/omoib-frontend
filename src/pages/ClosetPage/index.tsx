import React from 'react';
import Header from '../../components/Header'; // Header 컴포넌트의 경로를 맞게 설정하세요
import Card from '../../components/Card';
import { ClosetContainer } from './style';
import AddClothesButton from '../../components/Button/AddClothesButton';
import {useQuery} from "@tanstack/react-query";
import {getCloset} from "../../apis/closet";

interface ClosetCardInfo {
  id: number;
  name: string;
  createdDate: string;
  tagList: string[];
  imageUrl: string;
}

const cardDataDemo = [
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

export default function ClosetPage() {
  const { isLoading, data } = useQuery({
    queryFn: getCloset,
    queryKey: ['closet'],
  });

  const cardData = (data) ? data.data as ClosetCardInfo[] : [];

  return (
    <div>
      <Header text="옷장" />
      <ClosetContainer>
        {(!isLoading) && cardData.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            date={item.createdDate}
            tags={item.tagList}
            imageSrc={item.imageUrl}
          />))}
        <AddClothesButton />
      </ClosetContainer>
    </div>
  );
}
