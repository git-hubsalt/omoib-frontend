import React from 'react';
import {
  CardWrapper,
  ImagePlaceholder,
  ContentWrapper,
  Title,
  Date,
  TagsWrapper,
} from './CardStyle';
import TagButton from '../Button/TagButton';

interface CardProps {
  title: string;
  date: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, date, tags }) => {
  return (
    <CardWrapper>
      <ImagePlaceholder />
      <ContentWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <TagsWrapper>
          {tags.map((tag, index) => (
            <TagButton
              key={index}
              name={tag}
              withHash
            />
          ))}
        </TagsWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;