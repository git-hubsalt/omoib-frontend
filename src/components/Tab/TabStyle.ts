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
  position: relative;
  margin: 30px auto;
`;

// 슬라이더 래퍼
export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

// 슬라이더
export const Slider = styled.div<{ activeTab: number }>`
  width: 50%;
  height: 100%;
  background-color: #89CEFA;
  border-radius: 10px;
  transform: translateX(${({ activeTab }) => activeTab * 100}%);
  transition: transform 0.3s ease;
`;

// 버튼 스타일
export const TabButton = styled.button<{ active: boolean }>`
  width: 50%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: ${({ active }) => (active ? '#ffffff' : '#808080')};
  font-size: 14px;
  cursor: pointer;
  z-index: 1;
  position: relative;
  transition: color 0.3s ease;
`;
