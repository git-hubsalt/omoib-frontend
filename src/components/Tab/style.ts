import styled from "styled-components";

// 탭 컨테이너 스타일
export const TabLayout = styled.div`
  width: 270px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #F2F3F5;
  position: relative;
  margin: 30px auto;
  gap: 5px;
`;

// 버튼 스타일
export const TabButton = styled.button<{ active: boolean }>`
  width: 50%; // 두 개의 버튼이니까 넓이를 50%로 조정
  height: 90%;
  margin: auto;
  border: none;
  background-color: ${({ active }) => (active ? '#89CEFA' : 'transparent')}; // 선택된 탭이면 노란색 배경, 아니면 투명
  color: ${({ active }) => (active ? '#ffffff' : '#808080')}; // 선택된 탭이면 흰색 글씨, 아니면 회색 글씨
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  transition: background-color 0.3s ease;
`;
