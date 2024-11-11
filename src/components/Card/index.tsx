import React from 'react';
import {
  CardWrapper,
  ImagePlaceholder,
  ContentWrapper,
  Title,
  Date,
  TagsWrapper,
  Image,
} from './style';
import TagButton from '../Button/TagButton';

interface CardProps {
  title: string;
  date: string;
  tags: string[];
  imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ title, date, tags, imageSrc }) => {
  return (
    <CardWrapper>
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
