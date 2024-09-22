import styled from "styled-components";


// 탭 컨테이너 스타일
export const TabContainer = styled.div`
  width: 270px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F2F3F5;
`;

// 버튼 스타일
export const TabButton = styled.button<{ active: boolean }>`
  width: 132px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: ${({ active }) => (active ? '#89CEFA' : '#F2F3F5')};
  color: ${({ active }) => (active ? '#ffffff' : '#808080')};
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
`;