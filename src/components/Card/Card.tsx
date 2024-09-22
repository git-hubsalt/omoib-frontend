import React from 'react';
import {
  CardWrapper,
  ImagePlaceholder,
  ContentWrapper,
  Title,
  Date,
  TagsWrapper,
  Image,
} from './CardStyle';
import TagButton from '../Button/TagButton';

interface CardProps {
  title: string;
  date: string;
  tags: string[];
  imageSrc?: string; // 이미지 소스를 받는 props 추가
}

const Card: React.FC<CardProps> = ({ title, date, tags, imageSrc }) => {
  return (
    <CardWrapper>
      {/* 이미지 소스가 있으면 이미지를 보여주고, 없으면 기본 Placeholder를 보여줌 */}

      {imageSrc ? (
        <Image src={imageSrc} alt={title} />
      ) : (
        <ImagePlaceholder />
      )}
      <ContentWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <TagsWrapper>
          {tags.map((tag, index) => (
            <TagButton key={index} name={tag} withHash />
          ))}
        </TagsWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;
