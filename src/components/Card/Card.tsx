import React from 'react';
import {
  CardWrapper,
  ImagePlaceholder,
  ContentWrapper,
  Title,
  Date,
  TagsWrapper,
} from './CardStyle';
// import Tag from '../tag/Tag';

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
            // <Tag key={index} text={tag} />
            <p>태그</p>
          ))}
        </TagsWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;