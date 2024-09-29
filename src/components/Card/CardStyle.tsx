import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  //width: 300px;
`;

export const ImagePlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #000;
`;

export const Date = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: #888;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

