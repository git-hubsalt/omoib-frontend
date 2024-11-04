import styled from 'styled-components';

export const MainParagraph = styled.p`
    font-weight: 600;
    font-size: 15px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  background-color: #F4F4F4;
  border-radius: 5px;
`;

export const ListLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  width: 100%;
  cursor: pointer; // 클릭 가능하게 마우스 포인터 추가
`;