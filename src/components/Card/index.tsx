import React from 'react';
import {
  CardWrapper,
  ImagePlaceholder,
  ContentWrapper,
  Title,
  Date,
  TagsWrapper,
  Image,
  CheckIcon, // 새로운 스타일 컴포넌트 추가
  IconBox,
} from './style';
import TagButton from '../Button/TagButton';

interface CardProps {
  id?: number;
  title: string; // name을 title로 변경
  date: string; // createDate를 date로 변경
  tags: string[]; // tagList를 tags로 변경
  imageSrc?: string; // imageUrl을 imageSrc로 변경
  isSelected?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, date, tags, imageSrc, isSelected, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <IconBox>
        {isSelected && <CheckIcon>✔</CheckIcon>} {/* 선택된 상태에서만 체크 아이콘을 표시 */}
      </IconBox>

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