import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-width: 122px;
    width: 100%;
    padding: 6px 4px;
`;

export const ImagePlaceholder = styled.div`
  width: 110px;
  height: 110px;
  background-color: #f0f0f0;
  border-radius: 10px;
    align-items: center;
`;

export const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  object-fit: cover;  // 이미지가 영역에 맞게 조정됨
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 13px;
  margin-top: 4px;
  color: #000;
`;

export const Date = styled.p`
  font-size: 10px;
  margin: 4px 0;
  color: #888;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

