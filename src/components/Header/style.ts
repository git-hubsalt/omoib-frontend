import styled from 'styled-components';
import Trash from '../../assets/Trash.svg';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 16px 10px;
  box-sizing: border-box;
`;

// 왼쪽 화살표 버튼
export const BackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

export const DummyBox = styled.div`
  width: 20px;
  height: 20px;
`;

// 중앙 텍스트
export const HeaderText = styled.p`
  font-size: 16px;
  font-weight: normal;
`;

export const DeleteButton = styled.div`
  background-image: url(${Trash});
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
`;
