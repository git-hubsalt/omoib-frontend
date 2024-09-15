import React from 'react';
import {
  CardWrapper,
  ImagePlaceholder,
  ContentWrapper,
  Title,
  Date,
  TagsWrapper,
} from './Card.styles';
import Tag from '../tag/Tag';

const Card: React.FC = () => {
  return (
      <CardWrapper>
        <ImagePlaceholder />
        <ContentWrapper>
          <Title>빨간 후드티</Title>
          <Date>2024.07.29</Date>
          <TagsWrapper>
            <Tag/>
          </TagsWrapper>
        </ContentWrapper>
      </CardWrapper>
  );
};

export default Card;