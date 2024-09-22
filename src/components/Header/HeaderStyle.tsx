import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px;

  background-color: white;
`;

// 왼쪽 화살표 버튼
export const BackWrapper = styled.div`
  position: absolute;
  left: 16px;
  font-size: 18px;
  cursor: pointer;
`;

// 중앙 텍스트
export const HeaderText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;