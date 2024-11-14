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
  createDate: string;
  tagList: string[];
  imageUrl: string;
}

export default function ClosetPage() {
  const { isLoading, data } = useQuery({
    queryFn: getCloset,
    queryKey: ['closet'],
  });

  const cardData = (data && data.data && data.data.clothes) ? data.data.clothes as ClosetCardInfo[] : [];

  return (
    <div>
      <Header text="옷장" />
      <ClosetContainer>
        {(!isLoading) && cardData.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            date={item.createDate}
            tags={item.tagList}
            imageSrc={item.imageUrl}
          />))}
        <AddClothesButton />
      </ClosetContainer>
    </div>
  );
}
